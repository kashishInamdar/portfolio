import { FaPaintBrush } from "react-icons/fa";
import "./Services.css";
import { BsCodeSquare } from "react-icons/bs";
import { TfiWrite } from "react-icons/tfi";

const Services = () => {
  return (
    <section id="services">
      <div className="section_wrapper services__wrapper">
        <div className="section_header center">
          <h2 className="primary_title"> Services </h2>
          <p className="text_muted description">
            I transform your ideas, and consequently your desires, into a
            distinctive web project that both inspires you and captivates your
            customers.
          </p>
        </div>

        <div className="services__group">
          <article className="service">
            <div className="service__top">
              <div className="icon_container">
                <FaPaintBrush className="icon"  />
              </div>
              <h3 className="title">UI/UX Design</h3>
            </div>
            <div className="service__middle">
              <p className="text_muted description">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Ratione voluptatum earum quam tempore, repellat aut vero ut eum,
                provident accusamus recusandae eligendi, adipisci sequi
                reiciendis quisquam? Sapiente optio rerum sequi!
              </p>
            </div>
            <div className="service__bottom">
                <button className="btn btn_primary"> Read more </button>
            </div>
          </article>
          {/* End ui/ux */}
          
          <article className="service" style={{"--color-primary" : "var(--color-success)"}}>
            <div className="service__top">
              <div className="icon_container">
                <BsCodeSquare className="icon" />
              </div>
              <h3 className="title">Web Development</h3>
            </div>
            <div className="service__middle">
              <p className="text_muted description">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Ratione voluptatum earum quam tempore, repellat aut vero ut eum,
                provident accusamus recusandae eligendi, adipisci sequi
                reiciendis quisquam? Sapiente optio rerum sequi!
              </p>
            </div>
            <div className="service__bottom">
                <button className="btn btn_primary" style={{"--color-primary" : "var(--color-success)"}} > Read more </button>
            </div>
          </article>
          {/* End web Development */}

          <article className="service">
            <div className="service__top">
              <div className="icon_container">
                <TfiWrite className="icon" />
              </div>
              <h3 className="title">Content Creation</h3>
            </div>
            <div className="service__middle">
              <p className="text_muted description">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Ratione voluptatum earum quam tempore, repellat aut vero ut eum,
                provident accusamus recusandae eligendi, adipisci sequi
                reiciendis quisquam? Sapiente optio rerum sequi!
              </p>
            </div>
            <div className="service__bottom">
                <button className="btn btn_primary"> Read more </button>
            </div>
          </article>
          {/* End content Creation */}

        </div>
      </div>
    </section>
  );
};

export default Services;
