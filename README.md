# 🎯 Dragon Scale Studio - Ready to Launch

**Repository:** https://github.com/Nurds-Inc/dragon-scale-studio  
**Target:** https://dragonscalestudio.com  
**Status:** ✅ Code complete, ⏳ Waiting for deployment

---

## What's Ready

✅ **All Code Complete**
- 9 pages (Home, Lessons, Clubs, Schools, About, Contact, Privacy, Terms, 404)
- Build tested and passing
- Docker image ready to build
- Security hardened (non-root, read-only filesystem, PSS restricted)

✅ **Infrastructure Complete**
- Kubernetes manifests validated
- GitHub Actions workflows configured
- Argo CD Application ready
- Namespace configuration ready

✅ **Documentation Complete**
- Quick start guide
- Detailed deployment guide
- Troubleshooting documentation
- Architecture documentation

---

## 🚀 How to Launch (Choose One)

### Option A: Automated Script (Easiest)

If you have cluster admin kubectl access:

```bash
cd /workspace/clients/dragon-scale-studio
./deploy.sh
```

The script will:
1. Create namespace
2. Create GHCR pull secret (will prompt for GitHub PAT)
3. Create Argo CD Application
4. Show deployment status
5. Print next steps for Cloudflare DNS

---

### Option B: Manual Steps

#### Step 1: Fix GHCR Permissions

Go to: https://github.com/organizations/Nurds-Inc/settings/packages

Enable: "Allow members to create public packages"

Then trigger build:
```bash
gh workflow run docker-build.yml --repo Nurds-Inc/dragon-scale-studio
```

#### Step 2: Apply Kubernetes Resources

```bash
# Create namespace
kubectl apply -f /workspace/nurds-cluster/projects/nurds-clients/namespaces.yaml

# Create GHCR pull secret
kubectl create secret docker-registry ghcr-pull-secret \
  -n dragon-scale-studio \
  --docker-server=ghcr.io \
  --docker-username=nurdsinc \
  --docker-password=YOUR_GITHUB_PAT_WITH_READ_PACKAGES

# Create Argo CD Application
kubectl apply -f /workspace/nurds-cluster/gitops/app-dragon-scale-studio.yaml
```

#### Step 3: Configure Cloudflare DNS

**Dashboard:** https://dash.cloudflare.com → dragonscalestudio.com

**Add DNS Records:**

| Type  | Name | Target                                                    | Proxy |
|-------|------|-----------------------------------------------------------|-------|
| CNAME | @    | c42f8bb4-c0c7-41c5-8cb6-5cc8038a13d8.cfargotunnel.com    | ON 🟧 |
| CNAME | www  | c42f8bb4-c0c7-41c5-8cb6-5cc8038a13d8.cfargotunnel.com    | ON 🟧 |

**Update Certificate:**
- Go to: SSL/TLS → Edge Certificates → Advanced Certificate
- Click "Edit"
- Add SANs: `dragonscalestudio.com` and `*.dragonscalestudio.com`
- Wait 5-10 minutes for issuance

---

## ✅ Verify Deployment

```bash
# Check pods
kubectl get pods -n dragon-scale-studio
# Should show: 2/2 Running

# Check Argo CD
argocd app get dragon-scale-studio
# Should show: Sync Status: Synced, Health Status: Healthy

# Check site (after DNS configured)
curl -I https://dragonscalestudio.com
# Should return: HTTP/2 200
```

---

## 🐛 Troubleshooting

### Pods stuck in ImagePullBackOff
**Cause:** GHCR pull secret missing or invalid  
**Fix:** 
```bash
kubectl describe pod -n dragon-scale-studio
# Check the error message

# Recreate secret
kubectl delete secret ghcr-pull-secret -n dragon-scale-studio
kubectl create secret docker-registry ghcr-pull-secret \
  -n dragon-scale-studio \
  --docker-server=ghcr.io \
  --docker-username=nurdsinc \
  --docker-password=YOUR_GITHUB_PAT
```

### Argo CD not syncing
**Cause:** Application not configured or path incorrect  
**Fix:**
```bash
# Check Argo CD app status
argocd app get dragon-scale-studio

# Manual sync
argocd app sync dragon-scale-studio
```

### Site returns 502
**Cause:** Pods not ready  
**Fix:**
```bash
# Check pod logs
kubectl logs -n dragon-scale-studio -l app.kubernetes.io/name=dragon-scale-studio

# Check pod status
kubectl describe pod -n dragon-scale-studio
```

### Certificate error
**Cause:** Advanced Certificate doesn't include SANs yet  
**Fix:** Wait 5-10 minutes after adding SANs, or check Cloudflare dashboard

---

## 📚 Documentation Files

- **README.md** (this file) - Quick start
- **QUICK-LAUNCH.md** - 3-step checklist
- **LAUNCH-STATUS.md** - Current blockers and detailed fixes
- **PRODUCTION-LAUNCH.md** - Complete step-by-step guide
- **STATUS.md** - Project overview
- **DEPLOYMENT.md** - Architecture and deployment details
- **deploy.sh** - Automated deployment script

---

## 🎉 After Launch

Once the site is live:

1. **Set Google Analytics ID**
   ```bash
   # Add to deployment environment
   VITE_GA_TRACKING_ID=G-XXXXXXXXXX
   ```

2. **Monitor Logs**
   ```bash
   kubectl logs -n dragon-scale-studio -l app.kubernetes.io/name=dragon-scale-studio -f
   ```

3. **Check Resource Usage**
   ```bash
   kubectl top pods -n dragon-scale-studio
   ```

4. **Future Updates**
   - Push to main branch → GitHub Actions builds → Argo CD deploys
   - Zero downtime rolling updates
   - Automatic rollback on failure

---

## 📞 Support

**Repository:** https://github.com/Nurds-Inc/dragon-scale-studio  
**Issues:** https://github.com/Nurds-Inc/dragon-scale-studio/issues

---

**Everything is ready. Just run `./deploy.sh` or follow the manual steps above!** 🚀
