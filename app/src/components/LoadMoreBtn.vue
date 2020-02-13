<template>
  <button class="loading">
    <svg
      version="1.1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      width="100px"
      height="100px"
      viewBox="0 0 100 100"
      enable-background="new 0 0 100 100"
      xml:space="preserve"
    >
      <circle
        fill="none"
        stroke="transparent"
        stroke-width="4"
        stroke-miterlimit="10"
        cx="50"
        cy="50"
        r="46.281"
      />
      <circle
        :class="{ loader: load }"
        fill="none"
        stroke="#000"
        stroke-width="4"
        stroke-miterlimit="10"
        cx="50"
        cy="50"
        r="46.281"
      />
      <rect x="24.781" y="26.333" fill="none" width="71.5" height="60.513" />
      <text
        :class="{ textLoading: load }"
        transform="matrix(1 0 0 1 24.7812 43.3737)"
      >
        <tspan x="-12" y="13" font-family="'Arial'" font-size="16">
          Load More
        </tspan>
      </text>
    </svg>
  </button>
</template>

<script>
export default {
  name: 'loadmore',
  props: ['load']
};
</script>

<style lang="scss" scoped>
.loading {
  display: block;
  margin: 1rem auto;
  border: none;
  background: transparent;
  outline: none;
  cursor: pointer;
}
.loader {
  stroke-dasharray: 291;
  animation: dash 4s linear infinite, spin 4s linear infinite;
  transform-origin: 50% 50%;
}
.textLoading {
  opacity: 0;
}

@keyframes dash {
  0% {
    stroke-dashoffset: 291 * 4;
  }
  100% {
    stroke-dashoffset: 291 * 2;
  }
}
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
