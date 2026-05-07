# Dragon Scale Studio - Deployment Complete ✅

**Status**: Production LIVE + Dev Environment LIVE  
**Date**: 2026-05-07  
**Operator**: OpenCode Runtime

---

## 🎉 Production Deployment

### Live URLs
- **Primary**: https://dragonscalestudio.com
- **WWW**: https://www.dragonscalestudio.com
- **Status**: HTTP/2 200 ✅

### Infrastructure
- **Namespace**: `dragon-scale-studio`
- **Replicas**: 2 pods (HA configuration)
- **Image**: `ghcr.io/nurds-inc/dragon-scale-studio:main-051f269`
- **Deployment Method**: GitOps via Argo CD
- **Auto-sync**: Enabled (watches main branch)
- **Manifest Path**: `/workspace/clients/dragon-scale-studio/k8s/`

### DNS & Routing
- **Cloudflare Zone**: ad96487d3a823965c9ced2bff69b3d5b
- **Cloudflare Tunnel**: c42f8bb4-c0c7-41c5-8cb6-5cc8038a13d8
- **Ingress**: Traefik IngressRoute (web entrypoint)
- **TLS**: Terminated by Cloudflare

### Resources (per pod)
- **CPU**: 500m request, 1000m limit
- **Memory**: 512Mi request, 1Gi limit
- **Security**: Pod Security Standard: Restricted

---

## 🚀 Dev Environment (SPECIAL CASE)

### Live URL
- **Dev Preview**: https://dss.sandbox.nurds.com
- **Status**: Running with live git-sync ✅

### Infrastructure
- **Namespace**: `dragon-scale-studio-dev`
- **Replicas**: 1 pod (dev only)
- **Git-sync Pattern**: Init container + sidecar (10s pull interval)
- **Dev Server**: Vite HMR on port 8080
- **Deployment Method**: GitOps via Argo CD
- **Manifest Path**: `/workspace/clients/dragon-scale-studio/k8s/dev/`

### Git-Sync Configuration
```yaml
Sidecar: registry.k8s.io/git-sync/git-sync:v4.2.4
Repository: https://github.com/Nurds-Inc/dragon-scale-studio.git
Branch: main
Pull Interval: 10s
Working Directory: /repo/dragon-scale-studio.git (symlink to worktree)
```

### Resources
- **CPU**: 2000m request, 4000m limit (higher for dev builds)
- **Memory**: 4Gi request, 8Gi limit (bun install + Vite needs space)
- **Security**: PSS Restricted (readOnlyRootFilesystem: false for node_modules)

### Why This Pattern?
**⚠️ SPECIAL CASE - NOT STANDARD PATTERN**

This dev deployment exists because:
1. **Sandboxctl OOMKilled**: 4Gi sandbox limit too small for bun install + Vite
2. **Large Asset Size**: Dragon Scale Studio has heavy dependencies (~1.96s install time)
3. **Development Need**: Client needs live preview with instant git updates

**Standard Pattern**: Use `sandboxctl` for typical lightweight apps  
**This Exception**: GitOps-managed dev namespace with git-sync for resource-intensive apps

---

## 📊 Verification Results

### Production Health
```bash
kubectl get pods -n dragon-scale-studio
# NAME                                   READY   STATUS    RESTARTS   AGE
# dragon-scale-studio-7b99dcbc78-xxxxx   1/1     Running   0          Xm
# dragon-scale-studio-7b99dcbc78-xxxxx   1/1     Running   0          Xm
```

### Dev Environment Health
```bash
kubectl get pods -n dragon-scale-studio-dev
# NAME                                       READY   STATUS    RESTARTS   AGE
# dragon-scale-studio-dev-5c68dc957d-bqjph   2/2     Running   0          8m
```

### Git-Sync Test
✅ **Verified Working**
- Pushed commit: 99e7338 (test banner)
- Git-sync detected: `update required` → `updated successfully`
- File updated in container: `/repo/dragon-scale-studio.git/src/pages/Index.tsx`
- Vite serving updated source: Ready for HMR on browser connection

---

## 🔧 GitHub Actions

### Workflow
- **File**: `.github/workflows/docker-build.yml`
- **Trigger**: Push to main branch
- **Registry**: GitHub Container Registry (ghcr.io)
- **Authentication**: GHCR_PAT secret (nurdsinc user)
- **Permissions**: write:packages

