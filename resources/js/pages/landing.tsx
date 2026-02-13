import { useState } from 'react';

// Reusable Infinite Scroll Component
function InfiniteScroll({
    imageSrc,
    imageAlt = 'escape',
    gradientFrom = '#741E20',
    gradientTo = '#DA393C',
}: {
    imageSrc: string;
    imageAlt?: string;
    gradientFrom?: string;
    gradientTo?: string;
}) {
    return (
        <div
            className="relative overflow-hidden py-5"
            style={{
                background: `linear-gradient(to right, ${gradientFrom}, ${gradientTo})`,
            }}
        >
            <div className="animate-scroll-seamless flex">
                {/* First set */}
                {[...Array(10)].map((_, i) => (
                    <div key={`set1-${i}`} className="mx-10 inline-flex items-center flex-shrink-0">
                        <span className="block w-36 sm:w-48 lg:w-50">
                            <img
                                src={imageSrc}
                                alt={imageAlt}
                                className="h-auto w-full"
                            />
                        </span>
                    </div>
                ))}
                {/* Duplicate set for seamless loop */}
                {[...Array(10)].map((_, i) => (
                    <div key={`set2-${i}`} className="mx-10 inline-flex items-center flex-shrink-0">
                        <span className="block w-36 sm:w-48 lg:w-50">
                            <img
                                src={imageSrc}
                                alt={imageAlt}
                                className="h-auto w-full"
                            />
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
        {
            value: '3000+',
            label: 'Offline\nAttendance',
            icon: '/icons/attendance.svg',
        },
    ];

    const teamMembers = [
        {
            name: 'FELIX SIAUW',
            image: '/images/fs.png',
            gradientFrom: '#0B3D4C',
            gradientTo: '#198EB2',
        },
        {
            name: 'RAYMOND CHIN',
            image: '/images/rc.png',
            gradientFrom: '#852628',
            gradientTo: '#EB4447',
        },
        {
            name: 'KOIYO CABE',
            image: '/images/kc.png',
            gradientFrom: '#0B3D4C',
            gradientTo: '#198EB2',
        },
        {
            name: 'VEREN ORNELA',
            image: '/images/vo.png',
            gradientFrom: '#852628',
            gradientTo: '#EB4447',
        },
    ];

    const collaborators = [
        { image: '/images/people/1.png' },
        { image: '/images/people/2.png' },
        { image: '/images/people/3.png' },
        { image: '/images/people/4.png' },
        { image: '/images/people/5.png' },
        { image: '/images/people/6.png' },
        { image: '/images/people/7.png' },
        { image: '/images/people/8.png' },
        { image: '/images/people/9.png' },
        { image: '/images/people/10.png' },
        { image: '/images/people/11.png' },
        { image: '/images/people/12.png' },
        { image: '/images/people/13.png' },
        { image: '/images/people/14.png' },
       
    ];


    return (
        <div className="min-h-screen bg-black text-white">
            {/* Header */}
            <header className="fixed top-0 right-0 left-0 z-50 border-b border-gray-800 bg-black/90 backdrop-blur-md">
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
                        className="p-2 md:hidden"
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
                        <div className="space-y-1 px-6 pt-4 pb-6">
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
                    <div className="mx-auto max-w-3xl lg:mx-0 lg:mr-0 lg:ml-36">
                        <h1 className="mb-6 text-7xl leading-[1.1] font-bold tracking-tight text-white uppercase sm:text-7xl lg:text-7xl xl:text-7xl">
                            LOREM IPSUM IS
                            <br />
                            SIMPLY DUMMY TEXT
                        </h1>
                        <p className="mb-10 max-w-2xl text-base leading-relaxed text-gray-300 sm:text-lg lg:text-lg">
                            ESCAPE is a conversation-driven platform where
                            different minds meet — not to debate who's right,
                            but to understand why we think the way we do.
                        </p>

                        <a
                            href="#tickets"
                            className="inline-block rounded-lg bg-[#DA393C] px-7 py-4 text-base font-semibold text-white shadow-xl transition-all hover:scale-105 hover:bg-[#b52b2d] hover:shadow-2xl active:scale-95"
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
                                <div className="text-center text-sm font-medium whitespace-pre-line text-white md:text-base lg:text-lg">
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
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry. Lorem Ipsum has been
                                the industry's standard dummy text ever since
                                the 1500s, when an unknown printer took a galley
                                of type and scrambled it to make a type specimen
                                book.
                            </p>
                        </div>

                        {/* Watch Button */}
                        <div className="mt-8 flex justify-center md:mt-10">
                            <a
                                href="https://youtube.com/playlist?list=PLSNt1tjjz_ArTDv1jVMjhHlaHM51euDq0&si=OqVnRwGtmnPrz-S5"
                                className="inline-block rounded-lg bg-[#DA393C] px-8 py-3.5 text-base font-semibold text-white shadow-xl transition-all hover:scale-105 hover:bg-[#b52b2d] hover:shadow-2xl active:scale-95 md:px-10 md:py-4"
                            >
                                Watch Escape
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Bottom Infinite Scroll */}
            <InfiniteScroll imageSrc="/images/escape.png" />

            {/* Team Section */}
            <section className="bg-black py-16 md:py-24">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    {/* Section Title */}
                    <div className="mb-12 text-center md:mb-16">
                        <h2 className="text-4xl font-bold text-white uppercase md:text-5xl lg:text-6xl">
                            ESCAPE JOURNEY
                        </h2>
                    </div>

                    {/* Team Grid - No gaps between cards */}
                    <div className="grid grid-cols-2 md:grid-cols-4">
                        {teamMembers.map((member, index) => (
                            <div
                                key={index}
                                className="group relative overflow-hidden"
                                style={{
                                    background: `linear-gradient(to bottom, ${member.gradientFrom}, ${member.gradientTo})`,
                                }}
                            >
                                {/* Image */}
                                <div className="aspect-3/4 overflow-hidden">
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        className="h-full w-full object-cover"
                                    />
                                </div>
                                
                                {/* Blurred div that slides from bottom to top */}
                                <div className="absolute inset-0 translate-y-full transition-transform duration-500 ease-out group-hover:translate-y-[70%]">
                                    <div className="h-full w-full backdrop-blur-md"></div>
                                </div>

                                {/* Text overlay - always on top, not blurred */}
                                <div className="absolute translate-y-full transition-transform duration-500 ease-out group-hover:translate-y-0 -bottom-3 left-0 right-0 p-6 pb-8 z-10">
                                    <h3 className="text-2xl leading-tight font-bold text-white uppercase md:text-3xl lg:text-4xl">
                                        {member.name
                                            .split(' ')
                                            .map((word, i) => (
                                                <span key={i}>
                                                    {word}
                                                    {i < member.name.split(' ').length - 1 && <br />}
                                                </span>
                                            ))}
                                    </h3>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Timeline Section */}
                    <div className="mt-16 md:mt-24">
                        <div className="relative">
                            {/* Timeline container with proper width constraints */}
                            <div className="flex flex-nowrap relative">
                                {[...Array(5)].map((_, i) => {
                                    const isEven = i % 2 === 0;
                                    return (
                                        <div key={i} className="relative flex-1 min-w-0">
                                            {/* Grid container for timeline item */}
                                            <div className="grid grid-cols-1 grid-rows-2 h-full">
                                                {/* Empty space (top or bottom depending on even/odd) */}
                                                <div className={`${!isEven && 'order-1'} min-h-[100px]`}></div>
                                                
                                                {/* Content box - constrained to not overflow */}
                                                <div className='px-3 py-6 relative min-h-[200px]'>
                                                    <div className="max-w-full overflow-hidden">
                                                        <h3 className="mb-2 text-base font-bold text-white md:text-lg break-words">
                                                            Lorem Ipsum
                                                        </h3>
                                                        <p className="text-xs leading-relaxed text-gray-300 md:text-sm break-words overflow-wrap-anywhere">
                                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, ut!
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            
                                            {/* Dot - centered on the timeline */}
                                            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                                                <div className="size-6 rounded-full bg-red-500 border-2 border-white"></div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>

                            {/* Dashed Line - positioned behind dots */}
                            <div className='absolute left-0 right-0 top-1/2 -translate-y-1/2 z-0'>
                                <div className='border-t-2 border-white border-dashed w-full'></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

             {/* Collaborators Section */}
            <section className="bg-black py-16 md:py-24">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    {/* Infinite Scroll Brands */}
                    <div className="mb-12 overflow-hidden md:mb-16">
                        <div className="animate-scroll-seamless flex">
                            {/* First set of brands */}
                            {[...Array(5)].map((_, setIndex) => (
                                <div key={`brands-set1-${setIndex}`} className="flex flex-shrink-0">
                                    <div className="mx-8 flex items-center">
                                        <img src="/images/brand1.png" alt="" className="h-12 w-auto" />
                                    </div>
                                    <div className="mx-8 flex items-center">
                                        <img src="/images/brand2.png" alt="" className="h-10 " />
                                    </div>
                                    <div className="mx-8 flex items-center">
                                        <img src="/images/brand3.png" alt="" className="h-8 w-auto" />
                                    </div>
                                    <div className="mx-8 flex items-center">
                                        <img src="/images/brand4.png" alt="" className="h-14 w-auto" />
                                    </div>
                                </div>
                            ))}
                            {/* Duplicate set for seamless loop */}
                            {[...Array(5)].map((_, setIndex) => (
                                <div key={`brands-set2-${setIndex}`} className="flex flex-shrink-0">
                                    <div className="mx-8 flex items-center">
                                        <img src="/images/brand1.png" alt="" className="h-12 w-auto" />
                                    </div>
                                    <div className="mx-8 flex items-center">
                                        <img src="/images/brand2.png" alt="" className="h-10 " />
                                    </div>
                                    <div className="mx-8 flex items-center">
                                        <img src="/images/brand3.png" alt="" className="h-8 w-auto" />
                                    </div>
                                    <div className="mx-8 flex items-center">
                                        <img src="/images/brand4.png" alt="" className="h-14 w-auto" />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Collaborators Grid */}
                    <div className="grid grid-cols-7 gap-4 md:gap-6">
                        {collaborators.map((collab, index) => (
                            <div key={index} className="aspect-square overflow-hidden rounded-2xl bg-gray-800">
                                <img
                                    src={collab.image}
                                    alt=""
                                    className="h-full w-full object-cover grayscale"
                                />
                            </div>
                        ))}
                    </div>

                    {/* Section Title */}
                    <div className="mt-12 text-center md:mt-16">
                        <h2 className="text-3xl font-bold text-white uppercase md:text-4xl lg:text-5xl">
                            BRAND AND PEOPLE COLLABORATE WITH US
                        </h2>
                    </div>
                </div>
            </section>
            

            <style>{`
                @keyframes scroll-seamless {
                    0% {
                        transform: translateX(0);
                    }
                    100% {
                        transform: translateX(-50%);
                    }
                }

                .animate-scroll-seamless {
                    animation: scroll-seamless 30s linear infinite;
                }

                .animate-scroll-seamless:hover {
                    animation-play-state: paused;
                }
                
                .overflow-wrap-anywhere {
                    overflow-wrap: anywhere;
                }
            `}</style>
        </div>
    );
}