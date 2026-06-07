"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

export default function WhatsAppButton() {
  return (
    <a href="https://wa.me/2348112791510" target="_blank" aria-label="Chat on WhatsApp" style={{ position: "fixed", bottom: "24px", right: "24px", zIndex: 999, width: "56px", height: "56px", borderRadius: "50%", backgroundColor: "#25D366", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 4px 12px rgba(37,211,102,0.4)", transition: "transform 0.2s" }} onMouseEnter={e => e.currentTarget.style.transform="scale(1.1)"} onMouseLeave={e => e.currentTarget.style.transform="scale(1)"}>
      <FontAwesomeIcon icon={faWhatsapp} style={{ width: "28px", height: "28px", color: "white" }} />
    </a>
  );
}
