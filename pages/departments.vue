<template>
    <div>
        <section class="website-paddings bg-[var(--background-accent)] text-white grid items-center h-[70vh] lg:h-[50vh]">
            <h1 class="mt-20">Find the test you need today!</h1>
        </section>

        <section class="lg:px-40 mt-10 mb-10 bg-white text-black">
            <div>
                <!-- <div>
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
                </div> -->

                <div class="mt-10">
                    <div class="mb-4 border-b border-gray-200 dark:border-gray-700">
                        <ul class="flex flex-wrap -mb-px text-sm font-medium text-center" id="default-tab" data-tabs-toggle="#default-tab-content" role="tablist">
                            <li class="me-2" role="presentation">
                                <NuxtLink to="/tests">
                                    <button class="inline-block p-4 border-b-2 rounded-t-lg cursor-pointer" id="tests" data-tabs-target="#profile" type="button" role="tab" aria-controls="tests" aria-selected="false">All tests</button>
                                </NuxtLink>
                            </li>
                            <li class="me-2" role="presentation">
                                <button class="inline-block p-4 border-b-2 border-blue-400 rounded-t-lg cursor-pointer" id="departments-tab" data-tabs-target="#dashboard" type="button" role="tab" aria-controls="departments" aria-selected="false">Departments</button>
                            </li>
                        </ul>
                    </div>
                </div>

                <p v-for="(a, index) in departmentTests">
                    {{ a[index] }}
                </p>
                
                <div class="grid grid-cols-3 gap-5 mt-10">
                    <DepartmentsCard 
                        v-for="department in departments" 
                        :department="department"
                        :departmentTests="departmentTests"
                    />
                </div>
            </div>
        </section>
    </div>
</template>

<script setup lang="ts">
import tests from '@/assets/tests.json'

let departmentTests = ref<any[]>([])

tests.forEach(test => {
    let category = departmentTests.value.find(dTest => dTest.name === test.category);

    if (!category) {
        category = { name: test.category, tests: [] };
        departmentTests.value.push(category);
    }

    // Add the test to the category
    category.tests.push(test);
});

const departments = [
    {
        name: 'Serology',
        description: 'Diagnostic identification of antibodies in the serum.'
    },
    {
        name: 'Haematology',
        description: 'Hematology focuses on blood-related disorders. This department examines blood cells, clotting factors, and blood related diseases such as anemia and leukemia.'
    },
    {
        name: 'Bacteriology',
        description: 'This department identifies infectious agents and helps in treating diseases like pneumonia and urinary tract infections.'
    },
    {
        name: 'Chemistry',
        description: 'This department analyzes the chemical components of the body.'
    },
    {
        name: 'CR (Computed Radiography)',
        description: 'This department uses imaging techniques to diagnose and treat diseases.'
    },
    {
        name: 'CT (Computed Tomography)',
        description: 'This department uses X-rays to create detailed images of the body.'
    },
    {
        name: 'Endocrinology',
        description: 'Endocrinology deals with hormone-related disorders. This department diagnoses conditions like diabetes, thyroid disorders, and hormonal imbalances.'
    },
    {
        name: 'Immunology',
        description: 'Immunology focuses on the immune system and its functions.'
    },
    {
        name: 'Molecular Biology',
        description: 'Molecular biology focuses on the molecular mechanisms of the body in relation to disease.'
    },
    {
        name: 'Outsource',
        description: 'This department provides services to other healthcare providers.'
    },
    {
        name: 'EGG (Electroencephalography)',
        description: 'EGG focuses electrical activity in the brain to diagnose and treat neurological disorders.'
    },
    {
        name: 'Endoscopy',
        description: 'Endoscopy focuses on examining the digestive tract.'
    },
    {
        name: 'Histopathology',
        description: 'Microscopic examination of tissue in order to study the manifestations of disease.'
    },
    {
        name: 'MRI (Magnetic Resonance Imaging)',
        description: 'MRI uses magnetic fields to create detailed images of the body.'
    },
    {
        name: 'Chemical Pathology',
        description: 'Study of the biochemical and molecular mechanisms of the body in relation to disease.'
    },
    {
        name: 'Immunology',
        description: 'Study of the immune system and its functions.'
    },
    {
        name: 'Cytology',
        description: 'Study of cells.'
    },
    {
        name: 'Radiology',
        description: 'Radiology uses imaging techniques like X-rays and MRIs to visualise the body\'s internal structures. This department helps in diagnosing conditions like fractures, tumors'
    },
    {
        name: 'Lab',
        description: 'This department provides laboratory services to diagnose and treat diseases.'
    }

]
</script>

<style scoped>
li {
    list-style: none;
}
</style>