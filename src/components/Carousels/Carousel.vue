<template>
  <div class="bg-white dark:bg-gray-900 relative">
    <div id="default-carousel" class="relative w-full" data-carousel="slide">
      <!-- Carousel Items -->
      <div
        class="relative overflow-hidden rounded-lg
               h-[180px] sm:h-[220px] md:h-[360px] lg:h-[600px]"
      >
        <div
          v-for="(slide, index) in slides"
          :key="slide.id"
          class="duration-700 ease-in-out"
          :class="index === 0 ? '' : 'hidden'"
          :data-carousel-item="index === 0 ? 'active' : ''"
          role="group"
          :aria-roledescription="'slide'"
          :aria-label="`Slide ${index + 1} of ${slides.length}`"
        >
          <!-- Image -->
          <img
            :src="slide.image"
            class="absolute block w-full h-full object-cover -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            :alt="slide.alt"
            :decoding="index === 0 ? 'async' : 'auto'"
            :fetchpriority="index === 0 ? 'high' : 'auto'"
            :loading="index === 0 ? 'eager' : 'lazy'"
          />

          <!-- Overlay (title/caption) -->
          <div
            v-if="slide.title || slide.caption"
            class="absolute inset-0 flex items-end px-6 md:px-12 lg:px-[60px] py-6 md:py-8
                   bg-gradient-to-t from-black/40 to-transparent"
          >
            <div class="text-white max-w-4xl">
              <h3
                v-if="slide.title"
                class="text-2xl md:text-3xl lg:text-[36px] font-semibold leading-tight"
              >
                {{ slide.title }}
              </h3>
              <p
                v-if="slide.caption"
                class="mt-1 md:mt-2 text-sm md:text-base lg:text-[18px]"
              >
                {{ slide.caption }}
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- Indicators -->
      <div
        class="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse"
        role="tablist"
        aria-label="Carousel indicators"
      >
        <button
          v-for="(slide, index) in slides"
          :key="slide.id"
          type="button"
          class="w-3 h-3 rounded-full bg-gray-300 dark:bg-gray-600"
          :aria-label="`Go to slide ${index + 1}`"
          :aria-current="index === 0 ? 'true' : 'false'"
          :data-carousel-slide-to="index"
        ></button>
      </div>

      <!-- Controls -->
      <button
        type="button"
        class="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-prev
        aria-label="Previous slide"
      >
        <span
          class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60"
        >
          <svg
            class="w-4 h-4 text-black dark:text-white rtl:rotate-180"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M5 1 1 5l4 4"
            />
          </svg>
          <span class="sr-only">Previous</span>
        </span>
      </button>

      <button
        type="button"
        class="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-next
        aria-label="Next slide"
      >
        <span
          class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60"
        >
          <svg
            class="w-4 h-4 text-black dark:text-white rtl:rotate-180"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m1 9 4-4-4-4"
            />
          </svg>
          <span class="sr-only">Next</span>
        </span>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
// Define component name to satisfy multi-word component rule
defineOptions({ name: 'AppCarousel' })

import { onMounted } from 'vue'

type Slide = {
  id: number
  image: string
  alt: string
  title?: string
  caption?: string
}

const slides: Slide[] = [
  {
    id: 1,
    image: new URL('@/assets/image/bg-rupp.png', import.meta.url).href,
    alt: 'Slide 1',
    title: 'Welcome to our library...',
    caption: 'Information Technology Engineering',
  },
  {
    id: 2,
    image: new URL('@/assets/image/bg-rupp1.png', import.meta.url).href,
    alt: 'Slide 2',
  },
  {
    id: 3,
    image: new URL('@/assets/image/images.png', import.meta.url).href,
    alt: 'Slide 3',
  },
  {
    id: 4,
    image: new URL('@/assets/image/ITE.png', import.meta.url).href,
    alt: 'Slide 4',
  },
]

onMounted(async () => {
  const { initCarousels } = await import('flowbite')
  initCarousels()
})
</script>
