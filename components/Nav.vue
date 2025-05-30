<template>
    <div>
        <nav class="grid grid-cols-2 md:pe-4 lg:pe-8 border border-1 border-white items-center fixed website-margins left-0 right-0 top-5 text-white navbar" ref="navbar">
            <div>
                <NuxtLink to="/">
                    <img src="/assets/images/qqd-logo.png" class="size-20" alt="">
                </NuxtLink>
            </div>
            <div class="md:hidden flex justify-end pe-3">
                <button @click="showNavDropdown = !showNavDropdown"   type="button" class="flex justify-end items-center border border-1 rounded p-2 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" >
                    <span class="sr-only">Open main menu</span>
                    <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
                    </svg>
                    <!-- <i v-else class="fa-solid fa-xmark fa-1x w-5 h-5"></i> -->
                </button>
            </div>
            <!-- {{ showNavDropdown }} -->
            <ClientOnly>
                <div class="w-full" id="navbar-default">
                    <div class="hidden md:flex gap-16 text-slate-200 justify-end">
                        <RouterLink v-for="navItem in navItems" :key="navItem.name" :to="navItem.link" active-class="active" class="text-lg hover:underline">
                            {{ navItem.name }}
                        </RouterLink>
                    </div>
    
                    <div v-show="showNavDropdown" class="md:hidden mb-2 flex flex-col gap-5 transition delay-150 duration-300 ease-in-out bg-[#09041C] text-white p-5 rounded-lg shadow-lg">
                        <RouterLink v-for="navItem in navItems" @click="showNavDropdown = false" :key="navItem.name" :to="navItem.link" active-class="active">
                            {{ navItem.name }}  
                        </RouterLink>
                    </div>
                </div>
            </ClientOnly>
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