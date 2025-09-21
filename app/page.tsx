"use client";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import CommunityIntro from "./components/CommunityIntro";
import Purpose from "./components/Purpose";
import Projects from "./components/Projects";
import { useRef, useState } from "react";
import { motion } from "framer-motion";

export default function PuzzleGate() {
  const [solved, setSolved] = useState(false);
  const [showHome, setShowHome] = useState(false);

  const [position, setPosition] = useState({ x: 100, y: 260 });
  const [isDragging, setIsDragging] = useState(false);
  const offset = useRef({ x: 0, y: 0 });
  const pieceRef = useRef<HTMLImageElement>(null);

  const handleMouseDown = (e: React.MouseEvent<HTMLImageElement>) => {
    setIsDragging(true);
    offset.current = {
      x: e.clientX - position.x,
      y: e.clientY - position.y,
    };
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    setPosition({
      x: e.clientX - offset.current.x,
      y: e.clientY - offset.current.y,
    });
  };

  const handleMouseUp = () => {
    setIsDragging(false);

    const dropArea = document.getElementById("drop-area");
    const piece = pieceRef.current;
    if (dropArea && piece) {
      const dropRect = dropArea.getBoundingClientRect();
      const pieceRect = piece.getBoundingClientRect();

      if (
        pieceRect.left + pieceRect.width / 6 > dropRect.left &&
        pieceRect.left + pieceRect.width / 6 < dropRect.right &&
        pieceRect.top + pieceRect.height / 6 > dropRect.top &&
        pieceRect.top + pieceRect.height / 6 < dropRect.bottom
      ) {
        setSolved(true);
      }
    }
  };

  if (showHome) {
    return <HomePage />;
  }

  return (
    <div
      className="overflow-hidden flex justify-center items-center h-screen bg-primary"
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    >
      {/* ===== DESKTOP VERSION (Puzzle) ===== */}
      <div className="hidden md:flex items-center h-full flex-row-reverse w-full justify-between relative">
        {!solved ? (
          <>
            <div className="h-[100%] m-auto mr-20 aspect-square relative">
              <img
                src={"/jigsaw-church.png"}
                className="object-cover h-[100vh] w-full"
                alt="Puzzle"
              />
              <div
                id="drop-area"
                className="w-[40%] h-[24%] border-4 absolute top-[33%] left-[58%] z-10 invisible"
              >
                drop here
              </div>
            </div>

            <img
              ref={pieceRef}
              src="/jigsaw-piece.png"
              alt="Puzzle piece"
              onMouseDown={(e) => {
                e.preventDefault();
                handleMouseDown(e);
              }}
              className="w-[41.4vmin] cursor-grab absolute drop-shadow-xl"
              style={{
                left: position.x,
                top: position.y,
              }}
            />
          </>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="text-center text-white mx-auto"
          >
            <h1 className="text-3xl font-bold mb-4">
              YOUR CONTRIBUTION MATTERS!
            </h1>
            <p className="text-lg text-gray-300 w-[57%] mx-auto mb-4">
              በእናንተም ዘንድ ያሉ በልባቸው ጥበበኞች ሁሉ መጥተው እግዚአብሔር ያዘዘውን ያድርጉ።
            </p>
            <span className="block mb-6">ዘጸ 35፡10</span>
            <button
              onClick={() => setShowHome(true)}
              className="px-6 py-2 bg-gray-200 text-primary rounded-lg shadow-md hover:bg-gray-400"
            >
              Go to Home
            </button>
          </motion.div>
        )}
      </div>

      <div className="md:hidden text-center text-white px-6">
        <h1 className="text-2xl font-bold mb-4">YOUR CONTRIBUTION MATTERS!</h1>
        <p className="text-gray-300 mb-6">
          በእናንተም ዘንድ ያሉ በልባቸው ጥበበኞች ሁሉ መጥተው እግዚአብሔር ያዘዘውን ያድርጉ።
        </p>
        <span className="block mb-6">ዘጸ 35፡10</span>
        <button
          onClick={() => setShowHome(true)}
          className="px-6 py-2 bg-gray-200 text-primary rounded-lg shadow-md hover:bg-gray-400"
        >
          Go to Home
        </button>
      </div>
    </div>
  );
}

function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <CommunityIntro />
      <Projects />
      <Purpose />
      <Footer />
    </>
  );
}
