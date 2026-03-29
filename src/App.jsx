import React, { useState } from 'react';
import Invite from './components/invite';
import Charithra from './components/charithra';
import Location from './components/location';

function App() {
  const [lang, setLang] = useState('si');

  return (
    <div className="font-serif antialiased text-[#11322A] bg-stone-100 selection:bg-amber-200 selection:text-amber-900 overflow-x-hidden relative flex flex-col items-center">
      
      {/* Language Toggle */}
      <div className="fixed top-4 right-4 z-50">
        <button 
          onClick={() => setLang(lang === 'si' ? 'en' : 'si')}
          className="bg-white/90 backdrop-blur-md px-4 py-2 border border-amber-200 rounded-full shadow-md text-xs tracking-widest text-[#11322A] hover:bg-amber-50 transition-colors cursor-pointer select-none"
        >
          {lang === 'si' ? 'ENGLISH' : 'සිංහල'}
        </button>
      </div>

      <main className="w-full flex flex-col items-center">
        <Invite lang={lang} />
        <Charithra lang={lang} />
        <Location lang={lang} />
      </main>
    </div>
  );
}

export default App;
