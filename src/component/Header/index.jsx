import "./Header.css"
import { profile1 } from "../../images";

const Header = ()=>{
    return(
        <header  id="header" className=" blur-effect ">
            <div className="stroke_text intro__text">Hello</div>
            <div className="section_wrapper header__container">
                <div className="column intro__container blur-effect ">
                    <div className="header__info">
                        <div className="header__info__top">
                            Hello There! I am <span className="color_primary"> Kashish </span>
                        </div>
                        <div className="header__info__middle">
                            <h1 className="primary_title header__title">I'M A WEB DEVELOPER</h1>
                            <p className="text_muted header__description">
                                I dissect intricate user experience challenges to engineer 
                                integrity-focused solutions that resonate with billions of users.
                            </p>
                        </div>
                        <div className="header__info__bottom">
                            <button className="btn"> Download CV</button>
                            <a href="mailto:kashishofficial4690@gmail.com" className="btn">Email Me</a>
                        </div>
                    </div>
                </div>
                <div className="column profile__wrapper">
                    <div className="profile__photo__container">
                         <img src={profile1} alt="profile-photo" className="profile" />
                    </div>
                </div>
            </div>
        </header> 
    )
}

export default Header ;