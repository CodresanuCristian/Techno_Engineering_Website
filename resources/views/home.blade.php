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
{{--  --}}



 
<!-- OUR SERVICES ================================ -->
<div class="container home-services">
    <div class="home-services-text d-flex flex-column">
        <h5 class="my-4">OUR SERVICES</h5>
        <div class="row justify-content-between">
            <h1 class="col-6-sm"><span class="green-span">We belive</span> in customer satisfaction !</h1>
            <p class="col-6-sm">We are able to identify unnecessary costs in design and construction without sacrificing quality or performance requirements.</p>
        </div>
    </div>
</div>


{{-- My Carousel --}}

<div class='carousel'>
    <div class='container'>
        {{-- slider --}}
        <ul id='autoWidth' class='cS-hidden'>
            {{-- 1 --}}
            <li class='item-a'>
                <div class='box'>
                    <img src='/img/service1.jpg'>
                    <div class='details'>
                        <h4>Contract Management Assistance</h4>
                        <button type="button" class="btn-blue" id="home-services-btn">READ MORE</button>
                    </div>
                </div>
            </li>
            {{-- 2 --}}
            <li class='item-b'>
                <div class='box'>
                    <img src='/img/service2.jpg'>
                    <div class='details'>
                        <h4>Claims &amp; Disputes Resolution</h4>
                        <button type="button" class="btn-blue" id="home-services-btn">READ MORE</button>
                    </div>
                </div>
            </li>
            {{-- 3 --}}
            <li class='item-c'>
                <div class='box'>
                    <img src='/img/service3.jpg'>
                    <div class='details'>
                        <h4>Quantity Surveying</h4>
                        <button type="button" class="btn-blue" id="home-services-btn">READ MORE</button>
                    </div>
                </div>
            </li>
            {{-- 4 --}}
            <li class='item-d'>
                <div class='box'>
                    <img src='/img/service4.jpg'>
                    <div class='details'>
                        <h4>Planning &amp; Progress Monitoring</h4>
                        <button type="button" class="btn-blue" id="home-services-btn">READ MORE</button>
                    </div>
                </div>
            </li>
            {{-- 5 --}}
            <li class='item-e'>
                <div class='box'>
                    <img src='/img/service5.jpg'>
                    <div class='details'>
                        <h4>Tendering &amp; Procurement</h4>
                        <button type="button" class="btn-blue" id="home-services-btn">READ MORE</button>
                    </div>
                </div>
            </li>
            {{-- 6 --}}
            <li class='item-f'>
                <div class='box'>
                    <img src='/img/service6.jpg'>
                    <div class='details'>
                        <h4>Value Engineering</h4>
                        <button type="button" class="btn-blue" id="home-services-btn">READ MORE</button>
                    </div>
                </div>
            </li>
        </ul> 
    </div>
</div>





<!-- PARALLAX -->
<div class="home-parallax">
    <div class="home-parallax-text d-flex justify-content-center align-items-center">
        <h1 class="text-center px-5">We tailor our business to serve yours.</h1>
    </div>
</div>





<!-- PORTFOLIO ===================================-->
<div class="container home-portfolio">
    <h1>Take a look<br>at <span class="green-span">our portfolio !</span></h1>
    <nav class="home-portfolio-nav my-5 container-fluid">
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
<script src="/js/lightslider.js"></script>