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
  ],
});
</script>
