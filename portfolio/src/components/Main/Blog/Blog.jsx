import './Blog.css'

function Blog() {
    return (
        <>
            <section>
                <div className="blog">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="blog__title">
                                    <div className="blog__title__text">
                                        <h5>MY BLOG</h5>
                                        <h2>Unlocking the potential of your <br /> personal brand</h2>
                                    </div>
                                    <div className="blog__title__link">
                                        <a href="#">More Blog +</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-4 blog__col-4">
                                <div className="single__blog single__blog__dif1">
                                    <a href="#">
                                        <img src="https://zyan.vercel.app/images/blog/1.jpg" alt="blog" />
                                    </a>
                                    <div className="single__blog__date">
                                        <span>31 December, 2022</span>
                                    </div>
                                    <div className="single__blog__data">
                                        <div className="single__blog__data__top">
                                            <div className="creator">
                                                <i class="fa-solid fa-circle-user"></i> By admin
                                            </div>
                                            <div className="comments">
                                                <i class="fa-solid fa-comments"></i> Comments (05)
                                            </div>
                                        </div>
                                        <div className="single__blog__data__bottom">
                                            <a href="#">The standard personal My portfolio</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-4 blog__col-4">
                                <div className="single__blog">
                                    <a href="#">
                                        <img src="https://zyan.vercel.app/images/blog/2.jpg" alt="blog" />
                                    </a>
                                    <div className="single__blog__date">
                                        <span>31 December, 2022</span>
                                    </div>
                                    <div className="single__blog__data">
                                        <div className="single__blog__data__top">
                                            <div className="creator">
                                                <i class="fa-solid fa-circle-user"></i> By admin
                                            </div>
                                            <div className="comments">
                                                <i class="fa-solid fa-comments"></i> Comments (05)
                                            </div>
                                        </div>
                                        <div className="single__blog__data__bottom">
                                            <a href="#">The standard personal My portfolio</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-4 blog__col-4">
                                <div className="single__blog single__blog__dif2">
                                    <a href="#">
                                        <img src="https://zyan.vercel.app/images/blog/3.jpg" alt="blog" />
                                    </a>
                                    <div className="single__blog__date">
                                        <span>31 December, 2022</span>
                                    </div>
                                    <div className="single__blog__data">
                                        <div className="single__blog__data__top">
                                            <div className="creator">
                                                <i class="fa-solid fa-circle-user"></i> By admin
                                            </div>
                                            <div className="comments">
                                                <i class="fa-solid fa-comments"></i> Comments (05)
                                            </div>
                                        </div>
                                        <div className="single__blog__data__bottom">
                                            <a href="#">The standard personal My portfolio</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="subscribe">
                    <div className="subscribe__overlay">
                        <h3>SUBSCRIBE MY NEWSLETTER</h3>
                        <form action="#">
                            <input type="text" placeholder='Enter Your Email' />
                            <button type='submit'>Notify Now</button>
                        </form>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Blog