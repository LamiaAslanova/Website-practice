import './header.css'
import About from './About/About'

function Header() {
    return (
        <div className='banner'>
            <header>
                <div className="header">
                    <div className="header__left">
                        <a href="#">
                            <img src="https://zyan.vercel.app/images/logo.png" alt="logo" />
                        </a>
                    </div>
                    <div className="header__middle">
                        <nav>
                            <ul>
                                <li><a href="#">HOME<i className="fa-solid fa-angle-down"></i></a></li>
                                <li><a href="#">ABOUT US</a></li>
                                <li><a href="#">SERVICES</a></li>
                                <li><a href="#">PROJECTS</a></li>
                                <li><a href="#">BLOG<i className="fa-solid fa-angle-down"></i></a></li>
                                <li><a href="#">CONTACT</a></li>
                            </ul>
                        </nav>
                    </div>
                    <div className="header__right">
                        <button class="btn" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"><i className="fa-solid fa-bars"></i></button>

                        <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                            <div class="offcanvas-header">
                                <a href="#">
                                    <img src="https://zyan.vercel.app/images/logo2.png" alt="logo" />
                                </a>
                                <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                            </div>
                            <div class="offcanvas-body">
                                <h4 className='offcanvas-body-about'>ABOUT US</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor incididunt ut labore et magna aliqua. Ut enim ad minim veniam laboris.</p>
                                <h4 className='offcanvas-body-get'>GET IN TOUCH</h4>
                                <input type="text" placeholder='Your Name' />
                                <input type="text" placeholder='Your Email' />
                                <div class="textarea-container">
                                    <textarea rows="6" placeholder="Message"></textarea>
                                </div>
                                <button type='submit'>Submit Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <About />
        </div>

    )
}

export default Header