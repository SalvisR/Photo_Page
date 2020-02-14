<template>
  <div class="modal">
    <span @click="closeModal" class="modal__close">
      <div></div>
      <div></div>
    </span>
    <div class="modal__image-box">
      <span class="modal__sizes-icon" @click="sizeMenu = !sizeMenu">
        <img :class="{'icon-active': sizeMenu}" src="@/assets/icon-sizes.svg" alt="Sizes icon" />
      </span>
      <div class="modal__size-menu" v-show="sizeMenu">
        <a
          v-for="(size, index) in image.src"
          :key="index"
          :href="size"
          target="_blank"
          @click="sizeMenu = false"
        >{{index}}</a>
      </div>
      <img :src="image.src.large2x" :alt="image.photographer" @click="sizeMenu = false" />
      <span class="modal__photographer">
        Photo By
        <a :href="image.photographer_url" target="_blank">{{image.photographer}}</a>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "imagemodel",
  data() {
    return {
      sizeMenu: false
    };
  },
  props: ["image"],
  methods: {
    closeModal() {
      this.$emit("close");
    }
  }
};
</script>

<style lang="scss" scoped>
@mixin for-mobile {
  @media (max-width: 840px) {
    @content;
  }
}

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
    top: 4%;
    right: 5%;
    cursor: pointer;
    z-index: 999;

    div {
      width: 30px;
      height: 5px;
      background-color: #ff3232;
    }

    div:nth-child(1) {
      transform: rotate(45deg) translate(0px, 5px);
    }
    div:nth-child(2) {
      transform: rotate(-45deg) translate(-2px, -4px);
    }
  }

  &__image-box {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    height: 90%;

    &:hover {
      .modal__sizes-icon {
        img {
          opacity: 1;
        }
      }
    }

    @include for-mobile {
      height: 80%;
      width: 80%;
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .icon-active {
    opacity: 1;
  }

  &__sizes-icon {
    position: absolute;
    right: 5px;
    top: 5px;
    width: 30px;
    height: 30px;
    cursor: pointer;

    img {
      opacity: 0;
      width: 100%;
      object-fit: cover;
    }

    &:hover {
      img {
        opacity: 1;
      }
    }
  }

  &__size-menu {
    position: absolute;
    top: 35px;
    right: 35px;
    background-color: #ffffff;

    a {
      display: block;
      text-decoration: none;
      text-transform: capitalize;
      color: #414141;
      padding: 4px 5px;

      &:hover {
        background: #b9b9b9;
      }
    }
  }

  &__photographer {
    position: absolute;
    top: 101%;
    left: 0;
    color: #6b6b6b;

    a {
      color: #6b6b6b;
      text-decoration: none;
    }

    &:hover {
      color: #ffffff;

      a {
        color: #ffffff;
      }
    }
  }
}
</style>
