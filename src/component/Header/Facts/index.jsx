import { useEffect, useState } from "react";
import "./Facts.css"
import Odometer from "react-odometerjs";

const Facts = ()=>{

    const [experience , setExperirnce] = useState(0);
    const [project , setProject] = useState(0)
    const [practiceProject , setPracticeProject] = useState(0)
    useEffect(()=>{
        const timeoutId = setTimeout(()=>{
            setExperirnce(10);
            setProject(5);
            setPracticeProject(10);
        } , 3000)

        return ()=>{
            clearTimeout(timeoutId)
        }
    },[])

    return(
        <div className="fact__contaoner">
            <div className="fact__item">
                <div className="count__container">
                <Odometer 
                        value={experience}
                    />
                    <span className="indicator">+</span>
                </div>
                <p className="name">Years Of Experience</p>
            </div>

            <div className="fact__item">
                <div className="count__container">
                <Odometer 
                        value={project}
                    />
                    <span className="indicator">+</span>
                </div>
                <p className="name">Completed Project</p>
            </div>

            <div className="fact__item">
                <div className="count__container">
                <Odometer 
                        value={practiceProject}
                    />
                    <span className="indicator">+</span>
                </div>
                <p className="name">Practice Project </p>
            </div>
        </div>
    )
}

export default Facts ;