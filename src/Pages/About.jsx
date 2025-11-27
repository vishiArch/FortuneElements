import React from "react";
import { Award, Leaf, Users } from "lucide-react";

export default function About() {
    const brandGreen = "#0C3E31";
    const brandGold = "#D4A947";

    const values = [
        {
            icon: Award,
            title: "Excellence",
            subtitle: "Quality & Craftsmanship",
            img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1400&auto=format&fit=crop",
            description:
                "We uphold unmatched standards in construction and design, ensuring every project reflects our commitment to excellence.",
        },
        {
            icon: Leaf,
            title: "Sustainability",
            subtitle: "Environmental Responsibility",
            img: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?q=80&w=1400&auto=format&fit=crop",
            description:
                "We build with a vision for tomorrow — adopting eco-friendly practices that preserve nature while enhancing modern living.",
        },
        {
            icon: Users,
            title: "Community",
            subtitle: "People First Approach",
            img: "https://plus.unsplash.com/premium_photo-1661915661139-5b6a4e4a6fcc?w=500&auto=format&fit=crop&q=60",
            description:
                "We design homes that encourage connection, comfort, and community — creating spaces where people truly thrive.",
        },
    ];

    return (
        <section
            id="our-story"
            className="px-4 pt-28 pb-20"
            style={{
                background: "linear-gradient(180deg, #030C09 0%, #030C09 100%)",
            }}
        >
            <div className="max-w-7xl mx-auto">

                {/* LEFT SIDE */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    <div>
                        <span
                            style={{
                                color: brandGold,
                                fontFamily: "'Montserrat', sans-serif",
                                letterSpacing: "1px",
                                fontWeight: 600,
                                fontSize: "0.85rem",
                            }}
                            className="uppercase"
                        >
                            Our Legacy
                        </span>

                        <h2
                            className="mb-6 leading-tight"
                            style={{
                                fontFamily: "'Playfair Display', serif",
                                fontSize: "clamp(2.5rem, 6vw, 3.8rem)",
                                fontWeight: 700,
                                color: "white",
                            }}
                        >
                            Building <span style={{ color: brandGold }}>Dreams</span> for 18 Years
                        </h2>

                        <p
                            style={{
                                color: "rgba(255,255,255,0.85)",
                                fontFamily: "'Montserrat', sans-serif",
                                fontSize: "1.1rem",
                                lineHeight: 1.6,
                            }}
                            className="mb-4"
                        >
                            Since 2006, Fortune Elements Builders has shaped the future of real estate in Odisha —
                            crafting premium spaces rooted in trust, quality, and innovation.
                        </p>

                        <p
                            style={{
                                color: "rgba(255,255,255,0.65)",
                                fontFamily: "'Montserrat', sans-serif",
                                fontSize: "1.05rem",
                                lineHeight: 1.6,
                            }}
                            className="mb-6"
                        >
                            Our journey reflects countless happy families, thriving communities, and projects built with passion and integrity.
                        </p>

                        {/* Stats */}
                        <div className="grid grid-cols-2 gap-6 mb-8">
                            {[
                                { number: "18+", label: "Years of Excellence" },
                                { number: "2000+", label: "Happy Families" },
                                { number: "50+", label: "Completed Projects" },
                                { number: "5000+", label: "Satisfied Customers" },
                            ].map((stat, idx) => (
                                <div
                                    key={idx}
                                    className="p-4 rounded-lg transition-all"
                                    style={{
                                        background: "rgba(255,255,255,0.05)",
                                        border: "1px solid rgba(255,255,255,0.12)",
                                        backdropFilter: "blur(8px)",
                                    }}
                                >
                                    <p
                                        style={{
                                            color: brandGold,
                                            fontFamily: "'Playfair Display', serif",
                                            fontSize: "2rem",
                                            fontWeight: 700,
                                        }}
                                    >
                                        {stat.number}
                                    </p>
                                    <p
                                        style={{
                                            color: "rgba(255,255,255,0.65)",
                                            fontFamily: "'Montserrat', sans-serif",
                                            fontSize: "0.9rem",
                                        }}
                                    >
                                        {stat.label}
                                    </p>
                                </div>
                            ))}
                        </div>

                        {/* CTA */}
                        <a
                            href="https://wa.me/9297701142"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block px-10 py-4 rounded-lg font-bold transition-transform"
                            style={{
                                background: brandGold,
                                color: brandGreen,
                                fontFamily: "'Montserrat', sans-serif",
                                boxShadow: "0 10px 25px rgba(212,169,71,0.25)",
                            }}
                        >
                            Learn More About Us
                        </a>
                    </div>

                    {/* RIGHT IMAGE */}
                    <div>
                        <img
                            src="https://images.unsplash.com/photo-1523217582562-09d0def993a6?w=500&auto=format&fit=crop&q=60"
                            alt="Fortune Elements Project"
                            className="w-full rounded-xl shadow-2xl object-cover transition-all duration-300 hover:scale-105"
                            style={{
                                boxShadow: "0 20px 60px rgba(0,0,0,0.45)",
                            }}
                        />
                    </div>
                </div>

                {/* CORE VALUES */}
                <div className="mt-20">
                    <div className="text-center mb-14">
                        <h3
                            className="leading-tight"
                            style={{
                                fontFamily: "'Playfair Display', serif",
                                fontSize: "clamp(2rem, 5vw, 3rem)",
                                fontWeight: 700,
                                color: "white",
                            }}
                        >
                            Our Core <span style={{ color: brandGold }}>Values</span>
                        </h3>

                        <p
                            style={{
                                color: "rgba(255,255,255,0.65)",
                                fontFamily: "'Montserrat', sans-serif",
                                fontSize: "1.05rem",
                                marginTop: "0.5rem",
                            }}
                        >
                            Principles that guide every decision and every development we create.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        {values.map((value, index) => {
                            const Icon = value.icon;
                            return (
                                <div
                                    key={index}
                                    className="p-10 rounded-2xl transition-all"
                                    style={{
                                        background: "rgba(255,255,255,0.06)",
                                        border: "1px solid rgba(255,255,255,0.1)",
                                        backdropFilter: "blur(10px)",
                                    }}
                                >
                                    <img
                                        src={value.img}
                                        className="w-full h-40 object-cover rounded-xl mb-6"
                                    />

                                    <div
                                        className="w-16 h-16 mx-auto mb-6 rounded-xl flex items-center justify-center"
                                        style={{
                                            background: "rgba(212,169,71,0.15)",
                                        }}
                                    >
                                        <Icon size={30} style={{ color: brandGold }} />
                                    </div>

                                    <h4
                                        style={{
                                            fontFamily: "'Playfair Display', serif",
                                            fontSize: "1.8rem",
                                            fontWeight: 700,
                                            color: "white",
                                        }}
                                        className="mb-2 text-center"
                                    >
                                        {value.title}
                                    </h4>

                                    <p
                                        style={{
                                            color: brandGold,
                                            fontFamily: "'Montserrat', sans-serif",
                                            fontSize: "0.9rem",
                                            fontWeight: 600,
                                        }}
                                        className="text-center mb-4"
                                    >
                                        {value.subtitle}
                                    </p>

                                    <p
                                        className="leading-relaxed text-center"
                                        style={{
                                            color: "rgba(255,255,255,0.65)",
                                            fontFamily: "'Montserrat', sans-serif",
                                        }}
                                    >
                                        {value.description}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
