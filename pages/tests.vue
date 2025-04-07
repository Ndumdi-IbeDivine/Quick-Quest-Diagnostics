<template>
    <div>
        <section class="website-paddings bg-[var(--background-accent)] text-white grid items-center h-[70vh] lg:h-[50vh]">
            <h1 class="mt-20">Find the test you need today!</h1>
        </section>

        <section class="lg:px-40 px-5 mt-10 mb-10 bg-white text-black">
            <div>
                <div>
                    <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search for test</label>
                    <div class="relative">
                        <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                            <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                            </svg>
                        </div>

                        <input v-model="searchQuery" @keypress.enter="search" type="search" id="default-search" class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500" placeholder="Search for test" />
                        <button type="submit" @click="search" class="text-white absolute end-2.5 bottom-2.5 bg-[#0089d2] font-medium rounded-lg text-sm px-4 py-2 cursor-pointer">Search</button>
                    </div>
                </div>

                <div v-if="isSorted" class="mt-10">
                    <p>Showing test results containing '{{ searchedQuery }}'</p>
                </div>

                <div v-if="isSorted">
                    <PrimaryBtn @click="clearSearch" class="mt-5">
                        Clear search
                    </PrimaryBtn>
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

                <div  v-if="!isLoading" class="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
                    <TestCard v-if="sortedTests.length" v-for="test in sortedTests" :test="test" />
                    <p v-else class="text-center mt-10">No tests to show</p>
                </div>
                <div v-else class="flex justify-center">
                    <Loader />
                </div>

                <div v-if="!isSorted" class="mt-5 grid gap-5 justify-center">
                    <p>Showing {{ testPerPage < tests.length ? testPerPage : tests.length }} test out of {{ tests.length }}</p>

                    <PrimaryBtn @click="increaseTestPage">
                        Load more
                    </PrimaryBtn>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup lang="ts">
import tests from '~/assets/tests.json'
import { ref } from 'vue'

function shuffleArray(array: any[]) {
  const shuffled = [...array]
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }
  return shuffled
}

const shuffledTests = shuffleArray(tests)
const searchQuery = ref<string>('')
const searchedQuery = ref<string>('')
const testsNumber = ref<number>(100)
const testPerPage = ref<number>(testsNumber.value)
const sortedTests = ref([...shuffledTests].slice(0, testPerPage.value))
const isSorted = ref(false)
const isLoading = ref(false) 

function search() {
    isLoading.value = true

    setTimeout(() => {
        const query = searchQuery.value.trim().toLowerCase()
        searchedQuery.value = searchQuery.value

        if (!query) {
            clearSearch()
            return
        }

        sortedTests.value = shuffledTests.filter(test =>
            test.name.toLowerCase().includes(query)
        )

        isSorted.value = true
        isLoading.value = false
    }, 0) // simulate laoding
}
function clearSearch() {
    searchQuery.value = ''
    testPerPage.value = testsNumber.value
    searchedQuery.value = searchQuery.value
    sortedTests.value = [...shuffledTests].slice(0, testPerPage.value)
    isSorted.value = false
}

function increaseTestPage() {
    if (testPerPage.value >= tests.length) {
        return
    }

    testPerPage.value += testsNumber.value
    sortedTests.value = [...shuffledTests].slice(0, testPerPage.value)
}

</script>

<style scoped>
li {
    list-style: none;
}
</style>