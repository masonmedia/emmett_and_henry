<script setup>
// import TheWelcome from '../components/TheWelcome.vue'
import TheNav from '../components/TheNav.vue'
import TheFooter from '../components/TheFooter.vue'
import TheModal from '../components/TheModal.vue'
import TheButton from '../components/TheButton.vue'
import ButtonGroup from '../components/ButtonGroup.vue'
// where 'name' is the actual name of the file, and 'ext' is the extension

// i.e. myjpg.jpg
// Function to dynamically get image URLs from the assets folder
const getImageUrl = (name, extension) => {
  try {
    // Using Vite's import.meta.url feature to handle asset URLs
    return new URL(`../assets/images/${name}.${extension}`, import.meta.url).href
  } catch (error) {
    console.error(`Failed to load image: ${name}.${extension}`, error)
    return '' // Return empty string if image fails to load
  }
}

const getImageUrlSubfolder = (subfolder, name, extension) => {
  try {
    // Using Vite's import.meta.url feature to handle asset URLs
    return new URL(`../assets/images/${subfolder}/${name}.${extension}`, import.meta.url).href
  } catch (error) {
    console.error(`Failed to load image: ${name}.${extension}`, error)
    return '' // Return empty string if image fails to load
  }
}

import { ref } from 'vue'

const imageLoaded = ref({})

const handleImageLoad = (imageId) => {
  imageLoaded.value[imageId] = true
}
</script>

