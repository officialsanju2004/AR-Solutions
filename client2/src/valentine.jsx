import React, { useState, useEffect } from "react";

export default function ValentinePage() {
  const [noCount, setNoCount] = useState(0);
  const [face, setFace] = useState("happy");
  const [yesScale, setYesScale] = useState(1);
  const [noPosition, setNoPosition] = useState({ top: "60%", left: "55%" });
  const [cursor, setCursor] = useState({ x: 0, y: 0 });
  const [accepted, setAccepted] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);

  // Mouse tracking (desktop)
  const handleMouseMove = (e) => {
    setCursor({ x: e.clientX, y: e.clientY });
  };

  // Touch tracking (mobile)
  const handleTouchMove = (e) => {
    const touch = e.touches[0];
    setCursor({ x: touch.clientX, y: touch.clientY });
  };

  const moveNoButton = () => {
    const randomTop = Math.random() * 80;
    const randomLeft = Math.random() * 80;
    setNoPosition({
      top: `${randomTop}%`,
      left: `${randomLeft}%`,
    });
  };

  const handleNoClick = () => {
    const newCount = noCount + 1;
    setNoCount(newCount);
    setYesScale((prev) => prev + 0.2);

    if (newCount === 1) setFace("nervous");
    if (newCount === 2) setFace("sad");
    if (newCount >= 3) setFace("crying");

    moveNoButton();
  };

  const handleYesClick = () => {
    setAccepted(true);
    setFace("love");
    setShowConfetti(true);
  };

  const messages = [
    "",
    "Are you sure? 🥺",
    "Really sure?? 😭",
    "You’re breaking my heart 💔",
    "Last chance… 😢",
  ];

  // Eye movement calculation
  const eyeX = (cursor.x / window.innerWidth - 0.5) * 10;
  const eyeY = (cursor.y / window.innerHeight - 0.5) * 10;

  return (
    <div
      onMouseMove={handleMouseMove}
      onTouchMove={handleTouchMove}
      className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden bg-gradient-to-br from-pink-200 via-rose-300 to-red-300"
    >
      {/* Background Music */}
      <audio autoPlay loop>
        <source src="https://www.bensound.com/bensound-music/bensound-romantic.mp3" type="audio/mp3" />
      </audio>

      {/* Floating Hearts */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute text-pink-400 animate-pulse"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              fontSize: `${Math.random() * 20 + 10}px`,
            }}
          >
            💖
          </div>
        ))}
      </div>

      <h1 className="text-4xl md:text-6xl font-bold text-white drop-shadow-lg mb-6 text-center animate-fade-in">
        Will you be my Valentine? 💖
      </h1>

      {/* Cute Animal */}
      <div className="relative mb-6">
        <div className="text-8xl transition-all duration-300 animate-bounce">
          {face === "happy" && "🐻"}
          {face === "nervous" && "😳"}
          {face === "sad" && "🥺"}
          {face === "crying" && "😭"}
          {face === "love" && "😍"}
        </div>

        {/* Eyes following cursor */}
        <div
          className="absolute top-8 left-8 w-3 h-3 bg-black rounded-full"
          style={{ transform: `translate(${eyeX}px, ${eyeY}px)` }}
        ></div>
        <div
          className="absolute top-8 right-8 w-3 h-3 bg-black rounded-full"
          style={{ transform: `translate(${eyeX}px, ${eyeY}px)` }}
        ></div>
      </div>

      {/* Message */}
      <p className="text-white text-xl mb-4 transition-all duration-300">
        {messages[noCount]}
      </p>

      {!accepted && (
        <>
          {/* YES Button */}
          <button
            onClick={handleYesClick}
            style={{ transform: `scale(${yesScale})` }}
            className="bg-pink-600 text-white px-8 py-3 rounded-full shadow-xl hover:bg-pink-700 transition-all duration-300 glow"
          >
            YES 💕
          </button>

          {/* NO Button */}
          <button
            onMouseEnter={() => setFace("nervous")}
            onClick={handleNoClick}
            style={{
              position: "absolute",
              top: noPosition.top,
              left: noPosition.left,
              transform: `scale(${noCount >= 4 ? 0.5 : 1})`,
            }}
            className="bg-gray-200 text-black px-6 py-2 rounded-full shadow-lg hover:bg-gray-300 transition-all duration-300"
          >
            NO 😢
          </button>
        </>
      )}

      {/* Success Message */}
      {accepted && (
        <div className="mt-6 text-center text-white text-3xl font-bold animate-bounce">
          Yayyy!!! You just made my day ❤️✨
        </div>
      )}

      {/* Confetti */}
      {showConfetti && (
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(40)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-white animate-ping"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
            ></div>
          ))}
        </div>
      )}

      <style jsx>{`
        .glow {
          box-shadow: 0 0 15px #ff69b4, 0 0 30px #ff1493;
        }
      `}</style>
    </div>
  );}