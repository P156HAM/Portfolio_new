import React, { useEffect, useRef, useState } from 'react';

const CinematicPortfolio = () => {
  const [loading, setLoading] = useState(true);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [hoveredProject, setHoveredProject] = useState(null);
  const [cursorSize, setCursorSize] = useState(20);
  const cursorRef = useRef(null);
  const floatingShapesRef = useRef([]);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1800);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
      
      if (cursorRef.current) {
        cursorRef.current.style.left = e.clientX + 'px';
        cursorRef.current.style.top = e.clientY + 'px';
      }

      // Parallax effect on floating shapes
      floatingShapesRef.current.forEach((shape, i) => {
        if (shape) {
          const speed = (i + 1) * 0.02;
          const x = (e.clientX - window.innerWidth / 2) * speed;
          const y = (e.clientY - window.innerHeight / 2) * speed;
          shape.style.transform = `translate(${x}px, ${y}px) rotate(${i * 45}deg)`;
        }
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const projects = [
    { 
      name: 'Neural Mind', 
      type: 'AI Product Design',
      year: '2024',
      color: '#ff0080',
      desc: 'Machine learning dashboard for data scientists'
    },
    { 
      name: 'Quantum Leap', 
      type: 'Web Experience',
      year: '2024',
      color: '#00ffff',
      desc: 'Interactive 3D portfolio for tech startup'
    },
    { 
      name: 'Echo System', 
      type: 'Mobile App',
      year: '2023',
      color: '#8a2be2',
      desc: 'Social network for creative professionals'
    },
    { 
      name: 'Void Space', 
      type: 'Branding',
      year: '2023',
      color: '#ff6b35',
      desc: 'Complete brand identity for fintech company'
    }
  ];

  return (
    <div className="relative w-full bg-white overflow-hidden">
      {/* Custom cursor */}
      <div 
        ref={cursorRef}
        className="fixed w-5 h-5 border-2 border-purple-600 rounded-full pointer-events-none z-50 transition-all duration-100 mix-blend-difference"
        style={{
          width: cursorSize + 'px',
          height: cursorSize + 'px',
          transform: 'translate(-50%, -50%)',
        }}
      />

      {/* Floating geometric shapes - background */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {/* Circle */}
        <div 
          ref={el => floatingShapesRef.current[0] = el}
          className="absolute w-96 h-96 rounded-full border-2 border-purple-200 opacity-30"
          style={{ top: '10%', left: '70%', transition: 'transform 0.3s ease-out' }}
        />
        {/* Square */}
        <div 
          ref={el => floatingShapesRef.current[1] = el}
          className="absolute w-64 h-64 border-2 border-cyan-200 opacity-20"
          style={{ top: '60%', left: '10%', transition: 'transform 0.3s ease-out' }}
        />
        {/* Triangle */}
        <div 
          ref={el => floatingShapesRef.current[2] = el}
          className="absolute w-0 h-0 opacity-25"
          style={{ 
            top: '30%', 
            left: '15%',
            borderLeft: '120px solid transparent',
            borderRight: '120px solid transparent',
            borderBottom: '200px solid #ffd700',
            transition: 'transform 0.3s ease-out'
          }}
        />
        {/* Small circles */}
        <div 
          ref={el => floatingShapesRef.current[3] = el}
          className="absolute w-32 h-32 rounded-full bg-pink-200 opacity-20"
          style={{ top: '80%', left: '80%', transition: 'transform 0.3s ease-out' }}
        />
        <div 
          ref={el => floatingShapesRef.current[4] = el}
          className="absolute w-20 h-20 rounded-full border-4 border-orange-300 opacity-30"
          style={{ top: '20%', left: '50%', transition: 'transform 0.3s ease-out' }}
        />
      </div>

      <div className="relative z-10">
        {/* Navigation */}
        <nav className="fixed top-0 left-0 right-0 z-40 bg-white/80 backdrop-blur-md border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-8 py-6 flex justify-between items-center">
            <div className="text-2xl font-black">AX</div>
            <div className="flex gap-8 items-center">
              <a href="#work" className="text-sm font-semibold hover:text-purple-600 transition-colors">Work</a>
              <a href="#about" className="text-sm font-semibold hover:text-purple-600 transition-colors">About</a>
              <a href="#contact" className="text-sm font-semibold hover:text-purple-600 transition-colors">Contact</a>
              <button className="px-6 py-2 bg-black text-white text-sm font-bold hover:bg-purple-600 transition-all rounded-full">
                Hire Me
              </button>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <div className="min-h-screen flex items-center justify-center px-8 pt-32">
          <div className="max-w-6xl w-full text-center">
            {/* Playful badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-100 to-cyan-100 rounded-full mb-8 animate-bounce">
              <span className="text-2xl">👋</span>
              <span className="text-sm font-bold text-gray-700">Available for projects</span>
            </div>

            <h1 className="text-8xl md:text-9xl font-black mb-6 leading-none">
              <span className="inline-block hover:rotate-12 transition-transform duration-300">C</span>
              <span className="inline-block hover:-rotate-6 transition-transform duration-300">r</span>
              <span className="inline-block hover:rotate-12 transition-transform duration-300">e</span>
              <span className="inline-block hover:-rotate-6 transition-transform duration-300">a</span>
              <span className="inline-block hover:rotate-12 transition-transform duration-300">t</span>
              <span className="inline-block hover:-rotate-6 transition-transform duration-300">i</span>
              <span className="inline-block hover:rotate-12 transition-transform duration-300">v</span>
              <span className="inline-block hover:-rotate-6 transition-transform duration-300">e</span>
              <br/>
              <span style={{
                background: 'linear-gradient(135deg, #8a2be2, #ff0080, #00ffff)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundSize: '200% 200%',
                animation: 'gradient 3s ease infinite'
              }}>
                Developer
              </span>
            </h1>

            <p className="text-2xl text-gray-600 mb-12 max-w-2xl mx-auto font-light">
              I craft delightful digital experiences that blend 
              <strong className="font-bold text-purple-600"> art</strong>, 
              <strong className="font-bold text-cyan-600"> code</strong>, and 
              <strong className="font-bold text-pink-600"> innovation</strong>
            </p>

            {/* Playful unexpected element - inspired by research */}
            <div className="flex justify-center mb-12">
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-purple-200 to-cyan-200 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500" />
                <div className="relative text-8xl animate-pulse cursor-pointer">
                  🚀
                </div>
              </div>
            </div>

            <div className="flex gap-4 justify-center">
              <button 
                onMouseEnter={() => setCursorSize(60)}
                onMouseLeave={() => setCursorSize(20)}
                className="px-10 py-5 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold text-lg rounded-full hover:scale-110 hover:rotate-3 transition-all shadow-2xl"
              >
                See My Work ✨
              </button>
              <button 
                onMouseEnter={() => setCursorSize(60)}
                onMouseLeave={() => setCursorSize(20)}
                className="px-10 py-5 border-4 border-black text-black font-bold text-lg rounded-full hover:bg-black hover:text-white hover:scale-110 hover:-rotate-3 transition-all"
              >
                Let's Talk 💬
              </button>
            </div>
          </div>
        </div>

        {/* Work Section - Bold Minimalism */}
        <div id="work" className="py-32 px-8 bg-gradient-to-b from-white to-purple-50">
          <div className="max-w-7xl mx-auto">
            <div className="mb-20">
              <div className="text-sm font-bold tracking-widest text-purple-600 mb-4">SELECTED WORK</div>
              <h2 className="text-7xl font-black text-gray-900 mb-4">
                Projects
              </h2>
              <div className="w-32 h-2 bg-gradient-to-r from-purple-600 to-cyan-500 rounded-full" />
            </div>

            <div className="space-y-8">
              {projects.map((project, i) => (
                <div
                  key={i}
                  onMouseEnter={() => {
                    setHoveredProject(i);
                    setCursorSize(80);
                  }}
                  onMouseLeave={() => {
                    setHoveredProject(null);
                    setCursorSize(20);
                  }}
                  className="group relative p-12 bg-white hover:bg-gradient-to-r hover:from-purple-50 hover:to-cyan-50 border-2 border-gray-100 hover:border-purple-600 rounded-3xl transition-all duration-500 cursor-pointer overflow-hidden"
                  style={{
                    transform: hoveredProject === i ? 'scale(1.02)' : 'scale(1)',
                  }}
                >
                  {/* Animated background on hover */}
                  <div 
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background: `radial-gradient(circle at ${mousePos.x}px ${mousePos.y}px, ${project.color}10, transparent 50%)`
                    }}
                  />

                  <div className="relative flex items-center justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-4 mb-4">
                        <div 
                          className="w-16 h-16 rounded-2xl"
                          style={{ 
                            background: `linear-gradient(135deg, ${project.color}, ${project.color}80)`,
                            transform: hoveredProject === i ? 'rotate(45deg) scale(1.2)' : 'rotate(0deg)',
                            transition: 'all 0.5s ease'
                          }}
                        />
                        <div>
                          <div className="text-sm font-bold text-gray-500">{project.type}</div>
                          <div className="text-xs text-gray-400">{project.year}</div>
                        </div>
                      </div>
                      
                      <h3 className="text-5xl md:text-6xl font-black text-gray-900 mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r transition-all" style={{
                        backgroundImage: hoveredProject === i ? `linear-gradient(135deg, ${project.color}, #8a2be2)` : 'none'
                      }}>
                        {project.name}
                      </h3>
                      
                      <p className="text-lg text-gray-600 max-w-xl">
                        {project.desc}
                      </p>
                    </div>

                    <div className="text-6xl opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:translate-x-4">
                      →
                    </div>
                  </div>

                  {/* Playful corner accent */}
                  <div 
                    className="absolute top-0 right-0 w-32 h-32 opacity-0 group-hover:opacity-20 transition-all duration-500"
                    style={{
                      background: `radial-gradient(circle, ${project.color}, transparent)`,
                      transform: hoveredProject === i ? 'scale(2)' : 'scale(1)',
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* About Section - Layered Elements */}
        <div id="about" className="py-32 px-8 bg-white relative overflow-hidden">
          {/* Decorative layered circles */}
          <div className="absolute top-20 right-20 w-96 h-96 rounded-full bg-purple-100 opacity-20 blur-3xl" />
          <div className="absolute bottom-20 left-20 w-96 h-96 rounded-full bg-cyan-100 opacity-20 blur-3xl" />

          <div className="max-w-6xl mx-auto relative z-10">
            <div className="grid md:grid-cols-2 gap-20 items-center">
              <div>
                <div className="text-sm font-bold tracking-widest text-cyan-600 mb-4">ABOUT ME</div>
                <h2 className="text-6xl font-black text-gray-900 mb-8">
                  Hi, I'm Alex 
                  <span className="inline-block animate-bounce">👋</span>
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed mb-6">
                  I'm an independent creative developer from <strong>Gothenburg, Sweden</strong>, 
                  with a passion for building beautiful, functional, and user-friendly digital experiences.
                </p>
                <p className="text-xl text-gray-600 leading-relaxed mb-8">
                  I combine technical expertise with creative vision to deliver 
                  exceptional results that make people say <em>"Wow!"</em> 🎨✨
                </p>

                {/* Fun stats */}
                <div className="grid grid-cols-3 gap-6 mb-8">
                  <div className="text-center p-6 bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl">
                    <div className="text-4xl font-black text-purple-600">50+</div>
                    <div className="text-sm font-semibold text-gray-600 mt-2">Projects</div>
                  </div>
                  <div className="text-center p-6 bg-gradient-to-br from-cyan-100 to-blue-100 rounded-2xl">
                    <div className="text-4xl font-black text-cyan-600">8</div>
                    <div className="text-sm font-semibold text-gray-600 mt-2">Years Exp</div>
                  </div>
                  <div className="text-center p-6 bg-gradient-to-br from-pink-100 to-orange-100 rounded-2xl">
                    <div className="text-4xl font-black text-pink-600">∞</div>
                    <div className="text-sm font-semibold text-gray-600 mt-2">Ideas</div>
                  </div>
                </div>

                <button className="px-8 py-4 bg-black text-white font-bold rounded-full hover:bg-purple-600 hover:scale-110 transition-all">
                  Download Resume 📄
                </button>
              </div>

              <div className="relative">
                {/* Playful skill badges - floating */}
                <div className="space-y-4">
                  {['React', 'Three.js', 'Figma', 'Node.js', 'AI/ML', 'TypeScript'].map((skill, i) => (
                    <div
                      key={i}
                      className="inline-block mr-3 mb-3 px-6 py-3 bg-white border-2 border-gray-200 rounded-full font-bold text-gray-800 hover:border-purple-600 hover:scale-110 hover:rotate-3 transition-all cursor-pointer shadow-lg"
                      style={{
                        animation: `float ${3 + i * 0.5}s ease-in-out infinite`,
                        animationDelay: `${i * 0.2}s`
                      }}
                    >
                      {skill}
                    </div>
                  ))}
                </div>

                {/* Unexpected playful element */}
                <div className="mt-12 p-8 bg-gradient-to-br from-yellow-100 to-orange-100 rounded-3xl border-4 border-yellow-400 transform rotate-2 hover:rotate-0 transition-all">
                  <div className="text-6xl mb-4">☕</div>
                  <p className="text-lg font-bold text-gray-800">
                    Coffee consumed: <span className="text-orange-600">~2,847 cups</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Section - Bold Typography */}
        <div id="contact" className="py-40 px-8 bg-gradient-to-br from-purple-900 via-pink-900 to-orange-900 text-white relative overflow-hidden">
          {/* Animated gradient shapes */}
          <div className="absolute inset-0 opacity-30">
            <div className="absolute w-96 h-96 bg-cyan-500 rounded-full blur-3xl animate-pulse" style={{ top: '10%', left: '20%' }} />
            <div className="absolute w-96 h-96 bg-purple-500 rounded-full blur-3xl animate-pulse" style={{ bottom: '10%', right: '20%', animationDelay: '1s' }} />
          </div>

          <div className="max-w-4xl mx-auto text-center relative z-10">
            <div className="text-sm font-bold tracking-widest text-cyan-300 mb-6">LET'S CREATE TOGETHER</div>
            
            <h2 className="text-7xl md:text-9xl font-black mb-12 leading-none">
              Ready to
              <br/>
              <span className="inline-block hover:scale-110 transition-transform">Build?</span>
            </h2>

            <p className="text-2xl mb-16 opacity-90 max-w-2xl mx-auto">
              I'm always excited to work on new projects and meet amazing people 🚀
            </p>

            <div className="flex flex-col md:flex-row gap-6 justify-center mb-12">
              <a 
                href="mailto:hello@alex.com"
                className="px-12 py-6 bg-white text-purple-900 font-black text-xl rounded-full hover:scale-110 hover:rotate-3 transition-all shadow-2xl"
              >
                Email Me ✉️
              </a>
              <a 
                href="#"
                className="px-12 py-6 border-4 border-white text-white font-black text-xl rounded-full hover:bg-white hover:text-purple-900 hover:scale-110 hover:-rotate-3 transition-all"
              >
                Schedule Call 📞
              </a>
            </div>

            {/* Social links */}
            <div className="flex gap-8 justify-center text-xl">
              <a href="#" className="hover:text-cyan-300 transition-colors hover:scale-125 transform">Twitter</a>
              <a href="#" className="hover:text-cyan-300 transition-colors hover:scale-125 transform">GitHub</a>
              <a href="#" className="hover:text-cyan-300 transition-colors hover:scale-125 transform">LinkedIn</a>
              <a href="#" className="hover:text-cyan-300 transition-colors hover:scale-125 transform">Dribbble</a>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="py-12 px-8 bg-black text-white">
          <div className="max-w-6xl mx-auto text-center">
            <p className="text-gray-400">
              Made with <span className="text-red-500 animate-pulse">❤️</span> in Gothenburg, Sweden
            </p>
            <p className="text-gray-600 text-sm mt-2">© 2024 Alex. All rights reserved.</p>
          </div>
        </footer>
      </div>

      {/* Loading */}
      {loading && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-white">
          <div className="text-center">
            <div className="text-8xl mb-8 animate-bounce">🎨</div>
            <div className="text-5xl font-black mb-4">Loading Magic...</div>
            <div className="w-64 h-2 bg-gray-200 rounded-full overflow-hidden mx-auto">
              <div className="h-full bg-gradient-to-r from-purple-600 via-pink-500 to-cyan-500 rounded-full animate-pulse" style={{ width: '70%' }}/>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
      `}</style>
    </div>
  );
};

export default CinematicPortfolio;