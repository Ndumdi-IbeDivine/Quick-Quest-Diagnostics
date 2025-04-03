<template>
    <div>
        <div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm">
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

            <i class="fa-solid fa-arrow-right-long"></i>
        </div>
    </div>
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