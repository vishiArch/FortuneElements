import React, { useState } from "react";
import {
    Facebook,
    Instagram,
    Twitter,
    Linkedin,
    Mail,
    Phone,
    MapPin,
    Clock,
} from "lucide-react";

export default function Footer() {
    const [enquiryData, setEnquiryData] = useState({
        name: "",
        email: "",
        phone: "",
        city: "",
    });

    const handleEnquirySubmit = (e) => {
        e.preventDefault();

        if (
            !enquiryData.name.trim() ||
            !enquiryData.email.trim() ||
            !enquiryData.phone.trim() ||
            !enquiryData.city.trim()
        ) {
            alert("Please fill all fields before submitting.");
            return;
        }

        const message = `Enquiry -
Name: ${enquiryData.name}
Email: ${enquiryData.email}
Phone: ${enquiryData.phone}
Interested City: ${enquiryData.city}`;

        const encodedMessage = encodeURIComponent(message);
        const whatsappUrl = `https://wa.me/9297701142?text=${encodedMessage}`;

        const newWin = window.open(whatsappUrl, "_blank");
        if (newWin) newWin.opener = null;
        else window.location.href = whatsappUrl;

        setEnquiryData({ name: "", email: "", phone: "", city: "" });
    };

    return (
        <footer className="bg-black border-t border-white/10">
            {/* Enquiry Section */}
            <div className="border-b border-white/10 py-14 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">

                        {/* Form */}
                        <div>
                            <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">
                                Have a <span className="text-amber-500">Question?</span>
                            </h3>
                            <p className="text-gray-400 mb-6">
                                Fill out the form and our team will reach out with personalized guidance.
                            </p>

                            <form onSubmit={handleEnquirySubmit} className="space-y-4">
                                <input
                                    type="text"
                                    placeholder="Your Name"
                                    value={enquiryData.name}
                                    onChange={(e) =>
                                        setEnquiryData({ ...enquiryData, name: e.target.value })
                                    }
                                    className="w-full px-6 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-500 focus:border-amber-500 transition"
                                    required
                                />

                                <input
                                    type="email"
                                    placeholder="Your Email"
                                    value={enquiryData.email}
                                    onChange={(e) =>
                                        setEnquiryData({ ...enquiryData, email: e.target.value })
                                    }
                                    className="w-full px-6 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-500 focus:border-amber-500 transition"
                                    required
                                />

                                <input
                                    type="tel"
                                    placeholder="Your Phone"
                                    value={enquiryData.phone}
                                    onChange={(e) =>
                                        setEnquiryData({ ...enquiryData, phone: e.target.value })
                                    }
                                    className="w-full px-6 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-500 focus:border-amber-500 transition"
                                    required
                                />

                                <select
                                    value={enquiryData.city}
                                    onChange={(e) =>
                                        setEnquiryData({ ...enquiryData, city: e.target.value })
                                    }
                                    className="w-full px-6 py-3 bg-white text-black border border-white/20 rounded-lg focus:border-amber-500 transition"
                                    required
                                >
                                    <option value="" className="text-black">Select City</option>
                                    <option value="Sambalpur" className="text-black">Sambalpur</option>
                                    <option value="Bhubaneswar" className="text-black">Bhubaneswar</option>
                                    <option value="Burla" className="text-black">Burla</option>
                                </select>

                                <button
                                    type="submit"
                                    className="w-full px-8 py-3 bg-amber-500 text-black rounded-lg hover:bg-amber-600 transition-all duration-300 font-bold hover:scale-105"
                                >
                                    Send Enquiry
                                </button>
                            </form>
                        </div>

                        {/* Contact Info */}
                        <div className="space-y-6">
                            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                                Get In <span className="text-amber-500">Touch</span>
                            </h3>

                            {[
                                {
                                    icon: Phone,
                                    title: "Phone",
                                    value: "+91 9297701142",
                                    sub: "Available 9 AM - 9 PM",
                                    link: "tel:+919297701142",
                                },
                                {
                                    icon: Mail,
                                    title: "Email",
                                    value: "marketing@fortuneinfra.net.in",
                                    sub: "We reply within 24 hours",
                                    link: "mailto:marketing@fortuneinfra.net.in",
                                },
                                {
                                    icon: MapPin,
                                    title: "Address",
                                    value: "Fortune Elements, Beside Hotel Shiva Inn, High Ciurt Road, Parsada, Bilaspur (C.G.)",
                                    sub: "Main office location",
                                    link: "#",
                                },
                                {
                                    icon: Clock,
                                    title: "Working Hours",
                                    value: "Mon - Sat: 9 AM - 6 PM",
                                    sub: "Sunday: By appointment",
                                    link: "#",
                                },
                            ].map((item, index) => {
                                const Icon = item.icon;
                                return (
                                    <div key={index} className="flex gap-4 group">
                                        <div className="w-12 h-12 bg-amber-500/20 rounded-lg flex items-center justify-center group-hover:bg-amber-500/40 transition">
                                            <Icon className="text-amber-500" size={24} />
                                        </div>
                                        <div>
                                            <p className="text-gray-400 text-sm">{item.title}</p>
                                            <a
                                                href={item.link}
                                                className="text-white font-semibold hover:text-amber-500 transition"
                                            >
                                                {item.value}
                                            </a>
                                            <p className="text-gray-500 text-xs mt-1">{item.sub}</p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Footer */}
            <div className="py-12 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-10 mb-10">
                        
                        {/* BRAND + SOCIAL ICONS */}
                        <div>
                            <h3 className="text-white font-bold mb-3 flex items-center gap-2">
                                <div className="w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center">
                                    <span className="text-black font-bold text-sm">F</span>
                                </div>
                                <span>Fortune Elements</span>
                            </h3>
                            <p className="text-gray-400 text-sm mb-4">
                                Premium real estate solutions shaping dreams for over 18 years.
                            </p>

                            <div className="flex gap-3">

                                {/* DISABLED ICONS (NO POINTER, NO CLICK) */}
                                <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-gray-500 cursor-not-allowed">
                                    <Facebook size={18} />
                                </div>

                                {/* INSTAGRAM → pointer + clickable */}
                                <a
                                    href="https://www.instagram.com/fortune.elements?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-amber-500 hover:text-black cursor-pointer transition"
                                >
                                    <Instagram size={18} />
                                </a>

                                {/* DISABLED ICONS */}
                                <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-gray-500 cursor-not-allowed">
                                    <Twitter size={18} />
                                </div>

                                <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-gray-500 cursor-not-allowed">
                                    <Linkedin size={18} />
                                </div>
                            </div>
                        </div>

                        <div>
                            <h4 className="text-white font-semibold mb-5">Quick Links</h4>
                            <ul className="space-y-2 text-gray-400 text-sm">
                                {["Home", "Projects", "About Us", "Contact"].map((link) => (
                                    <li key={link}>
                                        <a
                                            href={`#${link.toLowerCase().replace(/\s+/g, "-")}`}
                                            className="hover:text-amber-500 transition"
                                        >
                                            {link}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <h4 className="text-white font-semibold mb-5">Services</h4>
                            <ul className="space-y-2 text-gray-400 text-sm">
                                {["Residential", "Commercial", "Consultation", "Design Services"].map(
                                    (service) => (
                                        <li
                                            key={service}
                                            className="hover:text-amber-500 cursor-pointer transition"
                                        >
                                            {service}
                                        </li>
                                    )
                                )}
                            </ul>
                        </div>

                        <div>
                            <h4 className="text-white font-semibold mb-5">Our Properties</h4>
                            <ul className="space-y-2 text-gray-400 text-sm">
                                {["Royal Residency", "Fortune Elements Prestige", "Fortune Elements Residency", "Fortune Elements Prime"].map(
                                    (prop) => (
                                        <li key={prop} className="hover:text-amber-500 cursor-pointer transition">
                                            {prop}
                                        </li>
                                    )
                                )}
                            </ul>
                        </div>

                        <div>
                            <h4 className="text-white font-semibold mb-5">Legal</h4>
                            <ul className="space-y-2 text-gray-400 text-sm">
                                {["Privacy Policy", "Terms of Service", "Cookie Policy", "Disclaimer"].map(
                                    (item) => (
                                        <li key={item}>
                                            <a href="#" className="hover:text-amber-500 transition">
                                                {item}
                                            </a>
                                        </li>
                                    )
                                )}
                            </ul>
                        </div>
                    </div>

                    <div className="border-t border-white/10 pt-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <p className="text-gray-400 text-sm">
                                &copy; 2006 - 2025 Fortune Elements Builders Pvt. Ltd. All rights reserved.
                            </p>

                            <div className="flex flex-col md:flex-row md:justify-end gap-4 text-sm">
                                <a href="#" className="text-gray-400 hover:text-amber-500 transition">
                                    Privacy Policy
                                </a>
                                <a href="#" className="text-gray-400 hover:text-amber-500 transition">
                                    Terms of Service
                                </a>
                                <a href="#" className="text-gray-400 hover:text-amber-500 transition">
                                    Site Map
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* WhatsApp CTA */}
            <div className="bg-linear-to-r from-amber-500/20 to-amber-500/10 border-t border-amber-500/20 py-5 px-4">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-white font-semibold">Need instant help? Chat with us on WhatsApp.</p>
                    <a
                        href="https://wa.me/9297701142"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-8 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition font-semibold hover:scale-105 flex items-center gap-2"
                    >
                        💬 Chat on WhatsApp
                    </a>
                </div>
            </div>
        </footer>
    );
}
