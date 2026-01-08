import { Building2, Users } from "lucide-react";

export default function TargetCities() {
    const themeColor = "#030C09"; // UPDATED THEME BG COLOR
    const brandGold = "#D4A947"; // warm champagne gold

    const cities = [
        {
            name: "Bilaspur",
            image:
                "/img.jpg",
            projects: 12,
            residents: "2500+",
            description:
                "Our flagship city with diverse residential and commercial projects.",
        },
        {
            name: "Bilaspur",
            image:
                "/imgTwo.jpg",
            projects: 8,
            residents: "1800+",
            description:
                "Premium developments in the capital of Odisha with modern lifestyle.",
        },
        {
            name: "Bilaspur",
            image:
                "/imgThree.jpg",
            projects: 5,
            residents: "950+",
            description:
                "Emerging hub with contemporary architectural marvels and amenities.",
        },
    ];

    const stats = [
        {
            title: "Current Presence",
            value: "3 Major Cities",
            desc: "Sambalpur, Bhubaneswar, Burla",
        },
        {
            title: "Total Projects",
            value: "25+",
            desc: "Residential & Commercial",
        },
        {
            title: "Future Plans",
            value: "Pan-India",
            desc: "Expanding to new markets",
        },
    ];

    return (
        <section
            id="target-cities"
            className="pt-24 pb-10 px-4 text-white tracking-tight" // Adjusted bottom padding
            style={{
                background: themeColor,
                fontFamily: "'Montserrat', sans-serif",
            }}
        >
            <div className="max-w-7xl mx-auto">

                {/* HEADER */}
                <div className="text-center mb-10">
                    <h2
                        className="text-5xl md:text-6xl mb-5 leading-tight"
                        style={{
                            fontFamily: "'Playfair Display', serif",
                            fontWeight: 700,
                        }}
                    >
                        Our{" "}
                        <span
                            className="drop-shadow-[0_0_25px_rgba(212,169,71,0.55)]"
                            style={{ color: brandGold }}
                        >
                            Target Cities
                        </span>
                    </h2>

                    <p
                        className="text-lg max-w-3xl mx-auto leading-relaxed"
                        style={{ color: "rgba(255,255,255,0.75)" }}
                    >
                        Expanding thoughtfully across India, blending modern architecture
                        with the essence of elevated living.
                    </p>
                </div>

                {/* CITIES GRID */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-10"> {/* Adjusted margin */}
                    {cities.map((city, index) => (
                        <div
                            key={index}
                            className="group rounded-2xl overflow-hidden transition-all duration-500"
                            style={{
                                background: "rgba(255,255,255,0.06)",
                                border: "1px solid rgba(255,255,255,0.15)",
                                backdropFilter: "blur(12px)",
                                boxShadow: "0 0 40px rgba(212,169,71,0.08)",
                            }}
                        >
                            {/* IMAGE */}
                            <div className="relative h-72 overflow-hidden">
                                <img
                                    src={city.image}
                                    alt={city.name}
                                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                                />

                                <div
                                    className="absolute inset-0"
                                    style={{
                                        background:
                                            "linear-gradient(to top, rgba(0,0,0,0.6), rgba(0,0,0,0))",
                                    }}
                                ></div>
                            </div>

                            {/* CONTENT */}
                            <div className="p-7">
                                <h3
                                    className="text-3xl mb-3 transition-all duration-300"
                                    style={{
                                        fontFamily: "'Playfair Display', serif",
                                        fontWeight: 700,
                                        color: "white",
                                    }}
                                >
                                    {city.name}
                                </h3>

                                <p
                                    className="mb-6"
                                    style={{ color: "rgba(255,255,255,0.65)" }}
                                >
                                    {city.description}
                                </p>

                                {/* STATS */}
                                <div
                                    className="grid grid-cols-2 gap-4 mb-7 pb-7"
                                    style={{
                                        borderBottom: "1px solid rgba(255,255,255,0.12)",
                                    }}
                                >
                                    <div className="text-center relative right-14">
                                        <div className="flex items-center justify-center gap-2 mb-1">
                                            <Building2
                                                size={18}
                                                style={{ color: brandGold }}
                                            />
                                            <span className="text-2xl font-bold ">
                                                {city.projects}
                                            </span>
                                        </div>
                                        <p
                                            className="text-sm"
                                            style={{ color: "rgba(255,255,255,0.5)" }}
                                        >
                                            Projects
                                        </p>
                                    </div>

                                    <div className="text-center relative right-22">
                                        <div className="flex items-center justify-center gap-2 mb-1">
                                            <Users
                                                size={18}
                                                style={{ color: brandGold }}
                                            />
                                            <span className="text-2xl font-bold">
                                                {city.residents}
                                            </span>
                                        </div>
                                        <p
                                            className="text-sm"
                                            style={{ color: "rgba(255,255,255,0.5)" }}
                                        >
                                            Residents
                                        </p>
                                    </div>
                                </div>

                                {/* CTA */}
                                <a
                                    href={`https://wa.me/9297701142?text=Hi,%20I'm%20interested%20in%20Fortune%20Elements%20Builders%20projects%20in%20${city.name}`}
                                    target="_blank"
                                    className="block w-full text-center px-6 py-3 rounded-lg font-semibold tracking-wide transition-all duration-300"
                                    style={{
                                        background: "rgba(212,169,71,0.15)",
                                        color: brandGold,
                                        border: `1px solid ${brandGold}80`,
                                    }}
                                >
                                    Explore Projects
                                </a>
                            </div>
                        </div>
                    ))}
                </div>

                {/* STATS BOX */}
                <div className="max-w-5xl mx-auto mb-10">
                    <div
                        className="rounded-2xl p-10 backdrop-blur-xl"
                        style={{
                            background: "rgba(255,255,255,0.06)",
                            border: "1px solid rgba(255,255,255,0.12)",
                            boxShadow: "0 0 45px rgba(212,169,71,0.12)",
                        }}
                    >
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                            {stats.map((item, idx) => (
                                <div key={idx} className="text-center">
                                    <p
                                        className="text-xs font-semibold tracking-widest mb-2"
                                        style={{ color: `${brandGold}CC` }}
                                    >
                                        {item.title}
                                    </p>

                                    <p
                                        className="text-3xl font-extrabold drop-shadow"
                                        style={{
                                            fontFamily: "'Playfair Display', serif",
                                        }}
                                    >
                                        {item.value}
                                    </p>

                                    <p
                                        className="text-sm"
                                        style={{ color: "rgba(255,255,255,0.65)" }}
                                    >
                                        {item.desc}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
