import React,{useState,useEffect} from 'react'
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {useParams,Link} from "react-router-dom";
import Loading from '../Components/Loading';
import Navbar from '../Components/Navbar';

export default function ImageDetail  () {
    const { date } = useParams();
    const [details, setDetails] = useState(null);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      const fetchDetails = async () => {
        try {
          const response = await fetch(
            `https://api.nasa.gov/planetary/apod?api_key=Zsv59foyVrapbCpInoyco7rnmPgDkw4bIaeutTdR&date=${date}`
          );
          const data = await response.json();
          setDetails(data);
        } catch (error) {
          console.error("Error fetching details:", error);
        } finally {
          setLoading(false);
        }
      };
      fetchDetails();
    }, [date]);
  
    if (loading) {
      return (
        <div className="min-h-screen bg-dark text-white flex items-center justify-center">
          <Loading/>
        </div>
      );
    }
  
    if (!details) {
      return (
        <div className="min-h-screen bg-dark text-white">
          <Navbar />
          <Container className="text-center py-20">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">L'Image n'est pas trouvée.</h3>
            <Link 
              to="/latest"
              className="inline-block px-6 py-3 rounded-full text-white font-semibold transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl"
              style={{
                background: 'linear-gradient(90deg, #455B9A, #5691B9)',
                boxShadow: '0 10px 25px rgba(86, 145, 185, 0.4)',
              }}
            >
              Retourner à l'archive
            </Link>
          </Container>
        </div>
      );
    }
  
    return (
      <div className="min-h-screen bg-white dark:bg-dark text-white font-['Inter',-apple-system,BlinkMacSystemFont,'Segoe_UI',Roboto,sans-serif]">
        <Navbar />
        <Container className="py-8 md:py-12 px-4 md:px-8 lg:px-16">
          {/* Back Button */}
          <Link 
            to="/latest"
            className="inline-flex items-center gap-2 mb-8 text-cyan hover:text-white transition-colors duration-300 group"
          >
            <span className="text-xl group-hover:-translate-x-1 transition-transform duration-300">←</span>
            <span className="font-medium">Retourner à l'archive</span>
          </Link>
        
          <Row className="justify-content-center">
            <Col lg={10}>
              {/* Image/Video Container */}
              <div 
                className="bg-panel/50 backdrop-blur-xl rounded-2xl overflow-hidden border border-cyan/20 shadow-2xl mb-8"
                style={{
                  boxShadow: '0 20px 60px rgba(0, 0, 0, 0.5), 0 0 40px rgba(162, 216, 246, 0.1)',
                }}
              >
                {details.media_type === "video" ? (
                  <div className="aspect-video w-full">
                    <iframe 
                      src={details.url} 
                      title="NASA Video" 
                      allowFullScreen
                      className="w-full h-full border-none rounded-2xl"
                    ></iframe>
                  </div>
                ) : (
                  <img 
                    src={details.hdurl || details.url} 
                    className="w-full h-auto object-cover rounded-2xl" 
                    alt={details.title} 
                  />
                )}
              </div>
              
              {/* Content Section */}
              <div className="bg-panel/30 backdrop-blur-lg rounded-2xl p-6 md:p-8 border border-cyan/10">
                <h1 
                  className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
                  style={{
                    background: 'linear-gradient(135deg, #fff 0%, #A2D8F6 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  {details.title}
                </h1>
                
                {/* Badges */}
                <div className="flex flex-wrap gap-3 mb-6">
                  <span className="inline-block px-4 py-2 rounded-full bg-cyan/20 border border-cyan/40">
                    <span className="text-cyan font-semibold text-sm">{details.date}</span>
                  </span>
                  {details.copyright && (
                    <span className="inline-block px-4 py-2 rounded-full bg-panel/50 border border-white/20">
                      <span className="text-white font-semibold text-sm">© {details.copyright}</span>
                    </span>
                  )}
                </div>
                
                {/* Explanation */}
                <p className="text-lg md:text-xl text-white leading-relaxed mb-6 text-justify">
                  {details.explanation}
                </p>
                
                {/* HD Quality Button */}
                {details.hdurl && (
                  <a 
                    href={details.hdurl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-block px-6 py-3 rounded-full text-white font-semibold transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl"
                    style={{
                      background: 'linear-gradient(90deg, #455B9A, #5691B9)',
                      boxShadow: '0 10px 25px rgba(86, 145, 185, 0.4)',
                    }}
                  >
                    Voir Qualité Originale
                  </a>
                )}
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  };