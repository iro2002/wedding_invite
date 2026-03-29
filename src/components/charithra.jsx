import React, { useState } from 'react';

const Charithra = ({ lang = 'si' }) => {
  const [activeStep, setActiveStep] = useState(0);

  const text = {
    si: {
      order: "චාරිත‍්‍ර පෙළගැස්ම",
      title: "පෝරුවේ චාරිත්‍ර",
      footer: "* වේලාවන් ආසන්න වන අතර සුබ නැකැත් අනුව වෙනස් විය හැක."
    },
    en: {
      order: "Order of Events",
      title: "Poruwa Charithra",
      footer: "* Times are approximate and subject to auspicious alignments."
    }
  };

  const t = text[lang];

  const rituals = {
    en: [
      {
        id: 0, time: '9:00 AM', title: 'Arrival of the Couple', sinhalaTitle: 'Paminima',
        description: 'The groom and his family arrive first, welcomed by the bride’s brother. Shortly after, the bride is escorted by her family, accompanied by traditional Kandyan dancers and drummers.'
      },
      {
        id: 1, time: '9:25 AM', title: 'Ascending the Poruwa', sinhalaTitle: 'Poruwata Nagima',
        description: 'At the auspicious time (Nakath), Kasun and Sanduni step onto the Poruwa (a beautifully decorated wooden platform), leading with their right foot to signify a blessed and prosperous beginning.'
      },
      {
        id: 2, time: '9:40 AM', title: 'Exchange of Rings', sinhalaTitle: 'Mudu Maaru Kirima',
        description: 'The couple exchanges rings to symbolize their love and commitment. The groom also presents the bride with a white cloth, a promise to take care of her for the rest of their lives.'
      },
      {
        id: 3, time: '9:55 AM', title: 'Tying the Sacred Thread', sinhalaTitle: 'Pirith Nool Bendeema',
        description: 'The bride’s uncle ties the couple’s pinky fingers together with a golden sacred thread (Pirith Nool) and pours holy water over their hands, legally and spiritually binding them together.'
      },
      {
        id: 4, time: '10:15 AM', title: 'Honoring the Parents', sinhalaTitle: 'Bulath Huruweema',
        description: 'The couple offers sheaves of betel leaves to their parents and elders. This deeply emotional ritual is a gesture of immense gratitude for their love, guidance, and upbringing.'
      },
      {
        id: 5, time: '10:30 AM', title: 'Stepping Down & Blessings', sinhalaTitle: 'Poruwen Basima',
        description: 'Supported by the groom’s family, the couple steps down from the Poruwa. A fresh coconut is cleft in two to dispel any evil spirits, followed by girls singing the Jayamangala Gatha to bless the marriage.'
      }
    ],
    si: [
      {
        id: 0, time: 'පෙ.ව. 9:00', title: 'පැමිණීම', sinhalaTitle: 'Paminima',
        description: 'පළමුවෙන්ම මනාලයා සහ ඔහුගේ පවුලේ අය පැමිණෙන අතර, මනාලියගේ පවුලේ අය සාම්ප්‍රදායික උඩරට නැටුම් සහ බෙර වාදන මැද ඇයව කැඳවාගෙන එති.'
      },
      {
        id: 1, time: 'පෙ.ව. 9:25', title: 'පෝරුවට නැගීම', sinhalaTitle: 'Poruwata Nagima',
        description: 'සුබ නැකතින් කසුන් සහ සඳුනි පෝරුවට ගොඩවේ. මෙය නව සහ සෞභාග්‍යමත් ජීවිතයක ආරම්භය සනිටුහන් කරයි.'
      },
      {
        id: 2, time: 'පෙ.ව. 9:40', title: 'මුදු මාරු කිරීම', sinhalaTitle: 'Mudu Maaru Kirima',
        description: 'සිය ආදරය හා කැපවීම සංකේතවත් කරමින් යුවළ මුදු මාරු කරති. ඉන්පසු මනාලයා විසින් මනාලියට සුදු රෙදි කඩක් පිළිගන්වයි.'
      },
      {
        id: 3, time: 'පෙ.ව. 9:55', title: 'පිරිත් නූල් බැඳීම', sinhalaTitle: 'Pirith Nool Bendeema',
        description: 'විවාහයේ නෛතික හා අධ්‍යාත්මික බැඳීම සනිටුහන් කරමින් මාමා විසින් යුවළගේ සුලැඟිලි පිරිත් නූලකින් ගැටගසා පැන් වත් කරයි.'
      },
      {
        id: 4, time: 'පෙ.ව. 10:15', title: 'බුලත් හුරු දීම', sinhalaTitle: 'Bulath Huruweema',
        description: 'තරුණ යුවළ සිය දෙමව්පියන්ට සහ වැඩිහිටියන්ට බුලත් හුරු දී නමස්කාර කරමින් ඔවුන්ට සිය කෘතඥතාව දක්වති.'
      },
      {
        id: 5, time: 'පෙ.ව. 10:30', title: 'පෝරුවෙන් බැසීම', sinhalaTitle: 'Poruwen Basima',
        description: 'ආශිර්වාද මැද යුවළ පෝරුවෙන් බසින අතර ජයමංගල ගාථා ගායනා කෙරේ. නරක දෝෂ දුරු කිරීම සඳහා පොල් ගෙඩියක් බිඳීම සිදුකෙරේ.'
      }
    ]
  };

  const activeRituals = rituals[lang];

  return (
    <div className="min-h-screen bg-stone-100 flex items-center justify-center p-4 md:p-8 font-serif relative w-full pt-12 md:pt-8">
      <div className="relative max-w-xl w-full bg-[#FDFBF7] px-6 py-12 md:p-14 overflow-hidden rounded-sm">

        {/* Header Section */}
        <div className="text-center mb-16">
          <span className="text-amber-500 text-3xl block mb-4">🪷</span>
          <h2 className="text-amber-700 tracking-[0.2em] text-sm md:text-xs uppercase mb-3 font-semibold">{t.order}</h2>
          <h1 className="text-4xl md:text-5xl text-[#11322A]" style={{ fontFamily: 'Georgia, serif' }}>
            {t.title}
          </h1>
          <div className="w-24 h-[1px] bg-amber-300 mx-auto mt-6"></div>
        </div>

        {/* Interactive Timeline Container */}
        <div className="relative border-l-2 border-amber-200 ml-4 md:ml-8">
          {activeRituals.map((ritual, index) => {
            const isActive = activeStep === index;

            return (
              <div key={ritual.id} className="mb-10 ml-8 md:ml-12 relative group">

                <span
                  className={`absolute -left-[41px] md:-left-[57px] flex items-center justify-center w-8 h-8 rounded-full border-4 border-[#FDFBF7] transition-colors duration-300 cursor-pointer shadow-sm
                    ${isActive ? 'bg-amber-500' : 'bg-[#11322A] group-hover:bg-amber-400'}`}
                  onClick={() => setActiveStep(isActive ? -1 : index)}
                >
                  <div className={`w-2 h-2 rounded-full ${isActive ? 'bg-[#11322A]' : 'bg-white'}`}></div>
                </span>

                <div
                  className={`bg-white border outline outline-1 transition-all duration-300 cursor-pointer overflow-hidden
                    ${isActive
                      ? 'border-transparent outline-amber-400 shadow-[0_4px_20px_rgba(0,0,0,0.05)]'
                      : 'border-gray-100 outline-transparent hover:outline-amber-200 hover:shadow-md'
                    }`}
                  onClick={() => setActiveStep(isActive ? -1 : index)}
                >
                  <div className="p-5 md:p-6 flex flex-col md:flex-row md:items-center justify-between gap-2">
                    <div>
                      <h3 className="text-lg md:text-xl text-[#11322A] font-medium leading-snug">{ritual.title}</h3>
                      <p className="text-amber-600 text-xs md:text-sm italic mt-1 font-sans">{ritual.sinhalaTitle}</p>
                    </div>
                    <div className="text-gray-500 text-xs md:text-sm font-semibold tracking-widest uppercase whitespace-nowrap">
                      {ritual.time}
                    </div>
                  </div>

                  <div
                    className={`px-5 md:px-6 transition-all duration-500 ease-in-out
                      ${isActive ? 'max-h-64 pb-6 opacity-100' : 'max-h-0 py-0 opacity-0'}`}
                  >
                    <div className="h-[1px] w-full bg-gray-100 mb-4"></div>
                    <p className={`text-gray-600 leading-relaxed text-sm md:text-base ${lang === 'si' ? 'font-sans' : ''}`}>
                      {ritual.description}
                    </p>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        <div className={`mt-16 text-center text-gray-400 italic text-sm ${lang === 'si' ? 'font-sans' : ''}`}>
          {t.footer}
        </div>

      </div>
    </div>
  );
};

export default Charithra;