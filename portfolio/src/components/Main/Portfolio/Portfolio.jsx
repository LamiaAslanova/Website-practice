import './Portfolio.css'

function Portfolio() {
    return (
        <>
            <section>
                <div className="portfolio">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="portfolio__title">
                                    <h5>MY RECENT PORTFOLIO</h5>
                                    <h2>Elevate your brand to new <br /> heights with our portfolio expertise</h2>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-8 portfolio__col__first">
                                <a href="#">
                                    <img src="https://zyan.vercel.app/images/portfolio/1.jpg" alt="image" />
                                    <div className="text">
                                        <h4>Sheet Metal Bending</h4>
                                        <p>Youtube</p>
                                    </div>
                                </a>
                            </div>
                            <div className="col-4 portfolio__col__first">
                                <a href="#">
                                    <img src="https://zyan.vercel.app/images/portfolio/2.jpg" alt="image" />
                                    <div className="text">
                                        <h4>Sheet Metal Bending</h4>
                                        <p>Vimeo</p>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-6 portfolio__col__second">
                                <a href="#">
                                    <img src="https://zyan.vercel.app/images/portfolio/3.jpg" alt="image" />
                                    <div className="text">
                                        <h4>Sheet Metal Bending</h4>
                                        <p>Soundcloud</p>
                                    </div>
                                </a>
                            </div>
                            <div className="col-6 portfolio__col__second">
                                <a href="#">
                                    <img src="https://zyan.vercel.app/images/portfolio/4.jpg" alt="image" />
                                    <div className="text">
                                        <h4>Sheet Metal Bending</h4>
                                        <p>Image</p>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="review">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="review__title">
                                    <h5>CLIENTS REVIEW</h5>
                                    <h2>My testomonial</h2>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-6 review__col-6">
                                <div className="single__review">
                                    <img className='photo__pos' src="https://zyan.vercel.app/images/testimonial/2.jpg" alt="photo" />
                                    <div className="stars">
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                    </div>
                                    <h3>Eleanor Pena</h3>
                                    <h5>Marketing Coordinator</h5>
                                    <p>Financial planners help people to knowledge in about how to invest and in save their moneye the most efficient way eve planners help people tioniio know ledige in about how.
                                    </p>
                                    <img className='icon__pos' src="https://zyan.vercel.app/images/icon/quot.png" alt="icon" />
                                </div>
                            </div>
                            <div className="col-6 review__col-6">
                                <div className="single__review">
                                    <img className='photo__pos' src="https://zyan.vercel.app/images/testimonial/1.jpg" alt="photo" />
                                    <div className="stars">
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                    </div>
                                    <h3>Eleanor Pena</h3>
                                    <h5>Marketing Coordinator</h5>
                                    <p>Financial planners help people to knowledge in about how to invest and in save their moneye the most efficient way eve planners help people tioniio know ledige in about how.
                                    </p>
                                    <img className='icon__pos' src="https://zyan.vercel.app/images/icon/quot.png" alt="icon" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="slide"></div>
            </section>
        </>
    )
}

export default Portfolio