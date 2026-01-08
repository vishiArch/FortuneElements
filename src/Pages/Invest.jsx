import { CheckCircle, TrendingUp, Award } from "lucide-react";

export default function InvestFuture() {
    const features = [
        {
            icon: TrendingUp,
            title: "Proven Track Record",
            description:
                "Over 18 years of delivering premium properties with consistent value appreciation and customer satisfaction.",
            points: ["18+ Years Experience", "2000+ Happy Families", "50+ Completed Projects"],
        },
        {
            icon: Award,
            title: "Premium Quality",
            description:
                "Award-winning architectural designs with world-class amenities and sustainable construction practices.",
            points: ["Premium Materials", "Latest Technology", "ISO Certified"],
        },
        {
            icon: CheckCircle,
            title: "Transparent Process",
            description:
                "Complete transparency in pricing, timelines, and specifications. No hidden charges, no surprises.",
            points: ["Clear Documentation", "Flexible Payment", "Legal Support"],
        },
    ];

    return (
        <section
            id="invest-future"
            className="pt-24 pb-10 px-4 bg-[#02080D] mb-0 border-t-1 border-amber-500" // Adjusted bottom margin
        >
            <div className="max-w-7xl mx-auto">

                {/* Header */}
                <div className="text-center mb-14">
                    <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">
                        Ready to Invest in Your <span className="text-amber-500">Future?</span>
                    </h2>
                    <p className="text-gray-300 text-xl max-w-3xl mx-auto leading-relaxed">
                        Join thousands of satisfied homeowners who have trusted Koshal Builders to craft
                        their dreams into reality. Our premium properties offer not just a place to live,
                        but an investment in your family’s tomorrow.
                    </p>
                </div>

                {/* Feature Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                    {features.map((item, index) => {
                        const Icon = item.icon;
                        return (
                            <div
                                key={index}
                                className="group p-8 rounded-xl border border-white/10 bg-white/5 
                                backdrop-blur-sm hover:border-amber-500/50 hover:bg-white/10 
                                transition-all duration-300 hover:shadow-2xl hover:shadow-amber-500/10"
                            >
                                {/* Icon */}
                                <div className="w-16 h-16 bg-amber-500/20 rounded-lg flex items-center justify-center mb-5 group-hover:bg-amber-500/30 transition-colors">
                                    <Icon className="text-amber-500" size={32} />
                                </div>

                                {/* Title */}
                                <h3 className="text-2xl font-bold text-white mb-2">{item.title}</h3>

                                {/* Description */}
                                <p className="text-gray-400 mb-5 leading-relaxed">{item.description}</p>

                                {/* Bullet Points */}
                                <ul className="space-y-2">
                                    {item.points.map((point, idx) => (
                                        <li key={idx} className="flex items-center gap-2 text-gray-300">
                                            <span className="w-2 h-2 bg-amber-500 rounded-full"></span>
                                            {point}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        );
                    })}
                </div>

                {/* CTA Button */}
                <div className="text-center">
                    <a
                        href="https://wa.me/9297701142?text=Hi%20Koshal%20Builders,%20I%20want%20to%20invest%20in%20your%20premium%20properties.%20Please%20share%20available%20options."
                        target="_blank"
                        className="inline-block px-12 py-4 bg-amber-500 text-black rounded-xl 
                        hover:bg-amber-600 transition-all duration-300 font-bold text-lg 
                        hover:scale-105 hover:shadow-2xl hover:shadow-amber-500/30"
                    >
                        Explore Investment Opportunities
                    </a>
                </div>

            </div>
        </section>
    );
}