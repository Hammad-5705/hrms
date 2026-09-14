// vite.config.js
import { defineConfig } from "file:///home/vbox/Projects/Zahran-ERP/ERP/apps/hrms/frontend/node_modules/vite/dist/node/index.js";
import vue from "file:///home/vbox/Projects/Zahran-ERP/ERP/apps/hrms/frontend/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import { VitePWA } from "file:///home/vbox/Projects/Zahran-ERP/ERP/apps/hrms/frontend/node_modules/vite-plugin-pwa/dist/index.js";
import frappeui from "file:///home/vbox/Projects/Zahran-ERP/ERP/apps/hrms/frontend/node_modules/frappe-ui/vite.js";
import path from "path";
import fs from "fs";
var __vite_injected_original_dirname = "/home/vbox/Projects/Zahran-ERP/ERP/apps/hrms/frontend";
var vite_config_default = defineConfig({
  server: {
    port: 8080,
    proxy: getProxyOptions(),
    allowedHosts: true
  },
  plugins: [
    vue(),
    frappeui(),
    VitePWA({
      registerType: "autoUpdate",
      strategies: "injectManifest",
      injectRegister: null,
      devOptions: {
        enabled: true
      },
      manifest: {
        display: "standalone",
        name: "Frappe HR",
        short_name: "Frappe HR",
        start_url: "/hrms",
        scope: "/hrms",
        id: "/hrms",
        description: "Everyday HR & Payroll operations at your fingertips",
        theme_color: "#ffffff",
        icons: [
          {
            src: "/assets/hrms/manifest/manifest-icon-192.maskable.png",
            sizes: "192x192",
            type: "image/png",
            purpose: "any"
          },
          {
            src: "/assets/hrms/manifest/manifest-icon-192.maskable.png",
            sizes: "192x192",
            type: "image/png",
            purpose: "maskable"
          },
          {
            src: "/assets/hrms/manifest/manifest-icon-512.maskable.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any"
          },
          {
            src: "/assets/hrms/manifest/manifest-icon-512.maskable.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "maskable"
          }
        ]
      }
    })
  ],
  resolve: {
    alias: {
      "@": path.resolve(__vite_injected_original_dirname, "src")
    }
  },
  build: {
    outDir: "../hrms/public/frontend",
    emptyOutDir: true,
    target: "es2015",
    commonjsOptions: {
      include: [/tailwind.config.js/, /node_modules/]
    },
    sourcemap: true,
    rollupOptions: {
      output: {
        manualChunks: {
          "frappe-ui": ["frappe-ui"]
        }
      }
    }
  },
  optimizeDeps: {
    include: [
      "frappe-ui > feather-icons",
      "showdown",
      "tailwind.config.js",
      "engine.io-client"
    ]
  }
});
function getProxyOptions() {
  const config = getCommonSiteConfig();
  const webserver_port = config ? config.webserver_port : 8e3;
  if (!config) {
    console.log("No common_site_config.json found, using default port 8000");
  }
  return {
    "^/(app|login|api|assets|files|private)": {
      target: `http://127.0.0.1:${webserver_port}`,
      ws: true,
      router: function(req) {
        const site_name = req.headers.host.split(":")[0];
        console.log(`Proxying ${req.url} to ${site_name}:${webserver_port}`);
        return `http://${site_name}:${webserver_port}`;
      }
    }
  };
}
function getCommonSiteConfig() {
  let currentDir = path.resolve(".");
  while (currentDir !== "/") {
    if (fs.existsSync(path.join(currentDir, "sites")) && fs.existsSync(path.join(currentDir, "apps"))) {
      let configPath = path.join(currentDir, "sites", "common_site_config.json");
      if (fs.existsSync(configPath)) {
        return JSON.parse(fs.readFileSync(configPath));
      }
      return null;
    }
    currentDir = path.resolve(currentDir, "..");
  }
  return null;
}
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvaG9tZS92Ym94L1Byb2plY3RzL1phaHJhbi1FUlAvRVJQL2FwcHMvaHJtcy9mcm9udGVuZFwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL2hvbWUvdmJveC9Qcm9qZWN0cy9aYWhyYW4tRVJQL0VSUC9hcHBzL2hybXMvZnJvbnRlbmQvdml0ZS5jb25maWcuanNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL2hvbWUvdmJveC9Qcm9qZWN0cy9aYWhyYW4tRVJQL0VSUC9hcHBzL2hybXMvZnJvbnRlbmQvdml0ZS5jb25maWcuanNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tIFwidml0ZVwiXG5pbXBvcnQgdnVlIGZyb20gXCJAdml0ZWpzL3BsdWdpbi12dWVcIlxuaW1wb3J0IHsgVml0ZVBXQSB9IGZyb20gXCJ2aXRlLXBsdWdpbi1wd2FcIlxuaW1wb3J0IGZyYXBwZXVpIGZyb20gXCJmcmFwcGUtdWkvdml0ZVwiXG5cbmltcG9ydCBwYXRoIGZyb20gXCJwYXRoXCJcbmltcG9ydCBmcyBmcm9tIFwiZnNcIlxuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuXHRzZXJ2ZXI6IHtcblx0XHRwb3J0OiA4MDgwLFxuXHRcdHByb3h5OiBnZXRQcm94eU9wdGlvbnMoKSxcblx0XHRhbGxvd2VkSG9zdHM6IHRydWUsXG5cdH0sXG5cdHBsdWdpbnM6IFtcblx0XHR2dWUoKSxcblx0XHRmcmFwcGV1aSgpLFxuXHRcdFZpdGVQV0Eoe1xuXHRcdFx0cmVnaXN0ZXJUeXBlOiBcImF1dG9VcGRhdGVcIixcblx0XHRcdHN0cmF0ZWdpZXM6IFwiaW5qZWN0TWFuaWZlc3RcIixcblx0XHRcdGluamVjdFJlZ2lzdGVyOiBudWxsLFxuXHRcdFx0ZGV2T3B0aW9uczoge1xuXHRcdFx0XHRlbmFibGVkOiB0cnVlLFxuXHRcdFx0fSxcblx0XHRcdG1hbmlmZXN0OiB7XG5cdFx0XHRcdGRpc3BsYXk6IFwic3RhbmRhbG9uZVwiLFxuXHRcdFx0XHRuYW1lOiBcIkZyYXBwZSBIUlwiLFxuXHRcdFx0XHRzaG9ydF9uYW1lOiBcIkZyYXBwZSBIUlwiLFxuXHRcdFx0XHRzdGFydF91cmw6IFwiL2hybXNcIixcblx0XHRcdFx0c2NvcGU6IFwiL2hybXNcIixcblx0XHRcdFx0aWQ6IFwiL2hybXNcIixcblx0XHRcdFx0ZGVzY3JpcHRpb246IFwiRXZlcnlkYXkgSFIgJiBQYXlyb2xsIG9wZXJhdGlvbnMgYXQgeW91ciBmaW5nZXJ0aXBzXCIsXG5cdFx0XHRcdHRoZW1lX2NvbG9yOiBcIiNmZmZmZmZcIixcblx0XHRcdFx0aWNvbnM6IFtcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRzcmM6IFwiL2Fzc2V0cy9ocm1zL21hbmlmZXN0L21hbmlmZXN0LWljb24tMTkyLm1hc2thYmxlLnBuZ1wiLFxuXHRcdFx0XHRcdFx0c2l6ZXM6IFwiMTkyeDE5MlwiLFxuXHRcdFx0XHRcdFx0dHlwZTogXCJpbWFnZS9wbmdcIixcblx0XHRcdFx0XHRcdHB1cnBvc2U6IFwiYW55XCIsXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRzcmM6IFwiL2Fzc2V0cy9ocm1zL21hbmlmZXN0L21hbmlmZXN0LWljb24tMTkyLm1hc2thYmxlLnBuZ1wiLFxuXHRcdFx0XHRcdFx0c2l6ZXM6IFwiMTkyeDE5MlwiLFxuXHRcdFx0XHRcdFx0dHlwZTogXCJpbWFnZS9wbmdcIixcblx0XHRcdFx0XHRcdHB1cnBvc2U6IFwibWFza2FibGVcIixcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdHNyYzogXCIvYXNzZXRzL2hybXMvbWFuaWZlc3QvbWFuaWZlc3QtaWNvbi01MTIubWFza2FibGUucG5nXCIsXG5cdFx0XHRcdFx0XHRzaXplczogXCI1MTJ4NTEyXCIsXG5cdFx0XHRcdFx0XHR0eXBlOiBcImltYWdlL3BuZ1wiLFxuXHRcdFx0XHRcdFx0cHVycG9zZTogXCJhbnlcIixcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdHNyYzogXCIvYXNzZXRzL2hybXMvbWFuaWZlc3QvbWFuaWZlc3QtaWNvbi01MTIubWFza2FibGUucG5nXCIsXG5cdFx0XHRcdFx0XHRzaXplczogXCI1MTJ4NTEyXCIsXG5cdFx0XHRcdFx0XHR0eXBlOiBcImltYWdlL3BuZ1wiLFxuXHRcdFx0XHRcdFx0cHVycG9zZTogXCJtYXNrYWJsZVwiLFxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdF0sXG5cdFx0XHR9LFxuXHRcdH0pLFxuXHRdLFxuXHRyZXNvbHZlOiB7XG5cdFx0YWxpYXM6IHtcblx0XHRcdFwiQFwiOiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCBcInNyY1wiKSxcblx0XHR9LFxuXHR9LFxuXHRidWlsZDoge1xuXHRcdG91dERpcjogXCIuLi9ocm1zL3B1YmxpYy9mcm9udGVuZFwiLFxuXHRcdGVtcHR5T3V0RGlyOiB0cnVlLFxuXHRcdHRhcmdldDogXCJlczIwMTVcIixcblx0XHRjb21tb25qc09wdGlvbnM6IHtcblx0XHRcdGluY2x1ZGU6IFsvdGFpbHdpbmQuY29uZmlnLmpzLywgL25vZGVfbW9kdWxlcy9dLFxuXHRcdH0sXG5cdFx0c291cmNlbWFwOiB0cnVlLFxuXHRcdHJvbGx1cE9wdGlvbnM6IHtcblx0XHRcdG91dHB1dDoge1xuXHRcdFx0XHRtYW51YWxDaHVua3M6IHtcblx0XHRcdFx0XHRcImZyYXBwZS11aVwiOiBbXCJmcmFwcGUtdWlcIl0sXG5cdFx0XHRcdH0sXG5cdFx0XHR9LFxuXHRcdH0sXG5cdH0sXG5cdG9wdGltaXplRGVwczoge1xuXHRcdGluY2x1ZGU6IFtcblx0XHRcdFwiZnJhcHBlLXVpID4gZmVhdGhlci1pY29uc1wiLFxuXHRcdFx0XCJzaG93ZG93blwiLFxuXHRcdFx0XCJ0YWlsd2luZC5jb25maWcuanNcIixcblx0XHRcdFwiZW5naW5lLmlvLWNsaWVudFwiLFxuXHRcdF0sXG5cdH0sXG59KVxuXG5mdW5jdGlvbiBnZXRQcm94eU9wdGlvbnMoKSB7XG5cdGNvbnN0IGNvbmZpZyA9IGdldENvbW1vblNpdGVDb25maWcoKVxuXHRjb25zdCB3ZWJzZXJ2ZXJfcG9ydCA9IGNvbmZpZyA/IGNvbmZpZy53ZWJzZXJ2ZXJfcG9ydCA6IDgwMDBcblx0aWYgKCFjb25maWcpIHtcblx0XHRjb25zb2xlLmxvZyhcIk5vIGNvbW1vbl9zaXRlX2NvbmZpZy5qc29uIGZvdW5kLCB1c2luZyBkZWZhdWx0IHBvcnQgODAwMFwiKVxuXHR9XG5cdHJldHVybiB7XG5cdFx0XCJeLyhhcHB8bG9naW58YXBpfGFzc2V0c3xmaWxlc3xwcml2YXRlKVwiOiB7XG5cdFx0XHR0YXJnZXQ6IGBodHRwOi8vMTI3LjAuMC4xOiR7d2Vic2VydmVyX3BvcnR9YCxcblx0XHRcdHdzOiB0cnVlLFxuXHRcdFx0cm91dGVyOiBmdW5jdGlvbiAocmVxKSB7XG5cdFx0XHRcdGNvbnN0IHNpdGVfbmFtZSA9IHJlcS5oZWFkZXJzLmhvc3Quc3BsaXQoXCI6XCIpWzBdXG5cdFx0XHRcdGNvbnNvbGUubG9nKGBQcm94eWluZyAke3JlcS51cmx9IHRvICR7c2l0ZV9uYW1lfToke3dlYnNlcnZlcl9wb3J0fWApXG5cdFx0XHRcdHJldHVybiBgaHR0cDovLyR7c2l0ZV9uYW1lfToke3dlYnNlcnZlcl9wb3J0fWBcblx0XHRcdH0sXG5cdFx0fSxcblx0fVxufVxuXG5mdW5jdGlvbiBnZXRDb21tb25TaXRlQ29uZmlnKCkge1xuXHRsZXQgY3VycmVudERpciA9IHBhdGgucmVzb2x2ZShcIi5cIilcblx0Ly8gdHJhdmVyc2UgdXAgdGlsbCB3ZSBmaW5kIGZyYXBwZS1iZW5jaCB3aXRoIHNpdGVzIGRpcmVjdG9yeVxuXHR3aGlsZSAoY3VycmVudERpciAhPT0gXCIvXCIpIHtcblx0XHRpZiAoXG5cdFx0XHRmcy5leGlzdHNTeW5jKHBhdGguam9pbihjdXJyZW50RGlyLCBcInNpdGVzXCIpKSAmJlxuXHRcdFx0ZnMuZXhpc3RzU3luYyhwYXRoLmpvaW4oY3VycmVudERpciwgXCJhcHBzXCIpKVxuXHRcdCkge1xuXHRcdFx0bGV0IGNvbmZpZ1BhdGggPSBwYXRoLmpvaW4oY3VycmVudERpciwgXCJzaXRlc1wiLCBcImNvbW1vbl9zaXRlX2NvbmZpZy5qc29uXCIpXG5cdFx0XHRpZiAoZnMuZXhpc3RzU3luYyhjb25maWdQYXRoKSkge1xuXHRcdFx0XHRyZXR1cm4gSlNPTi5wYXJzZShmcy5yZWFkRmlsZVN5bmMoY29uZmlnUGF0aCkpXG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gbnVsbFxuXHRcdH1cblx0XHRjdXJyZW50RGlyID0gcGF0aC5yZXNvbHZlKGN1cnJlbnREaXIsIFwiLi5cIilcblx0fVxuXHRyZXR1cm4gbnVsbFxufVxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUFpVixTQUFTLG9CQUFvQjtBQUM5VyxPQUFPLFNBQVM7QUFDaEIsU0FBUyxlQUFlO0FBQ3hCLE9BQU8sY0FBYztBQUVyQixPQUFPLFVBQVU7QUFDakIsT0FBTyxRQUFRO0FBTmYsSUFBTSxtQ0FBbUM7QUFRekMsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDM0IsUUFBUTtBQUFBLElBQ1AsTUFBTTtBQUFBLElBQ04sT0FBTyxnQkFBZ0I7QUFBQSxJQUN2QixjQUFjO0FBQUEsRUFDZjtBQUFBLEVBQ0EsU0FBUztBQUFBLElBQ1IsSUFBSTtBQUFBLElBQ0osU0FBUztBQUFBLElBQ1QsUUFBUTtBQUFBLE1BQ1AsY0FBYztBQUFBLE1BQ2QsWUFBWTtBQUFBLE1BQ1osZ0JBQWdCO0FBQUEsTUFDaEIsWUFBWTtBQUFBLFFBQ1gsU0FBUztBQUFBLE1BQ1Y7QUFBQSxNQUNBLFVBQVU7QUFBQSxRQUNULFNBQVM7QUFBQSxRQUNULE1BQU07QUFBQSxRQUNOLFlBQVk7QUFBQSxRQUNaLFdBQVc7QUFBQSxRQUNYLE9BQU87QUFBQSxRQUNQLElBQUk7QUFBQSxRQUNKLGFB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
