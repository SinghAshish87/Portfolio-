import React from "react";
import Image from "next/image";
import styles from "./Home.module.css";
import Skills from "./components/skill";

const Home = () => {
  return (
    <>
      <div className={styles.container}>
        {/* Large left circle with image */}
        <div className={styles.leftCircle}>
          <Image
            src="/images/Ashish.jpg"
            alt="Profile"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>

        {/* Right content */}
        <div className={styles.rightContent}>
          {/* Decorative circles */}
          <div className={styles.decorativeCircle1} />
          <div className={styles.decorativeCircle2} />
          <h1 className={styles.title}>HELLO IT'S ASHISH SINGH HERE </h1>
          
          <h1 className={styles.description}>
            Here, you'll find a curated collection of my work that reflects my
            passion for visual storytelling and creative expression. With a
            strong belief in the power of design to communicate ideas and evoke
            emotions, I strive to create impactful visuals that resonate with
            audiences.
          </h1>
        </div>
      </div>

      <Skills />

      <section className={styles.thankYouSection}>
        <div className={styles.thankYouContainer}>
          <div className={styles.thankYouLeft}>
            <div className={styles.thankYouCircle}>
              <Image
                src="/images/ashish.jpg" // Replace with your image path
                alt="Best Work"
                width={200}
                height={200}
                className={styles.thankYouImg}
              />
              <span className={styles.thankYouCircleText}></span>
            </div>
          </div>
          <div className={styles.thankYouRight}>
            <p className={styles.thankYouMessage}>
              Thanks for visiting! I hope you’ve enjoyed exploring my work as
              much as I’ve enjoyed creating it.
            </p>
            <h2 className={styles.thankYouName}>ASHISH SINGH</h2>
            <button className={styles.thankYouButton}>
              Contact Information
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
