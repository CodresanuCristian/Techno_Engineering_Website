<!-- VIDEO ====================================== -->
<video controls="controls" autoplay="autoplay" loop="loop">
    <source src="video/video.mp4">
</video>





<!-- ABOUT US =================================== -->
<div class="container home-about d-flex">
    <div class="home-about-box1">
        <h5>ABOUT US</h5>
        <h3 class="my-4">We invest time & resources into the development of each of our professionals.</h3>
        <p>We encourage fresh ideas and a collaborative approach to delivering an unparalleled service which will entail pragmatic solutions for our clients.<p>
        <p>Through extensive in-house training, external seminars and continued professional development , our employees are encouraged to develop new skills and to extend intellectual boundaries.</p>
        <button id="home-about-btn" class="btn-blue mt-4">READ MORE</button>
    </div>
    <div class="home-about-box2"></div>
</div>





<!-- OUR SERVICES ================================ -->
<div class="container home-services">
    <div class="home-services-text d-flex flex-column">
        <h5 class="my-4">OUR SERVICES</h5>
        <div class="row justify-content-between">
            <h1 class="col-6-sm"><span class="green-span">We belive</span> in customer satisfaction !</h1>
            <p class="col-6-sm">We are able to identify unnecessary costs in design and construction without sacrificing quality or performance requirements.</p>
        </div>
    </div>
    <div class="row mx-auto my-5">
        <div id="recipeCarousel" class="carousel slide w-100" data-ride="carousel">
            <div class="carousel-inner w-100" role="listbox">
                <div class="carousel-item active">
                    <div class="col-md-4">
                        <div class="card text-center">
                            <img class="img-fluid" src="/img/1.jpg">
                            <div class="card-body">
                                <h5>Contract Management Assistance</h5>
                                <button type="button" class="btn-blue" id="home-services-btn">READ MORE</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="carousel-item">
                    <div class="col-md-4">
                        <div class="card text-center">
                            <img class="img-fluid" src="/img/2.jpg">
                            <div class="card-body">
                                <h5>Claims &amp; Disputes Resolution</h5>
                                <button type="button" class="btn-blue" id="home-services-btn">READ MORE</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="carousel-item">
                    <div class="col-md-4">
                        <div class="card text-center">
                            <img class="img-fluid" src="/img/1.jpg">
                            <div class="card-body">
                                <h5>Quantity Surveying</h5>
                                <button type="button" class="btn-blue" id="home-services-btn">READ MORE</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="carousel-item">
                    <div class="col-md-4">
                        <div class="card text-center">
                            <img class="img-fluid" src="/img/2.jpg">
                            <div class="card-body">
                                <h5>Planning &amp; Progress Monitoring</h5>
                                <button type="button" class="btn-blue" id="home-services-btn">READ MORE</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="carousel-item">
                    <div class="col-md-4">
                        <div class="card text-center">
                            <img class="img-fluid" src="/img/1.jpg">    
                            <div class="card-body">
                                <h5>Trendering &amp; Procurement</h5>
                                <button type="button" class="btn-blue" id="home-services-btn">READ MORE</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <a class="carousel-control-prev w-auto" href="#recipeCarousel" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon bg-dark border border-dark rounded-circle" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next w-auto" href="#recipeCarousel" role="button" data-slide="next">
                <span class="carousel-control-next-icon bg-dark border border-dark rounded-circle" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
            </a>
        </div>
    </div>
</div>






<!-- PARALLAX -->
<div class="home-parallax">
    <div class="home-parallax-text d-flex justify-content-center align-items-center">
        <h1 class="text-center px-5">Subscribe To Our Newsletter. Subscribe To Our Newsletter</h1>
    </div>
</div>





<!-- PORTFOLIO ===================================-->
<div class="container home-portfolio">
    <h1>Take a look<br>at <span class="green-span">our portfolio !</span></h1>
    <nav class="home-portfolio-nav my-5 container">
        <ul class="nav">
            <li><a class="home-portfolio-active" id="home-portfolio-op1">National roads &amp; motorway</a></li>
            <li><a id="home-portfolio-op2">Railways &amp; metro</a></li>
            <li><a id="home-portfolio-op3">WWTP</a></li>
            <li><a id="home-portfolio-op4">Miscellaneous</a></li>
        </ul>
    </nav>
    <div class="my-5 album">
        @for ($i=1; $i<=6; $i++)
            <div class="album-box" id="album-box{{$i}}">
                <img>
                <div class="album-box-text">
                    <h5 id="album-box-text{{$i}}"></h5>
                </div>
            </div>
        @endfor
    </div>
    <div class="d-flex justify-content-center my-5">
        <button class="btn-green" type="button" id="home-portfolio-btn">VIEW MORE</button>
    </div>
</div>




<!-- SUBSCRIBE -->
<div class="home-subscribe d-flex">
    <div class="home-subscribe-logo">
        <img src="/img/logo.png">
    </div>
    <div class="home-subscribe-input">
        <div class="subscribe-text">
            <div class="d-flex align-items-center">
                <img src="/icons/newsletter-light.png">
                <h4>Subscribe To Our Newsletter</h4>
            </div>
        </div>
        <div class="subscribe-form">
            <div class="d-flex align-items-center" id="form"> 
                <input type="email" name="subscribe" id="subscribe-field" placeholder="Your email">
                <button class="btn-green" id="subscribe-btn" type="button">SUBMIT NOW</button>
            </div>
        </div>
    </div>
</div>




<div id="message">
    <div class="submit-fail">
        <div class="alert alert-danger m-0">
            <ul class="nav nav-error justify-content-center">
                <li>The subscribe field is required.</li>
            </ul>
        </div>
    </div>
    <div class="submit-success">
        <div class="alert alert-success d-flex justify-content-center m-0">
            <ul class="nav nav-error justify-content-center">
                <li>You've successsfully subscribed to our newsletter.</li>
            </ul>
        </div>
    </div>
</div>


<script src="/js/home.js"></script>