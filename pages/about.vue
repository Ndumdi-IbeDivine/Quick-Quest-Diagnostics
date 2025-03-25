<template>
    <div>
        <section class="website-paddings bg-[var(--background-accent)] text-white grid items-center h-[70vh] lg:h-[50vh]">
            <h1 class="mt-20">About Quick Quest Diagnostics</h1>
        </section>

        <section class="bg-white website-paddings text-black">
            <div class="lg:px-24 py-10 grid grid-cols-2 mt-20">
                <div class="grid gap-5">
                    <div class="sm-header">Our Mission</div>
                    <h1>
                        We aim to make individuals and corporate organizations the “Boss of their health”
                    </h1>
                    <p class="l-p">
                        We are empowering people with in-depth knowledge about their health, thus enabling them to take informed decisions towards better health. At Quick Quest Diagnostics, our mission is to promote overall wellness and improve healthcare outcomes by conducting an in-depth and timely quest into each and every diagnostic test with utmost precision and speed.
                    </p>
                </div>
                <div></div>
            </div>
        </section>

        <section class="bg-white text-black">
            <h2 class="text-center">Contact</h2>
            <div class="grid grid-cols-3 mt-7 items-center">
                <div class="col-span-2">
                    <div class="flex justify-center">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.754858082883!2d3.4400431000000005!3d6.425533799999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bf5162cb76387%3A0xc3286790908ca7eb!2s12%20Kayode%20Abraham%20St%2C%20Victoria%20Island%2C%20Lagos%20106104%2C%20Lagos!5e0!3m2!1sen!2sng!4v1741918691507!5m2!1sen!2sng" class="w-full" height="600" style="border:0;" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
                <div class="px-10">
                    <div class="flex gap-3">
                        <span><i class="bi bi-house"></i></span>
                        <p class="l-p">
                            12 Kayode Abraham Street, Off Ligali Ayorinde
                            Street, Victoria Island, Lagos.
                        </p>
                    </div>
                    <div class="flex mt-10 gap-3">
                        <span><i class="bi bi-telephone"></i></span>
                        <p class="l-p">
                            +234 811 372 3864
                        </p>
                    </div>
                    <div class="mt-10">
                        <PrimaryBtn class="flex gap-3 items-center">
                            <span>
                                <i class="bi bi-envelope"></i>
                            </span>
                            <span>Send us a mail</span>
                        </PrimaryBtn>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<style scoped>
* {
}
</style>