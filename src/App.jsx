import { useEffect } from "react";

function App() {
  useEffect(() => {
    const ghost = document.body;
    const moveCursor = (e) => {
      ghost.style.setProperty('--x', `${e.clientX}px`);
      ghost.style.setProperty('--y', `${e.clientY}px`);
    };
    window.addEventListener('mousemove', moveCursor);
    return () => window.removeEventListener('mousemove', moveCursor);
  }, []);

  return (
    <main className="min-h-screen bg-black text-eerieGreen font-mono flex items-center justify-center px-4 animate-pulseSlow">
      <div className="w-full max-w-3xl border border-eerieGreen rounded-xl p-8 mt-10 bg-black/70 shadow-[0_0_20px_#39FF14] backdrop-blur-md space-y-8">

        <h1 className="text-4xl sm:text-5xl font-pixel animate-glitch text-glitchRed tracking-wider text-center">
          /broken-tool-museum
        </h1>

        <p className="text-xl sm:text-xl leading-relaxed max-w-xl text-center mx-auto">
          Welcome to the interactive archive of semi-functional tools.
        </p>

        <nav className="flex flex-col items-center gap-2">
          <a href="/tools/calculator.html" className="hover:text-glitchRed transition-colors duration-150 cursor-pointer">
            /tools/calculator
          </a>
          <a href="/tools/notepad.html" className="hover:text-glitchRed transition-colors duration-150 cursor-pointer">
            /tools/notepad
          </a>
          <a href="/tools/form404.html" className="hover:text-glitchRed transition-colors duration-150 cursor-pointer">
            /tools/form404
          </a>
        </nav>

        <p id="console" className="opacity-60 italic text-sm text-center glitch-flicker">
          Museum Console v1.0 — Awaiting input...
        </p>

        <div className="text-eerieGreen font-mono text-center text-xs pt-4">
          //==================//
        </div>
      </div>
    </main>
  );
}

export default App;