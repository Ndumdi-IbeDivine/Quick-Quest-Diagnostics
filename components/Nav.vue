<template>
    <div>
        <nav class="grid grid-cols-2 p-4 bg-red-200 fixed website-margins left-0 right-0 top-5 text-white glassmorph">
            <div></div>
            <div class="flex gap-10 justify-end">
                <RouterLink v-for="navItem in navItems" :key="navItem.name" :to="navItem.link">
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
    {
        name: 'Department',
        link: '/department'
    }
]
</script>
