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
                    <div
                        key={`set1-${i}`}
                        className="mx-10 inline-flex flex-shrink-0 items-center"
                    >
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
                    <div
                        key={`set2-${i}`}
                        className="mx-10 inline-flex flex-shrink-0 items-center"
                    >
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

    const timelineData = [
        {
            date: '24 NOV 2024',
            title: 'RAYMOND CHIN X FELIX SIAUW',
            description:
                'Raymond yang dikenal kritis mempertanyakan agama Islam hingga belajar logika Islam langsung bersama Ustadz Felix.',
        },
        {
            date: '17 FEB 2025',
            title: 'ESCAPE',
            description:
                'Bari keredahan dan pertengkaran audience yang dengan negarapra. sedikit nama ESCAPE sebagai nama untuk yang lebih teraksis.',
        },
        {
            date: '1 MARCH 2025',
            title: 'ESCAPE PODCAST RAMADHAN',
            description:
                'ESCAPE hadir sebagai podcast Ramadan yang bertermasuk mengodili, keserluatan, pebealaren, dengan format unik bersama Raymond, Ustadz Felix, Koi, dan Yeven.',
        },
        {
            date: '4 MAY 2025',
            title: 'ESCAPE LIVE PODCAST MEDAN',
            description:
                'Perjalanan ibu membawa ESCAPE ke Medan lewat live podcast bersama RUMAH TAHFIDZ.',
        },
        {
            date: '20 SEPT 2025',
            title: 'ESCAPE LIVE PODCAST BANDUNG',
            description:
                'Setelah sukses di Medan, ESCAPE merealisakan live podcast di Bandung dengan tema CEO.',
        },
        {
            date: '23 NOV 2025',
            title: 'ESCAPE JAPAN: 少しずつ',
            description:
                'Sesuai harapan Yeven, perjalanan berlanjut ke Jepang untuk mencarimakna little by little.',
        },
        {
            date: '29 NOV 2025',
            title: 'ESCAPE LIVE PODCAST JAKARTA',
            description:
                'Menyatu seluruh ESCAPE merealisikan seluruh perjalanan dalam live podcast Jakarta bersama ADDINU.',
        },
    ];

    return (
        <div className="min-h-screen bg-black text-white">
            {/* Header */}
            <header className="sticky top-0 right-0 left-0 z-50 border-b border-gray-800 bg-black/90 backdrop-blur-md">
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
            <section className="bg-black relative">
                {/* bg */}
                <div className='absolute inset-0 z-0'></div>
                {/* content hero */}
                <div className="mx-auto flex max-w-7xl flex-col z-9999999999">
                    <div className="flex flex-col md:flex-row min-h-screen w-full bg-yellow-500/50">
                        <div className="font-sheepman flex-1 bg-cyan-400/40 min-h-screen"></div>
                        <div className="flex-1 bg-green-500/50 px-12 py-8">
                            <div className="h-96 w-full rounded-4xl bg-white/50">
                                card
                            </div>
                        </div>
                    </div>

                    {/* infinite gambear */}
                    <div className="h-64 w-full bg-blue-500/50"></div>
                </div>
                {/* Background Image */}
                {/* <div className="absolute inset-0 z-0">
                    <img
                        src="/images/hero.jpeg"
                        alt="Event background"
                        className="w-full object-contain"
                    />
                    
                </div> */}

                {/* Hero Content
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
                </div> */}
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
            <section className="bg-black py-5 md:py-8">
                <div className="mx-auto max-w-7xl px-0 lg:px-0">
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
                                    <div className="h-full w-full rounded-t-2xl backdrop-blur-md"></div>
                                </div>

                                {/* Text overlay - always on top, not blurred */}
                                <div className="absolute right-0 -bottom-3 left-0 z-10 translate-y-full p-6 pb-8 transition-transform duration-500 ease-out group-hover:translate-y-0">
                                    <h3 className="text-2xl leading-tight font-bold text-white uppercase md:text-3xl lg:text-4xl">
                                        {member.name
                                            .split(' ')
                                            .map((word, i) => (
                                                <span key={i}>
                                                    {word}
                                                    {i <
                                                        member.name.split(' ')
                                                            .length -
                                                            1 && <br />}
                                                </span>
                                            ))}
                                    </h3>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Timeline Section */}
                    <div className="my-24 text-center">
                        <h2 className="mb-20 text-4xl font-bold text-white uppercase md:text-5xl lg:text-6xl">
                            ESCAPE JOURNEY
                        </h2>
                    </div>
                    <section className="relative mt-24 overflow-hidden bg-black py-32">
                        {/* Container */}
                        <div className="mx-auto max-w-7xl px-6 lg:px-8">
                            {/* Title */}

                            <div className="relative px-4 md:px-8">
                                {/* Timeline Line - Extended to full width */}
                                <div className="absolute top-1/2 right-0 left-0 ml-[calc(-50vw+50%)] w-screen -translate-y-1/2">
                                    <div className="w-full border-t-2 border-dashed border-white/40"></div>
                                </div>

                                {/* Timeline Items */}
                                <div className="relative flex justify-between">
                                    {timelineData.map((item, i) => {
                                        const isTop = i % 2 === 0; // 0, 2, 4, 6 on top; 1, 3, 5 on bottom

                                        return (
                                            <div
                                                key={i}
                                                className="relative flex min-h-[260px] flex-1 justify-center"
                                            >
                                                {/* DOT */}
                                                <div className="absolute top-1/2 left-1/2 z-10 -translate-x-1/2 -translate-y-1/2">
                                                    <div className="size-6 rounded-full border-2 border-white bg-red-500 shadow-lg"></div>
                                                </div>

                                                {/* CONTENT */}
                                                <div
                                                    className={`absolute left-1/2 -translate-x-1/2 px-4 ${
                                                        isTop
                                                            ? 'top-0 mt-16 -translate-y-full pb-0 text-left'
                                                            : 'bottom-0 mb-16 translate-y-full pt-0 text-left'
                                                    }`}
                                                >
                                                    <div className="w-[200px] md:w-[240px] lg:w-[260px]">
                                                        <p className="mb-2 text-[11px] text-gray-400">
                                                            {item.date}
                                                        </p>

                                                        <h3 className="mb-3 text-sm leading-tight font-bold text-white uppercase md:text-base lg:text-xl">
                                                            {item.title}
                                                        </h3>

                                                        <p className="text-[10px] leading-relaxed font-light text-gray-300 md:text-xs">
                                                            {item.description}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        );
                                    })}

                                    {/* Final Item - 2026 */}
                                    <div className="relative flex min-h-[260px] flex-1 justify-center">
                                        <div className="absolute top-1/2 left-1/2 z-10 -translate-x-1/2 -translate-y-1/2">
                                            <div className="size-6 rounded-full border-2 border-white bg-red-500 shadow-lg"></div>
                                        </div>

                                        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1 pt-0 text-left">
                                            <h3 className="text-xl font-bold text-white md:text-2xl">
                                                2026?
                                            </h3>
                                            <p className="text-xs font-bold text-white md:text-xs">
                                                STAY TUNED!
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
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
                                <div
                                    key={`brands-set1-${setIndex}`}
                                    className="flex flex-shrink-0"
                                >
                                    <div className="mx-8 flex items-center">
                                        <img
                                            src="/images/brand1.png"
                                            alt=""
                                            className="h-12 w-auto"
                                        />
                                    </div>
                                    <div className="mx-8 flex items-center">
                                        <img
                                            src="/images/brand2.png"
                                            alt=""
                                            className="h-10"
                                        />
                                    </div>
                                    <div className="mx-8 flex items-center">
                                        <img
                                            src="/images/brand3.png"
                                            alt=""
                                            className="h-8 w-auto"
                                        />
                                    </div>
                                    <div className="mx-8 flex items-center">
                                        <img
                                            src="/images/brand4.png"
                                            alt=""
                                            className="h-14 w-auto"
                                        />
                                    </div>
                                </div>
                            ))}
                            {/* Duplicate set for seamless loop */}
                            {[...Array(5)].map((_, setIndex) => (
                                <div
                                    key={`brands-set2-${setIndex}`}
                                    className="flex flex-shrink-0"
                                >
                                    <div className="mx-8 flex items-center">
                                        <img
                                            src="/images/brand1.png"
                                            alt=""
                                            className="h-12 w-auto"
                                        />
                                    </div>
                                    <div className="mx-8 flex items-center">
                                        <img
                                            src="/images/brand2.png"
                                            alt=""
                                            className="h-10"
                                        />
                                    </div>
                                    <div className="mx-8 flex items-center">
                                        <img
                                            src="/images/brand3.png"
                                            alt=""
                                            className="h-8 w-auto"
                                        />
                                    </div>
                                    <div className="mx-8 flex items-center">
                                        <img
                                            src="/images/brand4.png"
                                            alt=""
                                            className="h-14 w-auto"
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Collaborators Grid */}
                    <div className="grid grid-cols-7 gap-4 md:gap-6">
                        {collaborators.map((collab, index) => (
                            <div
                                key={index}
                                className="aspect-square overflow-hidden rounded-2xl bg-gray-800"
                            >
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

            {/* Red Gradient Stripe with Icons */}
            <div className="relative overflow-hidden bg-linear-to-r from-[#741E20] to-[#DA393C] py-2 md:py-2">
                <div className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-8">
                    {/* Left Icons */}
                    <div className="flex items-center gap-8 md:gap-12 lg:gap-16">
                        <div className="flex h-16 w-16 items-center justify-center md:h-20 md:w-20 lg:h-20 lg:w-20">
                            <img
                                src="/icons/Group.png"
                                alt=""
                                className="h-full w-full object-contain"
                            />
                        </div>
                        <div className="hidden h-16 w-16 items-center justify-center md:flex md:h-20 md:w-20 lg:h-20 lg:w-20">
                            <img
                                src="/icons/20 26.png"
                                alt=""
                                className="h-full w-full object-contain"
                            />
                        </div>
                        <div className="hidden h-16 w-16 items-center justify-center md:h-20 md:w-20 lg:flex lg:h-20 lg:w-20">
                            <img
                                src="/icons/Vector.png"
                                alt=""
                                className="h-full w-full object-contain"
                            />
                        </div>
                    </div>

                    {/* Center Text */}
                    <div className="text-center">
                        <h2 className="text-base font-normal text-white md:text-lg lg:text-xl">
                            <span className="font-bold">ESCAPE 2026:</span>
                            <br />
                            LATERAL THINKING
                        </h2>
                    </div>

                    {/* Right Icons */}
                    <div className="flex items-center gap-8 md:gap-12 lg:gap-16">
                        <div className="hidden h-16 w-16 items-center justify-center md:h-20 md:w-20 lg:flex lg:h-20 lg:w-20">
                            <img
                                src="/icons/Vector.png"
                                alt=""
                                className="h-full w-full object-contain"
                            />
                        </div>
                        <div className="hidden h-16 w-16 items-center justify-center md:flex md:h-20 md:w-20 lg:h-20 lg:w-20">
                            <img
                                src="/icons/ESC.png"
                                alt=""
                                className="h-full w-full object-contain"
                            />
                        </div>
                        <div className="flex h-16 w-16 items-center justify-center md:h-20 md:w-20 lg:h-20 lg:w-20">
                            <img
                                src="/icons/Group.png"
                                alt=""
                                className="h-full w-full object-contain"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Past Event Section */}
            <section className="bg-black py-16 md:py-24">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    {/* Section Title */}
                    <div className="mb-12 text-center md:mb-16">
                        <h2 className="text-4xl font-bold text-white uppercase md:text-5xl lg:text-6xl">
                            Past Event
                        </h2>
                    </div>

                    {/* Event Cards Grid */}
                    <div className="grid grid-cols-1 gap-1 md:grid-cols-3 md:gap-0">
                        {/* Medan Card */}
                        <div className="relative overflow-hidden rounded-3xl">
                            <div className="aspect-[4/3] overflow-hidden">
                                <img
                                    src="/images/mdn.png"
                                    alt="Medan Event"
                                    className="h-full w-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                            </div>

                            <div className="absolute right-0 bottom-0 left-0 p-6">
                                <div className="flex items-end justify-between">
                                    <div>
                                        <p className="mb-1 text-[10px] font-medium tracking-wider text-gray-300 uppercase md:text-xs">
                                            Rumah Tangga
                                        </p>
                                        <h3 className="text-2xl font-bold text-white uppercase md:text-3xl lg:text-4xl">
                                            Medan
                                        </h3>
                                    </div>
                                    <div className="text-right">
                                        <span className="block text-xl font-bold text-white md:text-2xl">
                                            800+
                                        </span>
                                        <span className="text-[10px] text-gray-300 uppercase md:text-xs">
                                            Attendees
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Bandung Card */}
                        <div className="relative overflow-hidden rounded-3xl">
                            <div className="aspect-[4/3] overflow-hidden">
                                <img
                                    src="/images/bdg.png"
                                    alt="Bandung Event"
                                    className="h-full w-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                            </div>

                            <div className="absolute right-0 bottom-0 left-0 p-6">
                                <div className="flex items-end justify-between">
                                    <div>
                                        <p className="mb-1 text-[10px] font-medium tracking-wider text-gray-300 uppercase md:text-xs">
                                            Rumah Tangga
                                        </p>
                                        <h3 className="text-2xl font-bold text-white uppercase md:text-3xl lg:text-4xl">
                                            Bandung
                                        </h3>
                                    </div>
                                    <div className="text-right">
                                        <span className="block text-xl font-bold text-white md:text-2xl">
                                            1000+
                                        </span>
                                        <span className="text-[10px] text-gray-300 uppercase md:text-xs">
                                            Attendees
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Jakarta Card */}
                        <div className="relative overflow-hidden rounded-3xl">
                            <div className="aspect-[4/3] overflow-hidden">
                                <img
                                    src="/images/jkt.png"
                                    alt="Jakarta Event"
                                    className="h-full w-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                            </div>

                            <div className="absolute right-0 bottom-0 left-0 p-6">
                                <div className="flex items-end justify-between">
                                    <div>
                                        <p className="mb-1 text-[10px] font-medium tracking-wider text-gray-300 uppercase md:text-xs">
                                            Rumah Tangga
                                        </p>
                                        <h3 className="text-2xl font-bold text-white uppercase md:text-3xl lg:text-4xl">
                                            Jakarta
                                        </h3>
                                    </div>
                                    <div className="text-right">
                                        <span className="block text-xl font-bold text-white md:text-2xl">
                                            1200+
                                        </span>
                                        <span className="text-[10px] text-gray-300 uppercase md:text-xs">
                                            Attendees
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Testimonial Section */}
                    <div className="mt-16 overflow-hidden md:mt-24">
                        <div className="flex-row-1 flex gap-0 lg:grid-cols-2 lg:gap-0">
                            {/* Left Column - Text Content */}
                            <div className="ml-8 flex basis-lg flex-col justify-start">
                                <h3 className="mb-6 text-3xl font-bold text-white md:text-4xl lg:text-5xl">
                                    What they say
                                    <br />
                                    about us!
                                </h3>

                                <p className="text-sm leading-relaxed text-gray-300 md:text-base lg:text-sm">
                                    Mayoritas audience menilai kekuatan ESCAPE
                                    ada pada chemistry yang solid, obrolan
                                    longkrongan yang natural namun tetap kritis
                                    dan berisi, interaksi serta quiz/games yang
                                    melibatkan penonton, serta ambience yang
                                    aman, fun, dan tidak menghakimi sehingga
                                    insight terasa dalam tapi tetap ringan dan
                                    menghibur.
                                </p>
                            </div>

                            {/* Right Column - Grid of 3 Images */}
                            <div className="ml-12 grid basis-3xl grid-cols-3 items-start gap-0">
                                <div className="mt-4">
                                    <div className="">
                                        <div className="h-14 w-52 -translate-x-12 translate-y-56 rounded-sm bg-[#2C2C2C] text-xs">
                                            <p className="items-center px-2 py-1 text-xs">
                                                “Obrolannya kayak tongkrongan
                                                gituu, lucu sama spontan tapi
                                                tetep dalem dan bikin mikir.”
                                            </p>
                                        </div>
                                        <img
                                            src="/images/rectangle1.png"
                                            alt="Testimonial 1"
                                            className="aspect-square h-full w-full object-cover"
                                        />
                                    </div>
                                    <div className="mb-6">
                                        <svg
                                            className="h-16 w-16 -translate-x-10 -translate-y-62 text-white md:h-20 md:w-20"
                                            fill="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
                                        </svg>
                                    </div>
                                </div>
                                <div className="">
                                    <div className="h-18 w-58 -translate-x-12 translate-y-8 rounded-sm bg-[#2C2C2C] text-xs">
                                        <p className="items-center px-2 py-1 text-xs">
                                            “segmen kaya ngobrol dipanggung sama
                                            sesi platinum tuh bikin berasa di
                                            dalem tongkrongan mereka bangetttt”
                                        </p>
                                    </div>

                                    <img
                                        src="/images/rectangle3.png"
                                        alt="Testimonial 2"
                                        className="aspect-square h-full w-full object-cover"
                                    />
                                </div>
                                <div className="">
                                    <div className="h-14 w-52 -translate-x-12 translate-y-56 rounded-sm bg-[#2C2C2C] text-xs">
                                        <p className="items-center px-2 py-1 text-xs">
                                            “jujurr escape itu hidup banget
                                            gara-gara chemistry 4 orang itu,
                                            gacorrrr parahhh!”
                                        </p>
                                    </div>
                                    <img
                                        src="/images/rectangle2.png"
                                        alt="Testimonial 3"
                                        className="aspect-square h-full w-full object-contain"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Collaboration CTA Section */}
            <section className="bg-[#050505] py-16 md:py-24">
                <div className="mx-18 max-w-7xl px-6 lg:px-8">
                    <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
                        {/* Left Column - Text Content */}
                        <div className="max-w-2xl">
                            <h2 className="mb-4 text-5xl leading-tight font-bold text-white uppercase md:text-6xl lg:text-5xl">
                                Have an interesting
                                <br />
                                question about
                                <br />
                                <span className="text-[#DA393C]">
                                    Collaboration?
                                </span>
                            </h2>

                            <p className="mb-8 text-base font-normal text-gray-300 md:text-sm">
                                Buat kalian yang mau kolaborasi bareng kita,
                                langsung aja
                                <br />
                                kirim proposal kolaborasinya ke sini!
                            </p>

                            <button className="rounded-lg bg-[#DA393C] px-12 py-4 text-base font-bold text-white uppercase transition-colors duration-300 hover:bg-[#bc3133]">
                                Contact Us!
                            </button>
                        </div>

                        {/* Right Column - Phone Mockup */}
                        <div className="relative flex justify-center lg:justify-end">
                            <img
                                src="images/KartuLuar.png"
                                alt=""
                                className="w-100"
                            />
                        </div>
                    </div>
                </div>
            </section>
            {/* Infinite Scroll Animation */}
            <InfiniteScroll imageSrc="/images/escape.png" />
            {/* Footer Section */}
            <footer className="bg-black py-12 md:py-16">
                <div className="mx-30 max-w-7xl px-6 lg:px-8">
                    <div className="flex flex-col gap-8 lg:flex-row lg:gap-12">
                        {/* Left Column - Logo and Description */}
                        <div className="flex-none space-y-4 lg:basis-80">
                            <div className="flex h-9 w-3/4 items-center justify-start">
                                <img
                                    src="/images/escape.png"
                                    alt="Escape Logo"
                                    className="mr-20 h-full w-full object-contain"
                                />
                            </div>
                            <p className="text-xs leading-relaxed text-gray-400">
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry. Lorem Ipsum has been
                                the industry's standard dummy text ever since
                                the 1500s.
                            </p>

                            {/* Social Media Icons */}
                            <div className="flex items-center gap-4 pt-2">
                                <a
                                    href="https://instagram.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-400 transition-colors hover:text-white"
                                    aria-label="Instagram"
                                >
                                    <svg
                                        className="h-5 w-5"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                    </svg>
                                </a>

                                <a
                                    href="https://youtube.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-400 transition-colors hover:text-white"
                                    aria-label="YouTube"
                                >
                                    <svg
                                        className="h-5 w-5"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                                    </svg>
                                </a>

                                <a
                                    href="https://tiktok.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-400 transition-colors hover:text-white"
                                    aria-label="TikTok"
                                >
                                    <svg
                                        className="h-5 w-5"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                                    </svg>
                                </a>

                                <a
                                    href="https://twitter.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-400 transition-colors hover:text-white"
                                    aria-label="Twitter/X"
                                >
                                    <svg
                                        className="h-5 w-5"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                                    </svg>
                                </a>
                            </div>
                        </div>

                        {/* Information Links */}
                        <div className="flex-none lg:basis-40">
                            <h3 className="mb-4 text-base font-bold text-white">
                                Information
                            </h3>
                            <ul className="space-y-3">
                                <li>
                                    <a
                                        href="#home"
                                        className="text-sm text-gray-400 transition-colors hover:text-white"
                                    >
                                        Home
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#about"
                                        className="text-sm text-gray-400 transition-colors hover:text-white"
                                    >
                                        About Us
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#event"
                                        className="text-sm text-gray-400 transition-colors hover:text-white"
                                    >
                                        our works
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#pricing"
                                        className="text-sm text-gray-400 transition-colors hover:text-white"
                                    >
                                        pricing
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#contact"
                                        className="text-sm text-gray-400 transition-colors hover:text-white"
                                    >
                                        contact
                                    </a>
                                </li>
                            </ul>
                        </div>

                        {/* Network Links */}
                        <div className="flex-none lg:basis-40">
                            <h3 className="mb-4 text-base font-bold text-white">
                                Network
                            </h3>
                            <ul className="space-y-3">
                                <li>
                                    <a
                                        href="https://instagram.com"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-sm text-gray-400 transition-colors hover:text-white"
                                    >
                                        instagram
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="https://tiktok.com"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-sm text-gray-400 transition-colors hover:text-white"
                                    >
                                        tiktok
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="https://shopee.com"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-sm text-gray-400 transition-colors hover:text-white"
                                    >
                                        Shopee
                                    </a>
                                </li>
                            </ul>
                        </div>

                        {/* Email Section */}
                        <div className="flex-1">
                            <h3 className="mb-4 text-xs font-bold text-white">
                                Email escape:
                            </h3>
                            <a
                                href="mailto:escape@gmail.com"
                                className="text-sm text-gray-400 transition-colors hover:text-white"
                            >
                                escape@gmail.com
                            </a>
                            <p className="mt-4 text-xs leading-relaxed text-gray-400">
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry. Lorem Ipsum has been
                                the industry's standard dummy text ever since
                                the 1500s.
                            </p>
                        </div>
                    </div>

                    {/* Copyright */}
                    <div className="mt-12 border-t border-white pt-6 text-center">
                        <p className="text-xs text-gray-500">
                            Copyright © 2026 Escape. All rights reserved.
                        </p>
                    </div>
                </div>
            </footer>

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
