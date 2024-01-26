<template>
    <div class="pointer-events-none absolute h-screen object-cover">
      <img
        src="~/public/images/background.webp"
        alt="background"
        class="fixed h-screen w-screen object-cover opacity-20 blur-3xl"
      />
    </div>
    <svg
      class="pointer-events-none fixed isolate z-50 h-full w-full opacity-70 mix-blend-soft-light"
    >
      <filter id="noise">
        <feTurbulence
          type="fractalNoise"
          baseFrequency="0.7"
          numOctaves="4"
          stitchTiles="stitch"
        ></feTurbulence>
      </filter>
      <rect width="100%" height="100%" filter="url(#noise)"></rect>
    </svg>
</template>