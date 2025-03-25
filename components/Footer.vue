<template>
    <footer class="text-white website-paddings">
        <div class="py-10">
            <div>
                <img src="/assets/images/qqd-logo-gold.png" class="size-40" alt="">
            </div>
            <div class="grid md:grid-cols-3">
                <div class="px-4">
                    <div class="list-none mb-10">
                        <p class="mt-5">
                            Quick Quest Diagnostics offers accurate and timely
                            medical diagnostic services to individuals and
                            corporate organizations.
                        </p>
                    </div>
                </div>
                <div class="w-full lg:px-20">
                    <h5 class="uppercase">Quick links</h5>
                    <nav class="list-none mb-10 mt-5">
                        <li v-for="navItem in navItems" :key="navItem.name">
                            <RouterLink :to="navItem.link">{{ navItem.name }}</RouterLink>
                        </li>
                    </nav>
                </div>
                <div class="w-full px-4">
                    <h5 class="uppercase">Contact</h5>
                    <div class="mt-5 grid gap-3">
                        <div class="flex gap-3">
                            <span><i class="bi bi-house"></i></span>
                            <p>
                                12 Kayode Abraham Street, Off Ligali Ayorinde
                                Street, Victoria Island, Lagos.
                            </p>
                        </div>
                        <div class="flex gap-3">
                            <span><i class="bi bi-telephone"></i></span>
                            <p>
                                <a href="tel:+2348113723864">+234 811 372 3864</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="border-t-2 border-gray-200">
            <div class="py-6 flex items-center">
                <p class="text-sm text-gray-500 sm:ml-6 sm:mt-0 mt-4">
                    © {{ new Date().getFullYear() }}. Quick Quest Diagnostics, All Rights Reserved.
                </p>
                <span
                    class="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start"
                >
                    <a class="text-gray-500">
                        <svg
                            fill="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            class="w-5 h-5 hover:text-red-300"
                            viewBox="0 0 24 24"
                        >
                            <path
                                d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"
                            ></path>
                        </svg>
                    </a>
                    <a class="ml-3 text-gray-500">
                        <svg
                            fill="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            class="w-5 h-5"
                            viewBox="0 0 24 24"
                        >
                            <path
                                d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"
                            ></path>
                        </svg>
                    </a>
                    <a class="ml-3 text-gray-500">
                        <svg
                            fill="none"
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            class="w-5 h-5"
                            viewBox="0 0 24 24"
                        >
                            <rect
                                width="20"
                                height="20"
                                x="2"
                                y="2"
                                rx="5"
                                ry="5"
                            ></rect>
                            <path
                                d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"
                            ></path>
                        </svg>
                    </a>
                    <a class="ml-3 text-gray-500">
                        <svg
                            fill="currentColor"
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="0"
                            class="w-5 h-5"
                            viewBox="0 0 24 24"
                        >
                            <path
                                stroke="none"
                                d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                            ></path>
                            <circle cx="4" cy="4" r="2" stroke="none"></circle>
                        </svg>
                    </a>
                </span>
            </div>
        </div>
    </footer>
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

<style scoped>
footer {
    background-color: var(--background-accent);
}
</style>