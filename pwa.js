export function setupPWA() {
    // Crea e aggiungi il link del manifest
    const manifestLink = document.createElement("link");
    manifestLink.rel = "manifest";
    manifestLink.href = "/manifest.json";
    document.head.appendChild(manifestLink);
  
    // Registra il service worker
    if ("serviceWorker" in navigator) {
      window.addEventListener("load", function () {
        navigator.serviceWorker.register("/service-worker.js").then(
          function (registration) {
            console.log(
              "Service Worker registered with scope:",
              registration.scope,
            );
          },
          function (err) {
            console.log("Service Worker registration failed:", err);
          },
        );
      });
    }
  }
  