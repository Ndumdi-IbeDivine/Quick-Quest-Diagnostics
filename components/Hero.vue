<template>
    <div class="relative overflow-hidden w-full h-[90vh]">
        <div
            class="absolute z-10 grid gap-5 content-center h-full text-white website-paddings lg:me-[700px]"
        >
            <h1 class="mt-20">
                <span>Extensive, accurate,</span> and
                <span>timely</span> medical tests
            </h1>
            <p class="l-p">
                Get your extensive reliable medical tests results all in one
                place.
            </p>
            <div>
                <NuxtLink to="/tests" class="text-white">
                    <PrimaryBtn>Find the test you need today!</PrimaryBtn>
                </NuxtLink>
            </div>
        </div>

        <!-- Slides -->
        <div
            class="flex transition-transform duration-700 ease-in-out h-full"
            :style="{ transform: `translateX(-${currentIndex * 100}%)` }"
        >
            <div
                v-for="(slide, index) in slides"
                :key="index"
                class="w-full flex-shrink-0 h-full relative hero-slides"
                :style="{
                    backgroundImage: `linear-gradient(rgba(255, 255, 255, 0) 60%, var(--background-accent) 100%), url(${slide.image})`,
                }"
            >
                <!-- Overlay -->
                <div class="absolute inset-0 bg-black/40"></div>
            </div>
        </div>


        <!-- <button
            @click="prevSlide"
            class="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black/40 text-white p-3 rounded-full hover:bg-black/60 transition z-20"
        >
            <svg
                class="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
            >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15 19l-7-7 7-7"
                />
            </svg>
        </button>

        <button
            @click="nextSlide"
            class="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black/40 text-white p-3 rounded-full hover:bg-black/60 transition z-20"
        >
            <svg
                class="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
            >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 5l7 7-7 7"
                />
            </svg>
        </button> -->

        <!-- Dots -->
        <div
            class="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex gap-2 z-20"
        >
            <span
                v-for="(_, i) in slides"
                :key="i"
                class="w-3 h-3 rounded-full cursor-pointer"
                :class="currentIndex === i ? 'bg-white' : 'bg-white/40'"
                @click="goToSlide(i)"
            />
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from "vue";

const slides = [
    { image: "/images/hero-1.jpg" },
    { image: "/images/hero-2.jpg" },
    { image: "/images/hero-3.jpg" },
    { image: "/images/hero-4.jpg" },
    { image: "/images/hero-5.jpg" },
    { image: "/images/hero-6.jpg" },
];

const currentIndex = ref(0);
let interval: ReturnType<typeof setInterval>;

const nextSlide = () => {
    currentIndex.value = (currentIndex.value + 1) % slides.length;
};

const prevSlide = () => {
    currentIndex.value =
        (currentIndex.value - 1 + slides.length) % slides.length;
};

const goToSlide = (index: number) => {
    currentIndex.value = index;
};

onMounted(() => {
    interval = setInterval(() => {
        nextSlide();
    }, 5000);
});

onBeforeUnmount(() => {
    clearInterval(interval);
});
</script>

<style scoped>
.hero-slides {
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    height: 90vh;
}
</style>
