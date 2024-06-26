import { useRef, useEffect, useState } from "react";
import "./Project.css";
import { sumArray } from "../../helper";
import { projects } from "../../data"
import Card from "./Card";

const tabs = [
    { name: "All" },
    { name: "Web" },
    { name: "UI/UX" },
    { name: "Apps" }
];

const Projects = () => {
    const [displayableProjects , setDisplayableProjects] = useState(projects);
    const [activeIndex, setActiveIndex] = useState(0);
    const [offset, setOffset] = useState(0);
    const [indicatorWidth, setIndicatorWidth] = useState(0);
    const itemsEls = useRef(new Array());

    useEffect(() => {
        const prevEl = itemsEls.current.filter((_,index) => index < activeIndex);
        setOffset(
            sumArray(
                prevEl.map(item => item.offsetWidth)
            )
        );
        setIndicatorWidth(itemsEls.current[activeIndex].offsetWidth);
    }, [activeIndex]);

    const setProjects = (category) =>{
        if (category === "All"){
            return setDisplayableProjects(projects)
        }
        const pro = projects.filter((item)=>{item.category.toLowerCase()})
        setDisplayableProjects(pro)
    }

    return (
        <section id="projects">
            <div className="section_wrapper projects__container">
                <div className="section_header center">
                    <h2 className="primary_title">Projects</h2>
                </div>
                <nav>
                    {
                        tabs.map((tab, index) => (
                            <button
                                ref={el => itemsEls.current[index] = el}
                                onClick={() => {
                                    setActiveIndex(index);
                                    setProjects(tab.name)
                                }}
                                key={index}
                            >
                                {tab.name}
                            </button>
                        ))
                    }
                    <span
                        className="active__indicator"
                        style={{
                            left: `${offset}px`,
                            width: `${indicatorWidth}px`
                        }}
                    ></span>
                </nav>
                <div className="card__container">
                    {
                        displayableProjects.map((project , index)=>{
                            const {id ,title , image , category , data , stack } = project;
                            return(
                                <Card 
                                    key={index}
                                    title={title}
                                    image={image}
                                    data={data}
                                    stack={stack}
                                    id={id}
                                />
                            )
                        })

                    }
                </div>
            </div>
        </section>
    );
};

export default Projects;
