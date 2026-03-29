import React, { useState, useEffect, useRef } from 'react';
import backgroundMusic from '../assets/Lights(chosic.com).mp3';

const WeddingInvite = ({ lang = 'si' }) => {
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
      request: "ඔවුන්ගේ විවාහ මංගල්‍යයට සහභාගී වන මෙන් ගෞරවයෙන් ආරාධනා කරමු",
      days: "දින", hours: "පැය", mins: "මිනිත්තු", secs: "තත්පර",
      ceremony: "පෝරුවේ චාරිත්‍ර",
      date: "2026 අප්‍රේල් 19 • පෙ.ව. 9:00",
      hotel: "ගෝල් ෆේස් හෝටලය",
      address: "නො. 2, ගාලු පාර, කොළඹ 03, ශ්‍රී ලංකාව",
      rsvpBtn: "කරුණාකර පැමිණීම තහවුරු කරන්න",
      rsvpThanks: "ස්තූතියි! ඔබගේ පැමිණීම අපි ආදරයෙන් බලාපොරොත්තු වෙමු.",
      namePlaceholder: "සම්පූර්ණ නම",
      guest1: "එක් අයෙක් සහභාගී වේ",
      guest2: "දෙදෙනෙක් සහභාගී වේ",
      decline: "සහභාගී වීමට නොහැක",
      send: "යවන්න",
      open: "විවෘත කරන්න",
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

  const t = text[lang];

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

  return (
    <div className="min-h-screen bg-stone-100 flex flex-col items-center justify-center p-4 md:p-8 font-serif relative w-full pt-20 md:pt-8">

      <audio ref={audioRef} loop>
        <source src={backgroundMusic} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>

      {/* 1. Removed shadow-2xl from container */}
      <div className="relative max-w-xl w-full h-[850px] overflow-hidden rounded-sm bg-[#FDFBF7]">

        {/* 2. Removed shadow-sm from audio button */}
        <button
          onClick={toggleAudio}
          className={`absolute top-4 right-4 z-30 p-2 rounded-full bg-white/50 backdrop-blur border border-amber-200 text-[#11322A] transition-all duration-1000 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
          aria-label="Toggle music"
        >
          {isPlaying ? (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5 10v4a2 2 0 002 2h2.586l3.707 3.707A1 1 0 0015 19V5a1 1 0 00-1.707-.707L9.586 8H7a2 2 0 00-2 2z"></path></svg>
          ) : (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" clipRule="evenodd"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2"></path></svg>
          )}
        </button>

        <div className={`absolute inset-0 flex flex-col items-center justify-between p-10 md:p-14 border-[12px] border-[#FDFBF7] outline outline-1 outline-amber-200 transition-opacity duration-1000 delay-300 ${isOpen ? 'opacity-100' : 'opacity-0'}`}>

          <div className="text-center w-full">
            <p className="text-amber-600 tracking-[0.2em] text-xs uppercase mb-6">{t.together}</p>

            {/* 3. Removed shadow-md from image container */}
            <div className="mx-auto w-32 h-32 md:w-36 md:h-36 mb-6 rounded-full p-1 border border-amber-300">
              <img
                src="https://img.pikbest.com/png-images/20240918/vector-character-of-beautiful-wedding-couple-holding-a-bouquet_10675248.png!sw800"
                alt="Kasun and Sanduni"
                className="w-full h-full object-cover rounded-full"
              />
            </div>

            <h1 className="text-5xl md:text-6xl text-[#11322A] mb-4" style={{ fontFamily: 'Georgia, serif' }}>
              Kasun <br />
              <span className={`text-3xl text-amber-500 italic my-1 block ${lang === 'si' ? 'text-lg font-sans' : ''}`}>{t.and}</span>
              Sanduni
            </h1>
            <p className="text-gray-500 italic text-sm md:text-base">{t.request}</p>
          </div>

          <div className="flex justify-center gap-6 my-4 border-y border-amber-200 py-4 w-full">
            <div className="flex flex-col items-center">
              <span className="text-2xl font-light text-[#11322A]">{timeLeft.days}</span>
              <span className="text-[10px] uppercase tracking-widest text-amber-600">{t.days}</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-2xl font-light text-[#11322A]">{timeLeft.hours}</span>
              <span className="text-[10px] uppercase tracking-widest text-amber-600">{t.hours}</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-2xl font-light text-[#11322A]">{timeLeft.minutes}</span>
              <span className="text-[10px] uppercase tracking-widest text-amber-600">{t.mins}</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-2xl font-light text-[#11322A]">{timeLeft.seconds}</span>
              <span className="text-[10px] uppercase tracking-widest text-amber-600">{t.secs}</span>
            </div>
          </div>

          <div className="text-center space-y-4 w-full">
            <div>
              <h3 className="text-lg md:text-xl font-medium text-[#11322A] mb-1">{t.ceremony}</h3>
              <p className="text-gray-600 text-sm uppercase tracking-widest">{t.date}</p>
            </div>
            <div>
              <h3 className="text-lg md:text-xl font-medium text-[#11322A] mb-1">{t.hotel}</h3>
              <p className="text-gray-500 text-xs">{t.address}</p>
            </div>
          </div>

          <div className="w-full mt-6">
            {!showRsvp ? (
              <button
                onClick={() => setShowRsvp(true)}
                className={`w-full py-3 border border-[#11322A] text-[#11322A] hover:bg-[#11322A] hover:text-white transition-colors uppercase tracking-widest ${lang === 'si' ? 'text-[10px]' : 'text-xs'}`}
              >
                {t.rsvpBtn}
              </button>
            ) : rsvpStatus === 'success' ? (
              <div className="text-center py-4 bg-amber-50 rounded animate-fade-in">
                <p className="text-amber-700 font-medium text-sm">{t.rsvpThanks}</p>
              </div>
            ) : (
              <form onSubmit={handleRsvpSubmit} className="space-y-3 animate-fade-in text-left">
                <input required type="text" placeholder={t.namePlaceholder} className="w-full px-3 py-2 text-sm bg-transparent border-b border-gray-300 focus:outline-none focus:border-amber-500" />
                <div className="flex gap-2">
                  <select className="w-full px-3 py-2 text-xs md:text-sm bg-transparent border-b border-gray-300 focus:outline-none focus:border-amber-500">
                    <option value="1">{t.guest1}</option>
                    <option value="2">{t.guest2}</option>
                    <option value="0">{t.decline}</option>
                  </select>
                  <button type="submit" disabled={rsvpStatus === 'submitting'} className="px-6 py-2 bg-[#11322A] text-white text-xs uppercase tracking-widest hover:bg-[#1a4a3e]">
                    {rsvpStatus === 'submitting' ? '...' : t.send}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>

        {/* 4. Removed shadow from left and right door panels */}
        <div className="absolute inset-0 pointer-events-none flex z-10">
          <div className={`w-1/2 h-full bg-[#11322A] border-r border-amber-500/30 transition-transform duration-1000 ease-in-out origin-left pointer-events-auto ${isOpen ? '-translate-x-full' : 'translate-x-0'}`}>
            <div className="absolute inset-2 border border-amber-600/20 rounded-sm"></div>
          </div>
          <div className={`w-1/2 h-full bg-[#11322A] border-l border-amber-500/30 transition-transform duration-1000 ease-in-out origin-right pointer-events-auto ${isOpen ? 'translate-x-full' : 'translate-x-0'}`}>
            <div className="absolute inset-2 border border-amber-600/20 rounded-sm"></div>
          </div>
        </div>

        {/* 5. Removed shadow from the Gold Wax Seal button */}
        <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 transition-all duration-700 pointer-events-auto ${isOpen ? 'scale-0 opacity-0' : 'scale-100 opacity-100 delay-300'}`}>
          <button
            onClick={handleOpenInvitation}
            className="w-24 h-24 rounded-full flex items-center justify-center cursor-pointer transition-transform hover:scale-110 active:scale-95 group relative"
            style={{
              background: 'radial-gradient(circle at 30% 30%, #F5D061, #C5902E, #8C6212)'
            }}
          >
            <div className="absolute inset-1 border-[2px] border-amber-700/40 rounded-full"></div>
            <span className="text-[#4A3209] font-serif text-3xl mb-1 group-hover:text-amber-950 transition-colors" style={{ fontFamily: 'Georgia, serif' }}>K&S</span>
            <span className="absolute bottom-3 text-[10px] uppercase tracking-[0.2em] text-[#4A3209] opacity-70 font-sans font-semibold">{t.open}</span>
          </button>
        </div>

      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
        .animate-fade-in { animation: fadeIn 0.4s ease-out forwards; }
      `}} />
    </div>
  );
};

export default WeddingInvite;