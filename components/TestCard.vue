<template>
    <div>
        <section v-if="test" class="w-full text-gray-600 body-font">
            <div>
                <div>
                    <div>
                        <div
                            class="flex border-2 rounded-lg border-gray-200 border-opacity-50 p-5 sm:flex-row flex-col"
                        >
                        <div
                            class="w-16 h-16 sm:mr-4 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-indigo-100 flex-shrink-0"
                        >
                            <i 
                                :class="returnTestIcon(test.category)?.class"
                                class="w-7 h-7"
                                :style="returnTestIcon(test.category)?.style"
                            ></i>
                        </div>
                        <div class="">
                                <p
                                    class="grey-text text-lg font-medium mb-3"
                                >
                                    {{ capitalizeFirstLetter(test.category) }}
                                </p>
                                <p class="mb-3">
                                    {{ test.name }}
                                </p>
                                
                                <!-- <div class="grid gap-5 grid-cols-2">
                                    <div class="grey-text">location</div>
                                    <div class="grey-text">price</div>
                                </div> -->
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup lang="ts">
import testFonts from '@/assets/testFonts.json'

defineProps<{
  test: Test
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
