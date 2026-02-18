import { useState } from 'react';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Hero from './components/HeroSection';
import WatchSection from './components/WatchSection';
import TalentsSection from './components/TalentsSection';
import CollabSection from './components/CollabSection';
import RedStripe from '@/components/RedStripe';
import PastEventSection from './components/PastEventSection';
import ContactSection from './components/ContactSection';
import InfiniteScroll from '@/components/InfiniteScroll';
import TimelineSection from './components/TimelineSection';

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
