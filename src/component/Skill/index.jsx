import "./Skill.css";
import {experience} from "../../data"
import SkillCard from "./SkillCard";



const Skill = () => {
  return (
    <section id="skill">
      <div className="section_wrapper">
        <div className="section_header center">
            <h2 className="primary_title">My Skills</h2>
        </div>
        <div className="skill__container">
            {
                experience.map((list , index)=>(
                    <SkillCard 
                    {...list}
                    key={index}
                    />
                ))
            }
        </div>
      </div>
    </section>
  );
};

export default Skill;
