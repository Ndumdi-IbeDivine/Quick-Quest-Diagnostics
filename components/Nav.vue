<template>
    <div>
        <nav class="grid grid-cols-2 pe-8 border border-1 border-white items-center fixed website-margins left-0 right-0 top-5 text-white glassmorph" ref="navbar">
            <div>
                <NuxtLink to="/">
                    <img src="/assets/images/qqd-logo.png" class="size-20" alt="">
                </NuxtLink>
                </div>
            <div class="flex gap-16 font-bold text-slate-200 justify-end">
                <RouterLink v-for="navItem in navItems" :key="navItem.name" :to="navItem.link" active-class="active">
                    {{ navItem.name }}
                </RouterLink>
            </div>
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
    // {
    //     name: 'Department',
    //     link: '/department'
    // }
]

let navbar = ref<HTMLElement | null>(null)

//remove class 'glassmorpg' from navbar when user scroll

onMounted(() => {
    window.addEventListener('scroll', () => {
        if (navbar.value) {
            if (window.scrollY > 150) {
                navbar.value.classList.remove('glassmorph')
                navbar.value.classList.add('navbar')
            } else {
                navbar.value.classList.remove('navbar')
                navbar.value.classList.add('glassmorph')
            }
        }
    })
})
</script>


<style scoped>
.active {
    color: var(--primary-color);
}
</style>