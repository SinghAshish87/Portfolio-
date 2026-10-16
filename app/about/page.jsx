"use client";
import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <div className="about-main">
      {/* Decorative circles */}
      <div className="about-deco about-deco-top-left"></div>
      <div className="about-deco about-deco-bottom-right"></div>

      {/* Left side: text and small circle image */}
      <div className="about-left">
        <h1 className="about-title">
          About Me
          <span className="about-title-deco"></span>
        </h1>
        <p className="about-desc">
          Hey there! I'm Ashish Singh, a passionate web designer with a deep
          love for blending art and technology. My journey into web design began
          as a creative exploration, and over time, it has transformed into a
          career dedicated to crafting visually stunning and user-centered
          digital experiences. I believe in the power of design to tell
          compelling stories and connect people with brands in meaningful ways.
          Let's create something beautiful together!
        </p>

        <div className="about-circle-small">
          <Image
            src="/images/Screenshot 2025-09-14 034429.png"
            alt="Designer"
            fill
            className="about-img"
          />
        </div>
      </div>

      {/* Right side: large circle image */}
      <div className="about-right">
        <div className="about-circle-large">
          <Image
            src="/images/Screenshot 2025-09-14 034429.png"
            alt="Work Desk"
            fill
            className="about-img"
          />
        </div>
      </div>

      <style jsx>{`
        .about-main {
          min-height: 100vh;
          background: #faf5f0;
          display: flex;
          align-items: center;
          justify-content: space-between;
          position: relative;
          padding: 60px 40px;
          font-family: "Segoe UI", sans-serif;
          overflow: hidden;
        }
        .about-left {
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          position: relative;
          z-index: 2;
        }
        .about-title {
          font-size: 3rem;
          font-weight: 700;
          color: #4b3a2f;
          margin-bottom: 24px;
          position: relative;
          line-height: 1.1;
        }
        .about-title-deco {
          position: absolute;
          left: 220px;
          top: 10px;
          width: 48px;
          height: 48px;
          background: #bfa48a;
          border-radius: 50%;
          opacity: 0.3;
          z-index: 0;
        }
        .about-desc {
          color: #4b3a2f;
          font-size: 1.15rem;
          line-height: 1.6;
          max-width: 480px;
          margin-bottom: 32px;
        }
        .about-circle-small {
          width: 260px;
          height: 260px;
          border-radius: 50%;
          border: 14px solid #7b5b3e;
          overflow: hidden;
          position: relative;
          background: #fff;
          box-shadow: 0 6px 24px rgba(0, 0, 0, 0.1);
          margin-top: 24px;
        }
        .about-right {
          flex: 1.2;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          z-index: 2;
        }
        .about-circle-large {
          width: 400px;
          height: 400px;
          border-radius: 50%;
          border: 18px solid #7b5b3e;
          overflow: hidden;
          position: relative;
          background: #fff;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.12);
        }
        .about-img {
          object-fit: cover;
        }
        .about-deco {
          position: absolute;
          background: #7b5b3e;
          border-radius: 50%;
          opacity: 0.7;
          z-index: 1;
        }
        .about-deco-top-left {
          top: -40px;
          left: -40px;
          width: 80px;
          height: 80px;
        }
        .about-deco-bottom-right {
          bottom: 24px;
          right: 24px;
          width: 64px;
          height: 64px;
        }
        @media (max-width: 900px) {
          .about-main {
            flex-direction: column;
            padding: 24px;
          }
          .about-right {
            margin-top: 32px;
          }
          .about-circle-large {
            width: 260px;
            height: 260px;
            border-width: 12px;
          }
          .about-circle-small {
            width: 160px;
            height: 160px;
            border-width: 8px;
          }
        }
      `}</style>
    </div>
  );
};

export default About;
