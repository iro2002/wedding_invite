import React, { useState, useEffect } from 'react';
import bgImage from '../assets/poruwa.jpg';

const Charithra = ({ lang = 'si', onBack }) => {
  const [isVisible, setIsVisible] = useState(false);

  // Trigger entrance animations on mount
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const text = {
    si: {
      title: "මංගල චාරිත්‍ර",
      subtitle: "අපගේ විශේෂ දිනයේ සටහන",
      backBtn: "ආපසු",
    },
    en: {
      title: "Wedding Itinerary",
      subtitle: "The flow of our special day",
      backBtn: "Back",
    }
  };

  const t = text[lang];

  // Traditional timeline events
  const timeline = {
    si: [
      { time: "පෙ.ව. 08:30", title: "අමුත්තන් පිළිගැනීම", desc: "ගාලු මුවදොර හෝටලයේදී" },
      { time: "පෙ.ව. 09:00", title: "පෝරුවේ චාරිත්‍ර", desc: "සුබ නැකතින් පෝරුවට නැගීම" },
      { time: "පෙ.ව. 10:15", title: "විවාහ ලියාපදිංචිය", desc: "නීත්‍යානුකූලව අත්සන් තැබීම" },
      { time: "ප.ව. 12:30", title: "දිවා භෝජන සංග්‍රහය", desc: "ආදරණීයයන් සමඟින් දිවා ආහාරය" },
      { time: "ප.ව. 03:30", title: "පිටත්ව යාම", desc: "නව ජීවිතයක ඇරඹුම" }
    ],
    en: [
      { time: "08:30 AM", title: "Welcome & Arrival", desc: "At The Galle Face Hotel" },
      { time: "09:00 AM", title: "Poruwa Ceremony", desc: "Traditional rituals begin" },
      { time: "10:15 AM", title: "Registration", desc: "Signing of the marriage register" },
      { time: "12:30 PM", title: "Wedding Reception", desc: "Lunch and celebrations" },
      { time: "03:30 PM", title: "Going Away", desc: "Beginning of a new chapter" }
    ]
  };

  const currentTimeline = timeline[lang];

  return (
    <div className="min-h-[100dvh] w-full bg-[#E5E7EB] flex flex-col items-center justify-center py-10 px-2 sm:p-4 md:p-8 font-serif relative">

      {/* Main Card Container */}
      <div
        className={`relative w-full max-w-xl min-h-[850px] h-auto overflow-hidden rounded-lg shadow-2xl flex flex-col transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >

        {/* Frosted Glass Overlay */}
        <div className="absolute inset-0 bg-[#FAFAF8]/10 backdrop-blur-sm z-0"></div>

        {/* Header Section */}
        <div className="pt-10 pb-6 px-6 md:pt-14 md:pb-8 text-center shrink-0 relative z-20 bg-gradient-to-b from-[#FAFAF8]/80 to-transparent">
          {/* Decorative Top Arch */}
          <div className="w-16 h-8 mx-auto border-t border-l border-r border-[#D4AF37]/80 rounded-t-full mb-4"></div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl text-[#0B132B] mb-2 font-light tracking-wide drop-shadow-sm" style={{ fontFamily: 'Playfair Display, serif' }}>
            {t.title}
          </h1>
          <p className="text-[#D4AF37] font-semibold text-[10px] md:text-xs uppercase tracking-[0.2em]">{t.subtitle}</p>
        </div>

        {/* Timeline Section */}
        <div className="w-full flex-1 px-6 md:px-12 pb-24 relative z-10">

          <div className="relative max-w-sm mx-auto mt-4">
            {/* The Vertical Golden Line */}
            <div className="absolute left-[15px] md:left-[19px] top-4 bottom-4 w-[1px] bg-gradient-to-b from-[#D4AF37]/20 via-[#D4AF37] to-[#D4AF37]/20"></div>

            {/* Timeline Items */}
            <div className="space-y-8 md:space-y-12">
              {currentTimeline.map((item, index) => (
                <div
                  key={index}
                  className="timeline-item flex items-start opacity-0"
                  style={{ animationDelay: `${0.3 + (index * 0.2)}s` }}
                >
                  {/* Timeline Node/Dot */}
                  <div className="relative shrink-0 w-8 h-8 md:w-10 md:h-10 flex items-center justify-center mt-0.5">
                    <div className="absolute inset-0 bg-[#D4AF37]/20 rounded-full animate-pulse-slow"></div>
                    <div className="w-2.5 h-2.5 md:w-3 md:h-3 bg-[#D4AF37] rounded-full border-2 border-[#FAFAF8] shadow-sm relative z-10"></div>
                  </div>

                  {/* Timeline Content */}
                  <div className="ml-4 md:ml-6 flex-1 pt-1 md:pt-2">
                    <span className="inline-block px-2 py-0.5 border border-[#D4AF37]/40 text-[#D4AF37] text-[9px] md:text-[10px] uppercase tracking-widest rounded-sm mb-2">
                      {item.time}
                    </span>
                    <h3 className="text-lg md:text-xl text-[#0B132B] font-medium mb-1 drop-shadow-sm" style={{ fontFamily: 'Playfair Display, serif' }}>
                      {item.title}
                    </h3>
                    <p className="text-gray-500 text-xs md:text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Decoration */}
          <div className="w-12 h-[1px] bg-[#D4AF37]/50 mx-auto mt-12 md:mt-16"></div>
        </div>

        {/* Floating Back Button (To return to main invite) */}
        {onBack && (
          <button
            onClick={onBack}
            className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 px-6 py-2.5 bg-[#0B132B]/90 backdrop-blur text-[#D4AF37] text-[10px] md:text-xs uppercase tracking-[0.2em] rounded-full border border-[#D4AF37]/30 shadow-lg hover:bg-[#152042] hover:scale-105 transition-all duration-300"
          >
            {t.backBtn}
          </button>
        )}

        {/* Elegant Background Watermark (Initials) */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[#D4AF37] opacity-[0.03] text-[250px] md:text-[350px] font-serif pointer-events-none select-none overflow-hidden" style={{ fontFamily: 'Playfair Display, serif', lineHeight: '1' }}>
          A&N
        </div>

      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;1,400&display=swap');
        
        /* Entrance animation for the timeline items */
        @keyframes slideInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .timeline-item {
          animation: slideInUp 0.6s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
        }

        /* Subtle glow pulse for the nodes */
        @keyframes pulseSlow {
          0%, 100% { transform: scale(1); opacity: 0.5; }
          50% { transform: scale(1.3); opacity: 0.8; }
        }
        .animate-pulse-slow {
          animation: pulseSlow 3s ease-in-out infinite;
        }

        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}} />
    </div>
  );
};

export default Charithra;