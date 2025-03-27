<template>
    <div>
        <section class="website-paddings bg-[var(--background-accent)] text-white grid items-center h-[70vh] lg:h-[50vh]">
            <h1 class="mt-20">Find the test you need today!</h1>
        </section>

        <section class="lg:px-40 mt-10 mb-10 bg-white text-black">
            <div>
                <div>
                    <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search for test</label>
                    <div class="relative">
                        <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                            <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                            </svg>
                        </div>
                        <input type="search" id="default-search" class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500" placeholder="Search for test" />
                        <button type="submit" class="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 cursor-pointer">Search</button>
                    </div>
                </div>

                <div class="mt-10">
                    <div class="mb-4 border-b border-gray-200 dark:border-gray-700">
                        <ul class="flex flex-wrap -mb-px text-sm font-medium text-center" id="default-tab" data-tabs-toggle="#default-tab-content" role="tablist">
                            <li class="me-2" role="presentation">
                                <button class="inline-block border-blue-400 p-4 border-b-2 rounded-t-lg" id="tests" data-tabs-target="#profile" type="button" role="tab" aria-controls="tests" aria-selected="false">All tests</button>
                            </li>
                            <li class="me-2" role="presentation">
                                <NuxtLink to="/departments">
                                    <button class="inline-block p-4 border-b-2  rounded-t-lg cursor-pointer" id="departments-tab" data-tabs-target="#dashboard" type="button" role="tab" aria-controls="departments" aria-selected="false">Departments</button>
                                </NuxtLink>
                            </li>
                        </ul>
                    </div>
                </div>

                <div class="grid grid-cols-3 gap-5 mt-10">
                    <TestCard v-for="i in 10" :test="a" />
                </div>
            </div>
        </section>
    </div>
</template>

<script setup lang="ts">
const a = {
    name: 'string',
    category: 'string',
    price: 20,
    location: 'string'
}
</script>

<style scoped>
li {
    list-style: none;
}
</style>