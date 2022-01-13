@php
    $count_box_op1 = 35;
    $count_box_op2 = 5;
    $count_box_op3 = 12;
    $count_box_op4 = 3;
@endphp


<div class='portfolio'>
    <nav class="portfolio-nav my-5 container">
        <ul class="nav">
            <li><a class="portfolio-active" id="portfolio1">National roads &amp; motorway</a></li>
            <li><a id="portfolio2">Railways &amp; metro</a></li>
            <li><a id="portfolio3">WWTP</a></li>
            <li><a id="portfolio4">Miscellaneous</a></li>
        </ul>
    </nav>
    <div class='container-fluid album-wrap'>
        <div class="my-5 album" id='national'>
            @for ($i=1; $i<=$count_box_op1; $i++)
                <div class="album-box" id="album-pic{{$i}}">
                    <img>
                    <div class="album-text">
                        <h5 id="album-text{{$i}}"></h5>
                    </div>
                </div>
            @endfor
        </div>
        <div class="my-5 album" id='railways'>
            @for ($i=1; $i<=$count_box_op2; $i++)
                <div class="album-box" id="album-pic{{$i}}">
                    <img>
                    <div class="album-text">
                        <h5 id="album-text{{$i}}"></h5>
                    </div>
                </div>
            @endfor
        </div>
        <div class="my-5 album" id='wwtp'>
            @for ($i=1; $i<=$count_box_op3; $i++)
                <div class="album-box" id="album-pic{{$i}}">
                    <img>
                    <div class="album-text">
                        <h5 id="album-text{{$i}}"></h5>
                    </div>
                </div>
            @endfor
        </div>
        <div class="my-5 album" id='miscel'>
            @for ($i=1; $i<=$count_box_op4; $i++)
                <div class="album-box" id="album-pic{{$i}}">
                    <img>
                    <div class="album-text">
                        <h5 id="album-text{{$i}}"></h5>
                    </div>
                </div>
            @endfor
        </div>
    </div>
</div>

<script src='/js/portfolio.js'></script>