import React from "react";
import Navbar from "./Navbar";

const MoonSection = () => {
    return (
      <div className="bg-white dark:bg-dark m-0 p-0 box-border font-['Inter',-apple-system,BlinkMacSystemFont,'Segoe_UI',Roboto,sans-serif] bg-dark text-white min-h-screen md:h-screen overflow-hidden flex flex-col relative">
        
        <div 
          className="absolute -z-10 pointer-events-none"
          style={{
            width: '300px',
            height: '300px',
            background: 'radial-gradient(circle, rgba(21, 38, 81, 0.4) 0%, rgba(2, 2, 8, 0) 70%)',
            top: '-50px',
            left: '-50px',
          }}
        ></div>
        
      
        <div 
          className="absolute w-full h-full -z-10"
          style={{
            backgroundImage: `
              radial-gradient(1px 1px at 50px 50px, white, transparent),
              radial-gradient(1px 1px at 150px 250px, white, transparent),
              radial-gradient(2px 2px at 350px 150px, white, transparent),
              radial-gradient(1px 1px at 750px 450px, white, transparent)
            `,
            backgroundSize: '550px 550px',
            opacity: 0.3,
          }}
        ></div>

        <Navbar/>
  
        <main className="flex-1 flex items-center px-4 sm:px-8 md:px-16 relative py-8 md:py-0">
          <div className="w-full md:w-[45%] z-10">
            <h1 
              className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.5rem] leading-[1.1] mb-4 md:mb-6 bg-gradient-to-br from-[#020208] to-[#152651] dark:from-white dark:to-[#A2D8F6] "
              style={{
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Discover the <br className="hidden sm:block" /> Universe
            </h1>
            <p className="text-muted leading-relaxed mb-6 md:mb-12 max-w-[400px] text-base sm:text-lg">
              Embark on a journey through the cosmos. Experience the silence of space and the beauty of distant stars.
            </p>
            <button 
              className="border-none px-6 py-3 sm:px-8 sm:py-3 md:px-10 md:py-4 rounded-[50px] bg-gradient-to-r from-[#455B9A] to-[#5691B9] text-white text-sm sm:text-base font-semibold cursor-pointer transition-transform hover:-translate-y-0.5"
              style={{                
                boxShadow: '0 10px 25px rgba(86, 145, 185, 0.4)',
              }}
            >
              Start Expedition
            </button>
          </div>
  
          <div 
            className="hidden md:flex absolute justify-center items-center pointer-events-none"
            style={{
              right: '-10%',
              top: '50%',
              transform: 'translateY(-50%)',
              width: '60%',
              height: '80%',
            }}
          >
            {/* Orbit 2 */}
            <div 
              className="absolute border rounded-full border-blue-light dark:opacity-5 dark:border-blue-light opacity-30"
              style={{
                width: '500px',
                height: '500px',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
              }}
              
            ></div>
            
            {/* Orbit 1 */}
            <div 
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border rounded-full border-blue-light dark:opacity-5 dark:border-blue-light opacity-30"
              style={{
                width: '350px',
                height: '350px',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
              }}
            ></div>
            
            {/* Planet Glow */}
            <div 
              className="absolute"
              style={{
                width: '280px',
                height: '280px',
                background: 'radial-gradient(circle, #152651, transparent 70%)',
              }}
            ></div>
            
            {/* Planet */}
            <div 
              className="rounded-full relative z-[2]"
              style={{
                width: '250px',
                height: '250px',
                background: 'linear-gradient(135deg, #152651, #000)',
                boxShadow: 'inset -20px -20px 60px rgba(0,0,0,0.8), 0 0 50px rgba(162, 216, 246, 0.1)',
              }}
            ></div>
  
            <div 
              className="absolute bg-white/5 backdrop-blur-[10px] p-3 rounded-xl border border-white/10 text-muted text-xs flex gap-2 items-center z-[5] animate-float"
              style={{
                top: '30%',
                right: '20%',
                animationDelay: '0s',
              }}
            >
              <div 
                className="rounded-full"
                style={{
                  width: '6px',
                  height: '6px',
                  background: '#A2D8F6',
                  boxShadow: '0 0 10px #A2D8F6',
                }}
              ></div>
              <span>Kepler-186f</span>
            </div>
            
            <div 
              className="absolute bg-white/5 backdrop-blur-[10px] p-3 rounded-xl border border-white/10 text-muted text-xs flex gap-2 items-center z-[5] animate-float"
              style={{
                bottom: '25%',
                right: '35%',
                animationDelay: '2s',
              }}
            >
              <div 
                className="rounded-full"
                style={{
                  width: '6px',
                  height: '6px',
                  background: '#5691B9',
                  boxShadow: '0 0 10px #5691B9',
                }}
              ></div>
              <span>Distance: 500 Ly</span>
            </div>
          </div>
        </main>
      </div>
    );
  };
  
  export default MoonSection;