### Latest Build
- **Commit**: 051f269
- **Image**: `ghcr.io/nurds-inc/dragon-scale-studio:main-051f269`
- **Tags**: `latest`, `main`, `main-051f269`
- **Status**: Success ✅

---

## 📦 Repositories & Manifests

### Service Repository
- **URL**: https://github.com/Nurds-Inc/dragon-scale-studio
- **Branch**: main
- **Framework**: React + Vite + Bun
- **Runtime**: oven/bun:1.1-alpine

### Cluster GitOps
- **Repository**: nurds-cluster
- **Production Namespace**: `projects/nurds-clients/namespaces.yaml`
- **Dev Namespace**: `projects/nurds-clients/namespaces.yaml` (marked SPECIAL CASE)
- **Production App**: `gitops/app-dragon-scale-studio.yaml`
- **Dev App**: `gitops/app-dragon-scale-studio-dev.yaml`

---

## 🎯 Contact Information

**Owner**: Angela King  
**Business Email**: angela@dragonscalestudio.com  
**Phone**: (480) 588-0709  
**Address**: 20522 E Superstition Dr, Queen Creek AZ 85142

---

## 📝 Key Decisions

1. **IngressRoute uses web entrypoint**: Cloudflare tunnel terminates TLS, sends HTTP to Traefik
2. **Argo CD uses HTTPS**: Public repo, no SSH deploy keys needed
3. **Git-sync sidecar pattern**: Proven Kubernetes pattern for live dev environments
4. **Dev deployment strategy: Recreate**: Dev environment doesn't need zero-downtime updates
5. **ReadOnlyRootFilesystem: false (dev only)**: Vite needs write access for HMR and node_modules
6. **One-off dev pattern**: Explicitly documented as non-standard in all manifests

---

## 🚨 Important Notes

### Production
- **Auto-deploy enabled**: Every push to main triggers build → Argo CD syncs within ~3 minutes
- **HA configuration**: 2 replicas with anti-affinity (if configured)
- **Monitoring**: Check Argo CD dashboard for sync status

### Dev Environment
- **Live sync**: 10-second pull interval, changes appear immediately in dev server
- **HMR enabled**: Browser hot-module-replacement works when connected
- **NOT for load testing**: Single replica, dev resources only
- **Tear down when done**: Can delete namespace to save resources

### Security
- **GHCR pull secret**: Stored in both namespaces
- **PSS Restricted**: Both deployments comply (dev has exception for root filesystem)
- **No privileged containers**: All security contexts properly configured

---

## ✅ Deployment Checklist

- [x] Domain DNS configured (dragonscalestudio.com)
- [x] Cloudflare tunnel routing configured
- [x] GitHub Actions building images successfully
- [x] Production namespace created and configured
- [x] Dev namespace created (marked as SPECIAL CASE)
- [x] GHCR pull secrets deployed to both namespaces
- [x] Production Argo CD Application created and synced
- [x] Dev Argo CD Application created and synced
- [x] Production site live and responding (HTTP/2 200)
- [x] Dev site live and responding
- [x] Git-sync verified working (10s pull interval)
- [x] Vite HMR ready for browser connections

---

## 🎓 Lessons Learned

1. **Git-sync worktree path**: Use symlink target `/repo/dragon-scale-studio.git`, not `/repo/dragon-scale-studio`
2. **Git-sync needs /tmp**: Mount tmpfs volume for git-sync containers (readOnlyRootFilesystem: true)
3. **Cloudflare tunnel uses HTTP**: IngressRoute must use `web` entrypoint, not `websecure`
4. **Sandboxctl memory limits**: 4Gi insufficient for large frontend apps with heavy dependencies
5. **Dev resources matter**: Doubled CPU/memory for dev environment to handle bun install + Vite

---

## 🔗 Quick Links

- Production: https://dragonscalestudio.com
- Dev Preview: https://dss.sandbox.nurds.com
- GitHub Repo: https://github.com/Nurds-Inc/dragon-scale-studio
- GHCR Package: https://github.com/orgs/Nurds-Inc/packages/container/package/dragon-scale-studio
- Argo CD: Check cluster dashboard for sync status

---

**Deployment completed successfully!** 🎉
