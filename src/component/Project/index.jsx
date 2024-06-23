import { useRef, useEffect, useState } from "react";
import "./Project.css";
import { sumArray } from "../../helper";

const tabs = [
    { name: "All" },
    { name: "Web" },
    { name: "UI/UX" },
    { name: "Apps" }
];

const Projects = () => {
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
            </div>
        </section>
    );
};

export default Projects;
