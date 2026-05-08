import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  const isClusterDev = Boolean(process.env.KUBERNETES_SERVICE_HOST);
  const hmrHost = env.VITE_HMR_HOST || "dev.dragonscalestudio.com";

  return {
    server: {
      host: "::",
      port: 8080,
      strictPort: true,
      allowedHosts: true,
      hmr: isClusterDev
        ? {
            host: hmrHost,
            protocol: "wss",
            clientPort: 443,
            overlay: false,
          }
        : {
            overlay: false,
          },
    },
    plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
  };
});
