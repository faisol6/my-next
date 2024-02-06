import React, { useState, useRef, useEffect } from "react";
type props = {
  children: any;
  animate?: string;
  effectOn?: boolean;
};
export default function FadeInSection({
  children,
  animate = "fadeUp",
  effectOn = true,
}: props) {
  const [isVisible, setVisible] = useState(false);
  const domRef = useRef(null) as any;

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => setVisible(entry.isIntersecting));
    });
    if (domRef.current) {
      observer.observe(domRef.current);
    }
    return () => {
      observer.disconnect();
    };
  }, [domRef]);

  return (
    <div
      ref={domRef}
      className={
        effectOn
          ? animate === "fadeUp"
            ? `fade-up ${isVisible ? "is-visible" : ""}`
            : animate === "fadeRight"
            ? `fade-right ${isVisible ? "is-visible" : ""}`
            : animate === "fadeLeft"
            ? `fade-left ${isVisible ? "is-visible" : ""}`
            : animate === "fadeDown"
            ? `fade-down ${isVisible ? "is-visible" : ""}`
            : `fade-up ${isVisible ? "is-visible" : ""}`
          : "is-visible"
      }
    >
      {children}
    </div>
  );
}
