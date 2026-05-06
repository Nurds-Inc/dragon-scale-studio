# Dragon Scale Studio - Production Launch Checklist

## Prerequisites Completed ✅

- ✅ Docker + Kubernetes manifests created
- ✅ CI/CD workflows configured
- ✅ All code pushed to harmonylabs repo
- ✅ Legal pages (Privacy, Terms) created
- ✅ Google Analytics integration ready
- ✅ SEO (sitemap, robots.txt) configured

## Production Launch Steps

### Step 1: Create GitHub Repository

**Action:** Create a new GitHub repository

```bash
# Option A: Via GitHub CLI
gh repo create Nurds-Inc/dragon-scale-studio \
  --public \
  --description "Dragon Scale Studio - Music Education Website" \
  --homepage "https://dragonscalestudio.com"

# Option B: Via GitHub Web UI
# 1. Go to https://github.com/organizations/Nurds-Inc/repositories/new
# 2. Repository name: dragon-scale-studio
# 3. Description: Dragon Scale Studio - Music Education Website
# 4. Public
# 5. Do NOT initialize with README (we'll push existing code)
# 6. Create repository
```

**Then update local repo remote:**

```bash
cd /workspace/clients/dragon-scale-studio

# Update remote URL
git remote set-url origin git@github.com:Nurds-Inc/dragon-scale-studio.git

# Push all branches
git push -u origin main

# Verify
git remote -v
```

---

### Step 2: Configure Cloudflare DNS

**Action:** Add DNS records for dragonscalestudio.com

#### 2.1: Check if domain is in Cloudflare

```bash
# List zones to find dragonscalestudio.com
curl -X GET "https://api.cloudflare.com/client/v4/zones" \
  -H "Authorization: Bearer YOUR_CF_TOKEN" \
  -H "Content-Type: application/json" | jq -r '.result[] | "\(.id) \(.name)"'
```

#### 2.2: If domain NOT in Cloudflare yet

1. **Add domain to Cloudflare account**
   - Go to Cloudflare Dashboard
   - Click "Add a Site"
   - Enter: `dragonscalestudio.com`
   - Select Free plan
   - Follow nameserver update instructions

2. **Update nameservers at domain registrar**
   - Log in to domain registrar (where dragonscalestudio.com is registered)
   - Update nameservers to Cloudflare's (will be provided by CF dashboard)
   - Wait for DNS propagation (can take up to 24-48 hours)

#### 2.3: Add DNS Records

Once domain is in Cloudflare, add these DNS records:

**Option A: Via Cloudflare API**

```bash
# Get zone ID for dragonscalestudio.com
ZONE_ID=$(curl -s -X GET "https://api.cloudflare.com/client/v4/zones?name=dragonscalestudio.com" \
  -H "Authorization: Bearer YOUR_CF_TOKEN" \
  -H "Content-Type: application/json" | jq -r '.result[0].id')

# Add CNAME for @ (apex)
curl -X POST "https://api.cloudflare.com/client/v4/zones/$ZONE_ID/dns_records" \
  -H "Authorization: Bearer YOUR_CF_TOKEN" \
  -H "Content-Type: application/json" \
  --data '{
    "type": "CNAME",
    "name": "@",
    "content": "c42f8bb4-c0c7-41c5-8cb6-5cc8038a13d8.cfargotunnel.com",
    "ttl": 1,
    "proxied": true
  }'

# Add CNAME for www
curl -X POST "https://api.cloudflare.com/client/v4/zones/$ZONE_ID/dns_records" \
  -H "Authorization: Bearer YOUR_CF_TOKEN" \
  -H "Content-Type: application/json" \
  --data '{
    "type": "CNAME",
    "name": "www",
    "content": "c42f8bb4-c0c7-41c5-8cb6-5cc8038a13d8.cfargotunnel.com",
    "ttl": 1,
    "proxied": true
  }'
```

**Option B: Via Cloudflare Dashboard (Easier)**

1. Go to Cloudflare Dashboard → dragonscalestudio.com → DNS
2. Click "Add record"
3. **Record 1 (Apex):**
   - Type: `CNAME`
   - Name: `@` (or dragonscalestudio.com)
   - Target: `c42f8bb4-c0c7-41c5-8cb6-5cc8038a13d8.cfargotunnel.com`
   - Proxy status: **Proxied** (orange cloud)
   - TTL: Auto
4. **Record 2 (www):**
   - Type: `CNAME`
   - Name: `www`
   - Target: `c42f8bb4-c0c7-41c5-8cb6-5cc8038a13d8.cfargotunnel.com`
   - Proxy status: **Proxied** (orange cloud)
   - TTL: Auto

---

### Step 3: Update Advanced Certificate

**Action:** Add SANs to Cloudflare Advanced Certificate

