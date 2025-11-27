import { useState } from "react";
import { MapPin, ArrowRight } from "lucide-react";

const projects = [
    {
        id: 1,
        name: "Royal Residency Phase 1",
        category: "Residential",
        location: "Saria, Sambalpur",
        image: "https://images.unsplash.com/photo-1502672023488-70e25813eb80?w=600&h=420&auto=format&fit=crop&q=60&fm=webp",
        status: "Ready to Move",
    },
    {
        id: 2,
        name: "Fortune Elements Prestige",
        category: "Residential",
        location: "Sourav Vihar, Burla",
        image: "https://images.unsplash.com/photo-1565182999561-18d7dc61c393?w=600&h=420&auto=format&fit=crop&q=60&fm=webp",
        status: "Ready to Move",
    },
    {
        id: 3,
        name: "Fortune Elements Residency",
        category: "Residential",
        location: "Sambalpur",
        image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=600&h=420&auto=format&fit=crop&q=60&fm=webp",
        status: "Ready to Move",
    },
    {
        id: 4,
        name: "Fortune Elements Homes",
        category: "Residential",
        location: "Shanti Nagar, Sambalpur",
        image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=420&auto=format&fit=crop&q=60&fm=webp",
        status: "Ready to Move",
    },
    {
        id: 5,
        name: "Fortune Elements Imperial",
        category: "Commercial",
        location: "Sambalpur",
        image: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=600&h=420&auto=format&fit=crop&q=60&fm=webp",
        status: "Upcoming",
    },
    {
        id: 6,
        name: "Fortune Elements Spaces",
        category: "Commercial",
        location: "Various Locations",
        image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=420&auto=format&fit=crop&q=60&fm=webp",
        status: "Upcoming",
    },
    {
        id: 7,
        name: "Fortune Elements Prime",
        category: "Residential",
        location: "Sahednagar, Bhubaneswar",
        image: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=600&h=420&auto=format&fit=crop&q=60&fm=webp",
        status: "Launching Soon",
    },
    {
        id: 8,
        name: "Fortune Elements Luxotica",
        category: "Residential",
        location: "Sahednagar, Bhubaneswar",
        image: "https://images.unsplash.com/photo-1599423300746-b62533397364?w=600&h=420&auto=format&fit=crop&q=60&fm=webp",
        status: "Launching Soon",
    },
];

export default function Projects() {
    const handleViewAllProjects = () => {
        window.open("https://wa.me/9297701142?text=I am interested in viewing all projects", "_blank");
    };

    return (
        <section
            id="our-projects"
            className="py-24 px-4 relative overflow-hidden"
            style={{
                background: "linear-gradient(180deg, #01050F 0%, #0B0A09 45%, #19170B 100%)",
            }}
        >
            {/* BACKGROUND SHINE */}
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    background:
                        "radial-gradient(circle at 50% -10%, rgba(212,169,71,0.10), transparent 70%)",
                }}
            />

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Heading */}
                <div className="text-center mb-20">
                    <h2
                        className="text-4xl md:text-5xl font-bold mb-4"
                        style={{
                            fontFamily: "'Playfair Display', serif",
                            color: "white",
                        }}
                    >
                        Our{" "}
                        <span style={{ color: "#D4A947" }}>
                            Premium Projects
                        </span>
                    </h2>

                    <p
                        className="text-lg max-w-2xl mx-auto"
                        style={{
                            color: "rgba(255,255,255,0.75)",
                            fontFamily: "'Montserrat', sans-serif",
                        }}
                    >
                        Explore world-class developments built with precision,
                        luxury, and modern architecture.
                    </p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                    {projects.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>

                {/* Button */}
                <div className="text-center mt-16">
                    <button
                        onClick={handleViewAllProjects}
                        className="px-10 py-4 rounded-lg transition-all duration-300 font-semibold hover:scale-105 shadow-lg"
                        style={{
                            background: "#D4A947",
                            color: "#0C3E31",
                            fontFamily: "'Montserrat', sans-serif",
                        }}
                    >
                        View All Projects →
                    </button>
                </div>
            </div>
        </section>
    );
}

function ProjectCard({ project }) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="group relative overflow-hidden rounded-2xl cursor-pointer transition-all duration-500 shadow-xl hover:shadow-yellow-500/20"
            style={{
                border: "1px solid rgba(255,255,255,0.08)",
                backdropFilter: "blur(4px)",
            }}
        >
            {/* Image */}
            <div className="relative overflow-hidden h-[420px] w-[600px] rounded-2xl">
                <img
                    src={project.image}
                    alt={project.name}
                    loading="lazy"
                    decoding="async"
                    className={`w-full h-full object-cover transition-transform duration-500 ${
                        isHovered ? "scale-110" : "scale-100"
                    }`}
                />

                <div
                    className={`absolute inset-0 bg-linear-to-t from-black via-black/40 to-transparent transition-opacity duration-300 ${
                        isHovered ? "opacity-90" : "opacity-70"
                    }`}
                ></div>
            </div>

            {/* Status */}
            <div className="absolute top-4 left-4">
                <span
                    className="px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-md"
                    style={{
                        fontFamily: "'Montserrat', sans-serif",
                        background:
                            project.status === "Ready to Move"
                                ? "rgba(164,213,58,0.9)"
                                : "rgba(212,169,71,0.9)",
                        color: "black",
                    }}
                >
                    {project.status}
                </span>
            </div>

            {/* Content */}
            <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-3 group-hover:translate-y-0 transition-transform duration-300">
                <h3
                    className="text-2xl font-bold mb-1 drop-shadow-lg"
                    style={{
                        fontFamily: "'Playfair Display', serif",
                        color: "white",
                    }}
                >
                    {project.name}
                </h3>

                <div
                    className="flex items-center gap-2 mb-3"
                    style={{ color: "rgba(255,255,255,0.8)" }}
                >
                    <MapPin size={16} />
                    <span
                        className="text-sm"
                        style={{ fontFamily: "'Montserrat', sans-serif" }}
                    >
                        {project.location}
                    </span>
                </div>

                <a
                    href={`https://wa.me/9297701142?text=I am interested in ${project.name}`}
                    target="_blank"
                    className="inline-flex items-center gap-2 transition-colors"
                    style={{
                        color: "#D4A947",
                        fontFamily: "'Montserrat', sans-serif",
                        fontWeight: 600,
                    }}
                >
                    View Details
                    <ArrowRight size={18} />
                </a>
            </div>
        </div>
    );
}
