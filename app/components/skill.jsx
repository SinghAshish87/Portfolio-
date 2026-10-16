'use client'
import { FaJs, FaHtml5, FaCss3, FaReact, FaNodeJs, FaAws, FaBootstrap, FaJava, FaPython, FaGitAlt } from 'react-icons/fa'; 
import Image from 'next/image';
import styles from '../Home.module.css';  // Importing the CSS Module

const skills = [

  {
    title: 'School Life',
    description: "I completed my schooling at **St. Anne's High School**, Bandra, where I built a strong foundation in learning and problem-solving, sparking my interest in technology.",
    icon: '/skills/js.png',
  },
  {
    title: 'Junior College',
    description: "At **RD National College**, I pursued science, which deepened my curiosity for Computer Science and coding, setting the direction for my future career.",
    icon: '/skills/node.png',
  },
  {
    title: 'Degree College',
    description: "Currently, I am studying **BSc Computer Science** at **Shri GPM Degree College**, focusing on software development and applying my skills through real-world projects.",
    icon: '/skills/css.png',
  },
//  {
//     title: 'Badminton Experience',
//     description: "I’m a passionate **badminton player** and coach with [3] years of experience. Coaching has honed my leadership, discipline, and communication skills, which I apply to both sports and tech projects.",
//     icon: '/skills/badminton.png',
//   },

  {
    title: 'Hobbies & Certifications',
    description: "I am skilled in **self-defense techniques** in **Mix Mashalad**, and Badminton I have won multiple **certificates** in this field. This practice has taught me discipline, focus, and perseverance.",
    icon: '/skills/hobbies.png', 
  },

  // {
  //   title: 'AWS',
  //   description: "Amazon's cloud computing platform offering a wide range of services.",
  //   icon: '/skills/aws.png',
  // },
  // {
  //   title: 'Bootstrap',
  //   description: 'A popular front-end framework for building responsive websites.',
  //   icon: '/skills/bootstrap.png',
  // },
];

const SkillsSection = () => {
  return (
    <>
      <section className={styles.iconSkillsSection}>
        <h3 className={styles.skillsJourneyHeading}> Skills  What I Know </h3>

        <div className={styles.iconCarouselContainer}>
          {/* Skill Item 1 - JavaScript */}
          <div className={styles.iconSkillItem}>
            <FaJs size={80} color="#F7DF1E" /> {/* JavaScript Icon */}
          </div>
          {/* Skill Item 2 - HTML5 */}
          <div className={styles.iconSkillItem}>
            <FaHtml5 size={80} color="#E34F26" /> {/* HTML5 Icon */}
          </div>
          {/* Skill Item 3 - CSS3 */}
          <div className={styles.iconSkillItem}>
            <FaCss3 size={80} color="#1572B6" /> {/* CSS3 Icon */}
          </div>
          {/* Skill Item 4 - React */}
          <div className={styles.iconSkillItem}>
            <FaReact size={80} color="#61DAFB" /> {/* React Icon */}
          </div>
          {/* Skill Item 5 - Node.js */}
          <div className={styles.iconSkillItem}>
            <FaNodeJs size={80} color="#8CC84B" /> {/* Node.js Icon */}
          </div>
          {/* Skill Item 6 - Java */}
          <div className={styles.iconSkillItem}>
            <FaJava size={80} color="#007396" /> {/* Java Icon */}
          </div>
          {/* Skill Item 7 - Python */}
          <div className={styles.iconSkillItem}>
            <FaPython size={80} color="#3776AB" /> {/* Python Icon */}
          </div>
          {/* Skill Item 8 - AWS */}
          <div className={styles.iconSkillItem}>
            <FaAws size={80} color="#FF9900" /> {/* AWS Icon */}
          </div>
          {/* Skill Item 9 - Git */}
          <div className={styles.iconSkillItem}>
            <FaGitAlt size={80} color="#F1502F" /> {/* Git Icon */}
          </div>
        </div>
      </section>

      {/* Journey of Skills Section */}
      <div className={styles.skillsJourneyWrapper}>
        <h3 className={styles.skillsJourneyHeading}>The Story of My Growth.</h3>
        <div className={styles.skillsJourneyContent}>
          {skills.map((skill, idx) => (
            <div
              key={idx}
              className={`${styles.skillsJourneyItem} ${
                idx % 2 === 0 ? styles.skillsLeftSide : styles.skillsRightSide
              }`}
            >
              <div className={styles.skillsJourneyMarker}></div>
              <div className={styles.skillsJourneyDetails}>
                <h4>{skill.title}</h4>
                <p>{skill.description}</p>
                {/* <Image
                  src={skill.icon}
                  alt={skill.title}
                  width={50}z
                  height={50}
                  className={styles.skillsIconImage}
                /> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default SkillsSection;
