import React, { useState, useEffect, useRef } from 'react';

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

  // Playful messages for NO clicks
  const noMessages = [
    "Are you sure? 🥺",
    "Really sure?? 😭",
    "You're breaking my heart 💔",
    "Last chance... 😢",
    "Please reconsider! 🙏"
  ];

  // GIF URLs for different emotions (white cartoon characters)
  const characterGifs = {
    happy: 'https://media1.tenor.com/m/AeUDea8Z36YAAAAC/lovely.gif',
    nervous: 'https://media1.tenor.com/m/NGCtbt230mAAAAAC/milk-and-mocha-nervous.gif',
    sad: 'https://media1.tenor.com/m/oKhr8xPkTKcAAAAC/milk-and-mocha-sad.gif',
    crying: 'https://tenor.com/view/milk-and-mocha-gif-4707282111551821889',
    love: 'https://media1.tenor.com/m/wpoe4r7w-kYAAAAC/milk-and-mocha-love.gif'
  };

  // Track mouse/touch movement for eye following
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

  // Move NO button randomly
  const moveNoButton = () => {
    const container = containerRef.current;
    if (!container) return;

    const maxX = window.innerWidth - 150;
    const maxY = window.innerHeight - 80;
    
    const newX = Math.random() * maxX;
    const newY = Math.random() * maxY;
    
    setNoButtonPosition({ x: newX, y: newY });
  };

  // Handle NO button hover/touch
  const handleNoHover = () => {
    if (yesPressed) return;
    setCharacterEmotion('nervous');
    moveNoButton();
  };

  // Handle NO button click
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

  // Handle YES button click
  const handleYesClick = () => {
    setYesPressed(true);
    setCharacterEmotion('love');
    setShowConfetti(true);
    
    // Create confetti hearts
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

  // Generate floating hearts in background
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

  // YES button size based on NO clicks
  const yesButtonScale = 1 + (noCount * 0.15);
  
  // NO button size decreases after clicks
  const noButtonScale = Math.max(0.4, 1 - (noCount * 0.15));

  return (
    <div 
      ref={containerRef}
      className="min-h-screen w-full relative overflow-hidden bg-gradient-to-br from-pink-200 via-rose-300 to-red-300 flex items-center justify-center"
      onMouseMove={handleMouseMove}
      onTouchMove={handleTouchMove}
    >
      {/* Floating hearts background */}
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

      {/* Main content */}
      <div className="relative z-10 text-center px-4">
        {!yesPressed ? (
          <>
            {/* Heading */}
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-8 drop-shadow-lg animate-bounce">
              Will you be my Valentine? 💖
            </h1>

            {/* Character with eye tracking */}
            <div className="relative mb-8 flex justify-center">
              <div className="relative">
                <img 
                  src={characterGifs[characterEmotion]}
                  alt="Cute character"
                  className="w-64 h-64 md:w-80 md:h-80 object-contain drop-shadow-2xl transition-transform duration-300"
                  style={{
                    transform: `translate(${eyePosition.x}px, ${eyePosition.y}px)`
                  }}
                />
                
                {/* Glow effect around character */}
                <div className="absolute inset-0 bg-pink-300 opacity-20 blur-3xl rounded-full -z-10"></div>
              </div>
            </div>

            {/* Message based on NO clicks */}
            {noCount > 0 && (
              <p className="text-2xl md:text-3xl font-semibold text-rose-700 mb-6 animate-pulse">
                {noMessages[Math.min(noCount - 1, noMessages.length - 1)]}
              </p>
            )}

            {/* Buttons */}
            <div className="flex flex-col md:flex-row gap-6 items-center justify-center mt-8">
              {/* YES Button */}
              <button
                onClick={handleYesClick}
                className="bg-gradient-to-r from-rose-500 to-pink-500 text-white font-bold py-4 px-12 rounded-full shadow-2xl hover:shadow-pink-500/50 hover:scale-110 transition-all duration-300 text-xl md:text-2xl relative overflow-hidden group"
                style={{
                  transform: `scale(${yesButtonScale})`
                }}
              >
                <span className="relative z-10">YES 💕</span>
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                
                {/* Glow effect */}
                <div className="absolute inset-0 bg-pink-400 opacity-50 blur-xl -z-10 animate-pulse"></div>
              </button>

              {/* NO Button - moves on hover/touch */}
              <button
                ref={noButtonRef}
                onMouseEnter={handleNoHover}
                onTouchStart={handleNoHover}
                onClick={handleNoClick}
                className="bg-gray-400 text-white font-bold py-4 px-12 rounded-full shadow-lg hover:shadow-gray-500/50 transition-all duration-300 text-xl md:text-2xl fixed md:relative"
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
          /* Success message after YES */
          <div className="animate-fadeIn">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 drop-shadow-lg animate-bounce">
              Yayyy!!! You just made my day ❤️✨
            </h1>
            
            <img 
              src={characterGifs.love}
              alt="Happy character"
              className="w-80 h-80 md:w-96 md:h-96 object-contain mx-auto drop-shadow-2xl animate-pulse"
            />

            <div className="mt-8 space-y-4">
              <p className="text-3xl md:text-4xl font-semibold text-rose-700 animate-pulse">
                Best. Day. Ever! 💖
              </p>
              <p className="text-2xl md:text-3xl text-white drop-shadow-lg">
                I'm so happy! 🎉✨💕
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Confetti hearts */}
      {showConfetti && (
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(100)].map((_, i) => (
            <div
              key={i}
              className="absolute text-3xl animate-confetti"
              style={{
                left: `${Math.random() * 100}%`,
                top: '-10%',
                animationDelay: `${Math.random() * 0.5}s`,
                animationDuration: `${2 + Math.random()}s`
              }}
            >
              {['❤️', '💕', '💖', '💗', '💝'][Math.floor(Math.random() * 5)]}
            </div>
          ))}
        </div>
      )}

      <style jsx>{`
        @keyframes float {
          0% {
            transform: translateY(100vh) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: 0.7;
          }
          90% {
            opacity: 0.7;
          }
          100% {
            transform: translateY(-100vh) rotate(360deg);
            opacity: 0;
          }
        }

        @keyframes confetti {
          0% {
            transform: translateY(0) rotate(0deg);
            opacity: 1;
          }
          100% {
            transform: translateY(100vh) rotate(720deg);
            opacity: 0;
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: scale(0.8);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-float {
          animation: float linear infinite;
        }

        .animate-confetti {
          animation: confetti ease-in forwards;
        }

        .animate-fadeIn {
          animation: fadeIn 0.6s ease-out;
        }
      `}</style>
    </div>
  );
}
