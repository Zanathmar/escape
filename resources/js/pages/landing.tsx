import { useState } from 'react';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import InfiniteScroll from '@/components/InfiniteScroll';
import RedStripe from '@/components/RedStripe';
import CollabSection from './components/CollabSection';
import ContactSection from './components/ContactSection';
import Hero from './components/HeroSection';
import PastEventSection from './components/PastEventSection';
import TalentsSection from './components/TalentsSection';
import TimelineSection from './components/TimelineSection';
import WatchSection from './components/WatchSection';

// Reusable Infinite Scroll Component

export default function Landing() {
    

    return (
        <div className="min-h-screen bg-black text-white">
            <Header />

            <Hero />

            <InfiniteScroll imageSrc="/images/escape.png" />

            <WatchSection />

            <InfiniteScroll imageSrc="/images/escape.png" />

            <TalentsSection />

            <TimelineSection />

            <CollabSection />
            
            <RedStripe />

            <PastEventSection />

            <ContactSection />
            
            <InfiniteScroll imageSrc="/images/escape.png" />
            
            <Footer />
        </div>
    );
}