**⚠️ Important:** The current Advanced Certificate covers:
- `nurds.com`
- `*.nurds.com`
- `*.lab.nurds.com`
- `*.crm.nurds.com`
- `*.lb.nurds.com`

It does NOT cover `dragonscalestudio.com` yet.

**Steps:**

1. Go to Cloudflare Dashboard → SSL/TLS → Edge Certificates
2. Find the "Advanced Certificate" (Google Trust Services, 90-day)
3. Click "Edit"
4. Add SANs:
   - `dragonscalestudio.com`
   - `*.dragonscalestudio.com`
5. Save
6. Wait 5-10 minutes for certificate to be issued

**Note:** Cloudflare Advanced Certificates have a 100 SAN limit. Currently using ~7, plenty of room.

---

### Step 4: Create Namespace in Cluster

**Action:** Apply the namespace manifest

```bash
# Apply namespace
kubectl apply -f /workspace/nurds-cluster/projects/nurds-clients/namespaces.yaml

# Verify
kubectl get namespace dragon-scale-studio
kubectl describe namespace dragon-scale-studio
```

**Expected output:**
```
NAME                  STATUS   AGE
dragon-scale-studio   Active   5s
```

---

### Step 5: Create GHCR Pull Secret

**Action:** Create secret to pull Docker images from GitHub Container Registry

```bash
# Create the secret (replace with actual GitHub token)
kubectl create secret docker-registry ghcr-pull-secret \
  -n dragon-scale-studio \
  --docker-server=ghcr.io \
  --docker-username=YOUR_GITHUB_USERNAME \
  --docker-password=YOUR_GITHUB_PAT_TOKEN

# Verify
kubectl get secret -n dragon-scale-studio ghcr-pull-secret
```

**GitHub PAT Requirements:**
- Scope: `read:packages`
- Can be created at: https://github.com/settings/tokens

**Alternative (if using existing secret):**

```bash
# Copy from another namespace
kubectl get secret ghcr-pull-secret -n nurds-internal -o yaml | \
  sed 's/namespace: nurds-internal/namespace: dragon-scale-studio/' | \
  kubectl apply -f -
```

---

### Step 6: Apply Argo CD Application

**Action:** Create Argo CD Application to deploy the site

```bash
# Apply Argo CD Application
kubectl apply -f /workspace/nurds-cluster/gitops/app-dragon-scale-studio.yaml

# Watch the sync
argocd app get dragon-scale-studio

# Or via kubectl
kubectl get application -n argo-cd dragon-scale-studio
```

**Expected behavior:**
- Argo CD will sync within ~3 minutes
- It will pull manifests from `dragon-scale-studio/k8s/` directory
- Rolling deployment with 2 replicas
- Service + IngressRoute will be created

---

### Step 7: Trigger GitHub Actions Build

**Action:** Build and push Docker image to GHCR

The GitHub Actions workflow will trigger automatically on push to `main`, but you can also trigger manually:

```bash
# Via GitHub CLI
gh workflow run docker-build.yml --repo Nurds-Inc/dragon-scale-studio

# Or via GitHub Web UI
# 1. Go to https://github.com/Nurds-Inc/dragon-scale-studio/actions
# 2. Click "Build and Push Docker Image"
# 3. Click "Run workflow"
# 4. Select branch: main
# 5. Click "Run workflow"
```

**Verify build:**

```bash
# Check workflow status
gh run list --repo Nurds-Inc/dragon-scale-studio --limit 5

# View workflow logs
gh run view --repo Nurds-Inc/dragon-scale-studio
```

**Expected outcome:**
- Docker image built and pushed to `ghcr.io/nurds-inc/dragon-scale-studio:latest`
- Image also tagged with SHA: `main-<commit-sha>`

---

### Step 8: Verify Deployment

**Action:** Confirm everything is running

```bash
# Check namespace
kubectl get all -n dragon-scale-studio

# Check pods (should see 2/2 running)
kubectl get pods -n dragon-scale-studio

# Check service
kubectl get svc -n dragon-scale-studio

# Check ingress
kubectl get ingressroute -n dragon-scale-studio

# View pod logs
kubectl logs -n dragon-scale-studio -l app.kubernetes.io/name=dragon-scale-studio --tail=50

# Check Argo CD sync status
argocd app get dragon-scale-studio
```

**Expected output:**
```
NAME                                  READY   STATUS    RESTARTS   AGE
dragon-scale-studio-xxxxxxxxxx-xxxxx   1/1     Running   0          2m
dragon-scale-studio-xxxxxxxxxx-xxxxx   1/1     Running   0          2m

NAME                      TYPE        CLUSTER-IP      EXTERNAL-IP   PORT(S)   AGE
dragon-scale-studio       ClusterIP   10.43.xxx.xxx   <none>        80/TCP    2m

NAME                              AGE
dragon-scale-studio.traefik.io    2m
```