<template>
  <main class="overflow-x-hidden">
    <TheNav/>
    <div class="container-fluid px-0">
      <div class="row m-0" style="height: 100dvh; background: url('https://images.pexels.com/photos/172277/pexels-photo-172277.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2') center; background-size: cover;">
        <div class="col-lg-8 d-flex flex-column justify-content-end align-items-start text-start p-5"> 
          <h1 class="h4 text-uppercase fw-bold" style="font-family: 'Montserrat', sans-serif; letter-spacing: 2px;">Emmett & Henry</h1>   
          <h2 class="display-2 text-burnt ls-base lh-1 fw-bold py-3">Handcrafted furniture and wood products, built tough, built beautiful, built to last in Canada.</h2>
          <div class="d-flex mt-4">
            <TheButton
              ButtonClass="btn-light me-2"
              ButtonLink="#benches">
              Shop
            </TheButton>
            <TheButton
             ButtonClass="btn-dark"
              ButtonLink="#about">
              About us
            </TheButton>
          </div>
        </div>
      </div>

      <!-- patio furniture -->
      <div id="patio" class="row m-0 pt-2">
        <div class="col-lg-8 offset-lg-2 min-vh-75 d-flex flex-column justify-content-center align-items-start align-items-lg-center text-start text-lg-center p-5">
          <h2 class="display-3 fw-900 ls-1 lh-1">Patio furniture</h2>
          <p class="fs-5 py-3">Our outdoor line of deck, patio, pool and yard furniture features handcrafted sofa chairs, loveseats, 3-seat sofas, coffee tables, end tables, and benches — all made from solid wood, and built for Canadian weather. Each piece is finished by hand with optional stain and waterproofing. Premium cushions are available as add-ons. Built to last, these are not your average patio sets — they're handcrafted, custom built, heirloom-quality outdoor furniture.</p>
          <ButtonGroup />
        </div>
        <div class="col-lg-8 col-md-6 mb-3">
          <div class="position-relative w-100 h-100">
            <div 
              class="position-absolute w-100 h-100 bg-light rounded-4 d-flex justify-content-center align-items-center"
              :class="{ 'd-none': imageLoaded['patio-chair6'] }"
            >
              <div class="spinner-border text-secondary" role="status">
                <span class="visually-hidden">Loading...</span>
              </div>
            </div>
            <img 
              class="w-100 h-100 rounded-4" 
              style="object-fit: cover; filter: blur(10px); transition: filter 0.3s ease-out;"
              :class="{ 'blur-0': imageLoaded['patio-chair6'] }"
              loading="lazy"
              :src="getImageUrlSubfolder('patio','chair6','png')" 
              alt="Patio chair"
              @load="handleImageLoad('patio-chair6')"
            >
          </div>
        </div>
        <div class="col-lg-4 col-md-6 mb-3">
          <div class="position-relative w-100 h-100">
            <div 
              class="position-absolute w-100 h-100 bg-light rounded-4 d-flex justify-content-center align-items-center"
              :class="{ 'd-none': imageLoaded['patio-chair2'] }"
            >
              <div class="spinner-border text-secondary" role="status">
                <span class="visually-hidden">Loading...</span>
              </div>
            </div>
            <img 
              class="w-100 h-100 rounded-4" 
              style="object-fit: cover; filter: blur(10px); transition: filter 0.3s ease-out;"
              :class="{ 'blur-0': imageLoaded['patio-chair2'] }"
              loading="lazy"
              :src="getImageUrlSubfolder('patio','chair2','jpg')" 
              alt="Patio chair"
              @load="handleImageLoad('patio-chair2')"
            >
          </div>
        </div>
        <div class="col-lg-6 col-md-6 mb-3">
          <div class="position-relative w-100 h-100">
            <div 
              class="position-absolute w-100 h-100 bg-light rounded-4 d-flex justify-content-center align-items-center"
              :class="{ 'd-none': imageLoaded['patio-chair4'] }"
            >
              <div class="spinner-border text-secondary" role="status">
                <span class="visually-hidden">Loading...</span>
              </div>
            </div>
            <img 
              class="w-100 h-100 rounded-4" 
              style="object-fit: cover; filter: blur(10px); transition: filter 0.3s ease-out;"
              :class="{ 'blur-0': imageLoaded['patio-chair4'] }"
              loading="lazy"
              :src="getImageUrlSubfolder('patio','chair4','jpg')" 
              alt="Patio chair"
              @load="handleImageLoad('patio-chair4')"
            >
          </div>
        </div>
        <div class="col-lg-6 col-md-6 mb-3">
          <div class="position-relative w-100 h-100">
            <div 
              class="position-absolute w-100 h-100 bg-light rounded-4 d-flex justify-content-center align-items-center"
              :class="{ 'd-none': imageLoaded['patio-sofa3'] }"
            >
              <div class="spinner-border text-secondary" role="status">
                <span class="visually-hidden">Loading...</span>
              </div>
            </div>
            <img 
              class="w-100 h-100 rounded-4" 
              style="object-fit: cover; filter: blur(10px); transition: filter 0.3s ease-out;"
              :class="{ 'blur-0': imageLoaded['patio-sofa3'] }"
              loading="lazy"
              :src="getImageUrlSubfolder('patio','sofa3','png')" 
              alt="Patio sofa"
              @load="handleImageLoad('patio-sofa3')"
            >
          </div>
        </div>
      </div>

      <!-- benches -->
      <div id="benches" class="row m-0 pt-2">
        <div class="col-lg-8 offset-lg-2 min-vh-75 d-flex flex-column justify-content-center align-items-start align-items-lg-center text-start text-lg-center p-5">
          <h2 class="display-3 fw-900 ls-1 lh-1">Benches</h2>
          <p class="fs-5 py-3">Perfect for entryways, hallways, mudrooms, or as rustic coffee tables, our handcrafted benches combine strength and style. Made from solid Canadian wood with structural screws and high-grade adhesive, these benches are built to last. The standard size is 3' long × 14" high × 15.5" deep, with a 29" wide opening below that fits a standard 28" plastic shoe mat. Custom dimensions and stain finishes available by request.</p>
          <ButtonGroup />
        </div>
        <div class="col-lg-3 col-md-6 mb-3">
          <div class="image-wrapper w-100 h-100 rounded-4">
            <div 
              class="position-absolute w-100 h-100 d-flex justify-content-center align-items-center"
              :class="{ 'd-none': imageLoaded['benches-cedar4'] }"
            >
              <div class="spinner-border text-secondary" role="status">
                <span class="visually-hidden">Loading...</span>
              </div>
            </div>
            <img 
              class="w-100 h-100 rounded-4 progressive-image" 
              :class="{ 'loaded': imageLoaded['benches-cedar4'] }"
              style="object-fit: cover;"
              loading="lazy"
              :src="getImageUrlSubfolder('benches','cedar4','jpg')" 
              alt="Cedar bench"
              @load="handleImageLoad('benches-cedar4')"
            >
          </div>
        </div>
        <div class="col-lg-3 col-md-6 mb-3">
          <div class="image-wrapper w-100 h-100 rounded-4">
            <div 
              class="position-absolute w-100 h-100 d-flex justify-content-center align-items-center"
              :class="{ 'd-none': imageLoaded['benches-bench3'] }"
            >
              <div class="spinner-border text-secondary" role="status">
                <span class="visually-hidden">Loading...</span>
              </div>
            </div>
            <img 
              class="w-100 h-100 rounded-4 progressive-image" 
              :class="{ 'loaded': imageLoaded['benches-bench3'] }"
              style="object-fit: cover;"
              loading="lazy"
              :src="getImageUrlSubfolder('benches','bench3','jpg')" 
              alt="Wooden bench"
              @load="handleImageLoad('benches-bench3')"
            >
          </div>
        </div>
        <div class="col-lg-3 col-md-6 mb-3">
          <div class="image-wrapper w-100 h-100 rounded-4">
            <div 
              class="position-absolute w-100 h-100 d-flex justify-content-center align-items-center"
              :class="{ 'd-none': imageLoaded['benches-bench7'] }"
            >
              <div class="spinner-border text-secondary" role="status">
                <span class="visually-hidden">Loading...</span>
              </div>
            </div>
            <img 
              class="w-100 h-100 rounded-4 progressive-image" 
              :class="{ 'loaded': imageLoaded['benches-bench7'] }"
              style="object-fit: cover;"
              loading="lazy"
              :src="getImageUrlSubfolder('benches','bench7','jpg')" 
              alt="Wooden bench"
              @load="handleImageLoad('benches-bench7')"
            >
          </div>
        </div>
        <div class="col-lg-3 col-md-6 mb-3">
          <div class="image-wrapper w-100 h-100 rounded-4">
            <div 
              class="position-absolute w-100 h-100 d-flex justify-content-center align-items-center"
              :class="{ 'd-none': imageLoaded['benches-bench5'] }"
            >
              <div class="spinner-border text-secondary" role="status">
                <span class="visually-hidden">Loading...</span>
              </div>
            </div>
            <img 
              class="w-100 h-100 rounded-4 progressive-image" 
              :class="{ 'loaded': imageLoaded['benches-bench5'] }"
              style="object-fit: cover;"
              loading="lazy"
              :src="getImageUrlSubfolder('benches','bench5','jpg')" 
              alt="Wooden bench"
              @load="handleImageLoad('benches-bench5')"
            >
          </div>
        </div>
      </div>

      <!-- tables -->
      <div id="tables" class="row m-0 pt-2">
        <div class="col-lg-8 offset-lg-2 min-vh-75 d-flex flex-column justify-content-center align-items-start align-items-lg-center text-start text-lg-center p-5">
          <h2 class="display-3 fw-900 ls-1 lh-1">Tables</h2>
          <p class="fs-5 py-3">Our slimline console tables are perfect for narrow spaces like front entries or hallways. Designed to hold keys, vases, and decorative pieces, these tables can also include a lower shelf for added storage. Standard dimensions: 36" long × 35.5" high × 7.5" deep. comes unstained. Built to order in your choice of dimensions and stain.</p>
          <ButtonGroup />
        </div>
        <div class="col-lg-3 col-md-6 mb-3">
          <div class="position-relative w-100 h-100">
            <div 
              class="position-absolute w-100 h-100 bg-light rounded-4 d-flex justify-content-center align-items-center"
              :class="{ 'd-none': imageLoaded['tables-table1'] }"
            >
              <div class="spinner-border text-secondary" role="status">
                <span class="visually-hidden">Loading...</span>
              </div>
            </div>
            <img 
              class="w-100 h-100 rounded-4" 
              style="object-fit: cover; filter: blur(10px); transition: filter 0.3s ease-out;"
              :class="{ 'blur-0': imageLoaded['tables-table1'] }"
              loading="lazy"
              :src="getImageUrlSubfolder('tables','table1','jpg')" 
              alt="Console table"
              @load="handleImageLoad('tables-table1')"
            >
          </div>
        </div>
        <div class="col-lg-3 col-md-6 mb-3">
          <div class="position-relative w-100 h-100">
            <div 
              class="position-absolute w-100 h-100 bg-light rounded-4 d-flex justify-content-center align-items-center"
              :class="{ 'd-none': imageLoaded['tables-table2'] }"
            >
              <div class="spinner-border text-secondary" role="status">
                <span class="visually-hidden">Loading...</span>
              </div>
            </div>
            <img 
              class="w-100 h-100 rounded-4" 
              style="object-fit: cover; filter: blur(10px); transition: filter 0.3s ease-out;"
              :class="{ 'blur-0': imageLoaded['tables-table2'] }"
              loading="lazy"
              :src="getImageUrlSubfolder('tables','table2','jpg')" 
              alt="Console table"
              @load="handleImageLoad('tables-table2')"
            >
          </div>
        </div>
        <div class="col-lg-3 col-md-6 mb-3">
          <div class="position-relative w-100 h-100">
            <div 
              class="position-absolute w-100 h-100 bg-light rounded-4 d-flex justify-content-center align-items-center"
              :class="{ 'd-none': imageLoaded['tables-table8'] }"
            >
              <div class="spinner-border text-secondary" role="status">
                <span class="visually-hidden">Loading...</span>
              </div>
            </div>
            <img 
              class="w-100 h-100 rounded-4" 
              style="object-fit: cover; filter: blur(10px); transition: filter 0.3s ease-out;"
              :class="{ 'blur-0': imageLoaded['tables-table8'] }"
              loading="lazy"
              :src="getImageUrlSubfolder('tables','table8','jpg')" 
              alt="Console table"
              @load="handleImageLoad('tables-table8')"
            >
          </div>
        </div>
        <div class="col-lg-3 col-md-6 mb-3">
          <div class="position-relative w-100 h-100">
            <div 
              class="position-absolute w-100 h-100 bg-light rounded-4 d-flex justify-content-center align-items-center"
              :class="{ 'd-none': imageLoaded['tables-table7'] }"
            >
              <div class="spinner-border text-secondary" role="status">
                <span class="visually-hidden">Loading...</span>
              </div>
            </div>
            <img 
              class="w-100 h-100 rounded-4" 
              style="object-fit: cover; filter: blur(10px); transition: filter 0.3s ease-out;"
              :class="{ 'blur-0': imageLoaded['tables-table7'] }"
              loading="lazy"
              :src="getImageUrlSubfolder('tables','table7','jpg')" 
              alt="Console table"
              @load="handleImageLoad('tables-table7')"
            >
          </div>
        </div>
      </div>

      <!-- beds -->
      <div id="beds" class="row m-0 pt-2">
        <div class="col-lg-8 offset-lg-2 min-vh-75 d-flex flex-column justify-content-center align-items-start align-items-lg-center text-start text-lg-center p-5">
          <h2 class="display-3 fw-900 ls-1 lh-1">Kids Beds</h2>
          <p class="fs-5 py-3">Built tough for real-life kids, our modular house-frame floor bed and twin bunkbed are crafted with dimensional lumber and knotty pine (2x6, 2x4, 2x3, 1x4) and assembled on-site. Designed to withstand climbing, hanging, swinging, jumping, gymnastics, and all forms of monkey business, these beds are made to last through years of wear and tear. Fits standard twin mattresses. Beds are delivered in a natural, unstained finish and can be stained upon request.</p>
          <ButtonGroup />
        </div>
        <div class="col-lg-3 col-md-6 mb-3">
          <div class="position-relative w-100 h-100">
            <div 
              class="position-absolute w-100 h-100 bg-light rounded-4 d-flex justify-content-center align-items-center"
              :class="{ 'd-none': imageLoaded['beds-henry1'] }"
            >
              <div class="spinner-border text-secondary" role="status">
                <span class="visually-hidden">Loading...</span>
              </div>
            </div>
            <img 
              class="w-100 h-100 rounded-4" 
              style="object-fit: cover; filter: blur(10px); transition: filter 0.3s ease-out;"
              :class="{ 'blur-0': imageLoaded['beds-henry1'] }"
              loading="lazy"
              :src="getImageUrlSubfolder('beds','henry1','jpg')" 
              alt="Kids bed"
              @load="handleImageLoad('beds-henry1')"
            >
          </div>
        </div>
        <div class="col-lg-3 col-md-6 mb-3">
          <div class="position-relative w-100 h-100">
            <div 
              class="position-absolute w-100 h-100 bg-light rounded-4 d-flex justify-content-center align-items-center"
              :class="{ 'd-none': imageLoaded['beds-henry3'] }"
            >
              <div class="spinner-border text-secondary" role="status">
                <span class="visually-hidden">Loading...</span>
              </div>
            </div>
            <img 
              class="w-100 h-100 rounded-4" 
              style="object-fit: cover; filter: blur(10px); transition: filter 0.3s ease-out;"
              :class="{ 'blur-0': imageLoaded['beds-henry3'] }"
              loading="lazy"
              :src="getImageUrlSubfolder('beds','henry3','jpg')" 
              alt="Kids bed"
              @load="handleImageLoad('beds-henry3')"
            >
          </div>
        </div>
        <div class="col-lg-3 col-md-6 mb-3">
          <div class="position-relative w-100 h-100">
            <div 
              class="position-absolute w-100 h-100 bg-light rounded-4 d-flex justify-content-center align-items-center"
              :class="{ 'd-none': imageLoaded['beds-henry4'] }"
            >
              <div class="spinner-border text-secondary" role="status">
                <span class="visually-hidden">Loading...</span>
              </div>
            </div>
            <img 
              class="w-100 h-100 rounded-4" 
              style="object-fit: cover; filter: blur(10px); transition: filter 0.3s ease-out;"
              :class="{ 'blur-0': imageLoaded['beds-henry4'] }"
              loading="lazy"
              :src="getImageUrlSubfolder('beds','henry4','jpg')" 
              alt="Kids bed"
              @load="handleImageLoad('beds-henry4')"
            >
          </div>
        </div>
        <div class="col-lg-3 col-md-6 mb-3">
          <div class="position-relative w-100 h-100">
            <div 
              class="position-absolute w-100 h-100 bg-light rounded-4 d-flex justify-content-center align-items-center"
              :class="{ 'd-none': imageLoaded['beds-emmett1'] }"
            >
              <div class="spinner-border text-secondary" role="status">
                <span class="visually-hidden">Loading...</span>
              </div>
            </div>
            <img 
              class="w-100 h-100 rounded-4" 
              style="object-fit: cover; filter: blur(10px); transition: filter 0.3s ease-out;"
              :class="{ 'blur-0': imageLoaded['beds-emmett1'] }"
              loading="lazy"
              :src="getImageUrlSubfolder('beds','emmett1','jpeg')" 
              alt="Kids bed"
              @load="handleImageLoad('beds-emmett1')"
            >
          </div>
        </div>
      </div>

      <!-- blocks -->
      <div id="blocks" class="row m-0 pt-2">
        <div class="col-lg-8 offset-lg-2 min-vh-75 d-flex flex-column justify-content-center align-items-start align-items-lg-center text-start text-lg-center p-5">
          <h2 class="display-3 fw-900 ls-1 lh-1">Building Blocks</h2>
          <p class="fs-5 py-3">Born from scrap and made with love, our building block sets are crafted from natural, unfinished pine and come in a variety of shapes and sizes. These large-format blocks inspire creative play for infants through preschoolers.</p>
          <ButtonGroup />
        </div>
        <div class="col-lg-3 col-md-6 mb-3">
          <div class="position-relative w-100 h-100">
            <div 
              class="position-absolute w-100 h-100 bg-light rounded-4 d-flex justify-content-center align-items-center"
              :class="{ 'd-none': imageLoaded['blocks-selection'] }"
            >
              <div class="spinner-border text-secondary" role="status">
                <span class="visually-hidden">Loading...</span>
              </div>
            </div>
            <img 
              class="w-100 h-100 rounded-4" 
              style="object-fit: cover; filter: blur(10px); transition: filter 0.3s ease-out;"
              :class="{ 'blur-0': imageLoaded['blocks-selection'] }"
              loading="lazy"
              :src="getImageUrlSubfolder('blocks','eh_blocks_selection','jpeg')" 
              alt="Building blocks"
              @load="handleImageLoad('blocks-selection')"
            >
          </div>
        </div>
        <div class="col-lg-3 col-md-6 mb-3">
          <div class="position-relative w-100 h-100">
            <div 
              class="position-absolute w-100 h-100 bg-light rounded-4 d-flex justify-content-center align-items-center"
              :class="{ 'd-none': imageLoaded['blocks-selection2'] }"
            >
              <div class="spinner-border text-secondary" role="status">
                <span class="visually-hidden">Loading...</span>
              </div>
            </div>
            <img 
              class="w-100 h-100 rounded-4" 
              style="object-fit: cover; filter: blur(10px); transition: filter 0.3s ease-out;"
              :class="{ 'blur-0': imageLoaded['blocks-selection2'] }"
              loading="lazy"
              :src="getImageUrlSubfolder('blocks','eh_blocks_selection2','jpeg')" 
              alt="Building blocks"
              @load="handleImageLoad('blocks-selection2')"
            >
          </div>
        </div>
        <div class="col-lg-3 col-md-6 mb-3">
          <div class="position-relative w-100 h-100">
            <div 
              class="position-absolute w-100 h-100 bg-light rounded-4 d-flex justify-content-center align-items-center"
              :class="{ 'd-none': imageLoaded['blocks-shape'] }"
            >
              <div class="spinner-border text-secondary" role="status">
                <span class="visually-hidden">Loading...</span>
              </div>
            </div>
            <img 
              class="w-100 h-100 rounded-4" 
              style="object-fit: cover; filter: blur(10px); transition: filter 0.3s ease-out;"
              :class="{ 'blur-0': imageLoaded['blocks-shape'] }"
              loading="lazy"
              :src="getImageUrlSubfolder('blocks','eh_blocks_shape','jpeg')" 
              alt="Building blocks"
              @load="handleImageLoad('blocks-shape')"
            >
          </div>
        </div>
        <div class="col-lg-3 col-md-6 mb-3">
          <div class="position-relative w-100 h-100">
            <div 
              class="position-absolute w-100 h-100 bg-light rounded-4 d-flex justify-content-center align-items-center"
              :class="{ 'd-none': imageLoaded['blocks-box'] }"
            >
              <div class="spinner-border text-secondary" role="status">
                <span class="visually-hidden">Loading...</span>
              </div>
            </div>
            <img 
              class="w-100 h-100 rounded-4" 
              style="object-fit: cover; filter: blur(10px); transition: filter 0.3s ease-out;"
              :class="{ 'blur-0': imageLoaded['blocks-box'] }"
              loading="lazy"
              :src="getImageUrlSubfolder('blocks','eh_blocks_box','jpg')" 
              alt="Building blocks"
              @load="handleImageLoad('blocks-box')"
            >
          </div>
        </div>
      </div>

      <!-- climbers -->
      <div id="climbers" class="row m-0 pt-2">
        <div class="col-lg-8 offset-lg-2 min-vh-75 d-flex flex-column justify-content-center align-items-start align-items-lg-center text-start text-lg-center p-5">
          <h2 class="display-3 fw-900 ls-1 lh-1">Climbers</h2>
          <p class="fs-5 pt-3">Inspired by the classic Pikler triangle, our <span class="fw-bold">e&h</span> triangle climber features solid 2x4 construction with closer ladder spacing for added safety and easier climbing. Assembled with structural fasteners, it pairs perfectly with our slide and climbing ramp add-ons. Ideal for supervised indoor use, but can be sealed and stained for outdoor adventures.</p>
          <p class="small fst-italic mt-0 mb-3">*Be sure to use no/low-VOC and non-toxic stain/seal options for kid safety. Outdoor use exposes material to wear, rot, and rust. Always supervise children when using this product.</p> 
          <ButtonGroup />
        </div>
        <div class="col-lg-12 px-4 pt-4 min-vh-75" :style="{'background' : 'url('+ getImageUrl('eh_pikler_closeup','jpg') +') center', 'background-size' : 'cover'}">
        </div>
      </div>

      <!-- ladders -->
      <div id="ladders" class="row m-0 pt-2">
        <div class="col-lg-8 offset-lg-2 min-vh-75 d-flex flex-column justify-content-center align-items-start align-items-lg-center text-start text-lg-center p-5">
          <h2 class="display-3 fw-900 ls-1 lh-1">Ladders</h2>
          <p class="fs-5 pt-3">Originally created as a complement to our bunkbeds, the e&h ladder is now a favorite in its own right. Crafted from 2x4 and available in custom sizes and orientations, it's as functional as it is decorative. Use it as a towel rack, blanket ladder, accent piece, or just as a step ladder. Smooth-sanded and ready for stain or natural use.</p>
          <p class="small fst-italic mt-0 mb-3">*Model shown is a 6 foot slimline 5-step variation, with 11.5" step width, 12" step spacing. Great for tight spaces, closets, bathrooms, bunkbeds, etc.</p> 
          <ButtonGroup />
        </div>
        <div class="col-lg-12 px-4 pt-4 min-vh-75" :style="{'background' : 'url('+ getImageUrl('eh_ladder','jpeg') +') center', 'background-size' : 'cover'}">
        </div>
      </div>

      <!-- how we work -->
      <div id="how-we-work" class="row m-0 pt-2">
        <div class="col-lg-8 offset-lg-2 min-vh-75 d-flex flex-column justify-content-center align-items-start align-items-lg-center text-start text-lg-center p-5">
          <h2 class="display-3 fw-900 ls-1 lh-1">How we work</h2>
          <p class="fs-5 py-3">Our products are made to order. We have varying levels of stock, but most often build on request. Timelines vary though generally take 2-4 weeks for average turnaround. We offer delivery on certain items within the Great Toronto Area, and ship wood blocks and giant jenga. All products are also available for pickup. Contact us for more details, custom orders, or special requests.</p>
          <TheButton
             ButtonClass="btn-dark"
              ButtonLink="mailto:emmettandhenrywoodworks@gmail.com">
              Learn more
            </TheButton>
        </div>
        <div class="col-lg-12 px-4 pt-4 min-vh-75" :style="{'background' : 'url('+ getImageUrlSubfolder('blocks','eh_blocks_selection2','jpeg') +') center', 'background-size' : 'cover'}">
        </div>
      </div>

      <!-- about -->
      <div id="about" class="row m-0 pt-2">
        <div class="col-lg-8 offset-lg-2 min-vh-75 d-flex flex-column justify-content-center align-items-start align-items-lg-center text-start text-lg-center p-5">
          <h2 class="display-3 fw-900 ls-1 lh-1">About e&h</h2>
          <p class="fs-5 py-3">Emmett & Henry is a Canadian company that builds custom furniture and wood products with precision, high quality materials, and a modern, farmhouse design aesthetic. We love what we do and are proud to create innovative, solid wood products that are safe, strong, stylish, and designed to withstand the rigors of our own family. We think they'll be great for yours too. Drop us a line for more information or to place a custom order.</p>
          <TheButton
            ButtonClass="btn-dark"
            ButtonLink="mailto:emmettandhenrywoodworks@gmail.com">
            Get in touch
          </TheButton>
        </div>
        <div class="col-lg-12 px-4 pt-4 min-vh-75" :style="{'background' : 'url('+ getImageUrl('eh_dinos','webp') +') center', 'background-size' : 'cover'}">
        </div>
      </div>

    </div>
    <TheFooter />
  </main>
</template>

<style scoped>
.blur-0 {
  filter: blur(0) !important;
}

.progressive-image {
  filter: blur(20px);
  transform: scale(1.1);
  transition: filter 0.3s ease-out, transform 0.3s ease-out;
}

.progressive-image.loaded {
  filter: blur(0);
  transform: scale(1);
}

.image-wrapper {
  position: relative;
  overflow: hidden;
  background-color: #f8f9fa;
}
</style>
