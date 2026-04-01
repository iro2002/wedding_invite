import React, { useState, useEffect } from 'react';

const Location = ({ lang = 'si', onBack }) => {
  const [isVisible, setIsVisible] = useState(false);

  // Trigger entrance animations on mount
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const text = {
    si: {
      title: "",
      subtitle: "",
      hotel: "The Galle Face Hotel",
      address: "No 2, Galle Road, Colombo 03",
      country: "Sri Lanka",
      mapBtn: "සිතියම බලන්න",
      backBtn: "ආපසු",
    },
    en: {
      title: "The Venue",
      subtitle: "Where we tie the knot",
      hotel: "The Galle Face Hotel",
      address: "No 2, Galle Road, Colombo 03",
      country: "Sri Lanka",
      mapBtn: "Open in Google Maps",
      backBtn: "Back",
    }
  };

  const t = text[lang];

  // Google Maps directions link
  const mapsLink = "https://maps.app.goo.gl/YourMapLinkHere"; // Replace with actual shortlink if needed
  // Google Maps Embed URL
  const mapEmbedUrl = "https://maps.google.com/maps?q=Galle%20Face%20Hotel,%20Colombo&t=&z=16&ie=UTF8&iwloc=&output=embed";

  return (
    <div className="min-h-[100dvh] w-full bg-[#E5E7EB] flex flex-col items-center justify-center py-10 px-2 sm:p-4 md:p-8 font-serif relative">

      {/* Main Card Container */}
      <div className={`relative w-full max-w-xl min-h-[850px] h-auto overflow-hidden rounded-lg bg-[#FAFAF8] shadow-2xl flex flex-col transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>

        {/* Header Section */}
        <div className="pt-10 pb-4 px-6 md:pt-14 md:pb-6 text-center shrink-0 relative z-20">
          <div className="w-16 h-8 mx-auto border-t border-l border-r border-[#D4AF37]/50 rounded-t-full mb-4"></div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl text-[#0B132B] mb-2 font-light tracking-wide" style={{ fontFamily: 'Playfair Display, serif' }}>
            {t.title}
          </h1>
          <p className="text-[#D4AF37] text-[10px] md:text-xs uppercase tracking-[0.2em]">{t.subtitle}</p>
        </div>

        {/* Content Section */}
        <div className="flex-1 flex flex-col items-center justify-start px-6 md:px-12 pb-24 relative z-10 w-full">

          {/* Animated Location Pin */}
          <div className="relative w-12 h-12 md:w-16 md:h-16 mb-4 mt-2 shrink-0">
            <div className="absolute inset-0 bg-[#D4AF37]/20 rounded-full animate-ping-slow"></div>
            <div className="absolute inset-2 bg-[#D4AF37]/40 rounded-full animate-pulse"></div>
            <svg className="absolute inset-0 w-full h-full text-[#0B132B] drop-shadow-md p-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
            </svg>
          </div>

          {/* Address Details */}
          <div className="text-center mb-6 md:mb-8 w-full shrink-0">
            <h2 className="text-xl md:text-2xl text-[#0B132B] font-medium mb-1" style={{ fontFamily: 'Playfair Display, serif' }}>{t.hotel}</h2>
            <p className="text-gray-600 text-xs md:text-sm tracking-wide leading-relaxed">
              {t.address} <br /> {t.country}
            </p>
          </div>

          {/* Elegant Map Frame */}
          <div className="w-full max-w-sm h-48 md:h-64 rounded-t-full border-t-2 border-l-2 border-r-2 border-b border-[#D4AF37] p-1.5 md:p-2 mb-6 md:mb-8 relative shrink-0 shadow-inner bg-white">
            <div className="w-full h-full rounded-t-full overflow-hidden relative grayscale-[30%] contrast-125 sepia-[20%] opacity-90 transition-all duration-500 hover:grayscale-0 hover:sepia-0 hover:opacity-100">
              <iframe
                src={mapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Wedding Venue Map"
                className="absolute inset-0 pointer-events-none sm:pointer-events-auto" // Disables map interaction on mobile to allow smooth page scrolling
              ></iframe>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col gap-3 w-full max-w-[280px] md:max-w-sm shrink-0">
            <a
              href={mapsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 md:py-3.5 bg-[#D4AF37] text-white text-center hover:bg-[#c49f2d] transition-all duration-300 uppercase tracking-[0.15em] md:tracking-[0.2em] text-[10px] md:text-xs rounded-sm shadow-md flex items-center justify-center gap-2 hover:scale-[1.02]"
            >
              <svg className="w-3.5 h-3.5 md:w-4 md:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
              {t.mapBtn}
            </a>
          </div>

        </div>

        {/* Floating Back Button */}
        {onBack && (
          <button
            onClick={onBack}
            className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 px-6 py-2.5 bg-[#0B132B]/90 backdrop-blur text-[#D4AF37] text-[10px] md:text-xs uppercase tracking-[0.2em] rounded-full border border-[#D4AF37]/30 shadow-lg hover:bg-[#152042] hover:scale-105 transition-all duration-300 flex items-center gap-2"
          >
            <svg className="w-3 h-3 md:w-3.5 md:h-3.5 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
            {t.backBtn}
          </button>
        )}

        {/* Elegant Background Watermark */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[#D4AF37] opacity-[0.03] text-[250px] md:text-[350px] font-serif pointer-events-none select-none overflow-hidden" style={{ fontFamily: 'Playfair Display, serif', lineHeight: '1' }}>
          A&N
        </div>

      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;1,400&display=swap');
        
        @keyframes pingSlow {
          0% { transform: scale(1); opacity: 0.8; }
          75%, 100% { transform: scale(2); opacity: 0; }
        }
        .animate-ping-slow {
          animation: pingSlow 2.5s cubic-bezier(0, 0, 0.2, 1) infinite;
        }

        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}} />
    </div>
  );
};

export default Location;