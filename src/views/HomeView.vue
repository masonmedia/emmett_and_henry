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
</script>

<template>
  <main>
  <TheNav/>

    <div class="container-fluid px-0">

      <div class="row m-0" style="min-height: 700px">
        <div class="col-lg-12 d-flex flex-column justify-content-center align-items-center text-center p-5">
          <img class="rounded-4 mt-5" style="width: 300px; height: auto" :src="getImageUrlSubfolder('logos','eh_white1_crop','png')" alt="">
         <!-- <h1 style="font-family: Montserrat;
    letter-spacing: -34px;
    font-size: 45vmin; line-height: 90%" class="fw-bold mb-0 pb-2">e&h</h1>-->
          <h3 class="ls-base fw-bold text-dark pb-3">Custom furniture and wood products made in Canada.</h3>
          <div class="d-flex">
            <TheButton
              ButtonClass="btn-dark me-1"
              ButtonLink="#benches">
              Shop
            </TheButton>
            <TheButton
             ButtonClass="btn-outline-dark"
              ButtonLink="#about">
              About us
            </TheButton>
          </div>
        </div>
      </div>
      
      <div class="row m-0">
          <div class="col-lg-12 px-4 pt-4 min-vh-75" :style="{'background' : 'url('+ getImageUrl('eh_blocks_shape','jpeg') +') center', 'background-size' : 'cover'}">
        </div>
       
      </div>

      <!-- benches -->

      <div id="benches" class="row m-0 pt-2">
        <div class="col-lg-8 offset-lg-2 min-vh-75 d-flex flex-column justify-content-center align-items-start align-items-lg-center text-start text-lg-center p-5">
          <h2 class="display-3 fw-900 ls-1 lh-1">Benches</h2>
          <p class="fs-5 py-3">Perfect for front door entry, hallway, mudroom, and coffee table applications, our rustic farmhouse benches are stylish and strong, built with solid Canadian wood, construction adhesive, and structural finishing screws for strength and durability. Base model is 3' long x 14" high x 15.5" deep, and can be built with custom dimensions on request. Available space underneath is 29" wide which fits a standard 28" plastic shoe mat. Comes unstained/natural finish, with a variety of stain options available.</p>
          <ButtonGroup />
        </div>
        <div class="col-lg-3 col-md-6 mb-3">
          <img class="w-100 h-100 rounded-4" style="object-fit: cover;
  background: linear-gradient(45deg, #f4a261, transparent),
    linear-gradient(-45deg, #e76f51, transparent),
    linear-gradient(90deg, #8ab17d, transparent),
    linear-gradient(0deg, #d62828, #023047);
" :src="getImageUrlSubfolder('benches','bench2','jpg')" alt="">
        </div>
        <div class="col-lg-3 col-md-6 mb-3">
          <img class="w-100 h-100 rounded-4" style="object-fit: cover; --lqip:-776357" :src="getImageUrlSubfolder('benches','bench3','jpg')" alt="">
        </div>
        <div class="col-lg-3 col-md-6 mb-3">
          <img class="w-100 h-100 rounded-4" style="object-fit: cover;" :src="getImageUrlSubfolder('benches','bench7','jpg')" alt="">
        </div>
        <div class="col-lg-3 col-md-6 mb-3">
          <img class="w-100 h-100 rounded-4" style="object-fit: cover;" :src="getImageUrlSubfolder('benches','bench5','jpg')" alt="">
        </div>
       <!-- <div class="col-lg-12 px-4 pt-4 min-vh-75" :style="{'background' : 'url('+ getImageUrlSubfolder('benches','bench1','jpg') +') center bottom', 'background-size' : '100%'}">
        </div>-->
      </div>
      
      <!-- tables -->

      <div id="tables" class="row m-0 pt-2">
        <div class="col-lg-8 offset-lg-2 min-vh-75 d-flex flex-column justify-content-center align-items-start align-items-lg-center text-start text-lg-center p-5">
          <h2 class="display-3 fw-900 ls-1 lh-1">Tables</h2>
          <p class="fs-5 py-3">Our handcrafted slimline console tables are perfect for narrow hallways and front entries with limited space. With room for keys, candles, vases and decorative items, they can be customized with a lower shelf for baskets and further storage. Base dimensions are 36" wide (long) x 35.5" high x 7.5" deep. Tables come unstained and can be built to order, with customizable dimensions and stain colors on request. Please inquire for more information!</p>
          <ButtonGroup />
        </div>
        <div class="col-lg-3 col-md-6 mb-3">
          <img class="w-100 h-100 rounded-4" style="object-fit: cover;" :src="getImageUrlSubfolder('tables','table1','jpg')" alt="">
        </div>
        <div class="col-lg-3 col-md-6 mb-3">
          <img class="w-100 h-100 rounded-4" style="object-fit: cover;" :src="getImageUrlSubfolder('tables','table2','jpg')" alt="">
        </div>
        <div class="col-lg-3 col-md-6 mb-3">
          <img class="w-100 h-100 rounded-4" style="object-fit: cover;" :src="getImageUrlSubfolder('tables','table8','jpg')" alt="">
        </div>
        <div class="col-lg-3 col-md-6 mb-3">
          <img class="w-100 h-100 rounded-4" style="object-fit: cover;" :src="getImageUrlSubfolder('tables','table7','jpg')" alt="">
        </div>
      </div>

      <!-- beds -->

      <div id="beds" class="row m-0 pt-2">
        <div class="col-lg-8 offset-lg-2 min-vh-75 d-flex flex-column justify-content-center align-items-start align-items-lg-center text-start text-lg-center p-5">
          <h2 class="display-3 fw-900 ls-1 lh-1">Beds</h2>
          <p class="fs-5 py-3">We currently have two bed models, a house-frame style, single mattress floor bed with roofline, and a bunkbed. Both are made with construction quality lumber (2x6, 2x4, 2x3, and 1x4 knotty pine), structural fasteners and construction screws, and are built to last: think 2 boys swinging, hanging, jumping, climbing, traversing, launching, and otherwise doing their best to shred it to pieces. Frames are modular, assembled on-site, and fit standard twin mattresses. Beds come unstained but can be customized with a variety of colours and finishes.</p>
          <ButtonGroup />
        </div>
        <div class="col-lg-3 col-md-6 mb-3">
          <img class="w-100 h-100 rounded-4" style="object-fit: cover;" :src="getImageUrlSubfolder('beds','henry1','jpg')" alt="">
        </div>
        <div class="col-lg-3 col-md-6 mb-3">
          <img class="w-100 h-100 rounded-4" style="object-fit: cover;" :src="getImageUrlSubfolder('beds','henry3','jpg')" alt="">
        </div>
        <div class="col-lg-3 col-md-6 mb-3">
          <img class="w-100 h-100 rounded-4" style="object-fit: cover;" :src="getImageUrlSubfolder('beds','henry4','jpg')" alt="">
        </div>
        <div class="col-lg-3 col-md-6 mb-3">
          <img class="w-100 h-100 rounded-4" style="object-fit: cover;" :src="getImageUrlSubfolder('beds','emmett1','jpeg')" alt="">
        </div>
      </div>

      <!-- blocks -->
      
      <div id="blocks" class="row m-0 pt-2">
        <div class="col-lg-8 offset-lg-2 min-vh-75 d-flex flex-column justify-content-center align-items-start align-items-lg-center text-start text-lg-center p-5">
          <h2 class="display-3 fw-900 ls-1 lh-1">Blocks</h2>
          <p class="fs-5 py-3">What began as an effort to creatively use scrap lumber grew into a fun and creative project for my own kids. Incorporating square, rectangle, triangle, column, and house shapes, larger block sizes, and natural, unfinished pine, this building block set is perfect for infants to preschoolers.</p>
          <ButtonGroup />
        </div>
        <div class="col-lg-12 px-4 pt-4 min-vh-75" :style="{'background' : 'url('+ getImageUrl('eh_blocks_selection','jpeg') +') center', 'background-size' : 'cover'}">
        </div>
      </div>

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
          <p class="fs-5 pt-3">The <span class="fw-bold">e&h</span> kids triangle climber is designed around the famous Pikler triangle. We make a few modifications to the original design including 2x4 construction with tighter ladder/stair spacing for easier climbing and less chance of little legs getting stuck. It uses structural furniture fasteners for durability, strength, and aesthetic beauty, and pairs perfectly with the e&h climbing ramp and slide ramp add-ons. The climber is intended for supervised indoor use, however the wood can be sealed and stained* for outdoor fun.</p>
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
          <p class="fs-5 pt-3">What started as a complement/add-on to the e&h bunkbed became a standalone item. The e&h ladder is a simple and customizable unit built with dimensional 2x4s, construction screws and/or structural fasteners. It's sanded to a high natural finish and can be customized with different sizes and orientations. It can be used as a wall decoration, towel hanger, bedroom accent, attic staircase, in addition to more traditional laddery applications.</p>
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
          <p class="fs-5 py-3">Our products are made to order. We have varying levels of stock, but most often build on request. Timelines vary though generally take 2-4 weeks for average turnaround. At the moment we offer delivery within the Great Toronto Area and surrounding environ and ship wood blocks and giant jenga. All products are also available for pickup. Contact us for custom orders, special requests, or more information.</p>
          <TheButton
             ButtonClass="btn-dark"
              ButtonLink="mailto:emmettandhenrywoodworking@gmail.com">
              Learn more
            </TheButton>
        </div>
        <div class="col-lg-12 px-4 pt-4 min-vh-75" :style="{'background' : 'url('+ getImageUrl('eh_blocks_selection2','jpeg') +') center', 'background-size' : 'cover'}">
        </div>
      </div>

      <!-- about -->

      <div id="about" class="row m-0 pt-2">
        <div class="col-lg-8 offset-lg-2 min-vh-75 d-flex flex-column justify-content-center align-items-start align-items-lg-center text-start text-lg-center p-5">
          <h2 class="display-3 fw-900 ls-1 lh-1">About e&h</h2>
          <p class="fs-5 py-3">Emmett & Henry is a Canadian company that builds custom furniture and wood products with precision, high quality materials, and a modern, farmhouse design aesthetic. We love what we do and are proud to create innovative, solid wood products that are safe, strong, stylish, and designed to withstand the rigors of our own family. We think they'll be great for yours too. Drop us a line for more information or to place a custom order.</p>
          <TheButton
            ButtonClass="btn-dark"
            ButtonLink="mailto:emmettandhenrywoodworking@gmail.com">
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
