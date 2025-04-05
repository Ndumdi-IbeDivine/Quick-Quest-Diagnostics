<template>
    <div>
        <NuxtLayout>
            <Nav />
            <div>
                <NuxtPage />
            </div>
			<Footer />
        </NuxtLayout>
    </div>
</template>

<script setup>
import { useHead, useRuntimeConfig } from '#imports';
const config = useRuntimeConfig();

// setting up font awesome
useHead({
  script: [
    {
      src: config.public.FONT_AWESOME,
      crossorigin: 'anonymous',
    },
    {
      src: 'https://cdn.jsdelivr.net/npm/flowbite@3.1.2/dist/flowbite.min.js',
      crossorigin: 'anonymous',
    },
  ],
});
</script>
