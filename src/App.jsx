import React, { useState } from 'react';
import Invite from './components/invite';
import Charithra from './components/charithra';
import Location from './components/location';

function App() {
  const [lang, setLang] = useState('si');

  return (
    <div className="font-serif antialiased text-[#11322A] bg-stone-100 selection:bg-amber-200 selection:text-amber-900 overflow-x-hidden relative flex flex-col items-center">
      
      <main className="w-full flex flex-col items-center">
        <Invite lang={lang} setLang={setLang} />
        <Charithra lang={lang} />
        <Location lang={lang} />
      </main>
    </div>
  );
}

export default App;
