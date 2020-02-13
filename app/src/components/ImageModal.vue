<template>
  <div class="modal">
    <span @click="closeModal" class="modal__close">Close</span>
    <img :src="image.src.large" :alt="image.photographer" />
  </div>
</template>

<script>
export default {
  name: "imagemodel",
  props: ["image"],
  methods: {
    closeModal() {
      this.$emit("close");
    }
  }
};
</script>

<style lang="scss" scoped>
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 9998;

  &__close {
    color: #ffffff;
    position: absolute;
    top: 10%;
    right: 10%;
    cursor: pointer;
    z-index: 999;
  }

  img {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}
</style>
