import React from 'react';

const Location = ({ lang = 'si' }) => {
  const text = {
    si: {
      join: "Join the Celebration",
      title: "The Venue",
      hotel: "ගෝල් ෆේස් හෝටලය",
      address: "No 2, Galle Road, Colombo 03, Sri Lanka",
      ceremony: "උත්සවය පෙ.ව. 9:00 ට ආරම්භ වේ",
      reception: "ඉන්පසු පිළිගැනීමේ උත්සවය",
      maps: "ගූගල් සිතියමේ විවෘත කරන්න"
    },
    en: {
      join: "Join the Celebration",
      title: "The Venue",
      hotel: "The Galle Face Hotel",
      address: "No 2, Galle Road, Colombo 03, Sri Lanka",
      ceremony: "Ceremony begins at 9:00 AM",
      reception: "Reception to follow",
      maps: "Open in Google Maps"
    }
  };

  const t = text[lang];

  return (
    <section id="location" className="min-h-screen bg-stone-100 flex items-center justify-center p-4 md:p-8 font-serif relative overflow-hidden w-full pt-12 md:pt-8">
      <div className="relative max-w-xl w-full bg-[#FDFBF7] px-6 py-12 md:p-14 rounded-sm flex flex-col gap-10">

        {/* Header Section */}
        <div className="text-center">
          <span className="text-amber-500 text-3xl block mb-4">🏛️</span>
          <h2 className="text-amber-700 tracking-[0.2em] text-sm md:text-xs uppercase mb-3 font-semibold">{t.join}</h2>
          <h1 className="text-4xl md:text-5xl text-[#11322A]" style={{ fontFamily: 'Georgia, serif' }}>
            {t.title}
          </h1>
          <div className="w-24 h-[1px] bg-amber-300 mx-auto mt-6"></div>
        </div>

        <div className="flex flex-col gap-8 items-center w-full">
          {/* Details */}
          <div className="space-y-8 w-full">
            <div className="bg-white border outline outline-1 outline-amber-200 p-8 md:p-10 relative">
              {/* Corner Accents */}
              <div className="absolute top-2 left-2 w-4 h-4 border-t border-l border-amber-300"></div>
              <div className="absolute top-2 right-2 w-4 h-4 border-t border-r border-amber-300"></div>
              <div className="absolute bottom-2 left-2 w-4 h-4 border-b border-l border-amber-300"></div>
              <div className="absolute bottom-2 right-2 w-4 h-4 border-b border-r border-amber-300"></div>

              <h3 className="text-2xl md:text-3xl font-serif text-[#11322A] mb-4">{t.hotel}</h3>
              <p className={`text-gray-600 mb-6 flex items-start gap-4 text-sm md:text-base ${lang === 'si' ? 'font-sans' : ''}`}>
                <svg className="w-5 h-5 md:w-6 md:h-6 shrink-0 mt-1 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                <span>{lang === 'si' ? <>No 2, Galle Road,<br />Colombo 03, Sri Lanka</> : <>No 2, Galle Road,<br />Colombo 03, Sri Lanka</>}</span>
              </p>

              <div className="h-[1px] w-full bg-gray-100 mb-6"></div>

              <p className={`text-gray-600 mb-8 flex items-start gap-4 text-sm md:text-base ${lang === 'si' ? 'font-sans' : ''}`}>
                <svg className="w-5 h-5 md:w-6 md:h-6 shrink-0 mt-1 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                <span>{t.ceremony}<br />{t.reception}</span>
              </p>

              <button className={`w-full py-4 border border-[#11322A] text-[#11322A] hover:bg-[#11322A] hover:text-white transition-colors uppercase tracking-widest font-semibold ${lang === 'si' ? 'font-sans text-[11px]' : 'text-xs'}`}>
                {t.maps}
              </button>
            </div>
          </div>

          {/* Map Image Placeholder / iframe */}
          <div className="aspect-square md:aspect-video w-full bg-gray-100 overflow-hidden border-8 border-white outline outline-1 outline-amber-200">
            {/* Realistic map styling frame targeting Colombo */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.778848130889!2d79.8454271758535!3d6.916999393082531!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2593b49ba7c1f%3A0xe5a3c613cbfde81!2sGalle%20Face%20Hotel!5e0!3m2!1sen!2slk!4v1701234567890!5m2!1sen!2slk"
              className="w-full h-full border-0 select-none pointer-events-auto"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
