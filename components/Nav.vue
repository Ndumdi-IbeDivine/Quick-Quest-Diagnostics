<template>
    <div>
        <nav class="grid grid-cols-2 lg:pe-8 border border-1 border-white items-center fixed website-margins left-0 right-0 top-5 text-white navbar" ref="navbar">
            <div>
                <NuxtLink to="/">
                    <img src="/assets/images/qqd-logo.png" class="size-20" alt="">
                </NuxtLink>
            </div>

            <!-- <div class="hidden lg:flex gap-16 text-slate-200 justify-end">
                <RouterLink v-for="navItem in navItems" :key="navItem.name" :to="navItem.link" active-class="active">
                    {{ navItem.name }}
                </RouterLink>
            </div> -->
            <!-- <div class="lg:hidden flex justify-end pe-3">
                <button @click="showNavDropdown = !showNavDropdown" class="px-3 py-2 border border-1 rounded">
                    <i v-if="!showNavDropdown" class="fa-solid fa-bars"></i>
                    <i v-else class="fa-solid fa-xmark"></i>
                </button>
            </div> -->

            <div class="lg:hidden flex justify-end pe-3">
                <button data-collapse-toggle="navbar-default"  type="button" class="flex justify-end items-center border border-1 rounded p-2  h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                    <span class="sr-only">Open main menu</span>
                    <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
                    </svg>
                    <!-- <i v-if="!showNavDropdown" class="fa-solid fa-bars"></i>
                    <i v-else class="fa-solid fa-xmark"></i> -->
                </button>
            </div>

            <div class="hidden w-full md:block md:w-auto" id="navbar-default">
                <div class="hidden lg:flex gap-16 text-slate-200 justify-end">
                    <RouterLink v-for="navItem in navItems" :key="navItem.name" :to="navItem.link" active-class="active">
                        {{ navItem.name }}
                    </RouterLink>
                </div>

                <div class="lg:hidden flex flex-col gap-5  bg-[#09041C] text-white p-5 rounded-lg shadow-lg">
                    <RouterLink v-for="navItem in navItems" :key="navItem.name" :to="navItem.link" active-class="active">
                        {{ navItem.name }}  
                    </RouterLink>
                </div>
            </div>

             <!-- <div v-if="!showNavDropdown">
                this is cra cra
             </div>
             {{ showNavDropdown }}
            <div class="lg:hidden flex flex-col gap-5  bg-[#09041C] text-white p-5 rounded-lg shadow-lg">
                motor bike
                <RouterLink v-for="navItem in navItems" :key="navItem.name" :to="navItem.link" active-class="active">
                    {{ navItem.name }}  
                </RouterLink>
            </div> -->
        </nav>
    </div>
</template>

<script setup lang="ts">
const navItems = [
    {
        name: 'Home',
        link: '/'
    },
    {
        name: 'About',
        link: '/about'
    },
    {
        name: 'Tests',
        link: '/tests'
    },
    {
        name: 'Departments',
        link: '/departments'
    }
]

let navbar = ref<HTMLElement | null>(null)
let showNavDropdown = ref(false)

// function toggleSmNav() {
//     console.log('yo')
//     showNavDropdown.value = !showNavDropdown.value
// }


//remove class 'glassmorpg' from navbar when user scroll

onMounted(() => {
    // window.addEventListener('scroll', () => {
    //     if (navbar.value) {
    //         if (window.scrollY > 150) {
    //             navbar.value.classList.remove('glassmorph')
    //             navbar.value.classList.add('navbar')
    //         } else {
    //             navbar.value.classList.remove('navbar')
    //             navbar.value.classList.add('glassmorph')
    //         }
    //     }
    // })
})
</script>


<style scoped>
.active {
    color: var(--primary-color);
}
</style>