<template>
    <button class="bg-[var(--light-accent-color-text)] text-white font-bold py-3 px-6 rounded-lg cursor-pointer">
        <slot></slot>
    </button>
</template>

<style scoped>
button {
  color: #FFF;
  transition: all 0.5s;
  position: relative;
}

button::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  /* z-index: 1; */
  background-color: rgba(255,255,255,0.1);
  transition: all 0.3s;
}

button:hover::before {
  opacity: 0 ;
  transform: scale(0.5,0.5);
}

button::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  /* z-index: 1; */
  opacity: 0;
  transition: all 0.3s;
  border: 1px solid rgba(255,255,255,0.5);
  border-radius: 10px;
  transform: scale(1.2,1.2);
}

button:hover::after {
    background-color: transparent;
    opacity: 1;
    transform: scale(1,1);
}
</style>