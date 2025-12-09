import React from "react";
import Navbar from "./Navbar";

const HomeTest = () => {
    return (
      <div className="bg-white dark:bg-dark m-0 p-0 box-border font-['Inter',-apple-system,BlinkMacSystemFont,'Segoe_UI',Roboto,sans-serif] bg-dark text-white h-screen overflow-hidden flex flex-col relative">
        
        <div 
          className="absolute -z-10 pointer-events-none"
          style={{
            width: '600px',
            height: '600px',
            background: 'radial-gradient(circle, rgba(21, 38, 81, 0.4) 0%, rgba(2, 2, 8, 0) 70%)',
            top: '-100px',
            left: '-100px',
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
  
        <main className="flex-1 flex items-center px-16 relative">
          <div className="w-[45%] z-10">
            <h1 
              className="text-[4.5rem] leading-[1.1] mb-6 bg-gradient-to-br from-[#020208] to-[#152651] dark:from-white dark:to-[#A2D8F6] "
              style={{
                // background: 'linear-gradient(135deg, #fff 0%, #A2D8F6 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Discover the <br /> Universe
            </h1>
            <p className="text-muted leading-relaxed mb-12 max-w-[400px] text-lg">
              Embark on a journey through the cosmos. Experience the silence of space and the beauty of distant stars.
            </p>
            <button 
              className="border-none px-10 py-4 rounded-[50px] bg-gradient-to-r from-[#455B9A] to-[#5691B9] text-white font-semibold cursor-pointer transition-transform hover:-translate-y-0.5"
              style={{
                // background: 'linear-gradient(90deg, #455B9A, #5691B9)',
                
                boxShadow: '0 10px 25px rgba(86, 145, 185, 0.4)',
              }}
            >
              Start Expedition
            </button>
          </div>
  
          <div 
            className="absolute flex justify-center items-center pointer-events-none"
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
                width: '700px',
                height: '700px',
                // borderColor: 'rgba(162, 216, 246, 0.05)',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
              }}
            ></div>
            
            {/* Orbit 1 */}
            <div 
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] border rounded-full  border-blue-light dark:opacity-5 dark:border-blue-light opacity-30"
              style={{
                width: '500px',
                height: '500px',
                // borderColor: 'rgba(162, 216, 246, 0.1)',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
              }}
            ></div>
            
            {/* Planet Glow */}
            <div 
              className="absolute"
              style={{
                width: '400px',
                height: '400px',
                background: 'radial-gradient(circle, #152651, transparent 70%)',
              }}
            ></div>
            
            {/* Planet */}
            <div 
              className="rounded-full relative z-[2]"
              style={{
                width: '350px',
                height: '350px',
                background: 'linear-gradient(135deg, #152651, #000)',
                boxShadow: 'inset -20px -20px 60px rgba(0,0,0,0.8), 0 0 50px rgba(162, 216, 246, 0.1)',
              }}
            ></div>
  
            {/* Float Card 1 */}
            <div 
              className="absolute bg-white/5 backdrop-blur-[10px] p-4 rounded-xl border border-white/10 text-muted text-sm flex gap-2.5 items-center z-[5] animate-float"
              style={{
                top: '30%',
                right: '20%',
                animationDelay: '0s',
              }}
            >
              <div 
                className="rounded-full"
                style={{
                  width: '8px',
                  height: '8px',
                  background: '#A2D8F6',
                  boxShadow: '0 0 10px #A2D8F6',
                }}
              ></div>
              <span>Kepler-186f</span>
            </div>
            
            {/* Float Card 2 */}
            <div 
              className="absolute bg-white/5 backdrop-blur-[10px] p-4 rounded-xl border border-white/10 text-muted text-sm flex gap-2.5 items-center z-[5] animate-float"
              style={{
                bottom: '25%',
                right: '35%',
                animationDelay: '2s',
              }}
            >
              <div 
                className="rounded-full"
                style={{
                  width: '8px',
                  height: '8px',
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
  
  export default HomeTest;