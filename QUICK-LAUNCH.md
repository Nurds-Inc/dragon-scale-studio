# 🚀 Dragon Scale Studio - 3-Step Launch

**Site:** https://dragonscalestudio.com  
**Repo:** https://github.com/Nurds-Inc/dragon-scale-studio  
**Status:** Code ready, infrastructure blocked

---

## What I Accomplished

✅ Created GitHub repository  
✅ Pushed all code  
✅ Fixed build errors  
✅ All infrastructure code ready  
✅ Documentation complete  

---

## What's Blocking Launch (3 Things)

### 1️⃣ Fix GHCR Permissions (2 minutes)

**Problem:** GitHub Actions can't push Docker images

**Solution:** Go to https://github.com/organizations/Nurds-Inc/settings/packages

Enable "Allow members to create public packages"

Then retry: `gh workflow run docker-build.yml --repo Nurds-Inc/dragon-scale-studio`

---

### 2️⃣ Add Cloudflare DNS (5 minutes)

**Problem:** Domain has no DNS records yet

**Solution:** Cloudflare Dashboard → dragonscalestudio.com → DNS → Add records:

```
Type: CNAME | Name: @ | Target: c42f8bb4-c0c7-41c5-8cb6-5cc8038a13d8.cfargotunnel.com | Proxied: ON
Type: CNAME | Name: www | Target: c42f8bb4-c0c7-41c5-8cb6-5cc8038a13d8.cfargotunnel.com | Proxied: ON
```

Then: SSL/TLS → Edge Certificates → Edit Advanced Certificate → Add SANs:
- `dragonscalestudio.com`
- `*.dragonscalestudio.com`

---

### 3️⃣ Apply Kubernetes Resources (1 minute)

**Problem:** I don't have cluster-admin permissions

**Solution:** Run these 3 commands (need kubectl admin access):

```bash
# 1. Create namespace
kubectl apply -f /workspace/nurds-cluster/projects/nurds-clients/namespaces.yaml

# 2. Create GHCR pull secret
kubectl create secret docker-registry ghcr-pull-secret \
  -n dragon-scale-studio \
  --docker-server=ghcr.io \
  --docker-username=nurdsinc \
  --docker-password=YOUR_GITHUB_PAT_WITH_PACKAGES_READ

# 3. Create Argo CD app
kubectl apply -f /workspace/nurds-cluster/gitops/app-dragon-scale-studio.yaml
```

---

## After These 3 Steps

1. GitHub Actions builds image → GHCR ✅
2. Argo CD syncs deployment → Pods running ✅  
3. Cloudflare routes traffic → **Site live** 🎉

**Total time: ~10 minutes**

---

## Verification

```bash
# Check build
gh run list --repo Nurds-Inc/dragon-scale-studio --limit 1

# Check deployment
kubectl get pods -n dragon-scale-studio
argocd app get dragon-scale-studio

# Check site
curl -I https://dragonscalestudio.com
```

---

## Need Help?

All detailed instructions are in:
- `PRODUCTION-LAUNCH.md` - Complete step-by-step guide
- `LAUNCH-STATUS.md` - Current blockers and fixes

---

**Everything is ready. Just need these 3 quick fixes to launch!**
