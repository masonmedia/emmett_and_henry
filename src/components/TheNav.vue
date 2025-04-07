<script setup>
import { getImageUrl, getImageUrlSubfolder } from '../js/imageUtils'
</script>

<!--<template>
  <div>
    <img :src="getImageUrl('hero', 'jpg')" alt="Hero">
    
    <img :src="getImageUrlSubfolder('logos', 'logo1', 'png')" alt="Logo">
  </div>
</template>-->

<style>

@media (min-width: 991px) {
  .nav-link {
    color: white;
  }
    /* Hover effect for white nav-link */
  .nav-link:hover {
    color: grey;
  }
}

@media (max-width: 991px) {
  .nav-link {
    font-size: 28px;
    line-height: 98%;
    font-weight: bold;
  }
}
</style>

<template>
<nav id="nav" class="navbar navbar-expand-lg fixed-top animate-in p-2 m-3 rounded-5 bg-dark">
		<div class="container-fluid">

			<a class="navbar-brand d-block d-md-none" href="/">
				<img class="h-auto animate-in rounded-3" style="width: 70px;" :src="getImageUrlSubfolder('logos', 'eh_dark_crop', 'png')" alt="emmett & henry logo" />	
			</a>
			<a class="navbar-brand d-none d-md-block me-auto" href="/">
				<img class="h-auto animate-in rounded-3" style="width: 80px;" :src="getImageUrlSubfolder('logos', 'eh_dark_crop', 'png')" alt="Emmett & Henry logo" />	
			</a>

            <button class="navbar-toggler btn btn-light py-2 rounded-3" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
				<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="white" class="bi bi-justify-left" viewBox="0 0 16 16">
					<path fill-rule="evenodd" d="M2 12.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5m0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5m0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5m0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5"/>
				  </svg>
			</button>

            <!--offcanvas-->
			<div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
			<div class="offcanvas-header">
				<div class="d-flex justify-content-center align-items-center">
					<a href="/">
						<img class="m-0" style="width: 80px; height: auto;" :src="getImageUrlSubfolder('logos', 'eh_white_crop', 'png')" alt="e&h logo" />	
					</a>
				</div>
                <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-x-lg position-absolute top-0 end-0 fs-1 me-3 mt-4" viewBox="0 0 16 16" role="button" data-bs-dismiss="offcanvas" aria-label="Close">
                    <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/>
                </svg>
			</div>

			<div class="offcanvas-body d-flex flex-column justify-content-end p-4 p-lg-0">
			    <ul class="navbar-nav justify-content-end align-items-start align-items-lg-center flex-grow-1 p-0">
				<li class="nav-item pe-2" role="button" data-bs-dismiss="offcanvas" aria-label="Close">
                    <a class="nav-link" href="#benches">Benches</a>
                </li>
                <li class="nav-item pe-2" role="button" data-bs-dismiss="offcanvas" aria-label="Close">
                    <a class="nav-link" href="#tables">Tables</a>
                </li>
                    <li class="nav-item pe-2" role="button" data-bs-dismiss="offcanvas" aria-label="Close">
                    <a class="nav-link" href="#beds">Beds</a>
                    </li>
                    <li class="nav-item pe-2" role="button" data-bs-dismiss="offcanvas" aria-label="Close">
                    <a class="nav-link" href="#blocks">Blocks</a>
                    </li>
                    <li class="nav-item pe-2" role="button" data-bs-dismiss="offcanvas" aria-label="Close">
                    <a class="nav-link" href="#climbers">Climbers</a>
                    </li>
                    <li class="nav-item pe-2" role="button" data-bs-dismiss="offcanvas" aria-label="Close">
                        <a class="nav-link" href="#ladders">Ladders</a>
                    </li>
                    <li class="nav-item pe-2" role="button" data-bs-dismiss="offcanvas" aria-label="Close">
                        <a class="nav-link" href="#how-we-work">How we work</a>
                    </li>
                    <li class="nav-item pe-2" role="button" data-bs-dismiss="offcanvas" aria-label="Close">
                        <a class="nav-link" href="#about">Our story</a>
                    </li>
                    <li class="nav-item" role="button" data-bs-dismiss="offcanvas" aria-label="Close">
                    <a class="nav-link" href="mailto:emmettandhenrywoodworking@gmail.com">
                        <button class="d-none d-lg-block btn btn-light px-4 rounded-5">Contact us</button>
                        <p class="d-block d-lg-none">Contact us</p>
                    </a>
                    </li>
				</ul>
			</div>
			</div>
		</div>
		</nav>



    <!--<nav class="navbar navbar-expand-lg bg-body-light border-bottom">
    <div class="container-fluid">
        <a class="fs-3 fw-bold mb-0 navbar-brand" style="letter-spacing: -1px;" href="#">e&h.</a>
        <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
        <ul class="navbar-nav d-flex justify-content-center align-items-center ms-auto mb-2 mb-lg-0">
            <li class="nav-item pe-2">
            <a class="nav-link" href="#benches">Benches</a>
            </li>
            <li class="nav-item pe-2">
            <a class="nav-link" href="#tables">Tables</a>
            </li>
            <li class="nav-item pe-2">
            <a class="nav-link" href="#beds">Beds</a>
            </li>
            <li class="nav-item pe-2">
            <a class="nav-link" href="#blocks">Blocks</a>
            </li>
            <li class="nav-item pe-2">
            <a class="nav-link" href="#climbers">Climbers</a>
            </li>
            <li class="nav-item pe-2">
            <a class="nav-link" href="#ladders">Ladders</a>
            </li>
            <li class="nav-item pe-2">
            <a class="nav-link" href="#how-it-works">How it works</a>
            </li>
            <li class="nav-item pe-2">
            <a class="nav-link" href="#about">Our story</a>
            </li>
            <li class="nav-item">
            <a class="nav-link" href="#">
                <button class="btn btn-outline-dark">Contact us</button>
            </a>
            </li>
        </ul>
        </div>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        </button>
    </div>
    </nav>-->
</template>