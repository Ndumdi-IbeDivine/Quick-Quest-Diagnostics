<template>
    <div class="text-white">
        <Hero />

        <main class="bg-[#09041C] text-white website-paddings grid gap-16">
            <section class="lg:px-24 grid md:grid-cols-2 items-center mt-20 gap-10">
                <div>
                    <h1>Become the boss of your health</h1>
                    <p class="l-p mt-5">We are a diagnostic centre that is wholly dedicated to providing accurate and timely medical diagnostic services to both individuals and corporate organisations. Get your extensive reliable medical tests results all in one place. See where you can find us.</p>
                </div>
                <div class="md:flex gap-4 hidden">
                    <img src="/assets/images/qqd-image-3-trimmed.jpg" class="mt-32 w-1/2 h-[700px]" alt="">
                    <img src="/assets/images/qqd-image-2-trimmed.jpg" class="w-1/2 h-[700px]" alt="">
                </div>
            </section>

            <!-- tests -->
            <section class="lg:px-24">
                <div>
                    <div class="grid lg:grid-cols-2 align-center">
                        <div class="grid gap-3">
                            <div class="sm-header">Our services</div>
                            <h1>We offer a wide variety of diagnostic services</h1>
                            <p class="grey-text">Choose from our variety of custom packages or choose tests custom to you.</p>
                        </div>
                    </div>
                    <div class="grid mt-8 md:grid-cols-3 gap-5">
                        <TestCard v-for="test in tests.slice(0, 6)" mode="dark" :test="test" />
                    </div>
                    <div class="flex justify-center mt-10">
                        <NuxtLink to="/tests" class="text-white">
                            <PrimaryBtn>See all tests</PrimaryBtn>
                        </NuxtLink> 
                    </div>
                </div>
            </section>

            <!-- why choose us -->
            <section class="lg:px-24 gap-10 grid lg:grid-cols-2 items-center">
                <div>
                    <img src="/assets/images/qqd-image-4.jpg" alt="">
                </div>
                <div class="grid gap-3">
                    <div class="sm-header">Why choose Quick Quest</div>
                    <h1>Our mission is to promote overall wellness and improve healthcare outcomes</h1>
                    <p class="l-p">We aim to make individuals and corporate organisations the “Boss of their health” by empowering them with in-depth knowledge about their health, thus enabling them to take informed decisions towards better health.</p>

                    <div class="grid gap-3 mt-5">
                        <!-- <div class="grid gap-3 p-4 bg-slate-700 border rounded-lg">
                            <div>
                                <div class="border rounded-lg p-2 px-3 w-fit">
                                    <i class="bi bi-people"></i>
                                </div>
                            </div>
                            <div>
                                <p class="font-bold">Personalised Service</p>
                                <p class="mt-2">Our services are highly personalised so as each person will be prioritised with access to adequate case management review by minimum of a cardiologist and medical officer.</p>
                            </div>
                        </div>
                        <div class="grid gap-3 p-4 bg-slate-700 border rounded-lg">
                            <div>
                                <div class="border rounded-lg p-2 px-3 w-fit">
                                    <i class="bi bi-lightning-charge" style="color: chartreuse;"></i>
                                </div>
                            </div>
                            <div>
                                <p class="font-bold">Swift Response</p>
                                <p class="mt-2">All investigations are attended to swiftly, and results are generated in the shortest possible time, making it easy to make informed decisions.</p>
                            </div>
                        </div>
                        <div class="grid gap-3 p-4 bg-slate-700 border rounded-lg">
                            <div>
                                <div class="border rounded-lg p-2 px-3 w-fit">
                                    <i class="bi bi-activity" style="color: green;"></i>
                                </div>
                            </div>
                            <div>
                                <p class="font-bold">Latest Teschnology</p>
                                <p class="mt-2">Leveraging on high end technology, Quick Quest diagnostics can provide accurate results in no time with fully automated diagnostic equipment.</p>
                            </div>
                        </div> -->
                        <TestCard v-for="mission in missions" mode="dark" :test="mission" />
                    </div>
                </div>
            </section>
        </main>
    </div>
</template>

<script setup lang="ts">
import tests from '~/assets/tests.json'

let missions = [
    {
        name: 'Personalised Service',
        category: 'Our services are highly personalised so as each person will be prioritised with access to adequate case management review by minimum of a cardiologist and medical officer.',
        icon: "fa-solid fa-user-doctor"
    },
    {
        name: 'Swift Response',
        category: 'All investigations are attended to swiftly, and results are generated in the shortest possible time, making it easy to make informed decisions.',
        icon: "fa-solid fa-bolt"
    },
    {
        name: 'Latest Technology',
        category: 'Leveraging on high end technology, Quick Quest diagnostics can provide accurate results in no time with fully automated diagnostic equipment.',
        icon: "fa-solid fa-microscope"
    }
]
</script>

<style scoped>
.hero {
    background: 
        linear-gradient(rgba(255, 255, 255, 0) 60%, var(--background-accent) 100%),
        url('/images/hero.jpg');
    background-position: right;
    background-size: cover;
    height: 90vh;
}
</style>