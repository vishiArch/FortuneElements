import { useState, useEffect, useRef } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

/**
 * Theme Configuration
 */
const themeColor = "#03130E"; // Updated deep luxury base color
const themeGold = "#D4A947";  // Luxury Gold

export default function Hero() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const titleRef = useRef(null);

  // Scroll Navbar Effect
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Heading Initial Animation
  useEffect(() => {
    if (titleRef.current) {
      titleRef.current.style.animation = "fadeInUp 1s ease-out";
    }
  }, []);

  const menuItems = ["Home", "Our Story", "Contact", "Our Projects"];

  return (
    <>
      {/* ================= NAVBAR ================= */}
      <nav
        className="fixed w-full top-0 z-50 transition-all duration-300"
        style={{
          background: scrolled
            ? "rgba(3, 19, 14, 0.7)"
            : "rgba(3, 19, 14, 0.4)",
          backdropFilter: "blur(20px)",
          borderBottom: scrolled
            ? `1px solid ${themeGold}33`
            : `1px solid ${themeGold}20`,
          boxShadow: scrolled
            ? "0 8px 32px rgba(0,0,0,0.3)"
            : "0 4px 20px rgba(0,0,0,0.1)",
          WebkitBackdropFilter: "blur(20px)",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">

            {/* ======== NEW LOGO IMAGE ======== */}
            <div className="flex items-center gap-3 cursor-pointer">
              <img
                src="/logoooo.webp"
                alt="Logo"
                className="w-12 h-12 object-contain rounded-full shadow-lg"
                style={{
                  border: `2px solid ${themeGold}`,
                  background: "rgba(255,255,255,0.1)",
                  backdropFilter: "blur(8px)",
                }}
              />

              <span
                className="text-white font-semibold hidden sm:inline cursor-pointer"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  textShadow: "0px 2px 6px rgba(0,0,0,0.4)",
                }}
              >
                Fortune Elements
              </span>
            </div>

            {/* DESKTOP MENU */}
            <div className="hidden md:flex items-center gap-8">
              {menuItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                  className="relative group cursor-pointer"
                  style={{
                    color: "rgba(255,255,255,0.85)",
                    fontFamily: "'Montserrat', sans-serif",
                    fontWeight: 500,
                    fontSize: "0.95rem",
                    paddingBottom: "6px",
                    display: "inline-block",
                  }}
                >
                  <span className="pointer-events-none">{item}</span>
                  <span
                    className="absolute left-0 bottom-0 h-0.5 w-0 group-hover:w-full transition-all duration-300 ease-out"
                    style={{ backgroundColor: themeGold }}
                  />
                </a>
              ))}
            </div>

            {/* DESKTOP BUTTONS */}
            <div className="hidden md:flex items-center gap-4">

              {/* CHAT BUTTON */}
              <a
                href="https://wa.me/9297701142"
                target="_blank"
                rel="noreferrer"
                className="relative overflow-hidden rounded-md group"
              >
                <button
                  className="relative px-6 py-2 transition-all duration-300 z-10 rounded-md"
                  style={{
                    border: `1px solid rgba(255,255,255,0.3)`,
                    color: "white",
                    background: "transparent",
                    fontWeight: 600,
                    fontFamily: "'Montserrat', sans-serif",
                  }}
                >
                  Chat
                </button>

                <motion.div
                  initial={{ x: "-100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="absolute inset-0 -z-10 rounded-md"
                  style={{
                    background: `rgba(255,255,255,0.1)`,
                    backdropFilter: "blur(10px)",
                  }}
                />
              </a>

              {/* ENQUIRE BUTTON */}
              <a
                href="https://wa.me/9297701142"
                target="_blank"
                rel="noreferrer"
                className="relative overflow-hidden rounded-md group"
              >
                <button
                  className="relative px-6 py-2 transition-all duration-300 z-10 rounded-md"
                  style={{
                    border: `1px solid ${themeGold}`,
                    color: themeGold,
                    background: "transparent",
                    fontWeight: 600,
                    fontFamily: "'Montserrat', sans-serif",
                  }}
                >
                  Enquire Now
                </button>

                <motion.div
                  initial={{ x: "-100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="absolute inset-0 -z-10 rounded-md"
                  style={{ background: themeGold }}
                />

                <motion.button
                  initial={{ color: themeGold }}
                  whileHover={{ color: "#0C3E31" }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 px-6 py-2 pointer-events-none rounded-md"
                  style={{
                    fontWeight: 600,
                    fontFamily: "'Montserrat', sans-serif",
                    border: `1px solid ${themeGold}`,
                    background: "transparent",
                  }}
                >
                  Enquire Now
                </motion.button>
              </a>
            </div>

            {/* MOBILE TOGGLE */}
            <button
              className="md:hidden text-white cursor-pointer"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* ================= MOBILE MENU ================= */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="md:hidden mt-2 rounded-xl overflow-hidden shadow-2xl mb-4"
                style={{
                  background: "rgba(3, 19, 14, 0.8)",
                  border: `1px solid ${themeGold}33`,
                  backdropFilter: "blur(10px)",
                }}
              >
                {menuItems.map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                    className="block px-6 py-4 border-b border-white/5 hover:bg-white/5"
                    onClick={() => setIsOpen(false)}
                    style={{
                      color: "white",
                      fontFamily: "'Montserrat', sans-serif",
                    }}
                  >
                    {item}
                  </a>
                ))}

                <div className="flex gap-3 p-4">

                  {/* MOBILE CHAT */}
                  <a
                    href="https://wa.me/9297701142"
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 px-4 py-2 rounded-md text-center"
                    style={{
                      border: `1px solid rgba(255,255,255,0.3)`,
                      color: "white",
                      background: "rgba(255,255,255,0.05)",
                      fontWeight: 600,
                      fontFamily: "'Montserrat', sans-serif",
                    }}
                  >
                    Chat
                  </a>

                  {/* MOBILE ENQUIRE */}
                  <a
                    href="https://wa.me/9297701142"
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 px-4 py-2 rounded-md text-center"
                    style={{
                      border: `1px solid ${themeGold}`,
                      color: "#0C3E31",
                      background: themeGold,
                      fontWeight: 600,
                      fontFamily: "'Montserrat', sans-serif",
                    }}
                  >
                    Enquire
                  </a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </nav>

      {/* ================= HERO SECTION ================= */}
      <section
        className="relative w-full min-h-screen flex items-center justify-center pt-20 overflow-hidden"
        id="home"
        style={{ backgroundColor: themeColor }}
      >
        <div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(circle at 50% 40%, ${themeGold}12 0%, transparent 45%),
              linear-gradient(
                180deg,
                ${themeColor} 0%,
                #02120F 45%,
                #02090F 100%
              )
            `,
          }}
        />

        {/* NOISE OVERLAY */}
        <div className="absolute inset-0 mix-blend-overlay opacity-20 pointer-events-none">
          <div
            className="w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-50"
            aria-hidden="true"
          />
        </div>

        {/* CONTENT */}
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto h-screen flex flex-col items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full"
          >
            <h1
              ref={titleRef}
              className="mb-6 leading-[1.1]"
              style={{
                fontWeight: 700,
                color: "#fff",
                fontSize: "clamp(3rem, 10vw, 4.5rem)",
                textShadow: "0 10px 30px rgba(0,0,0,0.3)",
              }}
            >
              Fortune{" "}
              <span
                style={{
                  color: themeGold,
                  fontFamily: "'Playfair Display', serif",
                  fontStyle: "italic",
                }}
              >
                Elements
              </span>
              <br />
              <span
                className="block mt-2"
                style={{
                  color: "rgba(255,255,255,0.9)",
                  fontFamily: "'Montserrat', sans-serif",
                  fontWeight: 300,
                  fontSize: "clamp(1rem, 2vw, 1.5rem)",
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                }}
              >
                Pvt. Ltd.
              </span>
            </h1>

            <p
              className="mb-10 mx-auto leading-relaxed"
              style={{
                color: "rgba(255,255,255,0.7)",
                maxWidth: 650,
                fontFamily: "'Montserrat', sans-serif",
                fontSize: "1.1rem",
              }}
            >
              Defining the skyline with a perfect blend of nature, luxury, and modern engineering.
            </p>

            {/* CTA BUTTONS */}
            <div className="flex flex-col sm:flex-row gap-5 justify-center mb-12">
              <a
                href="#our-projects"
                className="inline-flex items-center justify-center px-8 py-3 rounded-[10px] transition-transform hover:scale-105"
                style={{
                  background: themeGold,
                  color: themeColor,
                  fontWeight: 700,
                  fontFamily: "'Montserrat', sans-serif",
                  boxShadow: `0 0 20px ${themeGold}40`,
                }}
              >
                Explore Projects
              </a>

              <a
                href="https://wa.me/9297701142"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center px-8 py-3 rounded-lg transition-all"
                style={{
                  border: `1px solid ${themeGold}`,
                  color: themeGold,
                  background: "transparent",
                  fontFamily: "'Montserrat', sans-serif",
                  fontWeight: 600,
                }}
              >
                Enquire Now
              </a>
            </div>
          </motion.div>
        </div>

        {/* SCROLL ARROW */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce cursor-pointer"
        >
          <ChevronDown
            size={32}
            style={{
              color: themeGold,
              opacity: 0.8,
            }}
          />
        </motion.div>
      </section>
    </>
  );
}
