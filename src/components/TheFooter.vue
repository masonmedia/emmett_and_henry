<template>
    <footer>
        <div id="footer" class="container-fluid p-0">
            <div class="row p-5 bg-dark text-light">
                <div class="col-lg-3 col-md-6 top-center">
          <!--<h1 style="font-family: Montserrat;
    letter-spacing: -34px;
    font-size: 25vmin; line-height: 90%" class="fw-bold mb-0 pb-2">e&h</h1>-->
        <img class="m-0" style="width: 300px; height: auto;" :src="getImageUrlSubfolder('logos', 'eh_dark_crop', 'png')" alt="e&h logo" />

                </div>

                <div class="col-lg-3 col-md-6 top-center">
                    <ul class="list-unstyled fs-4 fw-bold">
                        <a href="https://www.etsy.com/ca/shop/EmmettAndHenryCo" target="_blank">
                            <li class="nav-item">Etsy</li>
                        </a>
                        <a href="https://www.facebook.com/profile.php?id=61568463073233" target="_blank">
                            <li class="nav-item">Facebook</li>
                        </a>
                        <a href="mailto:emmettandhenrywoodworking@gmail.com" target="_blank">
                            <li class="nav-item">Contact</li>
                        </a>
                    </ul>
                </div>
                <div class="col-lg-6 top-center py-3 py-lg-0">
                    <ul class="list-unstyled">
                        <li class="fs-4 nav-item fw-bold pb-2">Privacy</li>
                        <li>This site does not track or collect visitor data. It does not use analytics, track referrals, follow user movement through the site, monitor IP addresses, set cookies or otherwise track visitor behaviour.</li>
                       <!-- <li class="fs-5 fw-bold mt-2">
                            <i class="bi bi-shield-lock-fill"></i> emmett & henry {{ year }}
                        </li>-->
                    </ul>
                </div>
            </div>
        </div>
    </footer>
</template>

<script setup>
import { useRoute, useRouter } from "vue-router";
import { getImageUrl, getImageUrlSubfolder } from '../js/imageUtils'

const location = useRoute();
const router = useRouter();

const date = new Date().toLocaleString(); // day, month, year + time
const year = new Date().getFullYear()
</script>