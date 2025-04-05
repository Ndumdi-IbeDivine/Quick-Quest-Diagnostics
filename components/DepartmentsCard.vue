<template>
    <NuxtLink :to="`/departments/${department.name.replace(' ', '-').toLowerCase()}`">
        <div class="p-6 bg-white border border-gray-200 rounded-lg shadow-sm cursor-pointer card-container">
            <i 
                :class="returnTestIcon(department.name)?.class"
                class="fa-2x"
                :style="returnTestIcon(department.name)?.style"
            ></i>
            <h5 class="mb-2 mt-4 text-2xl font-semibold tracking-tight text-gray-900">{{ department.name }}</h5>

            <p class="mb-3 font-normal text-gray-500">{{ department.description }}</p>
            <p class="mb-3 p-1 rounded-lg px-2 text-blue-500 bg-blue-200 w-fit">
                {{ tests.filter(d => d.category.toLowerCase() === department.name.toLowerCase()).length }} available tests
            </p>

            <span class="arrow-icon">
                <i class="fa-solid fa-arrow-right-long"></i>
            </span>
        </div>
    </NuxtLink>
</template>

<script setup lang="ts">
import testFonts from '@/assets/testFonts.json'
import tests from '@/assets/tests.json'

defineProps<{
  department: Department,
  departmentTests: any[]
}>()

interface Department {
    name: string
    description: string
    numberOdTest?: number
}

function returnTestIcon(name: string) {
    return testFonts.find(testFont => testFont.category.toLowerCase() === name.toLowerCase());
}

const capitalizeFirstLetter = (str: string) => str.charAt(0).toUpperCase() + str.slice(1);
</script>

<style scoped>
.card-container {
    transition: transform 0.3s ease-in-out;
    transition: box-shadow 0.3s ease-in-out;
}

.arrow-icon {
    display: inline-block;
    transition: transform 0.3s ease-in-out;
}
.card-container:hover {
    box-shadow: 10px 10px 15px rgba(0, 0, 0, 0.15);
}

.card-container:hover .arrow-icon {
    transform: translateX(10px);
}

</style>