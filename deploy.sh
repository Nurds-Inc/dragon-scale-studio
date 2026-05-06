#!/bin/bash
set -e

# Dragon Scale Studio - Automated Deployment Script
# Run this with cluster admin permissions to deploy the site

echo "🚀 Dragon Scale Studio - Automated Deployment"
echo "=============================================="
echo ""

# Colors
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# Check prerequisites
echo "📋 Checking prerequisites..."

if ! command -v kubectl &> /dev/null; then
    echo -e "${RED}❌ kubectl not found${NC}"
    exit 1
fi

if ! command -v argocd &> /dev/null; then
    echo -e "${YELLOW}⚠️  argocd CLI not found (optional but recommended)${NC}"
fi

echo -e "${GREEN}✅ Prerequisites OK${NC}"
echo ""

# Step 1: Apply namespace
echo "1️⃣  Creating namespace dragon-scale-studio..."
if kubectl apply -f /workspace/nurds-cluster/projects/nurds-clients/namespaces.yaml; then
    echo -e "${GREEN}✅ Namespace created${NC}"
else
    echo -e "${RED}❌ Failed to create namespace${NC}"
    exit 1
fi
echo ""

# Step 2: Create GHCR pull secret
echo "2️⃣  Creating GHCR pull secret..."
echo -e "${YELLOW}Enter your GitHub Personal Access Token (with read:packages scope):${NC}"
read -s GITHUB_PAT

if kubectl get secret ghcr-pull-secret -n dragon-scale-studio &> /dev/null; then
    echo -e "${YELLOW}⚠️  Secret already exists, deleting...${NC}"
    kubectl delete secret ghcr-pull-secret -n dragon-scale-studio
fi

if kubectl create secret docker-registry ghcr-pull-secret \
    -n dragon-scale-studio \
    --docker-server=ghcr.io \
    --docker-username=nurdsinc \
    --docker-password="$GITHUB_PAT"; then
    echo -e "${GREEN}✅ GHCR pull secret created${NC}"
else
    echo -e "${RED}❌ Failed to create pull secret${NC}"
    exit 1
fi
echo ""

# Step 3: Apply Argo CD Application
echo "3️⃣  Creating Argo CD Application..."
if kubectl apply -f /workspace/nurds-cluster/gitops/app-dragon-scale-studio.yaml; then
    echo -e "${GREEN}✅ Argo CD Application created${NC}"
else
    echo -e "${RED}❌ Failed to create Argo CD Application${NC}"
    exit 1
fi
echo ""

# Wait for Argo CD to sync
echo "⏳ Waiting for Argo CD to sync (this may take 1-3 minutes)..."
sleep 10

if command -v argocd &> /dev/null; then
    echo "Watching Argo CD sync status..."
    timeout 180 bash -c 'until argocd app get dragon-scale-studio 2>/dev/null | grep -q "Sync Status:.*Synced"; do sleep 5; done' || true
fi
echo ""

# Check deployment status
echo "4️⃣  Checking deployment status..."
echo ""
echo "Namespace:"
kubectl get namespace dragon-scale-studio
echo ""

echo "Pods:"
kubectl get pods -n dragon-scale-studio
echo ""

echo "Services:"
kubectl get svc -n dragon-scale-studio
echo ""

echo "IngressRoutes:"
kubectl get ingressroute -n dragon-scale-studio
echo ""

# Check if pods are running
READY_PODS=$(kubectl get pods -n dragon-scale-studio -o jsonpath='{.items[*].status.containerStatuses[0].ready}' 2>/dev/null || echo "")

if [[ "$READY_PODS" == *"true"* ]]; then
    echo -e "${GREEN}✅ Pods are running!${NC}"
else
    echo -e "${YELLOW}⚠️  Pods are not ready yet. Check with: kubectl get pods -n dragon-scale-studio${NC}"
fi
echo ""

# Final instructions
echo "=============================================="
echo -e "${GREEN}🎉 Deployment complete!${NC}"
echo ""
echo "📝 Next steps:"
echo ""
echo "1. Configure Cloudflare DNS:"
echo "   - Go to Cloudflare Dashboard → dragonscalestudio.com → DNS"
echo "   - Add CNAME: @ → c42f8bb4-c0c7-41c5-8cb6-5cc8038a13d8.cfargotunnel.com (Proxied)"
echo "   - Add CNAME: www → c42f8bb4-c0c7-41c5-8cb6-5cc8038a13d8.cfargotunnel.com (Proxied)"
echo ""
echo "2. Update Cloudflare Certificate:"
echo "   - Go to SSL/TLS → Edge Certificates → Advanced Certificate"
echo "   - Add SANs: dragonscalestudio.com and *.dragonscalestudio.com"
echo ""
echo "3. Verify deployment:"
echo "   kubectl get pods -n dragon-scale-studio"
echo "   kubectl logs -n dragon-scale-studio -l app.kubernetes.io/name=dragon-scale-studio"
echo ""
echo "4. Test the site (after DNS configured):"
echo "   curl -I https://dragonscalestudio.com"
echo ""
echo "📚 Full documentation: /workspace/clients/dragon-scale-studio/QUICK-LAUNCH.md"
echo ""
