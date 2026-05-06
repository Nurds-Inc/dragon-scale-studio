# Dragon Scale Studio - Kubernetes Deployment

## Prerequisites

1. Namespace created in nurds-cluster
2. GHCR pull secret configured
3. DNS pointing to cluster (dragonscalestudio.com → Cloudflare Tunnel)
4. Argo CD Application created

## Bootstrap (one-time setup)

### 1. Create GHCR Pull Secret

```bash
kubectl create secret docker-registry ghcr-pull-secret \
  -n dragon-scale-studio \
  --docker-server=ghcr.io \
  --docker-username=<github-username> \
  --docker-password=<github-token>
```

### 2. Apply Manifests Manually (if not using Argo CD)

```bash
kubectl apply -f k8s/
```

### 3. Verify Deployment

```bash
kubectl -n dragon-scale-studio get pods
kubectl -n dragon-scale-studio get svc
kubectl -n dragon-scale-studio get ingressroute
```

## GitOps Workflow (Production)

1. Code changes pushed to `main` branch
2. GitHub Actions builds and pushes image to GHCR
3. Argo CD detects changes and syncs (within 3 minutes)
4. Rolling update with zero downtime

## Manual Operations

### Force Sync (skip Argo CD wait)
```bash
argocd app sync dragon-scale-studio
```

### Rollback
```bash
kubectl -n dragon-scale-studio rollout undo deployment/dragon-scale-studio
```

### View Logs
```bash
kubectl -n dragon-scale-studio logs -l app.kubernetes.io/name=dragon-scale-studio -f
```

### Check Health
```bash
kubectl -n dragon-scale-studio get pods
curl https://dragonscalestudio.com
```

## Troubleshooting

### Pod not starting
```bash
kubectl -n dragon-scale-studio describe pod <pod-name>
kubectl -n dragon-scale-studio logs <pod-name>
```

### Image pull errors
Check GHCR pull secret is configured correctly.

### Ingress not working
Check Traefik IngressRoute and DNS configuration.
