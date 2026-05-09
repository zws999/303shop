import { useEffect, useState } from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Products } from "./components/Products";
import { Features } from "./components/Features";
import { Status } from "./components/Status";
import { Footer } from "./components/Footer";
import { FloatingBuyButton } from "./components/FloatingBuyButton";
import { TermsOfService } from "./components/TermsOfService";
import { PrivacyPolicy } from "./components/PrivacyPolicy";
import { RefundPolicy } from "./components/RefundPolicy";

export default function App() {
  const [currentPage, setCurrentPage] = useState<"home" | "terms" | "privacy" | "refund">("home");

  useEffect(() => {
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = "smooth";

    // Handle hash-based navigation
    const handleHashChange = () => {
      const hash = window.location.hash.replace("#", "");
      if (hash === "terms") setCurrentPage("terms");
      else if (hash === "privacy") setCurrentPage("privacy");
      else if (hash === "refund") setCurrentPage("refund");
      else setCurrentPage("home");
    };

    handleHashChange();
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  if (currentPage === "terms") {
    return (
      <div className="min-h-screen bg-black text-white overflow-x-hidden">
        <Navbar />
        <TermsOfService />
        <Footer />
      </div>
    );
  }

  if (currentPage === "privacy") {
    return (
      <div className="min-h-screen bg-black text-white overflow-x-hidden">
        <Navbar />
        <PrivacyPolicy />
        <Footer />
      </div>
    );
  }

  if (currentPage === "refund") {
    return (
      <div className="min-h-screen bg-black text-white overflow-x-hidden">
        <Navbar />
        <RefundPolicy />
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <Products />
      <Features />
      <Status />
      <Footer />
      <FloatingBuyButton />
    </div>
  );
}
