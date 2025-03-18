<template>
    <div>
        <div class="hero">
            <!-- <img src="/assets/images/hero.png" alt=""> -->
             <div class="grid gap-5 content-center h-full text-white website-paddings lg:me-[700px]">
                 <h1 class="mt-20"><span class="use-pacifico-regular">Extensive, accurate,</span> and <span class="use-pacifico-regular ">timely</span> medical tests</h1>
                 <p class="l-p">Get your extensive reliable medical tests results all in one place.</p>
                 <div>
                    <PrimaryBtn>See tests we do</PrimaryBtn>
                 </div>
             </div>
        </div>

        <main class="bg-[#09041C] text-white website-paddings grid gap-16">
            <section class="lg:px-24 grid grid-cols-2 align-center mt-16">
                <div>
                    <h1>Become the boss of your health</h1>
                    <p class="l-p mt-5">We are a diagnostic centre that is wholly dedicated to providing accurate and timely medical diagnostic services to both individuals and corporate organisations. Get your extensive reliable medical tests results all in one place. See where you can find us.</p>
                </div>
                <div></div>
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
                    <div class="grid mt-8 grid-cols-3 gap-5">
                        <TestCard v-for="i in 6" />
                    </div>
                </div>
            </section>

            <!-- why choose us -->
            <section class="lg:px-24 grid grid-cols-2 align-center">
                <div></div>
                <div class="grid gap-3">
                    <div class="sm-header">Why choose Quick Quest</div>
                    <h1>Our mission is to promote overall wellness and improve healthcare outcomes</h1>
                    <p class="l-p">We aim to make individuals and corporate organisations the “Boss of their health” by empowering them with in-depth knowledge about their health, thus enabling them to take informed decisions towards better health.</p>

                    <div class="grid gap-3 mt-5">
                        <div class="grid gap-3 p-4 bg-slate-700 border rounded-lg">
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
                        </div>
                    </div>
                </div>
            </section>


            <div class="flex justify-center">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.754858082883!2d3.4400431000000005!3d6.425533799999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bf5162cb76387%3A0xc3286790908ca7eb!2s12%20Kayode%20Abraham%20St%2C%20Victoria%20Island%2C%20Lagos%20106104%2C%20Lagos!5e0!3m2!1sen!2sng!4v1741918691507!5m2!1sen!2sng" width="800" height="600" style="border:0;" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </main>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
.hero {
    background: 
        linear-gradient(to bottom, rgba(255, 255, 255, 0) 60%, var(--background-accent) 100%),
        url('/assets/images/hero-2.png');
    background-position: center;
    height: 90vh;
}
</style>