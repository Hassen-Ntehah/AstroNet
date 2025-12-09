import React ,{useState} from 'react'
import Container from "react-bootstrap/Container";
import Spinner from "react-bootstrap/Spinner";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import {Link} from "react-router-dom";
import animationData from "../rocket launch.json"
import Lottie from "lottie-react";
import Loading from './Loading';

export default function Gallerie ({ data }){
    const [hoveringon, sethoveringon] = useState("");
  
    return (
      <Container className="pb-5">
        <div className='grid grid-cols-3 sm:grid-cols-3 gap-x-2' >
          {data && data.length > 0 ? (
            data.map((d, index) => (
              <Col
                className="position-relative mb-4 "
                onMouseEnter={() => sethoveringon(d.title)}
                onMouseLeave={() => sethoveringon("")}
                key={index}
                xs={12}
                md={6}
                lg={4}
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
                        className="w-full h-[300px] object-cover transition-transform duration-500 group-hover:scale-110"
                        style={{
                          borderColor: 'transparent',
                        }}
                      />
                    ) : (
                      <div 
                        className="w-full h-[300px] flex items-center justify-center rounded-xl"
                        style={{
                          background: 'linear-gradient(135deg, #020208, #152651)',
                          border: '1px solid rgba(86, 145, 185, 0.3)',
                        }}
                      >
                        <div className="text-center">
                          <div className="text-4xl mb-2">🎬</div>
                          <span className="text-white font-medium">Video Content</span>
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
              </Col>
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
  
