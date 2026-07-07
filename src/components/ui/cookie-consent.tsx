"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}

export function CookieConsent(): React.ReactElement | null {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if consent was already given
    const consent = localStorage.getItem("muda_cookie_consent");
    if (!consent) {
      // Show banner if no consent
      setIsVisible(true);
    } else if (consent === "granted") {
      // If previously granted, update consent state to granted.
      // (Default in layout is denied, so we must update on load).
      if (typeof window !== "undefined" && window.gtag) {
        window.gtag("consent", "update", {
          ad_storage: "granted",
          analytics_storage: "granted",
          ad_user_data: "granted",
          ad_personalization: "granted",
        });
      }
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("muda_cookie_consent", "granted");
    setIsVisible(false);

    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("consent", "update", {
        ad_storage: "granted",
        analytics_storage: "granted",
        ad_user_data: "granted",
        ad_personalization: "granted",
      });
    }
  };

  const handleReject = () => {
    localStorage.setItem("muda_cookie_consent", "denied");
    setIsVisible(false);
    
    // We don't need to update because default is denied, but just in case
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("consent", "update", {
        ad_storage: "denied",
        analytics_storage: "denied",
        ad_user_data: "denied",
        ad_personalization: "denied",
      });
    }
  };

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 100, opacity: 0 }}
        className="fixed bottom-0 left-0 right-0 z-[100] p-4 sm:p-6"
      >
        <div className="container mx-auto max-w-4xl">
          <div className="bg-card border border-border shadow-2xl rounded-2xl p-5 md:p-6 flex flex-col md:flex-row items-center gap-6">
            <div className="flex-1">
              <h3 className="text-lg font-bold text-foreground mb-2">Sua privacidade importa</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Utilizamos cookies e tecnologias semelhantes para melhorar a sua experiência no site, 
                personalizar conteúdo e anúncios, além de analisar nosso tráfego. 
                Ao clicar em "Aceitar Todos", você concorda com o uso de todas essas tecnologias.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto shrink-0">
              <Button
                variant="outline"
                className="w-full sm:w-auto bg-transparent border-border text-foreground hover:bg-secondary"
                onClick={handleReject}
              >
                Recusar
              </Button>
              <Button
                className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground font-bold shadow-md"
                onClick={handleAccept}
              >
                Aceitar Todos
              </Button>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
