import React, { useState, useEffect, useRef, useMemo } from 'react';
import backgroundMusic from '../assets/Lights(chosic.com).mp3';

const WeddingInvite = ({ lang = 'si', setLang }) => {
  const currentLang = lang;
  const [isOpen, setIsOpen] = useState(false);
  const [showRsvp, setShowRsvp] = useState(false);
  const [rsvpStatus, setRsvpStatus] = useState('idle');
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [isPlaying, setIsPlaying] = useState(false);

  const audioRef = useRef(null);
  const weddingDate = new Date('2026-04-19T09:00:00').getTime();

  const text = {
    si: {
      together: "දෙමව්පියන්ගේ ආශිර්වාදය සමඟින්,",
      request: "විවාහ මංගල්‍යයට සහභාගී වන මෙන් ගෞරවයෙන් ආරාධනා කරමු",
      days: "දින", hours: "පැය", mins: "මිනිත්තු", secs: "තත්පර",
      ceremony: "පෝරුවේ චාරිත්‍ර",
      date: "2026 අප්‍රේල් 19 • පෙ.ව. 9:00",
      hotel: "Galle Face Hotel",
      address: "No 2, Galle Road, Colombo 03, Sri Lanka",
      rsvpBtn: "කරුණාකර පැමිණීම තහවුරු කරන්න",
      rsvpThanks: "ස්තූතියි! ඔබගේ පැමිණීම අපි ආදරයෙන් බලාපොරොත්තු වෙමු.",
      namePlaceholder: "සම්පූර්ණ නම",
      guest1: "එක් අයෙක් සහභාගී වේ",
      guest2: "දෙදෙනෙක් සහභාගී වේ",
      decline: "සහභාගී වීමට නොහැක",
      send: "යවන්න",
      open: "Open",
      and: "සහ"
    },
    en: {
      together: "Together with their families",
      request: "Request the honor of your presence to celebrate their union",
      days: "days", hours: "hours", mins: "minutes", secs: "seconds",
      ceremony: "The Poruwa Ceremony",
      date: "April 19, 2026 • 9:00 AM",
      hotel: "The Galle Face Hotel",
      address: "No 2, Galle Road, Colombo 03, Sri Lanka",
      rsvpBtn: "Kindly RSVP",
      rsvpThanks: "Thank you! We can't wait to see you.",
      namePlaceholder: "Full Name(s)",
      guest1: "1 Guest attending",
      guest2: "2 Guests attending",
      decline: "Regretfully Decline",
      send: "Send",
      open: "Open",
      and: "&"
    }
  };

  const t = text[currentLang];

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = weddingDate - now;

      if (distance < 0) {
        clearInterval(timer);
      } else {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        });
      }
    }, 1000);
    return () => clearInterval(timer);
  }, [weddingDate]);

  const handleRsvpSubmit = (e) => {
    e.preventDefault();
    setRsvpStatus('submitting');
    setTimeout(() => {
      setRsvpStatus('success');
    }, 1500);
  };

  const handleOpenInvitation = () => {
    setIsOpen(true);
    // Audio MUST be played immediately inside the user interaction event (onClick)
    if (audioRef.current) {
      audioRef.current.play()
        .then(() => setIsPlaying(true))
        .catch(err => console.log("Audio playback was prevented:", err));
    }
  };

  const toggleAudio = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleLanguage = () => {
    if (setLang) setLang(lang === 'si' ? 'en' : 'si');
  };

  // Generate randomized petals for the animation (only created once per load)
  const petals = useMemo(() => {
    return Array.from({ length: 25 }).map((_, i) => ({
      id: i,
      left: Math.random() * 100, // Random horizontal start position
      delay: Math.random() * 5, // Random start delay
      duration: 6 + Math.random() * 6, // Random fall speed (6-12s)
      sway: (Math.random() - 0.5) * 150, // Horizontal sway distance
      rotation: Math.random() * 360, // Final rotation angle
      scale: 0.5 + Math.random() * 0.8 // Random size
    }));
  }, []);

  return (
    // 'overflow-hidden' on the main screen wrapper ensures no native browser scrolling happens, guaranteeing a single-screen feel.
    <div className="h-[100dvh] w-full bg-[#E5E7EB] flex flex-col items-center justify-center p-2 sm:p-4 md:p-8 font-serif relative overflow-hidden">

      {/* Audio Element */}
      <audio ref={audioRef} loop>
        <source src={backgroundMusic} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>

      {/* Responsive Container */}
      <div className="relative w-full max-w-xl h-full md:h-[850px] overflow-hidden rounded-lg bg-[#FAFAF8] shadow-2xl">

        {/* --- FLOWER DROP ANIMATION LAYER --- */}
        {isOpen && (
          <div className="absolute inset-0 pointer-events-none z-25 overflow-hidden">
            {petals.map((p) => (
              <div
                key={p.id}
                className="petal absolute text-[#D4AF37]/60 drop-shadow-sm"
                style={{
                  left: `${p.left}%`,
                  animationDelay: `${p.delay}s`,
                  animationDuration: `${p.duration}s`,
                  '--sway': `${p.sway}px`,
                  '--rotation': `${p.rotation}deg`,
                  transform: `scale(${p.scale})`
                }}
              >
                {/* Elegant Minimalist Petal SVG */}
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C12 2 14.5 7 18 8C21.5 9 22 12 22 12C22 12 18 13.5 15 17C12 20.5 12 22 12 22C12 22 9.5 17 6 16C2.5 15 2 12 2 12C2 12 6 10.5 9 7C12 3.5 12 2 12 2Z" />
                </svg>
              </div>
            ))}
          </div>
        )}

        {/* Floating Language Button (Kept top-left) */}
        <button
          onClick={toggleLanguage}
          className={`absolute top-4 left-4 md:top-5 md:left-5 z-40 p-2 w-10 h-10 flex items-center justify-center rounded-full bg-[#FAFAF8]/70 backdrop-blur border border-[#D4AF37] text-[#0B132B] font-sans font-bold text-xs transition-all duration-1000 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
          aria-label="Toggle language"
        >
          {lang === 'si' ? 'EN' : 'සිං'}
        </button>

        {/* Floating Audio Button (Kept top-right) */}
        <button
          onClick={toggleAudio}
          className={`absolute top-4 right-4 md:top-5 md:right-5 z-40 p-2 w-10 h-10 flex items-center justify-center rounded-full bg-[#FAFAF8]/70 backdrop-blur border border-[#D4AF37] text-[#0B132B] transition-all duration-1000 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
          aria-label="Toggle music"
        >
          {isPlaying ? (
            <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19V6l12-3v13M9 19c-1.105 0-2-.895-2-2s.895-2 2-2 2 .895 2 2-.895 2-2 2zm12-3c-1.105 0-2-.895-2-2s.895-2 2-2 2 .895 2 2-.895 2-2 2zM9 10l12-3"></path></svg>
          ) : (
            <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" clipRule="evenodd"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2"></path></svg>
          )}
        </button>

        {/* Inner Card Content */}
        <div className={`absolute inset-0 flex flex-col items-center justify-start p-6 pt-10 md:p-12 overflow-y-auto no-scrollbar transition-opacity duration-1000 delay-500 z-10 ${isOpen ? 'opacity-100' : 'opacity-0'}`}>

          {/* Elegant Arched Image Frame */}
          <div className="w-32 h-40 md:w-48 md:h-56 shrink-0 rounded-t-full border-t-2 border-l-2 border-r-2 border-[#D4AF37] p-1.5 md:p-2 mb-4 md:mb-8 bg-white/50 backdrop-blur-sm relative z-30">
            <img
              src="https://raketcontent.com/The_wedding_logo_2_62bf74177b.png"
              alt="Couple"
              className="w-full h-full object-cover rounded-t-full bg-[#f3f1eb]"
            />
          </div>

          <div className="text-center w-full shrink-0 relative z-30">
            <p className="text-[#D4AF37] tracking-[0.2em] md:tracking-[0.25em] text-[9px] md:text-xs uppercase mb-4 md:mb-6">{t.together}</p>

            <h1 className="text-4xl sm:text-5xl md:text-6xl text-[#0B132B] mb-1 md:mb-2 font-light drop-shadow-sm" style={{ fontFamily: 'Playfair Display, serif' }}>
              Amila
            </h1>
            <span className={`text-xl sm:text-2xl text-[#D4AF37] italic block ${currentLang === 'si' ? 'text-base font-sans' : ''}`}>{t.and}</span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl text-[#0B132B] mt-1 md:mt-2 mb-4 md:mb-6 font-light drop-shadow-sm" style={{ fontFamily: 'Playfair Display, serif' }}>
              Nethmi
            </h1>

            <p className="text-gray-500 text-xs sm:text-sm md:text-base mb-6 md:mb-8 max-w-[280px] md:max-w-xs mx-auto leading-relaxed">{t.request}</p>
          </div>

          {/* Minimalist Countdown */}
          <div className="flex justify-center items-center gap-2 sm:gap-4 my-2 md:my-4 w-full max-w-sm shrink-0 relative z-30">
            {[
              { label: t.days, value: timeLeft.days },
              { label: t.hours, value: timeLeft.hours },
              { label: t.mins, value: timeLeft.minutes },
              { label: t.secs, value: timeLeft.seconds }
            ].map((item, idx) => (
              <React.Fragment key={idx}>
                <div className="flex flex-col items-center w-12 sm:w-16">
                  <span className="text-2xl sm:text-3xl text-[#0B132B] font-light">{item.value}</span>
                  <span className="text-[8px] md:text-[9px] uppercase tracking-widest text-[#D4AF37] mt-1 text-center w-full truncate">{item.label}</span>
                </div>
                {idx < 3 && <div className="h-6 sm:h-8 w-[1px] bg-[#D4AF37]/30"></div>}
              </React.Fragment>
            ))}
          </div>

          <div className="w-12 md:w-16 h-[1px] bg-[#D4AF37] my-6 md:my-10 mx-auto shrink-0 relative z-30"></div>

          <div className="text-center space-y-4 md:space-y-6 w-full mb-8 md:mb-10 shrink-0 relative z-30">
            <div>
              <h3 className="text-base sm:text-lg md:text-xl font-medium text-[#0B132B] tracking-wide mb-1 md:mb-2">{t.ceremony}</h3>
              <p className="text-gray-600 text-xs sm:text-sm uppercase tracking-[0.1em] md:tracking-[0.15em]">{t.date}</p>
            </div>
            <div>
              <h3 className="text-base sm:text-lg md:text-xl font-medium text-[#0B132B] tracking-wide mb-1 md:mb-2">{t.hotel}</h3>
              <p className="text-gray-500 text-xs sm:text-sm">{t.address}</p>
            </div>
          </div>

          {/* RSVP Section */}
          <div className="w-full max-w-[280px] md:max-w-sm mb-12 shrink-0 relative z-30">
            {!showRsvp ? (
              <button
                onClick={() => setShowRsvp(true)}
                className="w-full py-3 md:py-4 bg-[#0B132B] text-[#D4AF37] hover:bg-[#152042] transition-colors uppercase tracking-[0.15em] md:tracking-[0.2em] text-[10px] md:text-xs rounded-sm shadow-md"
              >
                {t.rsvpBtn}
              </button>
            ) : rsvpStatus === 'success' ? (
              <div className="text-center py-5 md:py-6 border border-[#D4AF37]/30 bg-[#D4AF37]/5 rounded-sm animate-fade-in backdrop-blur-sm">
                <p className="text-[#0B132B] text-sm md:text-base font-medium tracking-wide">{t.rsvpThanks}</p>
              </div>
            ) : (
              <form onSubmit={handleRsvpSubmit} className="space-y-4 animate-fade-in text-left border border-[#D4AF37]/30 p-5 md:p-6 rounded-sm bg-white/90 backdrop-blur-sm shadow-sm">
                <input required type="text" placeholder={t.namePlaceholder} className="w-full px-0 py-2 text-xs md:text-sm bg-transparent border-b border-gray-300 focus:outline-none focus:border-[#D4AF37] placeholder-gray-400" />
                <select className="w-full px-0 py-2 text-xs md:text-sm bg-transparent border-b border-gray-300 focus:outline-none focus:border-[#D4AF37] text-gray-700">
                  <option value="1">{t.guest1}</option>
                  <option value="2">{t.guest2}</option>
                  <option value="0">{t.decline}</option>
                </select>
                <button type="submit" disabled={rsvpStatus === 'submitting'} className="w-full py-2.5 md:py-3 mt-2 md:mt-4 bg-[#D4AF37] text-white text-[10px] md:text-xs uppercase tracking-[0.15em] md:tracking-[0.2em] hover:bg-[#c49f2d] transition-colors rounded-sm">
                  {rsvpStatus === 'submitting' ? '...' : t.send}
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Top & Bottom Envelope Flap Cover */}
        <div className="absolute inset-0 pointer-events-none flex flex-col z-40">
          <div className={`w-full h-1/2 bg-[#0B132B] border-b border-[#D4AF37]/20 transition-transform duration-1000 ease-in-out origin-top pointer-events-auto flex items-end justify-center pb-1 ${isOpen ? '-translate-y-full' : 'translate-y-0'}`}>
            <div className="absolute inset-x-2 top-2 bottom-0 border-t border-x border-[#D4AF37]/20"></div>
          </div>

          <div className={`w-full h-1/2 bg-[#0B132B] border-t border-[#D4AF37]/20 transition-transform duration-1000 ease-in-out origin-bottom pointer-events-auto flex items-start justify-center pt-1 ${isOpen ? 'translate-y-full' : 'translate-y-0'}`}>
            <div className="absolute inset-x-2 bottom-2 top-0 border-b border-x border-[#D4AF37]/20"></div>
          </div>
        </div>

        {/* Diamond Center Seal */}
        <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 transition-all duration-700 pointer-events-auto ${isOpen ? 'scale-0 opacity-0' : 'scale-100 opacity-100 delay-300'}`}>
          <button
            onClick={handleOpenInvitation}
            className="w-20 h-20 md:w-24 md:h-24 bg-gradient-to-br from-[#FCEabb] to-[#f8b500] rotate-45 flex items-center justify-center cursor-pointer transition-transform hover:scale-110 active:scale-95 shadow-xl group"
            style={{
              background: 'linear-gradient(135deg, #E6C280 0%, #D4AF37 50%, #B38F24 100%)'
            }}
          >
            <div className="absolute inset-1 border border-[#0B132B]/30"></div>
            <div className="-rotate-45 flex flex-col items-center justify-center mt-1">
              <span className="text-[#0B132B] text-xl md:text-2xl mb-0.5 md:mb-1" style={{ fontFamily: 'Playfair Display, serif' }}>A<span className="text-sm md:text-lg italic mx-0.5">&</span>N</span>
              <span className="text-[7px] md:text-[8px] uppercase tracking-[0.15em] md:tracking-[0.2em] text-[#0B132B] font-sans font-bold opacity-80">{t.open}</span>
            </div>
          </button>
        </div>

      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;1,400&display=swap');
        
        @keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
        .animate-fade-in { animation: fadeIn 0.5s ease-out forwards; }
        
        /* Flower Animation Keyframes */
        @keyframes fall {
          0% {
            transform: translateY(-10vh) translateX(0) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          80% {
            opacity: 0.8;
          }
          100% {
            transform: translateY(100vh) translateX(var(--sway)) rotate(var(--rotation));
            opacity: 0;
          }
        }
        
        .petal {
          top: -10%;
          animation: fall linear infinite;
        }

        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}} />
    </div>
  );
};

export default WeddingInvite;