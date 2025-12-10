import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Dropdown from "react-bootstrap/Dropdown";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/esm/Button";
import Spinner from "react-bootstrap/Spinner";
import Gallerie from "../Components/Gallerie";
import Loading from "../Components/Loading";
import Navbar from "../Components/Navbar";

export default function LatestPhotos() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [startDate, setStartDate] = useState("2023-10-01");
  const [endDate, setEndDate] = useState("2023-10-15");

  const fetchdata = async (start, end) => {
    setLoading(true);
    try {
      let url = `https://api.nasa.gov/planetary/apod?api_key=Zsv59foyVrapbCpInoyco7rnmPgDkw4bIaeutTdR&start_date=${start}&end_date=${end}`;
      let response = await fetch(url);
      const result = await response.json();

      if (result.error || (result.msg && result.code)) {
        // Basic API error handling
        console.error("API Error:", result);
        setData([]);
      } else if (Array.isArray(result)) {
        setData(result);
      } else {
        // Fallback if API returns single object
        setData([result]);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchdata(startDate, endDate);
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    fetchdata(startDate, endDate);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-dark text-white font-['Inter',-apple-system,BlinkMacSystemFont,'Segoe_UI',Roboto,sans-serif]">
      <Container className="pt-8 pb-12 px-4 md:px-6">
        <Navbar/>
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4 px-2 sm:px-4 md:px-10">
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold dark:text-white text-dark mb-2">
              Captures
            </h2>
            <p className="text-muted text-xs sm:text-sm md:text-base">
              Explore the cosmos through NASA's Astronomy Picture of the Day archive
            </p>
          </div>

          <Dropdown autoClose="outside">
            <Dropdown.Toggle 
              className="bg-blue hover:bg-cyan text-white border-0 px-4 py-2 sm:px-6 sm:py-2.5 rounded-full text-sm sm:text-base font-medium shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2"
              style={{
                boxShadow: '0 10px 25px rgba(86, 145, 185, 0.4)',
              }}
              id="dropdown-basic"
            >
              <span className="text-base sm:text-lg">📅</span>
              <span>Filter Date</span>
            </Dropdown.Toggle>

            <Dropdown.Menu
              className="p-4 sm:p-6 shadow-2xl rounded-xl border-0 w-[90vw] sm:w-auto sm:min-w-[320px] bg-panel z-50"
              style={{
                boxShadow: '0 20px 60px rgba(0, 0, 0, 0.5)',
                border: '1px solid rgba(162, 216, 246, 0.1)',
              }}
            >
              <Form onSubmit={handleSearch}>
                <Form.Group className="mb-4" controlId="formStartDate">
                  <Form.Label className="block mb-2 text-sm font-semibold text-white">
                    Start Date
                  </Form.Label>
                  <Form.Control
                    type="date"
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-lg border-2 bg-dark text-white border-blue/30 focus:border-cyan focus:ring-2 focus:ring-cyan/20 transition-all duration-300 outline-none"
                    style={{
                      borderColor: 'rgba(86, 145, 185, 0.3)',
                    }}
                  />
                </Form.Group>

                <Form.Group className="mb-5" controlId="formEndDate">
                  <Form.Label className="block mb-2 text-sm font-semibold text-white">
                    End Date
                  </Form.Label>
                  <Form.Control
                    type="date"
                    value={endDate}
                    onChange={(e) => setEndDate(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-lg border-2 bg-dark text-white border-blue/30 focus:border-cyan focus:ring-2 focus:ring-cyan/20 transition-all duration-300 outline-none"
                    style={{
                      borderColor: 'rgba(86, 145, 185, 0.3)',
                    }}
                  />
                </Form.Group>

                <Button 
                  type="submit" 
                  className="w-full text-white font-semibold py-2.5 px-6 rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300 border-0"
                  style={{
                    background: 'linear-gradient(90deg, #455B9A, #5691B9)',
                    boxShadow: '0 10px 25px rgba(86, 145, 185, 0.4)',
                  }}
                >
                  Search Cosmos
                </Button>
              </Form>
            </Dropdown.Menu>
          </Dropdown>
        </div>

        {/* Content Section */}
        <div className="mt-8">
          {loading ? (
            <div className="flex justify-center items-center py-20">
              <Loading />
            </div>
          ) : (
            <Gallerie data={data} />
          )}
        </div>
      </Container>
    </div>
  );
}
