
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png"
import { FaReact, FaJs, FaHtml5, FaGitAlt } from 'react-icons/fa';
import { SiTypescript, SiRedux, SiTailwindcss, SiChakraui } from 'react-icons/si';
import { FaStore } from 'react-icons/fa';
import {
  FaRegCheckCircle, FaWind,
} from 'react-icons/fa';
import { FaEdit } from 'react-icons/fa';


export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  const skills = [
    { name: "React", icon: <FaReact className="text-blue-400" size={40} /> },
    { name: "JavaScript", icon: <FaJs className="text-yellow-400" size={40} /> },
    { name: "TypeScript", icon: <SiTypescript className="text-blue-600" size={40} /> },
    { name: "HTML/CSS", icon: <FaHtml5 className="text-orange-500" size={40} /> },
    { name: "Redux", icon: <SiRedux className="text-purple-500" size={40} /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-400" size={40} /> },
    { name: "Chakra UI", icon: <SiChakraui className="text-teal-400" size={40} /> },
    { name: "Git", icon: <FaGitAlt className="text-red-500" size={40} /> },
    { name: "Zustand", icon: <FaStore className="text-purple-500" size={40} /> },
    { name: "React Hook Form", icon: <FaRegCheckCircle className="text-green-500" size={40} /> },
    { name: "useForm", icon: <FaEdit className="text-blue-400" size={40} /> },
    { name: "WindSurf AI IDE", icon: <FaWind className="text-cyan-400" size={40} /> },

  ];
  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            {/* JSX */}
            <div className="skill-bx">
              <h2>Skills</h2>
              <div className="skills-grid">
                {skills.map((skill, index) => (
                  <div key={index} className="skill-item">
                    <div className="skill-icon">
                      {skill.icon}
                    </div>
                    <span className="skill-name">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
