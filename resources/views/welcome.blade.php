<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Techno Engineering &AMP; Associates</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css">
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
        <link rel="stylesheet" type="text/css" href="/css/welcome.css">
        <link rel="stylesheet" type="text/css" href="/css/home.css">
        <link rel="stylesheet" type="text/css" href="/css/about.css">
        <link rel="stylesheet" type="text/css" href="/css/service.css">
        <link rel="stylesheet" type="text/css" href="/css/portfolio.css">
        <link rel="stylesheet" type="text/css" href="/css/contact.css">
        <link rel="stylesheet" type="text/css" href="/css/careers.css">
    </head>
    <body>
        <!-- HEADER -->
        <header >
            <div class="text-center dropdown-lang-title">
                <div class="d-flex align-items-center">
                    <p>LANGUAGE</p>
                    <img class="px-2" src="/icons/arrow-down.ico">
                </div>
                <div class="dropdown-lang text-center">
                    <p class="lang-active" id='en' >ENGLISH</p>
                    <p id="ro">ROMANA</p>
                    <p id='es'>ESPANOL</p>
                </div>
            </div>
            <div class="d-flex align-items-center">
                <img class="px-2" src="/icons/phone.png">
                <p>+40 21 336 30 76/77</p>
                <img class="pl-4 pr-2" src="/icons/email.ico">
                <p>techno.engineering@technoeng.com</p>
            </div>
        </header>
        
        <!-- DESKTOP NAVBAR -->
        <nav class="navbar desktop-nav sticky-top">
            <div id="animation-navbar-brand" class="lg-brand">
                <a class="navbar-brand">
                    <img src="img/logo.png">
                </a>
            </div>
            <div id="animation-navbar-option" class="lg-option">
            <ul class="nav">
                <li class="nav-item"><a class="link-active" id='home'>HOME</a></li>
                <li class="nav-item"><a id='about'>ABOUT</a></li>
                <li class="nav-item"><a id='services'>SERVICES</a></li>
                <li class="nav-item"><a id='portfolio'>PORTFOLIO</a></li>
                <li class="nav-item"><a id='publications'>PUBLICATIONS</a></li>
                <li class="nav-item"><a id='contact'>CONTACT</a></li>
                <li class="nav-item"><a id='careers'>CAREERS</a></li>
            </ul>
            </div>
        </nav>

        <!-- MOBILE NAVBAR -->
        <nav class="mobile-navbar sticky-top">
            <div class="d-flex justify-content-end">
                <div class="brgr-btn">
                <div class="box icon">
                    <span class="line top"></span>
                    <span class="line middle"></span>
                    <span class="line bottom"></span>
                </div>
                </div>
            </div>
            <div class="mobile-nav-list">
                <ul class="mob-nav-options">
                    <li><a class="mob-link-active" id='mob-home'>HOME</a></li>
                    <li><a id='mob-about'>ABOUT</a></li>
                    <li><a id='mob-services'>SERVICES</a></li>
                    <li><a id='mob-portfolio'>PORTFOLIO</a></li>
                    <li><a id='mob-publications'>PUBLICATIONS</a></li>
                    <li><a id='mob-contact'>CONTACT</a></li>
                    <li><a id='mob-careers'>CAREERS</a></li>
                </ul>
                <ul class="mob-nav-lang nav justify-content-center">
                    <li><a class="mob-lang-active" id="mobile-en">EN</a></li>
                    <li><a id="mobile-ro">RO</a></li>
                    <li><a id="mobile-es">ES</a></li>
                </ul>
            </div>
        </nav> 

        <!-- CONTENT -->
        <div class="content-page"></div>

        <!-- FOOTER -->
        <footer class="d-flex justify-content-center">
            <div class="container row">
                <div class="col-lg-9 col-md-8 col-sm-8 py-5">
                    <h4 class="my-4">Publications</h4>
                    <div class="row d-flex justify-content-center">
                        <div class="col-lg-6">
                            <div class="d-flex align-items-center pub-box">
                                <div class="footer-img my-2 mr-2"><img src="/img/1.jpg"></div>
                                <p>Techno Engineering & Associates group wins prestigious World Quality Commitment Award</p>
                            </div>
                            <div class="d-flex align-items-center pub-box">
                                <div class="footer-img my-2 mr-2"><img src="/img/2.jpg"></div>
                                <p class="background:orange;">Techno Engineering & Associates group wins prestigious World Quality Commitment Award</p>
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div class="d-flex align-items-center pub-box">
                                <div class="footer-img my-2 mr-2"><img src="/img/1.jpg"></div>
                                <p>Techno Engineering & Associates group wins prestigious World Quality Commitment Award</p>
                            </div>
                            <div class="d-flex align-items-center pub-box">
                                <div class="footer-img my-2 mr-2"><img src="/img/2.jpg"></div>
                                <p>Techno Engineering & Associates group wins prestigious World Quality Commitment Award</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-4 d-flex flex-column align-items-center text-center py-5">
                    <h4 class="my-4">Get In Touch</h4>
                    <p class="m-0 pb-3">Are you looking for a new job?<br>We have available a few positions !</p>
                    <button class="btn-blue" type="button">Take a look</button>
                    <p class="m-0 py-2">OR</p>
                    <button class="btn-blue mb-5" type="button">Write us now</button>
                </div>
            </div>
        </footer>

        <!-- COPYRIGHT -->
        <div class="row d-flex align-items-center copyright">
            <div class="col-xl-7 col-lg-8 col-md-9 d-flex justify-content-center align-items-center">
                <p class="m-0 p-2">Copyright &copy; 2021 Techono Engineering &amp; Associates. All rights reserved.</p>
            </div>
            <div class="col-xl-5 col-lg-4 col-md-3 text-center m-0 p-2">
                <a href="#">LEGAL NOTICE</a>
            </div>
        </div>


        <script src="/js/welcome.js"></script>
    </body>
</html>
