import { useState } from "react";

export default function Contact() {
    const [email, setEmail] = useState("");

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        alert("Form submitted!");
    };

    return (
        <section id="contact" className="p-8 md:p-16 bg-gray-50">
            <div className="flex flex-col md:flex-row gap-12 container mx-auto">
                
                <form
                    onSubmit={handleSubmit}
                    className="order-1 md:order-1 flex-1 flex flex-col gap-4 bg-white border border-gray-200 rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow duration-300"
                >
                    <h1 className="text-xl font-semibold mb-2">Send Message</h1>

                    <label className="input-label flex flex-col gap-1">
                        Name
                        <input
                            required
                            type="text"
                            name="name"
                            autoComplete="name"
                            className="border border-gray-300 rounded-lg p-2 focus:border-blue-600 focus:ring-1 focus:ring-blue-600 outline-none transition duration-200"
                        />
                    </label>

                    <label className="input-label flex flex-col gap-1">
                        Email*
                        <input
                            required
                            type="email"
                            name="email"
                            autoComplete="email"
                            className="border border-gray-300 rounded-lg p-2 focus:border-blue-600 focus:ring-1 focus:ring-blue-600 outline-none transition duration-200"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </label>

                    <label className="flex flex-col gap-1">
                        Message
                        <textarea
                            name="message"
                            placeholder="How can we help?"
                            className="placeholder-gray-400 border h-20 border-gray-300 rounded-lg p-2 focus:border-blue-600 focus:ring-1 focus:ring-blue-600 outline-none transition duration-200"
                        />
                    </label>

                    <button
                        type="submit"
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white text-base md:text-lg font-semibold px-6 py-3 rounded-2xl transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                        disabled={!email.trim()}
                    >
                        Send
                    </button>
                </form>

                <div className="order-2 md:order-2 flex-1 flex flex-col gap-8">
                {/* Header */}
                <div>
                    <h2 className="small-heading tracking-widest">
                        Call or Visit
                    </h2>
                    <h3 className="text-2xl font-bold text-dark mt-1">
                        Marci Metzger — The Ridge Realty Group
                    </h3>
                </div>

                {/* Info Section */}
                <div className="flex flex-col gap-4 text-gray-700">
                    <div>
                        <h4 className="text-sm font-semibold text-dark uppercase">Address</h4>
                        <p className="mt-1">
                            3190 HW-160, Suite F, Pahrump, Nevada 89048, United States
                        </p>
                    </div>

                    <div>
                        <h4 className="text-sm font-semibold text-dark uppercase">Phone</h4>
                        <a
                            href="tel:12069196886"
                            className="mt-1 inline-block text-blue-600 font-medium hover:underline"
                        >
                            (206) 919-6886
                        </a>
                    </div>

                    <div>
                        <h4 className="text-sm font-semibold text-dark uppercase">
                            Office Hours
                        </h4>
                        <p className="mt-1">
                            Open daily — 8:00 am – 7:00 pm
                            <br />
                            <small className="text-gray-500">
                                Appointments outside office hours available upon request. Just call!
                            </small>
                        </p>
                    </div>
                </div>

                {/* Divider */}
                <hr className="border-gray-200" />

                {/* CTA Buttons */}
                <div className="flex flex-wrap gap-4 cursor-pointer">
                    <a
                        href="tel:12069196886"
                        className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-full transition-all duration-200 shadow-sm hover:shadow-md"
                    >
                        Call Now
                    </a>

                    <button
                        type="button"
                        rel="noopener noreferrer"
                        className="border border-gray-300 text-gray-700 hover:border-blue-600 hover:text-blue-600 font-medium px-6 py-3 rounded-full transition-all duration-200"
                    >
                        Message on WhatsApp
                    </button>
                </div>
                </div>
            </div>
        </section>
    );
}
