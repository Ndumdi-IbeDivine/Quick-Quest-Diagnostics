<template>
    <div>
        <section v-if="test" class="w-full text-gray-600 body-font card-container">
            <div>
                <div class="max-w-sm p-6 border border-gray-200 rounded-lg shadow-sm">
                    <i 
                        :class="returnTestIcon(test.category)?.class"
                        class="fa-2x"
                        :style="returnTestIcon(test.category)?.style"
                    ></i>
                    <h5 class="mb-2 mt-4 text-2xl font-semibold tracking-tight" :class="[mode == 'dark' ? 'text-white' : 'text-black']">{{ test.name }}</h5>

                    <p class="mb-3 font-normal" :class="[mode == 'dark' ? 'grey-text' : 'text-gray-500']">{{ test.category }}</p>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup lang="ts">
import testFonts from '@/assets/testFonts.json'

type Mode = 'light' | 'dark';

defineProps<{
  test: Test,
  mode?: Mode
}>()

interface Test {
    name: string
    category: string
    price?: number
    location?: string
}

function returnTestIcon(category: string) {
    return testFonts.find(testFont => testFont.category.toLowerCase() === category.toLowerCase());
}

const capitalizeFirstLetter = (str: string) => str.charAt(0).toUpperCase() + str.slice(1);
</script>

<style scoped>
.card-container {
    transition: box-shadow 0.3s ease-in-out;
}

.card-container:hover {
    box-shadow: 10px 10px 15px rgba(0, 0, 0, 0.15);
}
</style>
