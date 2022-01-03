<div class='portfolio row'>
    <div class='content col-md-11'>
        <!-- CHAPTER 1 ================================================== -->
        <div id='portfolio-chapter1'>
            <div class='title'>
                <h1>National Roads &amp; Motorways</h1>
            </div>
            <div class='d-flex justify-content-center flex-wrap my-5 py-5'>
                @for ($i=1; $i<=16; $i++)
                    <div class="album-box" id="album-box{{$i}}">
                        <img src='/img/1.jpg'>
                        <div class="album-box-text">
                            <h5 id="album-box-text{{$i}}">National roads</h5>
                        </div>
                    </div>
                @endfor
            </div>
            <div id='end-chapter1'></div>
        </div>
        <!-- CHAPTER 2 ================================================== -->
        <div id='portfolio-chapter2'>
            <div class='title'>
                <h1>Railways &amp; Metro</h1>
            </div>
            <div class='d-flex justify-content-center flex-wrap my-5 py-5'>
                @for ($i=1; $i<=20; $i++)
                    <div class="album-box" id="album-box{{$i}}">
                        <img src='/img/2.jpg'>
                        <div class="album-box-text">
                            <h5 id="album-box-text{{$i}}">Railways</h5>
                        </div>
                    </div>
                @endfor
            </div>
            <div id='end-chapter2'></div>
        </div>
        <!-- CHAPTER 3 ================================================== -->
        <div id='portfolio-chapter3'>
            <div class='title'>
                <h1>WWTP</h1>
            </div>
            <div class='d-flex justify-content-center flex-wrap my-5 py-5'>
                @for ($i=1; $i<=13; $i++)
                    <div class="album-box" id="album-box{{$i}}">
                        <img src='/img/3.jpg'>
                        <div class="album-box-text">
                            <h5 id="album-box-text{{$i}}">WWTP</h5>
                        </div>
                    </div>
                @endfor
            </div>
            <div id='end-chapter3'></div>
        </div>
        <!-- CHAPTER 4 ================================================== -->
        <div id='portfolio-chapter4'>
            <div class='title'>
                <h1>Miscellaneous</h1>
            </div>
            <div class='d-flex justify-content-center flex-wrap my-5 py-5'>
                @for ($i=1; $i<=10; $i++)
                    <div class="album-box" id="album-box{{$i}}">
                        <img src='/img/4.jpg'>
                        <div class="album-box-text">
                            <h5 id="album-box-text{{$i}}">Miscellaneous</h5>
                        </div>
                    </div>
                @endfor
            </div>
            <div id='end-chapter4'></div>
        </div>
    </div>
    <!-- CONTROL BAR -->
    <div class='col-md-1'>
        <div class='nav-bar'>
            <div class='bullet bullet-active' id='bullet1' data-toggle="tooltip" data-placement="left" title="National Roads & Motorways"></div>
            <div class='bullet' id='bullet2' data-toggle="tooltip" data-placement="left" title="Railways & Metro"></div>
            <div class='bullet' id='bullet3' data-toggle="tooltip" data-placement="left" title="WWTP"></div>
            <div class='bullet' id='bullet4' data-toggle="tooltip" data-placement="left" title="Miscellaneous"></div>
        </div>
    </div>
</div>

<script src='/js/portfolio.js'></script>