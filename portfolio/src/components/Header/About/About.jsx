import './About.css'

function About() {
    return (
        <div className="about">
            <div className="container">
                <div className="row" id='about__row'>
                    <div className="col-6" id='about__first__col-6'>
                        <div className="about__left">
                            <h1>HI, I'M ZYAN! <br /> CREATIVE <span>CODER</span></h1>
                            <p>I'm a passionate UI/UX designer with a mission to create delightful and intuitive digital experiences. With a strong foundation in design principles and a keen eye for detail, I specialize in translating complex ideas into user-friendly interfaces that captivate and engage.</p>
                            <div className="about__left__buttons">
                                <a href="#" id='download'>Download Cv <i className="fa-solid fa-download"></i></a>
                                <a href="#" id='watch'><i className="fa-solid fa-circle-play"></i> Watch The Video</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-6" id='about__second__col-6'>
                        <div className="about__right">
                            <img src="https://zyan.vercel.app/images/banner_img_1.png" alt="photo" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;