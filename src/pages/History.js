import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Navbar from '../Components/Navbar';
import Nav from "react-bootstrap/Nav";
const History = () => {
  const [expandedCard, setExpandedCard] = useState(null);
  
  // Data for History Section
  const timelineEvents =   [
    {
      year: '1957',
      title: 'Sputnik 1 Launch',
      desc: 'The Soviet Union launches the first artificial satellite into orbit. It transmitted radio pulses detectable on Earth, effectively launching the Space Age.',
      cause: 'Driven by the intense geopolitical rivalry of the Cold War and the scientific mandate of the International Geophysical Year to map the Earth\'s upper atmosphere.'
    },
    {
      year: '1961',
      title: 'First Human in Space',
      desc: 'Yuri Gagarin becomes the first human to journey into outer space aboard Vostok 1, completing one full orbit of the Earth.',
      cause: 'The escalation of the Space Race required the USSR to demonstrate the capability to sustain human life in microgravity before the United States.'
    },
    {
      year: '1969',
      title: 'Apollo 11 Moon Landing',
      desc: 'Neil Armstrong and Buzz Aldrin become the first humans to land on the Moon, collecting samples and deploying experiments.',
      cause: 'Motivated by President Kennedy\'s 1961 mandate to land a man on the Moon by the end of the decade to establish US technological superiority.'
    },
    {
      year: '1971',
      title: 'Salyut 1 Space Station',
      desc: 'The Soviet Union launches the world\'s first space station, allowing crews to live and work in space for extended periods.',
      cause: 'A strategic shift from the Moon race toward long-duration orbital habitation and the study of human physiology in prolonged weightlessness.'
    },
    {
      year: '1977',
      title: 'Voyager Program Launch',
      desc: 'NASA launches Voyager 1 and 2. They provided the first detailed images of Jupiter, Saturn, Uranus, and Neptune.',
      cause: 'Scientists utilized a rare planetary alignment occurring once every 175 years to execute a "Grand Tour" of the outer solar system using gravity assists.'
    },
    {
      year: '1990',
      title: 'Hubble Space Telescope',
      desc: 'Discovery deploys the Hubble Space Telescope, revolutionizing astronomy by capturing images without atmospheric distortion.',
      cause: 'The scientific need to overcome the blurring effect of Earth\'s atmosphere to observe the age of the universe and distant galaxies.'
    },
    {
      year: '1998',
      title: 'ISS Construction Begins',
      desc: 'The first component of the International Space Station is launched, creating a permanent human presence in orbit.',
      cause: 'A geopolitical move to foster international cooperation and pool resources between the US, Russia, Europe, Japan, and Canada for a long-term microgravity lab.'
    },
    {
      year: '2012',
      title: 'Curiosity Rover Landing',
      desc: 'NASA’s Curiosity rover lands on Mars to investigate the planet\'s climate and geology.',
      cause: 'The necessity to determine if Mars ever offered environmental conditions favorable for microbial life and to search for past water.'
    },
    {
      year: '2015',
      title: 'SpaceX Falcon 9 Landing',
      desc: 'SpaceX successfully lands an orbital class rocket booster, proving rockets can be reused.',
      cause: 'The economic imperative to drastically reduce the cost of space access by making rockets reusable like airplanes.'
    },
    {
      year: '2021',
      title: 'James Webb Space Telescope',
      desc: 'The JWST is launched to observe the universe in the infrared spectrum, seeing through dust clouds to the first galaxies.',
      cause: 'The need to observe "redshifted" light from the very early universe (13.5 billion years ago) which is invisible to optical telescopes.'
    }
  ];

  // Data for Discoveries Section
  const discoveries = [
     
      {
        src:"https://upload.wikimedia.org/wikipedia/commons/6/6f/CMB_Timeline300_no_WMAP.jpg",
        year: '1929',
        title: 'The Expanding Universe',
        desc: 'Edwin Hubble observes that distant galaxies are moving away from Earth, proving the universe is not static but expanding.',
        cause: 'The conflict between Einstein’s earlier static models and the observable "redshift" of light from galaxies, which demanded a new physical model for the universe\'s behavior.',
        link:"https://en.wikipedia.org/wiki/Expansion_of_the_universe"
      },
      {
        src:"https://upload.wikimedia.org/wikipedia/commons/0/04/Cosmic_Microwave_Background_%28CMB%29.jpeg",
        link:"https://en.wikipedia.org/wiki/Cosmic_microwave_background",
        year: '1964',
        title: 'Cosmic Microwave Background (CMB)',
        desc: 'Penzias and Wilson accidentally detect the faint "afterglow" of the Big Bang, providing the strongest evidence for the universe\'s explosive origin.',
        cause: 'The need to resolve the fierce debate between the "Big Bang" theory and the "Steady State" theory by finding the fossil radiation predicted to exist if the universe began in a hot, dense state.'
      },
      {
        src:"https://upload.wikimedia.org/wikipedia/commons/4/48/Hr8799_orbit_hd.gif",
        link:"https://en.wikipedia.org/wiki/Exoplanet",
        year: '1992',
        title: 'First Exoplanets Confirmed',
        desc: 'Aleksander Wolszczan and Dale Frail confirm the first planets outside our solar system, orbiting a pulsar (PSR B1257+12).',
        cause: 'The fundamental existential drive to answer "Are we alone?" and the scientific necessity to prove that planetary formation is a universal phenomenon, not unique to the Sun.'
      },
      {
        src:"https://images.theconversation.com/files/659013/original/file-20250401-56-7g6lmi.png?ixlib=rb-4.1.0&rect=0%2C25%2C856%2C427&q=75&auto=format&w=1336&h=668&fit=crop&dpr=1",
        link:"https://en.wikipedia.org/wiki/Dark_energy",
        year: '1998',
        title: 'Dark Energy Discovery',
        desc: 'Two independent teams discover that the expansion of the universe is actually accelerating, not slowing down, due to a mysterious force named Dark Energy.',
        cause: 'Scientists were attempting to measure how much gravity was slowing the universe\'s expansion to predict if it would eventually collapse (The Big Crunch), but the data unexpectedly proved the opposite.'
      },
      {
        src:"https://upload.wikimedia.org/wikipedia/commons/b/b4/Plan_view_of_Korolev_crater.jpg",
        link:"https://en.wikipedia.org/wiki/Water_on_Mars",
        year: '2015',
        title: 'Liquid Water on Mars',
        desc: 'NASA confirms evidence of liquid water flowing on present-day Mars (Recurring Slope Lineae), raising the odds of microbial life.',
        cause: 'The biological imperative that "where there is water, there is life," driving researchers to explain seasonal dark streaks on Martian slopes that couldn\'t be explained by dry dust slides.'
      },
      {
        src:"https://upload.wikimedia.org/wikipedia/commons/d/db/LIGO_measurement_of_gravitational_waves.svg",
        link:"https://en.wikipedia.org/wiki/First_observation_of_gravitational_waves",
        year: '2016',
        title: 'Gravitational Waves Detected',
        desc: 'LIGO detects ripples in the fabric of spacetime caused by two colliding black holes, confirming Einstein’s century-old prediction.',
        cause: 'The limitation of traditional astronomy: light cannot escape everything (like black holes). Scientists needed a new sense—"hearing" spacetime ripples—to observe invisible cosmic events.'
      },
      {
        src:"https://cdn.eso.org/images/screen/eso1907a.jpg",
        link:"https://en.wikipedia.org/wiki/Black_hole",
        year: '2019',
        title: 'First Image of a Black Hole',
        desc: 'The Event Horizon Telescope (EHT) captures the first-ever image of a black hole\'s shadow in the galaxy M87.',
        cause: 'The challenge to move black holes from theoretical mathematics to observable reality, requiring a telescope the size of the Earth (via a global network of dishes) to resolve the event horizon.'
      }
    
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-dark text-white font-['Inter',-apple-system,BlinkMacSystemFont,'Segoe_UI',Roboto,sans-serif] ">
      <Navbar/>
      <section className="relative py-24 md:py-32 px-4 md:px-8 lg:px-16">
        {/* Background Effects */}
        <div 
          className="absolute inset-0 -z-10"
          style={{
            background: 'radial-gradient(circle at 50% 50%, rgba(21, 38, 81, 0.2) 0%, rgba(2, 2, 8, 0) 70%)',
          }}
        ></div>

        <Container>
          <Row className="justify-content-center">
            <Col md={8} className="text-center">
              <h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
              style={{
                  background: 'linear-gradient(135deg, #fff 0%, #A2D8F6 50%, #EC4899 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                BEYOND THE <span className="text-pink">HORIZON</span>
              </h1>
              <p className="text-lg md:text-xl text-muted mb-8 max-w-3xl mx-auto leading-relaxed">
                Explore the monumental history of space exploration, from the first satellite to the edges of the visible universe.
              </p>
              <button 
                className="px-6 py-3 md:px-8 md:py-4 rounded-full text-white text-sm md:text-base font-bold transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl"
                style={{
                  background: 'linear-gradient(90deg, #455B9A, #5691B9, #EC4899)',
                  boxShadow: '0 10px 25px rgba(236, 72, 153, 0.4)',
                }}
              >
                Start the Journey
              </button>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Timeline Section */}
      <section id="history" className="py-16 md:py-20 px-4 md:px-8 lg:px-16">
        <Container>
          <div className="text-center mb-12">
            <h2 
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
              style={{
                background: 'linear-gradient(135deg, #A2D8F6 0%, #EC4899 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Historical Milestones
            </h2>
            <p className="text-lg text-muted mb-0">
              The steps that took us from Earth to the Stars
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {timelineEvents.map((event, index) => {
              const isExpanded = expandedCard === index;
              return (
                <div 
                  key={index} 
                  className={`mb-4 cursor-pointer transition-all duration-300 ${isExpanded ? 'md:col-span-3' : ''}`}
                >
                  <div 
                    className={`h-full bg-panel/50 backdrop-blur-xl rounded-2xl border transition-all duration-300 transform ${
                      isExpanded ? 'p-4 sm:p-6 md:p-8 scale-100 md:scale-105 z-50' : 'p-4 sm:p-6 hover:-translate-y-2 hover:shadow-2xl'
                    }`}
                    style={{
                      borderColor: index % 2 === 0 
                        ? (isExpanded ? 'rgba(162, 216, 246, 0.6)' : 'rgba(162, 216, 246, 0.2)')
                        : (isExpanded ? 'rgba(236, 72, 153, 0.6)' : 'rgba(236, 72, 153, 0.2)'),
                      boxShadow: isExpanded
                        ? index % 2 === 0 
                          ? '0 20px 60px rgba(0, 0, 0, 0.5), 0 0 40px rgba(162, 216, 246, 0.3)' 
                          : '0 20px 60px rgba(0, 0, 0, 0.5), 0 0 40px rgba(236, 72, 153, 0.3)'
                        : index % 2 === 0 
                          ? '0 10px 30px rgba(0, 0, 0, 0.3), 0 0 20px rgba(162, 216, 246, 0.05)' 
                          : '0 10px 30px rgba(0, 0, 0, 0.3), 0 0 20px rgba(236, 72, 153, 0.05)',
                    }}
                    onClick={() => setExpandedCard(isExpanded ? null : index)}
                    onMouseEnter={(e) => {
                      if (!isExpanded) {
                        e.currentTarget.style.borderColor = index % 2 === 0 ? 'rgba(162, 216, 246, 0.4)' : 'rgba(236, 72, 153, 0.4)';
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!isExpanded) {
                        e.currentTarget.style.borderColor = index % 2 === 0 ? 'rgba(162, 216, 246, 0.2)' : 'rgba(236, 72, 153, 0.2)';
                      }
                    }}
                  >
                    <div 
                      className="inline-block px-4 py-2 rounded-full mb-4 border"
                      style={{
                        backgroundColor: index % 2 === 0 ? 'rgba(162, 216, 246, 0.2)' : 'rgba(236, 72, 153, 0.2)',
                        borderColor: index % 2 === 0 ? 'rgba(162, 216, 246, 0.4)' : 'rgba(236, 72, 153, 0.4)',
                      }}
                    >
                      <span 
                        className="font-bold text-sm"
                        style={{
                          color: index % 2 === 0 ? '#A2D8F6' : '#EC4899',
                        }}
                      >
                        {event.year}
                      </span>
                    </div>
                    <h3 className={`font-bold text-white mb-3 mt-2 ${isExpanded ? 'text-2xl sm:text-3xl md:text-4xl' : 'text-lg sm:text-xl md:text-2xl'}`}>
                      {event.title}
                    </h3>
                    <p className={`text-muted leading-relaxed text-sm sm:text-base ${isExpanded ? 'text-base sm:text-lg mb-4' : ''}`}>
                      {event.desc}
                    </p>
                    {isExpanded && (
                      <div className="mt-6 pt-6 border-t" style={{ borderColor: 'rgba(255, 255, 255, 0.1)' }}>
                        <h4 
                          className="text-xl font-bold mb-3"
                          style={{
                            color: index % 2 === 0 ? '#A2D8F6' : '#EC4899',
                          }}
                        >
                          The Cause
                        </h4>
                        <p className="text-muted leading-relaxed text-lg">
                          {event.cause}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Divider */}
      <div 
        className="border-t my-8"
        style={{
          borderImage: 'linear-gradient(90deg, transparent, rgba(236, 72, 153, 0.3), rgba(162, 216, 246, 0.3), transparent) 1',
        }}
      ></div>

      {/* Discoveries Section */}
      <section id="discoveries" className="py-16 md:py-20 px-4 md:px-8 lg:px-16">
        <Container>
          <div className="text-center mb-12">
            <h2 
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
              style={{
                background: 'linear-gradient(135deg, #EC4899 0%, #A2D8F6 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Major Discoveries
            </h2>
            <p className="text-lg text-muted mb-0">
              Unlocking the secrets of the Universe
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {discoveries.map((item, index) => (
              <div key={index} className="mb-4">
                <div 
                  className="h-full bg-panel/50 backdrop-blur-xl rounded-2xl overflow-hidden border transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl group"
                  style={{
                    borderColor: index % 2 === 0 ? 'rgba(236, 72, 153, 0.2)' : 'rgba(162, 216, 246, 0.2)',
                    boxShadow: index % 2 === 0 
                      ? '0 10px 30px rgba(0, 0, 0, 0.3), 0 0 20px rgba(236, 72, 153, 0.05)' 
                      : '0 10px 30px rgba(0, 0, 0, 0.3), 0 0 20px rgba(162, 216, 246, 0.05)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = index % 2 === 0 ? 'rgba(236, 72, 153, 0.4)' : 'rgba(162, 216, 246, 0.4)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = index % 2 === 0 ? 'rgba(236, 72, 153, 0.2)' : 'rgba(162, 216, 246, 0.2)';
                  }}
                >
                  <div className="relative overflow-hidden">
                    <img 
                      src={item.src} 
                      alt={item.title}
                      className="w-full h-48 object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500"
                    />
                    <div 
                      className="absolute inset-0 bg-gradient-to-t transition-all duration-300"
                      style={{
                        background: index % 2 === 0 
                          ? 'linear-gradient(to top, rgba(236, 72, 153, 0.3) 0%, transparent 100%)'
                          : 'linear-gradient(to top, rgba(2, 2, 8, 0.6) 0%, transparent 100%)',
                      }}
                    ></div>
                  </div>
                  <div className="p-6">
                    <div 
                      className="inline-block px-3 py-1 rounded-full mb-3 text-xs font-semibold"
                      style={{
                        backgroundColor: index % 2 === 0 ? 'rgba(236, 72, 153, 0.2)' : 'rgba(162, 216, 246, 0.2)',
                        color: index % 2 === 0 ? '#EC4899' : '#A2D8F6',
                      }}
                    >
                      {item.year}
                    </div>
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-3">
                      {item.title}
                    </h3>
                    <p className="text-muted leading-relaxed mb-4 text-sm sm:text-base">
                      {item.desc}
                    </p>
                    <Nav.Link 
                    href={item.link}
                      className="px-4 py-2 sm:px-6 sm:py-2.5 rounded-full text-white font-semibold text-xs sm:text-sm transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-lg"
                      style={{
                        background: index % 2 === 0 
                          ? 'linear-gradient(90deg, #EC4899, #F472B6)'
                          : 'linear-gradient(90deg, #455B9A, #5691B9)',
                        boxShadow: index % 2 === 0 
                          ? '0 5px 15px rgba(236, 72, 153, 0.3)'
                          : '0 5px 15px rgba(86, 145, 185, 0.3)',
                      }}
                    >
                      Learn More
                    </Nav.Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center border-t border-white/10 mt-16">
        <p className="text-muted m-0">
          © 2025 AstroNet, Copyright reserved
        </p>
      </footer>
    </div>
  );
};

export default History;
