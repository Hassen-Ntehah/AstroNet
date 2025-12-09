import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import brands from "./images/brands.webp";
import Loading from "./Components/Loading";
import HomeTest from "./Components/Hometest";
import planet from "./icons/saturn.png";
import satelite from "./icons/satellite (1).png";
import telescope from "./icons/telescope (1).png";

export default function Home() {
  const [dailyPic, setDailyPic] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const fetchDaily = async () => {
      try {
        const response = await fetch(
          "https://api.nasa.gov/planetary/apod?api_key=Zsv59foyVrapbCpInoyco7rnmPgDkw4bIaeutTdR"
        );
        const data = await response.json();
        setDailyPic(data);
        setLoading(false);
        // Trigger fade-in animation
        setTimeout(() => setIsVisible(true), 100);
      } catch (error) {
        console.error("Error fetching daily pic:", error);
        setLoading(false);
      }
    };
    fetchDaily();
  }, []);
  let physicsOfTheCosmos = [
    {
      title: "LEARN THE NIGHT SKY",
      description: "12 Handy Tips For Generating Leads Through Cold Calling",
      src: satelite,
    },
    {
      title: "OBSERVING GUIDANCE",
      description: "Where To Look For Cheap Brochure Printing Services",
      src:telescope
    },
    {
      title: "ASTROPHOTOGRAPHY TIPS",
      description: "Compatible Inkjet Cartridge Which One Will You Choose",
      src:planet
    },
  ];
  return (
    <div className="bg-white dark:bg-dark text-white font-['Inter',-apple-system,BlinkMacSystemFont,'Segoe_UI',Roboto,sans-serif] overflow-x-hidden">
      <HomeTest />

      <div className="flex flex-col items-center justify-around h-screen bg-white dark:bg-dark ">
          <div className="flex flex-col items-center">
          <h4
            className="text-5xl md:text-5xl text-dark dark:text-cyan font-semibold mb-6"
            style={{
              // background: "linear-gradient(135deg, #fff 0%, #A2D8F6 100%)",
              // WebkitBackgroundClip: "text",
              // WebkitTextFillColor: "transparent",
              // backgroundClip: "text",
            }}
          >
            PHYSICS OF THE COSMOS
          </h4>
          <p className="text-center text-gray-400">
            You can also freely advertise with us, exchange links with us, or be
            a member of our webring when you <br /> register. When you get to be
            a part of our webring, you get free exposure/traffic as visitors
            click on the <br /> other member sites of the webring. You can
            advertise your properties for sale or lease with us. And since{" "}
            <br /> we are constantly on-line and browsing the web,
          </p>
          </div>
          <div className="grid grid-cols-3">
            {physicsOfTheCosmos.map((c) => {
            return  <div key={c.title} className="flex flex-col items-center justify-center gap-2 w-3/4">
                <img src={c.src} width={80}/>
                <p className="text-lg text-bold text-gray-600 dark:text-white">{c.title}</p>
                <p className="text-center text-gray-400 text-xs">{c.description}</p>
              </div>;
            })}
          </div>
        </div>
      <section className="relative min-h-screen flex items-center justify-center py-20 px-4 md:px-8 lg:px-16">
        {/* Background Effects */}
        <div
          className="absolute inset-0 -z-10"
          style={{
            background:
              "radial-gradient(circle at 50% 50%, rgba(21, 38, 81, 0.2) 0%, rgba(2, 2, 8, 0) 70%)",
          }}
        ></div>

        <div className="w-full max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-br from-[#020208] to-[#152651] dark:from-white dark:to-[#A2D8F6]"
              style={{
                // background: "linear-gradient(135deg, #fff 0%, #A2D8F6 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Astronomy Picture of the Day
            </h2>
            <p className="text-muted text-lg">
              Discover the cosmos through NASA's daily image
            </p>
          </div>

          {/* Main Card */}
          <div
            className={`transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            {loading ? (
              <div className="flex justify-center items-center py-32">
                <Loading />
              </div>
            ) : dailyPic ? (
              <div
                className="relative bg-panel/50 backdrop-blur-xl rounded-3xl overflow-hidden border border-cyan/20 shadow-2xl"
                style={{
                  boxShadow:
                    "0 20px 60px rgba(0, 0, 0, 0.5), 0 0 40px rgba(162, 216, 246, 0.1)",
                }}
              >
                {/* Content Grid */}
                <div className="grid md:grid-cols-2 gap-8 p-8 md:p-12">
                  {/* Image/Video Section */}
                  <div className="relative group">
                    <div className="relative rounded-2xl overflow-hidden">
                      {dailyPic.media_type === "video" ? (
                        <div className="aspect-video rounded-2xl overflow-hidden">
                          <iframe
                            src={dailyPic.url}
                            title="NASA Video"
                            allowFullScreen
                            className="w-full h-full border-none rounded-2xl"
                          ></iframe>
                        </div>
                      ) : (
                        <div className="relative overflow-hidden rounded-2xl">
                          <img
                            src={dailyPic.url}
                            alt={dailyPic.title}
                            className="w-full h-auto object-cover rounded-2xl transition-transform duration-700 group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Text Content Section */}
                  <div className="flex flex-col justify-center space-y-6">
                    <div>
                      <div className="inline-block px-4 py-2 rounded-full bg-cyan/10 border border-cyan/30 mb-4">
                        <span className="text-cyan text-sm font-medium">
                          {dailyPic.date}
                        </span>
                      </div>
                      <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
                        {dailyPic.title}
                      </h3>
                    </div>

                    <p className="text-muted leading-relaxed text-base md:text-lg">
                      {dailyPic.explanation}
                    </p>

                    <div className="flex gap-4 pt-4">
                      <Link
                        to="/latest"
                        className="px-6 py-3 rounded-full text-white font-semibold transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl"
                        style={{
                          background:
                            "linear-gradient(90deg, #455B9A, #5691B9)",
                          boxShadow: "0 10px 25px rgba(86, 145, 185, 0.4)",
                        }}
                      >
                        Explore Archive
                      </Link>
                      <button className="px-6 py-3 rounded-full border-2 border-cyan/50 text-cyan font-semibold hover:bg-cyan/10 transition-all duration-300">
                        Learn More
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="text-center py-20">
                <p className="text-red-400 text-xl">
                  Failed to load today's image.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Brands Section */}
      <section
        className="relative w-screen h-screen flex flex-col justify-end items-center"
        style={{
          backgroundImage:
            'url("https://cdn.dribbble.com/userupload/24901544/file/original-baff0023954a2944d1539dfc2de39e9e.png?resize=1504x1128&vertical=center")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="relative z-10 text-center">
          {/* <h4
            className="text-lg md:text-3xl font-semibold mb-6"
            style={{
              background: "linear-gradient(135deg, #fff 0%, #A2D8F6 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Powered by
          </h4> */}
          <div className="flex justify-center">
            <img
              src={brands}
              alt="Brands"
              className="h-16 md:h-32 w-auto object-contain filter drop-shadow-2xl"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