---

### Step 9: Test the Site

**Action:** Verify site is accessible

```bash
# Test from command line
curl -I https://dragonscalestudio.com
curl -I https://www.dragonscalestudio.com

# Both should return 200 OK
```

**Open in browser:**
- https://dragonscalestudio.com
- https://www.dragonscalestudio.com

**Test pages:**
- https://dragonscalestudio.com/
- https://dragonscalestudio.com/piano-lessons
- https://dragonscalestudio.com/after-school-clubs
- https://dragonscalestudio.com/schools
- https://dragonscalestudio.com/about
- https://dragonscalestudio.com/contact
- https://dragonscalestudio.com/privacy
- https://dragonscalestudio.com/terms

---

## Post-Launch Configuration

### Enable Google Analytics

```bash
# Set GA tracking ID in .env or deployment
VITE_GA_TRACKING_ID=G-XXXXXXXXXX
```

Then rebuild and redeploy.

### Monitor Deployment

```bash
# Watch pod health
watch kubectl get pods -n dragon-scale-studio

# View live logs
kubectl logs -n dragon-scale-studio -l app.kubernetes.io/name=dragon-scale-studio -f

# Check resource usage
kubectl top pods -n dragon-scale-studio
```

### Rollback if Needed

```bash
# Via kubectl
kubectl rollout undo deployment/dragon-scale-studio -n dragon-scale-studio

# Via Argo CD
argocd app rollback dragon-scale-studio

# Check rollout status
kubectl rollout status deployment/dragon-scale-studio -n dragon-scale-studio
```

---

## Troubleshooting

### Issue: Site returns 502 Bad Gateway

**Cause:** Pods not ready or nginx crashed

**Fix:**
```bash
kubectl logs -n dragon-scale-studio -l app.kubernetes.io/name=dragon-scale-studio
kubectl describe pod -n dragon-scale-studio
```

### Issue: Site returns 404 on all routes except /

**Cause:** nginx SPA routing not working

**Fix:** Check `docker/nginx.conf` - ensure `try_files $uri /index.html;` is present

### Issue: TLS certificate invalid

**Cause:** Cloudflare Advanced Certificate doesn't include SANs yet

**Fix:** Wait 5-10 minutes for certificate issuance, or check Cloudflare dashboard

### Issue: Image pull fails (ImagePullBackOff)

**Cause:** GHCR pull secret missing or invalid

**Fix:**
```bash
kubectl describe pod -n dragon-scale-studio
# Look for "Failed to pull image"

# Recreate secret
kubectl delete secret ghcr-pull-secret -n dragon-scale-studio
kubectl create secret docker-registry ghcr-pull-secret \
  -n dragon-scale-studio \
  --docker-server=ghcr.io \
  --docker-username=YOUR_USERNAME \
  --docker-password=YOUR_TOKEN
```

### Issue: Argo CD not syncing

**Cause:** GitHub repo not accessible or path incorrect

**Fix:**
```bash
argocd app get dragon-scale-studio
# Check "Source" and "Sync Status"

# Manual sync
argocd app sync dragon-scale-studio
```

---

## Quick Reference

### Key URLs
- **Production Site:** https://dragonscalestudio.com
- **Sandbox:** https://dss.sandbox.nurds.com
- **GitHub Repo:** https://github.com/Nurds-Inc/dragon-scale-studio
- **GHCR Image:** ghcr.io/nurds-inc/dragon-scale-studio:latest

### Key Resources
- **Namespace:** `dragon-scale-studio`
- **Deployment:** `dragon-scale-studio`
- **Service:** `dragon-scale-studio`
- **IngressRoute:** `dragon-scale-studio`
- **Argo CD App:** `dragon-scale-studio`

### Key Files
- Manifests: `/workspace/nurds-cluster/projects/nurds-clients/namespaces.yaml`
- Argo CD: `/workspace/nurds-cluster/gitops/app-dragon-scale-studio.yaml`
- K8s configs: `/workspace/clients/dragon-scale-studio/k8s/`
- Dockerfile: `/workspace/clients/dragon-scale-studio/Dockerfile`

---

## Success Criteria

✅ Site loads at https://dragonscalestudio.com  
✅ www redirects work  
✅ All pages render correctly  
✅ Contact form UI displays (backend not needed yet)  
✅ Privacy and Terms pages accessible  
✅ TLS certificate valid  
✅ 2 pod replicas running  
✅ Zero downtime on future deployments  
✅ Auto-sync from GitHub working via Argo CD  

---

**Last Updated:** 2026-05-06  
**Status:** Ready for production launch
