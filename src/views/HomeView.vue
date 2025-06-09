<script setup>
// import TheWelcome from '../components/TheWelcome.vue'
import TheNav from '../components/TheNav.vue'
import TheFooter from '../components/TheFooter.vue'
import TheModal from '../components/TheModal.vue'
import TheButton from '../components/TheButton.vue'
import ButtonGroup from '../components/ButtonGroup.vue'
import ImageModal from '../components/ImageModal.vue'
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

const imageLoaded = ref(false)

const benchesImages = [
  { src: getImageUrlSubfolder('benches','cedar4','jpg'), alt: 'Cedar bench' },
  { src: getImageUrlSubfolder('benches','bench3','jpg'), alt: 'Wooden bench' },
  { src: getImageUrlSubfolder('benches','bench7','jpg'), alt: 'Wooden bench' },
  { src: getImageUrlSubfolder('benches','bench5','jpg'), alt: 'Wooden bench' }
]

const currentBenchesIndex = ref(0)

const openBenchesModal = (index) => {
  currentBenchesIndex.value = index
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

      <!-- hero with burn eh logo -->
      <!-- <div class="row m-0" style="height: 100svh; background: url('https://images.pexels.com/photos/172277/pexels-photo-172277.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2') center; background-size: cover;">
        <div class="col-lg-8 offset-lg-2 d-flex flex-column justify-content-center align-items-center text-center p-5">
         <img class="mt-4" style="width: 250px; height: auto; filter: grayscale(1); margin-left: -30px; margin-bottom: -70px" :src="getImageUrlSubfolder('logos','eh_burned1_trans','png')" alt="">
         <h2 class="display-3 ls-base lh-1 fw-bold py-3 mt-2" style="color: #3b2a1a; text-shadow:
  0 1px 0 #00000055,
  0 2px 1px #00000033,
  0 3px 2px #00000022,
  1px 1px 2px #00000044,
  -1px -1px 2px #00000044;
mix-blend-mode: multiply;">Handcrafted furniture and wood products, built tough, built beautiful, built to last in Canada.</h2>
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
      </div> -->
      
      <!-- <div class="row m-0">
          <div class="col-lg-12 px-4 pt-4 min-vh-75" :style="{'background' : 'url('+ getImageUrlSubfolder('blocks','eh_blocks_shape','jpeg') +') center', 'background-size' : 'cover'}">
        </div>
       
      </div> -->

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
              :class="{ 'd-none': imageLoaded }"
            >
              <div class="spinner-border text-secondary" role="status">
                <span class="visually-hidden">Loading...</span>
              </div>
            </div>
            <img 
              class="w-100 h-100 rounded-4" 
              style="object-fit: cover; cursor: pointer;" 
              loading="lazy"
              :src="getImageUrlSubfolder('patio','chair6','png')" 
              alt="Patio chair"
              @load="imageLoaded = true"
              data-bs-toggle="modal"
              data-bs-target="#patioModal1"
            >
          </div>
        </div>
        <div class="col-lg-4 col-md-6 mb-3">
          <div class="position-relative w-100 h-100">
            <div 
              class="position-absolute w-100 h-100 bg-light rounded-4 d-flex justify-content-center align-items-center"
              :class="{ 'd-none': imageLoaded }"
            >
              <div class="spinner-border text-secondary" role="status">
                <span class="visually-hidden">Loading...</span>
              </div>
            </div>
            <img 
              class="w-100 h-100 rounded-4" 
              style="object-fit: cover; cursor: pointer;" 
              loading="lazy"
              :src="getImageUrlSubfolder('patio','chair2','jpg')" 
              alt="Patio chair"
              @load="imageLoaded = true"
              data-bs-toggle="modal"
              data-bs-target="#patioModal2"
            >
          </div>
        </div>
        <div class="col-lg-6 col-md-6 mb-3">
          <img 
            class="w-100 h-100 rounded-4" 
            style="object-fit: cover; cursor: pointer;" 
            :src="getImageUrlSubfolder('patio','chair4','jpg')" 
            alt="Patio chair"
            data-bs-toggle="modal"
            data-bs-target="#patioModal3"
          >
        </div>
        <div class="col-lg-6 col-md-6 mb-3">
          <img 
            class="w-100 h-100 rounded-4" 
            style="object-fit: cover; cursor: pointer;" 
            :src="getImageUrlSubfolder('patio','sofa3','png')" 
            alt="Patio sofa"
            data-bs-toggle="modal"
            data-bs-target="#patioModal4"
          >
        </div>
      </div>

      <!-- Patio Modals -->
      <ImageModal 
        modalId="patioModal1"
        :imageSrc="getImageUrlSubfolder('patio','chair6','png')"
        imageAlt="Patio chair"
      />
      <ImageModal 
        modalId="patioModal2"
        :imageSrc="getImageUrlSubfolder('patio','chair2','jpg')"
        imageAlt="Patio chair"
      />
      <ImageModal 
        modalId="patioModal3"
        :imageSrc="getImageUrlSubfolder('patio','chair4','jpg')"
        imageAlt="Patio chair"
      />
      <ImageModal 
        modalId="patioModal4"
        :imageSrc="getImageUrlSubfolder('patio','sofa3','png')"
        imageAlt="Patio sofa"
      />

      <!-- benches -->

      <div id="benches" class="row m-0 pt-2">
        <div class="col-lg-8 offset-lg-2 min-vh-75 d-flex flex-column justify-content-center align-items-start align-items-lg-center text-start text-lg-center p-5">
          <h2 class="display-3 fw-900 ls-1 lh-1">Benches</h2>
          <p class="fs-5 py-3">Perfect for entryways, hallways, mudrooms, or as rustic coffee tables, our handcrafted benches combine strength and style. Made from solid Canadian wood with structural screws and high-grade adhesive, these benches are built to last. The standard size is 3' long × 14" high × 15.5" deep, with a 29" wide opening below that fits a standard 28" plastic shoe mat. Custom dimensions and stain finishes available by request.</p>
          <ButtonGroup />
        </div>
        <div class="col-lg-3 col-md-6 mb-3">
          <div class="position-relative w-100 h-100">
            <div 
              class="position-absolute w-100 h-100 bg-light rounded-4 d-flex justify-content-center align-items-center"
              :class="{ 'd-none': imageLoaded }"
            >
              <div class="spinner-border text-secondary" role="status">
                <span class="visually-hidden">Loading...</span>
              </div>
            </div>
            <img 
              class="w-100 h-100 rounded-4" 
              style="object-fit: cover; cursor: pointer;" 
              loading="lazy"
              :src="getImageUrlSubfolder('benches','cedar4','jpg')" 
              alt="Cedar bench"
              @load="imageLoaded = true"
              data-bs-toggle="modal"
              data-bs-target="#benchModal1"
            >
          </div>
        </div>
        <div class="col-lg-3 col-md-6 mb-3">
          <div class="position-relative w-100 h-100">
            <div 
              class="position-absolute w-100 h-100 bg-light rounded-4 d-flex justify-content-center align-items-center"
              :class="{ 'd-none': imageLoaded }"
            >
              <div class="spinner-border text-secondary" role="status">
                <span class="visually-hidden">Loading...</span>
              </div>
            </div>
            <img 
              class="w-100 h-100 rounded-4" 
              style="object-fit: cover; cursor: pointer;" 
              loading="lazy"
              :src="getImageUrlSubfolder('benches','bench3','jpg')" 
              alt="Wooden bench"
              @load="imageLoaded = true"
              data-bs-toggle="modal"
              data-bs-target="#benchModal2"
            >
          </div>
        </div>
        <div class="col-lg-3 col-md-6 mb-3">
          <img 
            class="w-100 h-100 rounded-4" 
            style="object-fit: cover; cursor: pointer;" 
            :src="getImageUrlSubfolder('benches','bench7','jpg')" 
            alt="Wooden bench"
            data-bs-toggle="modal"
            data-bs-target="#benchModal3"
          >
        </div>
        <div class="col-lg-3 col-md-6 mb-3">
          <img 
            class="w-100 h-100 rounded-4" 
            style="object-fit: cover; cursor: pointer;" 
            :src="getImageUrlSubfolder('benches','bench5','jpg')" 
            alt="Wooden bench"
            data-bs-toggle="modal"
            data-bs-target="#benchModal4"
          >
        </div>
      </div>

      <!-- Image Modals -->
      <ImageModal 
        modalId="benchModal1"
        :imageSrc="getImageUrlSubfolder('benches','cedar4','jpg')"
        imageAlt="Cedar bench"
      />
      <ImageModal 
        modalId="benchModal2"
        :imageSrc="getImageUrlSubfolder('benches','bench3','jpg')"
        imageAlt="Wooden bench"
      />
      <ImageModal 
        modalId="benchModal3"
        :imageSrc="getImageUrlSubfolder('benches','bench7','jpg')"
        imageAlt="Wooden bench"
      />
      <ImageModal 
        modalId="benchModal4"
        :imageSrc="getImageUrlSubfolder('benches','bench5','jpg')"
        imageAlt="Wooden bench"
      />
      
      <!-- tables -->

      <div id="tables" class="row m-0 pt-2">
        <div class="col-lg-8 offset-lg-2 min-vh-75 d-flex flex-column justify-content-center align-items-start align-items-lg-center text-start text-lg-center p-5">
          <h2 class="display-3 fw-900 ls-1 lh-1">Tables</h2>
          <p class="fs-5 py-3">Our slimline console tables are perfect for narrow spaces like front entries or hallways. Designed to hold keys, vases, and decorative pieces, these tables can also include a lower shelf for added storage. Standard dimensions: 36" long × 35.5" high × 7.5" deep. comes unstained. Built to order in your choice of dimensions and stain.</p>
          <ButtonGroup />
        </div>
        <div class="col-lg-3 col-md-6 mb-3">
          <img 
            class="w-100 h-100 rounded-4" 
            style="object-fit: cover; cursor: pointer;" 
            :src="getImageUrlSubfolder('tables','coffee5','png')" 
            alt="Console table"
            data-bs-toggle="modal"
            data-bs-target="#coffeeModal1"
          >
        </div>
        <div class="col-lg-3 col-md-6 mb-3">
          <img 
            class="w-100 h-100 rounded-4" 
            style="object-fit: cover; cursor: pointer;" 
            :src="getImageUrlSubfolder('tables','coffee2','png')" 
            alt="Console table"
            data-bs-toggle="modal"
            data-bs-target="#coffeeModal2"
          >
        </div>
        <div class="col-lg-3 col-md-6 mb-3">
          <img 
            class="w-100 h-100 rounded-4" 
            style="object-fit: cover; cursor: pointer;" 
            :src="getImageUrlSubfolder('tables','coffee3','png')" 
            alt="Console table"
            data-bs-toggle="modal"
            data-bs-target="#coffeeModal3"
          >
        </div>
        <div class="col-lg-3 col-md-6 mb-3">
          <img 
            class="w-100 h-100 rounded-4" 
            style="object-fit: cover; cursor: pointer;" 
            :src="getImageUrlSubfolder('tables','coffee4','jpg')" 
            alt="Console table"
            data-bs-toggle="modal"
            data-bs-target="#coffeeModal4"
          >
        </div>

        <div class="col-lg-3 col-md-6 mb-3">
          <img 
            class="w-100 h-100 rounded-4" 
            style="object-fit: cover; cursor: pointer;" 
            :src="getImageUrlSubfolder('tables','table1','jpg')" 
            alt="Console table"
            data-bs-toggle="modal"
            data-bs-target="#tableModal1"
          >
        </div>
        <div class="col-lg-3 col-md-6 mb-3">
          <img 
            class="w-100 h-100 rounded-4" 
            style="object-fit: cover; cursor: pointer;" 
            :src="getImageUrlSubfolder('tables','table2','jpg')" 
            alt="Console table"
            data-bs-toggle="modal"
            data-bs-target="#tableModal2"
          >
        </div>
        <div class="col-lg-3 col-md-6 mb-3">
          <img 
            class="w-100 h-100 rounded-4" 
            style="object-fit: cover; cursor: pointer;" 
            :src="getImageUrlSubfolder('tables','table8','jpg')" 
            alt="Console table"
            data-bs-toggle="modal"
            data-bs-target="#tableModal3"
          >
        </div>
        <div class="col-lg-3 col-md-6 mb-3">
          <img 
            class="w-100 h-100 rounded-4" 
            style="object-fit: cover; cursor: pointer;" 
            :src="getImageUrlSubfolder('tables','table7','jpg')" 
            alt="Console table"
            data-bs-toggle="modal"
            data-bs-target="#tableModal4"
          >
        </div>
      </div>

      <!-- Table Modals -->
      <ImageModal 
        modalId="coffeeModal1"
        :imageSrc="getImageUrlSubfolder('tables','coffee5','png')"
        imageAlt="Console table"
      />
      <ImageModal 
        modalId="coffeeModal2"
        :imageSrc="getImageUrlSubfolder('tables','coffee2','png')"
        imageAlt="Console table"
      />
      <ImageModal 
        modalId="coffeeModal3"
        :imageSrc="getImageUrlSubfolder('tables','coffee3','png')"
        imageAlt="Console table"
      />
      <ImageModal 
        modalId="coffeeModal4"
        :imageSrc="getImageUrlSubfolder('tables','coffee4','jpg')"
        imageAlt="Console table"
      />

      <ImageModal 
        modalId="tableModal1"
        :imageSrc="getImageUrlSubfolder('tables','table1','jpg')"
        imageAlt="Console table"
      />
      <ImageModal 
        modalId="tableModal2"
        :imageSrc="getImageUrlSubfolder('tables','table2','jpg')"
        imageAlt="Console table"
      />
      <ImageModal 
        modalId="tableModal3"
        :imageSrc="getImageUrlSubfolder('tables','table8','jpg')"
        imageAlt="Console table"
      />
      <ImageModal 
        modalId="tableModal4"
        :imageSrc="getImageUrlSubfolder('tables','table7','jpg')"
        imageAlt="Console table"
      />

      <!-- beds -->

      <div id="beds" class="row m-0 pt-2">
        <div class="col-lg-8 offset-lg-2 min-vh-75 d-flex flex-column justify-content-center align-items-start align-items-lg-center text-start text-lg-center p-5">
          <h2 class="display-3 fw-900 ls-1 lh-1">Kids Beds</h2>
          <p class="fs-5 py-3">Built tough for real-life kids, our modular house-frame floor bed and twin bunkbed are crafted with dimensional lumber and knotty pine (2x6, 2x4, 2x3, 1x4) and assembled on-site. Designed to withstand climbing, hanging, swinging, jumping, gymnastics, and all forms of monkey business, these beds are made to last through years of wear and tear. Fits standard twin mattresses. Beds are delivered in a natural, unstained finish and can be stained upon request.</p>
          <ButtonGroup />
        </div>
        <div class="col-lg-3 col-md-6 mb-3">
          <img 
            class="w-100 h-100 rounded-4" 
            style="object-fit: cover; cursor: pointer;" 
            :src="getImageUrlSubfolder('beds','henry1','jpg')" 
            alt="Kids bed"
            data-bs-toggle="modal"
            data-bs-target="#bedModal1"
          >
        </div>
        <div class="col-lg-3 col-md-6 mb-3">
          <img 
            class="w-100 h-100 rounded-4" 
            style="object-fit: cover; cursor: pointer;" 
            :src="getImageUrlSubfolder('beds','henry3','jpg')" 
            alt="Kids bed"
            data-bs-toggle="modal"
            data-bs-target="#bedModal2"
          >
        </div>
        <div class="col-lg-3 col-md-6 mb-3">
          <img 
            class="w-100 h-100 rounded-4" 
            style="object-fit: cover; cursor: pointer;" 
            :src="getImageUrlSubfolder('beds','henry4','jpg')" 
            alt="Kids bed"
            data-bs-toggle="modal"
            data-bs-target="#bedModal3"
          >
        </div>
        <div class="col-lg-3 col-md-6 mb-3">
          <img 
            class="w-100 h-100 rounded-4" 
            style="object-fit: cover; cursor: pointer;" 
            :src="getImageUrlSubfolder('beds','emmett1','jpeg')" 
            alt="Kids bed"
            data-bs-toggle="modal"
            data-bs-target="#bedModal4"
          >
        </div>
      </div>

      <!-- Bed Modals -->
      <ImageModal 
        modalId="bedModal1"
        :imageSrc="getImageUrlSubfolder('beds','henry1','jpg')"
        imageAlt="Kids bed"
      />
      <ImageModal 
        modalId="bedModal2"
        :imageSrc="getImageUrlSubfolder('beds','henry3','jpg')"
        imageAlt="Kids bed"
      />
      <ImageModal 
        modalId="bedModal3"
        :imageSrc="getImageUrlSubfolder('beds','henry4','jpg')"
        imageAlt="Kids bed"
      />
      <ImageModal 
        modalId="bedModal4"
        :imageSrc="getImageUrlSubfolder('beds','emmett1','jpeg')"
        imageAlt="Kids bed"
      />

      <!-- blocks -->
      
      <div id="blocks" class="row m-0 pt-2">
        <div class="col-lg-8 offset-lg-2 min-vh-75 d-flex flex-column justify-content-center align-items-start align-items-lg-center text-start text-lg-center p-5">
          <h2 class="display-3 fw-900 ls-1 lh-1">Building Blocks</h2>
          <p class="fs-5 py-3">Born from scrap and made with love, our building block sets are crafted from natural, unfinished pine and come in a variety of shapes and sizes. These large-format blocks inspire creative play for infants through preschoolers.</p>
          <ButtonGroup />
        </div>
        <div class="col-lg-3 col-md-6 mb-3">
          <img 
            class="w-100 h-100 rounded-4" 
            style="object-fit: cover; cursor: pointer;" 
            :src="getImageUrlSubfolder('blocks','eh_blocks_selection','jpeg')" 
            alt="Building blocks"
            data-bs-toggle="modal"
            data-bs-target="#blockModal1"
          >
        </div>
        <div class="col-lg-3 col-md-6 mb-3">
          <img 
            class="w-100 h-100 rounded-4" 
            style="object-fit: cover; cursor: pointer;" 
            :src="getImageUrlSubfolder('blocks','eh_blocks_selection2','jpeg')" 
            alt="Building blocks"
            data-bs-toggle="modal"
            data-bs-target="#blockModal2"
          >
        </div>
        <div class="col-lg-3 col-md-6 mb-3">
          <img 
            class="w-100 h-100 rounded-4" 
            style="object-fit: cover; cursor: pointer;" 
            :src="getImageUrlSubfolder('blocks','eh_blocks_shape','jpeg')" 
            alt="Building blocks"
            data-bs-toggle="modal"
            data-bs-target="#blockModal3"
          >
        </div>
        <div class="col-lg-3 col-md-6 mb-3">
          <img 
            class="w-100 h-100 rounded-4" 
            style="object-fit: cover; cursor: pointer;" 
            :src="getImageUrlSubfolder('blocks','eh_blocks_box','jpg')" 
            alt="Building blocks"
            data-bs-toggle="modal"
            data-bs-target="#blockModal4"
          >
        </div>
      </div>

      <!-- Block Modals -->
      <ImageModal 
        modalId="blockModal1"
        :imageSrc="getImageUrlSubfolder('blocks','eh_blocks_selection','jpeg')"
        imageAlt="Building blocks"
      />
      <ImageModal 
        modalId="blockModal2"
        :imageSrc="getImageUrlSubfolder('blocks','eh_blocks_selection2','jpeg')"
        imageAlt="Building blocks"
      />
      <ImageModal 
        modalId="blockModal3"
        :imageSrc="getImageUrlSubfolder('blocks','eh_blocks_shape','jpeg')"
        imageAlt="Building blocks"
      />
      <ImageModal 
        modalId="blockModal4"
        :imageSrc="getImageUrlSubfolder('blocks','eh_blocks_box','jpg')"
        imageAlt="Building blocks"
      />

      <!-- jenga -->

     <!-- <div class="row m-0 pt-2">
        <div class="col-lg-8 offset-lg-2 min-vh-75 d-flex flex-column justify-content-center my-auto align-items-center text-center p-5">
          <h2 class="display-3 fw-900 ls-1 lh-1">Giant Jenga Style Block Game</h2>
          <p class="fs-5 py-3">A summer vacation inspired this game for the young and old. We found giant jenga at a restaurant in Muskoka which entertained our boys while we waited for a table. I vowed to look into making one for us and the e&h Giant Jenga Style Block Game was born. My kids play with these like a building block set, and as they get older the family Jenga concept will also fun. </p>
          <button class="btn btn-dark" type="button" data-bs-toggle="modal" data-bs-target="blocks">more</button>
        </div>
        <div class="col-lg-12 px-4 pt-4 min-vh-75" :style="{'background' : 'url('+ getImageUrl('eh_blocks_selection','jpeg') +') center', 'background-size' : '100%'}">
        </div>
      </div>-->
      

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

    <!-- climbing ramp -->

      <!--<div class="row m-0 pt-2">
        <div class="col-lg-8 offset-lg-2 min-vh-75 d-flex flex-column justify-content-center my-auto align-items-center text-center p-5">
          <h2 class="display-3 fw-900 ls-1 lh-1">Climbing ramp</h2>
          <p class="fs-5 pt-3">A great compliment to the Pikler style climber, the climbing ramp is built from white birch with a variety of 2x4 climbing holds. The design is tailored to little hands, and promotes climbing skills and agility. Adjust ramp incline by placing it on different climber steps for increased/decreased difficulty. Combined with the slide ramp,  little players get to climb up one side, then slide down the other. While intended for supervised indoor use, the ramp can be sealed/stained* for outdoor use.</p>
          <p class="small fst-italic mt-0 mb-3">*Model shown is a custom scribbled design;) Ramps come in plain wood with sanded finish. *Be sure to use no/low-VOC and non-toxic stain/seal options for kid safety. *Outdoor use exposes material to wear, rot, and rust. *Always supervise children when using this product.</p> 
          <ButtonGroup/>
        </div>
        <div class="col-lg-12 px-4 pt-4 min-vh-75" :style="{'background' : 'url('+ getImageUrl('eh_pikler_ramp','jpg') +') center', 'background-size' : '100%'}">
        </div>
      </div>-->

      <!-- ladder -->

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

      <!-- climbing holds -->

      <!-- <div class="row m-0 pt-2">
        <div class="col-lg-5 d-flex flex-column my-auto align-items-start p-5">
          <h2 class="fs-1 fw-900 ls-base">Climbing Holds</h2>
          <p>With a pile of scrap 2x4 and an idea to turn a bunkbed into a pseudo climbing wall, the <span class="fw-900">e&h</span> climbing holds were born. Holds are focused on basic crimps, slopers, and jugs and ensure easy hand placement and grab-ability for kid-sized palms. With pre-drilled holes and structural fasteners, each hold is cut cross-grain for greater strength, and is sanded to 80 grit for grip and ease of refinishing. Holds can be used in conjunction with the bunkbed, or independently as part of your own climbing wall, play structure*, or basement bouldering setup.</p>
          <button class="btn btn-dark">more</button>
        </div>
        <div class="col-lg-7 px-4 pt-4">
          <img class="w-100 rounded-4" :src="getImageUrl('eh_climbing_holds6','jpeg')" alt="">
        </div>
      </div> -->

      <!-- baby gate -->

      <!-- <div class="row m-0 pt-2">
        <div class="col-lg-7 px-4 pt-4">
          <img class="w-100 rounded-4" :src="getImageUrl('eh_gate','jpeg')" alt="">
        </div>
        <div class="col-lg-5 d-flex flex-column my-auto align-items-start p-5">
          <h2 class="fs-1 fw-900 ls-base">Baby gate</h2>
          <p>Built from dimensional pine 2x2 and 1x4, as well as GRK finishing screws, this gate has an excellent strength to weight ratio. Vertical spindles adhere to code, prevent climbing, and provide natural aesthetic beauty. While sizing can be customized, the gate comes in standard stairway and doorway widths, with two black heavy duty hinges, hinge screws, and standard flip-style gate latch. Other hardware options can be accommodated.</p>
          <p class="fst-italic">*Gate comes in unfinished pine. Unit pictured is stained to exemplify ease of matching trim and finish colors.</p>
          <button class="btn btn-dark">more</button>
        </div>
      </div> -->

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
/* Add cursor pointer to images */
img[data-bs-toggle="modal"] {
  cursor: pointer;
  transition: opacity 0.2s ease-in-out;
}

img[data-bs-toggle="modal"]:hover {
  opacity: 0.9;
}
</style>
