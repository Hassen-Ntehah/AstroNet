import React ,{useState} from 'react'
import Container from "react-bootstrap/Container";
import {Link} from "react-router-dom";
import Loading from './Loading';

export default function Gallerie ({ data }){
    const [hoveringon, sethoveringon] = useState("");
  
    return (
      <Container className="pb-5 px-4 md:px-8">
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6' >
          {data && data.length > 0 ? (
            data.map((d, index) => (
              <div
                className="position-relative mb-4"
                onMouseEnter={() => sethoveringon(d.title)}
                onMouseLeave={() => sethoveringon("")}
                key={index}
              >
                <Link 
                  to={`/image/${d.date}`} 
                  className="block no-underline group"
                >
                  <div 
                    className="relative h-full overflow-hidden rounded-xl bg-dark border-2 hover:border-cyan transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl"
                    style={{
                      borderColor: 'rgba(86, 145, 185, 0.3)',
                      boxShadow: '0 0 20px rgba(0, 0, 0, 0.3)',
                    }}
                  >
                    {d.media_type === "image" ? (
                      <img 
                        src={d.url} 
                        alt={d.title}
                        className="w-full h-[250px] sm:h-[300px] object-cover transition-transform duration-500 group-hover:scale-110"
                        style={{
                          borderColor: 'transparent',
                        }}
                      />
                    ) : (
                      <div 
                        className="w-full h-[250px] sm:h-[300px] flex items-center justify-center rounded-xl"
                        style={{
                          background: 'linear-gradient(135deg, #020208, #152651)',
                          border: '1px solid rgba(86, 145, 185, 0.3)',
                        }}
                      >
                        <div className="text-center">
                          <div className="text-3xl sm:text-4xl mb-2">🎬</div>
                          <span className="text-white text-sm sm:text-base font-medium">Video Content</span>
                        </div>
                      </div>
                    )}
                    
                    {hoveringon === d.title && (
                      <div 
                        className="absolute bottom-3 left-3 right-3 backdrop-blur-md text-white p-4 rounded-lg border-2 text-center pointer-events-none shadow-xl transition-opacity duration-300 opacity-100"
                        style={{
                          background: 'rgba(11, 13, 23, 0.95)',
                          borderColor: 'rgba(162, 216, 246, 0.5)',
                          boxShadow: '0 10px 30px rgba(0, 0, 0, 0.5)',
                        }}
                      >
                        <strong 
                          className="block text-sm md:text-base font-semibold text-white mb-1"
                          style={{
                            display: '-webkit-box',
                            WebkitLineClamp: 2,
                            WebkitBoxOrient: 'vertical',
                            overflow: 'hidden',
                          }}
                        >
                          {d.title}
                        </strong>
                        <small className="text-xs text-muted font-medium">
                          {d.date}
                        </small>
                      </div>
                    )}
                  </div>
                </Link>
              </div>
            ))
          ) : (
            <div className="text-center w-100 mt-12 py-12">
              <Loading/>
            </div>
          )}
        </div>
      </Container>
    );
  };
  
