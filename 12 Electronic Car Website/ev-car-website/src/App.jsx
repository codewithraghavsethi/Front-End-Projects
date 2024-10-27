import { useEffect, useState } from "react";
import Background from "./components/background/Background";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";

const App = () => {
  let heroData = [
    { text1: "Dive into", text2: "What do you want?" },
    { text1: "Indulge", text2: "What do you do?" },
    { text1: "Give in to", text2: "What do you need?" },
  ];

  const [heroCount, setHeroCount] = useState(0);
  const [playStatus, setPlayStatus] = useState(false);

  useEffect(() => {
    setInterval(() => {
      setHeroCount((count) => {
        return count === 2 ? 0 : count + 1;
      });
    }, 3000);
  }, []);
  return (
    <div>
      <Background playStatus={playStatus} heroCount={heroCount} />
      <Navbar />
      <Hero
        heroCount={heroCount}
        setHeroCount={setHeroCount}
        playStatus={playStatus}
        setPlayStatus={setPlayStatus}
        heroData={heroData[heroCount]}
      />
    </div>
  );
};

export default App;
