import React from "react";
import animationData from "../rocket launch.json";
import Lottie from "lottie-react";
import { Container } from "react-bootstrap";
export default function Loading() {
  return (
    <div className="text-center w-100 h-50 d-flex flex-column justify-content-center align-items-center">
      <div style={{ width: "125px", height: "125px" }}>
        <Lottie animationData={animationData} loop={true} autoplay={true} />
      </div>
      <p className="mt-5">Scanning Archives...</p>
    </div>
  );
}
