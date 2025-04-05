<template>
    <div>

        <section v-if="departmentDetails" class="lg:px-40 px-5 mt-40 mb-10 bg-white text-black">
            <div>
                <div class="text-center">
                    <i 
                        :class="returnTestIcon(departmentDetails.name)?.class"
                        class="fa-2x"
                        :style="returnTestIcon(departmentDetails.name)?.style"
                    ></i>

                    <h3>
                        {{ departmentDetails.name }}
                    </h3>
                    <p class="mt-2 text-gray-500 lg:px-60 l-p">
                        {{ departmentDetails.description }}
                    </p>
                </div>
                
                <div v-if="departmentTest" class="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-16">
                    <TestCard
                        v-for="test in departmentTest.tests" 
                        :test="test"
                    />
                </div>
                <div v-else class="mt-10 text-center">
                    <p>No test available</p>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup lang="ts">
import tests from '@/assets/tests.json'
import testFonts from '@/assets/testFonts.json'

let route = useRoute()

let departmentTests = ref<any[]>([])
let departmentTest = ref<any>()
let departmentDetails = ref<any>(null)

tests.forEach(test => {
    let category = departmentTests.value.find(dTest => dTest.name === test.category);

    if (!category) {
        category = { name: test.category, tests: [] };
        departmentTests.value.push(category);
    }

    // Add the test to the category
    category.tests.push(test);
});
console.log(departmentDetails.value)

function returnTestIcon(category: string) {
    return testFonts.find(testFont => testFont.category.toLowerCase() === category.toLowerCase());
}

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

onMounted(() => {
    let dept = route.params.department as string;
    dept = dept.replace('-', ' ');

    // Get department details
    departmentDetails.value = departments.find(department =>
    department.name.toLowerCase() === dept.toLowerCase()
    );

    console.log(departmentDetails.value);

    departmentTests.value.forEach(department => {
        console.log(department.name.toLowerCase())
        if (department.name.toLowerCase() === departmentDetails.value?.name.toLowerCase()) {
            departmentTest.value = department;
        }
    });

})
</script>

<style scoped>
li {
    list-style: none;
}
</style>