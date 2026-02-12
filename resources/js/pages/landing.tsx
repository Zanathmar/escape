import { useState } from 'react';

// Reusable Infinite Scroll Component
function InfiniteScroll({ imageSrc, imageAlt = "escape", gradientFrom = "#741E20", gradientTo = "#DA393C" }: { 
    imageSrc: string; 
    imageAlt?: string;
    gradientFrom?: string;
    gradientTo?: string;
}) {
    return (
        <div 
            className="relative overflow-hidden py-5"
            style={{
                background: `linear-gradient(to right, ${gradientFrom}, ${gradientTo})`
            }}
        >
            <div className="flex w-max animate-scroll">
                {[...Array(9)].map((_, i) => (
                    <div key={i} className="mx-10 inline-flex items-center">
                        <span className="block w-36 sm:w-48 lg:w-50">
                            <img src={imageSrc} alt={imageAlt} className="w-full h-auto" />
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default function Landing() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const stats = [
        { value: '300M+', label: 'Views', icon: '/icons/views.svg' },
        { value: '3M+', label: 'Subscriber', icon: '/icons/subscribers.svg' },
        { value: '30+', label: 'Episode', icon: '/icons/episodes.svg' },
        { value: '3000+', label: 'Offline\nAttendance', icon: '/icons/attendance.svg' }
    ];

    return (
        <div className="min-h-screen bg-black text-white">
            {/* Header */}
            <header className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md border-b border-gray-800">
                <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
                    {/* Logo */}
                    <div className="flex items-center">
                        <div className="flex h-12 w-12 items-center justify-center">
                            <img src="/images/escape_logo.png" alt="" />
                        </div>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden items-center gap-12 md:flex">
                        <a
                            href="#home"
                            className="text-sm font-medium text-white transition-colors hover:text-gray-400"
                        >
                            Home
                        </a>
                        <a
                            href="#about"
                            className="text-sm font-medium text-white transition-colors hover:text-gray-400"
                        >
                            About Us
                        </a>
                        <a
                            href="#event"
                            className="text-sm font-medium text-white transition-colors hover:text-gray-400"
                        >
                            Event
                        </a>
                        <a
                            href="#pricing"
                            className="text-sm font-medium text-white transition-colors hover:text-gray-400"
                        >
                            Pricing
                        </a>
                    </div>

                    {/* Get Ticket Button - Desktop */}
                    <div className="hidden md:block">
                        <a
                            href="#tickets"
                            className="rounded-md bg-white px-6 py-2.5 text-sm font-semibold text-black transition-all hover:bg-gray-200 hover:shadow-lg"
                        >
                            Get Ticket
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="md:hidden p-2"
                        aria-label="Toggle menu"
                    >
                        <svg
                            className="h-6 w-6"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            {isMenuOpen ? (
                                <path d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </nav>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="border-t border-gray-800 bg-black/95 md:hidden">
                        <div className="space-y-1 px-6 pb-6 pt-4">
                            <a
                                href="#home"
                                className="block rounded-lg px-3 py-2 text-base font-medium text-white hover:bg-gray-900"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Home
                            </a>
                            <a
                                href="#about"
                                className="block rounded-lg px-3 py-2 text-base font-medium text-white hover:bg-gray-900"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                About Us
                            </a>
                            <a
                                href="#event"
                                className="block rounded-lg px-3 py-2 text-base font-medium text-white hover:bg-gray-900"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Event
                            </a>
                            <a
                                href="#pricing"
                                className="block rounded-lg px-3 py-2 text-base font-medium text-white hover:bg-gray-900"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Pricing
                            </a>
                            <a
                                href="#tickets"
                                className="mt-4 block rounded-lg bg-white px-3 py-2.5 text-center text-base font-semibold text-black hover:bg-gray-200"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Get Ticket
                            </a>
                        </div>
                    </div>
                )}
            </header>

            {/* Hero Section */}
            <section className="relative min-h-screen pt-20">
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                    <img 
                        src="/images/hero.png" 
                        alt="Event background" 
                        className="h-full w-full object-cover"
                    />
                    {/* Overlay for better text readability */}
                    <div className="absolute inset-0 bg-black/40" />
                </div>

                {/* Hero Content */}
                <div className="relative z-10 mx-auto flex min-h-[calc(100vh-5rem)] max-w-7xl items-center px-6 py-20 lg:px-8">
                    <div className="max-w-3xl mx-auto lg:mx-0 lg:ml-36 lg:mr-0">
                        <h1 className="mb-6 text-7xl font-bold uppercase leading-[1.1] tracking-tight text-white sm:text-7xl lg:text-7xl xl:text-7xl">
                            LOREM IPSUM IS
                            <br />
                            SIMPLY DUMMY TEXT
                        </h1>
                        <p className="mb-10 max-w-2xl text-base leading-relaxed text-gray-300 sm:text-lg lg:text-lg">
                            ESCAPE is a conversation-driven platform where different minds meet — not to
                            debate who's right, but to understand why we think the way we do.
                        </p>
                        
                        <a 
                            href="#tickets"
                            className="inline-block rounded-lg bg-[#DA393C] px-7 py-4 text-base font-semibold text-white shadow-xl transition-all hover:bg-[#b52b2d] hover:shadow-2xl hover:scale-105 active:scale-95"
                        >
                            Get Ticket!
                        </a>
                    </div>
                </div>
            </section>

            {/* Infinite Scroll Animation */}
            <InfiniteScroll imageSrc="/images/escape.png" />

            {/* Stats Section */}
            <section className="bg-black py-16 md:py-24">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    {/* Stats Grid */}
                    <div className="grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-8">
                        {stats.map((stat, index) => (
                            <div 
                                key={index}
                                className="flex flex-col items-center justify-center"
                            >
                                {/* Icon Image */}
                                <div className="mb-4 flex h-24 w-24 items-center justify-center rounded-2xl bg-[#F5F5DC] p-4 md:h-28 md:w-28 md:p-5 lg:h-32 lg:w-32 lg:p-6">
                                    <img 
                                        src={stat.icon} 
                                        alt={`${stat.label} icon`}
                                        className="h-full w-full object-contain"
                                    />
                                </div>
                                
                                {/* Stat Value */}
                                <div className="mb-2 text-4xl font-bold text-white md:text-5xl lg:text-6xl">
                                    {stat.value}
                                </div>
                                
                                {/* Stat Label */}
                                <div className="text-center text-sm font-medium text-white md:text-base lg:text-lg whitespace-pre-line">
                                    {stat.label}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Lorem Ipsum Heading */}
                    <div className="mt-16 text-center md:mt-20">
                        <h2 className="text-4xl font-bold text-white md:text-5xl lg:text-6xl">
                            Lorem Ipsum
                        </h2>
                    </div>

                    {/* Video Section */}
                    <div className="mt-12 md:mt-16">
                        {/* Video Container - maintaining aspect ratio */}
                        <div className="relative mx-auto max-w-4xl">
                            <div className="relative aspect-video overflow-hidden rounded-2xl bg-gray-900">
                                {/* YouTube Embed */}
                                <iframe 
                                    className="h-full w-full"
                                    src="https://www.youtube.com/embed/uNzwo8l4P40?si=0MqMnA777mraRSrX" 
                                    title="YouTube video player" 
                                    frameBorder="0" 
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                                    referrerPolicy="strict-origin-when-cross-origin" 
                                    allowFullScreen
                                />
                            </div>
                        </div>

                        {/* Description Text */}
                        <div className="mx-auto mt-8 max-w-3xl text-center">
                            <p className="text-sm leading-relaxed text-gray-300 md:text-base lg:text-lg">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the 
                                industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type 
                                and scrambled it to make a type specimen book.
                            </p>
                        </div>

                        {/* Watch Button */}
                        <div className="mt-8 flex justify-center md:mt-10">
                            <a 
                                href="https://youtube.com/playlist?list=PLSNt1tjjz_ArTDv1jVMjhHlaHM51euDq0&si=OqVnRwGtmnPrz-S5"
                                className="inline-block rounded-lg bg-[#DA393C] px-8 py-3.5 text-base font-semibold text-white shadow-xl transition-all hover:bg-[#b52b2d] hover:shadow-2xl hover:scale-105 active:scale-95 md:px-10 md:py-4"
                            >
                                Watch Escape
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Bottom Infinite Scroll */}
            <InfiniteScroll imageSrc="/images/escape.png" />

            <style>{`
                @keyframes scroll {
                    0% {
                        transform: translateX(0);
                    }
                    100% {
                        transform: translateX(-50%);
                    }
                }

                .animate-scroll {
                    animation: scroll 30s linear infinite;
                }

                .animate-scroll:hover {
                    animation-play-state: paused;
                }
            `}</style>
        </div>
    );
}