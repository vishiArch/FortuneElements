import { useState } from "react";
import { MapPin, ArrowRight } from "lucide-react";

import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Mousewheel } from "swiper/modules";

import { motion } from "framer-motion";

import "swiper/css";
import "swiper/css/free-mode";

const projects = [
  {
    id: 1,
    name: "Royal Residency Phase 1",
    category: "Residential",
    location: "Bilaspur",
    mediaType: "video",
    media: "/one.mp4",
    status: "Ready to Move",
  },
  {
    id: 2,
    name: "Fortune Elements Prestige",
    category: "Residential",
    location: "Bilaspur",
    mediaType: "video",
    media: "/two.mp4",
    status: "Ready to Move",
  },
  {
    id: 3,
    name: "Fortune Elements Residency",
    category: "Residential",
    location: "Bilaspur",
    mediaType: "video",
    media: "/three.mp4",
    status: "Ready to Move",
  },
  {
    id: 4,
    name: "Fortune Elements Homes",
    category: "Residential",
    location: "Bilaspur",
    mediaType: "video",
    media: "/four.mp4",
    status: "Ready to Move",
  },
  {
    id: 5,
    name: "Fortune Elements Imperial",
    category: "Commercial",
    location: "Bilaspur",
    mediaType: "video",
    media: "/five.mp4",
    status: "Upcoming",
  },
  {
    id: 6,
    name: "Fortune Elements Spaces",
    category: "Commercial",
    location: "Bilaspur",
    mediaType: "video",
    media: "/six.mp4",
    status: "Upcoming",
  },
  {
    id: 7,
    name: "Fortune Elements Prime",
    category: "Residential",
    location: "Bilaspur",
    mediaType: "video",
    media: "/seven.mp4",
    status: "Launching Soon",
  },
  {
    id: 8,
    name: "Fortune Elements Luxotica",
    category: "Residential",
    location: "Bilaspur",
    mediaType: "video",
    media: "/eight.mp4",
    status: "Launching Soon",
  },
];

export default function Projects() {
  const [cursor, setCursor] = useState({ x: 0, y: 0 });
  const [showCursor, setShowCursor] = useState(false);

  return (
    <section
      id="our-projects"
      className="py-24 px-4 relative overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, #01050F 0%, #0B0A09 45%, #19170B 100%)",
      }}
    >
      {/* Background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 50% -10%, rgba(212,169,71,0.12), transparent 70%)",
        }}
      />

      {/* Cursor-follow swipe hint */}
      {showCursor && (
        <motion.div
          className="fixed z-50 pointer-events-none"
          animate={{
            x: cursor.x - 60,
            y: cursor.y - 60,
          }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
          <div className="w-[120px] h-[120px] rounded-full flex items-center justify-center bg-white/15 backdrop-blur-md border border-white/30">
            <span className="text-white text-sm tracking-widest font-semibold">
              SWIPE
            </span>
          </div>
        </motion.div>
      )}

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="mb-14">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Our <span className="text-[#D4A947]">Premium Projects</span>
          </h2>

          <p className="text-lg max-w-2xl text-white/75">
            Explore world-class developments built with precision, luxury, and
            modern architecture.
          </p>
        </div>

        {/* Swiper */}
        <div
          onMouseEnter={() => setShowCursor(true)}
          onMouseLeave={() => setShowCursor(false)}
          onMouseMove={(e) =>
            setCursor({ x: e.clientX, y: e.clientY })
          }
        >
          <Swiper
            modules={[FreeMode, Mousewheel]}
            spaceBetween={40}
            slidesPerView="auto"
            freeMode
            mousewheel={{ forceToAxis: true }}
            grabCursor
            className="!overflow-visible"
          >
            {projects.map((project) => (
              <SwiperSlide key={project.id} className="!w-auto">
                <ProjectCard project={project} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <a
            href="https://wa.me/9297701142?text=I am interested in viewing all projects"
            target="_blank"
            className="inline-block px-10 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg bg-[#D4A947] text-[#0C3E31]"
          >
            View All Projects →
          </a>
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative group w-[600px] overflow-hidden rounded-2xl cursor-pointer transition-all duration-500 shadow-xl hover:shadow-yellow-500/20"
      style={{ border: "1px solid rgba(255,255,255,0.08)" }}
    >
      {/* Video */}
      <div className="relative h-[420px] overflow-hidden">
        <video
          src={project.media}
          autoPlay
          loop
          muted
          playsInline
          className={`w-full h-full object-cover transition-transform duration-500 ${
            hovered ? "scale-110" : "scale-100"
          }`}
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
      </div>

      {/* Status */}
      <span
        className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold"
        style={{
          background:
            project.status === "Ready to Move"
              ? "rgba(164,213,58,0.9)"
              : "rgba(212,169,71,0.9)",
          color: "#000",
        }}
      >
        {project.status}
      </span>

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-6">
        <h3 className="text-2xl font-bold text-white mb-1">
          {project.name}
        </h3>

        <div className="flex items-center gap-2 text-white/80 mb-3">
          <MapPin size={16} />
          <span className="text-sm">{project.location}</span>
        </div>

        <a
          href={`https://wa.me/9297701142?text=I am interested in ${project.name}`}
          target="_blank"
          className="inline-flex items-center gap-2 font-semibold text-[#D4A947]"
        >
          View Details <ArrowRight size={18} />
        </a>
      </div>
    </div>
  );
}
