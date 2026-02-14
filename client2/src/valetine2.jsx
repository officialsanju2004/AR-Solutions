import React, { useState, useEffect, useRef } from 'react';
import a from "../Images/a.jpg";
import k from "../Images/k.jpg";
import B from "../Images/B.mp4";
import D from "../Images/D.mp4";
import K from "../Images/K.mp4";

export default function ValentineDay() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const [noButtonPosition, setNoButtonPosition] = useState({ x: 0, y: 0 });
  const [characterEmotion, setCharacterEmotion] = useState('happy');
  const [eyePosition, setEyePosition] = useState({ x: 0, y: 0 });
  const [showConfetti, setShowConfetti] = useState(false);
  const [floatingHearts, setFloatingHearts] = useState([]);
  const noButtonRef = useRef(null);
  const containerRef = useRef(null);

  const noMessages = [
    "Are you sure? 🥺",
    "Really sure?? 😭",
    "You're breaking my heart 💔",
    "Last chance... 😢",
    "Please reconsider! 🙏"
  ];

  const characterGifs = {
    happy: B,
    nervous: a,
    sad: k,
    crying: D,
    love: K
  };

  /* ✅ MEDIA RENDERER (Handles JPG + MP4 Automatically) */
  const MediaRenderer = ({ src, className, style }) => {
    const isVideo = src?.toLowerCase().endsWith(".mp4");

    return isVideo ? (
      <video
        src={src}
        autoPlay
        loop
        muted
        playsInline
        className={className}
        style={style}
      />
    ) : (
      <img
        src={src}
        alt="character"
        className={className}
        style={style}
      />
    );
  };

  const handleMouseMove = (e) => {
    if (yesPressed) return;

    const container = containerRef.current;
    if (!container) return;

    const rect = container.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 20;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 20;

    setEyePosition({ x, y });
  };

  const handleTouchMove = (e) => {
    if (yesPressed || e.touches.length === 0) return;

    const touch = e.touches[0];
    const container = containerRef.current;
    if (!container) return;

    const rect = container.getBoundingClientRect();
    const x = ((touch.clientX - rect.left) / rect.width - 0.5) * 20;
    const y = ((touch.clientY - rect.top) / rect.height - 0.5) * 20;

    setEyePosition({ x, y });
  };

  const moveNoButton = () => {
    const maxX = window.innerWidth - 150;
    const maxY = window.innerHeight - 80;

    const newX = Math.random() * maxX;
    const newY = Math.random() * maxY;

    setNoButtonPosition({ x: newX, y: newY });
  };

  const handleNoHover = () => {
    if (yesPressed) return;
    setCharacterEmotion('nervous');
    moveNoButton();
  };

  const handleNoClick = () => {
    setNoCount(prev => prev + 1);

    if (noCount < 2) {
      setCharacterEmotion('sad');
    } else {
      setCharacterEmotion('crying');
    }

    moveNoButton();

    setTimeout(() => {
      if (!yesPressed) {
        setCharacterEmotion('happy');
      }
    }, 2000);
  };

  const handleYesClick = () => {
    setYesPressed(true);
    setCharacterEmotion('love');
    setShowConfetti(true);

    const hearts = [];
    for (let i = 0; i < 50; i++) {
      hearts.push({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 2,
        duration: 3 + Math.random() * 2
      });
    }
    setFloatingHearts(hearts);
  };

  useEffect(() => {
    if (!yesPressed) {
      const hearts = [];
      for (let i = 0; i < 15; i++) {
        hearts.push({
          id: i,
          left: Math.random() * 100,
          delay: Math.random() * 5,
          duration: 8 + Math.random() * 4
        });
      }
      setFloatingHearts(hearts);
    }
  }, [yesPressed]);

  const yesButtonScale = 1 + (noCount * 0.15);
  const noButtonScale = Math.max(0.4, 1 - (noCount * 0.15));

  return (
    <div
      ref={containerRef}
      className="min-h-screen w-full relative overflow-hidden bg-gradient-to-br from-pink-200 via-rose-300 to-red-300 flex items-center justify-center"
      onMouseMove={handleMouseMove}
      onTouchMove={handleTouchMove}
    >

      {/* Floating Hearts */}
      {floatingHearts.map(heart => (
        <div
          key={heart.id}
          className="absolute text-4xl opacity-30 pointer-events-none animate-float"
          style={{
            left: `${heart.left}%`,
            animationDelay: `${heart.delay}s`,
            animationDuration: `${heart.duration}s`,
            bottom: '-10%'
          }}
        >
          💕
        </div>
      ))}

      <div className="relative z-10 text-center px-4">
        {!yesPressed ? (
          <>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-8 drop-shadow-lg animate-bounce">
              Will you be my Valentine? 💖
            </h1>

            <div className="relative mb-8 flex justify-center">
              <MediaRenderer
                src={characterGifs[characterEmotion]}
                className="w-64 h-64 md:w-80 md:h-80 object-contain drop-shadow-2xl transition-transform duration-300"
                style={{
                  transform: `translate(${eyePosition.x}px, ${eyePosition.y}px)`
                }}
              />
            </div>

            {noCount > 0 && (
              <p className="text-2xl md:text-3xl font-semibold text-rose-700 mb-6 animate-pulse">
                {noMessages[Math.min(noCount - 1, noMessages.length - 1)]}
              </p>
            )}

            <div className="flex flex-col md:flex-row gap-6 items-center justify-center mt-8">

              <button
                onClick={handleYesClick}
                className="bg-gradient-to-r from-rose-500 to-pink-500 text-white font-bold py-4 px-12 rounded-full shadow-2xl hover:scale-110 transition-all duration-300 text-xl md:text-2xl"
                style={{ transform: `scale(${yesButtonScale})` }}
              >
                YES 💕
              </button>

              <button
                ref={noButtonRef}
                onMouseEnter={handleNoHover}
                onTouchStart={handleNoHover}
                onClick={handleNoClick}
                className="bg-gray-400 text-white font-bold py-4 px-12 rounded-full shadow-lg transition-all duration-300 text-xl md:text-2xl fixed md:relative"
                style={{
                  transform: `scale(${noButtonScale})`,
                  left: noButtonPosition.x > 0 ? `${noButtonPosition.x}px` : 'auto',
                  top: noButtonPosition.y > 0 ? `${noButtonPosition.y}px` : 'auto',
                  position: noButtonPosition.x > 0 ? 'fixed' : 'relative'
                }}
              >
                NO 😢
              </button>

            </div>
          </>
        ) : (
          <div className="animate-fadeIn">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 drop-shadow-lg animate-bounce">
              Yayyy!!! You just made my day ❤️✨
            </h1>

            <MediaRenderer
              src={characterGifs.love}
              className="w-80 h-80 md:w-96 md:h-96 object-contain mx-auto drop-shadow-2xl animate-pulse"
            />

            <div className="mt-8 space-y-4">
              <p className="text-3xl md:text-4xl font-semibold text-rose-700 animate-pulse">
                Best. Day. Ever! 💖
              </p>
              <p className="text-2xl md:text-3xl text-white">
                I'm so happy! 🎉✨💕
              </p>
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes float {
          0% { transform: translateY(100vh) rotate(0deg); opacity: 0; }
          10% { opacity: 0.7; }
          90% { opacity: 0.7; }
          100% { transform: translateY(-100vh) rotate(360deg); opacity: 0; }
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: scale(0.8); }
          to { opacity: 1; transform: scale(1); }
        }

        .animate-float { animation: float linear infinite; }
        .animate-fadeIn { animation: fadeIn 0.6s ease-out; }
      `}</style>
    </div>
  );
      }
