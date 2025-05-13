import { useEffect, useRef, useState } from "react";
import "./Footer.css";

function Footer() {
  const footerRef = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.1, // Dès que 10% du footer est visible
      },
    );

    const current = footerRef.current;
    if (current) observer.observe(current);

    return () => {
      if (current) observer.unobserve(current);
    };
  }, []);

  return (
    <footer ref={footerRef} className={`footer ${isVisible ? "visible" : ""}`}>
      © Bastien Faccinetto 2025. Tous droits réservés.
    </footer>
  );
}

export default Footer;
