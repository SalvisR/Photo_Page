<template>
  <div class="container">
    <ImageModal
      v-if="showModal"
      @close="showModal = false"
      :image="image"
    ></ImageModal>
    <div
      class="container__pageBox"
      v-for="(imgs, index) in images"
      :key="index"
    >
      <div
        class="container__imgBox"
        v-for="(img, index) in imgs"
        :key="index"
        :class="'img-' + index"
        @click="showModalFn(img)"
      >
        <img
          loading="lazy"
          :src="img.src.large"
          :alt="'Photo by ' + img.photographer"
        />
        <span class="container__photographer"
          >Photo by {{ img.photographer }}</span
        >
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import ImageModal from '@/components/ImageModal';

export default {
  name: 'imagecontainer',
  components: {
    ImageModal
  },
  data() {
    return {
      showModal: false,
      image: null
    };
  },
  props: ['images'],
  methods: {
    showModalFn(img) {
      this.showModal = true;
      this.image = img;

      this.$router.push({
        name: this.$route.name,
        query: {
          id: img.id
        }
      });
    },
    async getImageById(id) {
      axios
        .get(`${process.env.VUE_APP_URL}/image`, { params: { id: id } })
        .then(res => {
          this.image = res.data.data;
        })
        .then(() => {
          this.showModal = true;
        })
        .catch(err => {});
    },
    showImageById() {
      if (this.$route.query.id) {
        this.getImageById(this.$route.query.id);
      }
    }
  },
  mounted() {
    this.showImageById();
  }
};
</script>

<style lang="scss" scoped>
@mixin for-tablet {
  @media (min-width: 599px) {
    @content;
  }
}

@mixin for-desktop {
  @media (min-width: 840px) {
    @content;
  }
}

.container {
  &__pageBox {
    display: grid;
    grid-template-rows: repeat(22, 350px);
    grid-gap: 20px;
    margin-top: 20px;

    @include for-tablet {
      grid-template-columns: repeat(auto-fit, minmax(10px, 1fr));
      grid-template-rows: repeat(19, 10vw);
    }

    @include for-desktop {
      grid-template-columns: repeat(auto-fit, minmax(10px, 1fr));
      grid-template-rows: repeat(14, 10vw);
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: all 0.3s ease-in;
      cursor: pointer;
    }
  }
  &__imgBox {
    position: relative;
    cursor: pointer;

    &:hover {
      &::before {
        content: '';
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.6);
      }
      span {
        opacity: 1;
      }
    }
  }
  &__photographer {
    position: absolute;
    bottom: 10px;
    left: 10px;
    color: #ffffff;
    font-size: 0.8rem;
    opacity: 0;
  }

  .img-0 {
    @include for-tablet {
      grid-column: 1/5;
      grid-row: 1/4;
    }

    @include for-desktop {
      grid-column: 1/4;
      grid-row: 1/4;
    }
  }
  .img-1 {
    @include for-tablet {
      grid-column: 5/9;
      grid-row: 1/3;
    }

    @include for-desktop {
      grid-column: 4/6;
      grid-row: 1/3;
    }
  }
  .img-2 {
    @include for-tablet {
      grid-column: 9/13;
      grid-row: 1/5;
    }
    @include for-desktop {
      grid-column: 6/9;
      grid-row: 1/3;
    }
  }
  .img-3 {
    @include for-tablet {
      grid-column: 1/5;
      grid-row: 4/6;
    }
    @include for-desktop {
      grid-column: 9/13;
      grid-row: 1/4;
    }
  }
  .img-4 {
    @include for-tablet {
      grid-column: 5/9;
      grid-row: 3/6;
    }
    @include for-desktop {
      grid-column: 1/4;
      grid-row: 4/6;
    }
  }
  .img-5 {
    @include for-tablet {
      grid-column: 1/6;
      grid-row: 6/8;
    }
    @include for-desktop {
      grid-column: 4/9;
      grid-row: 3/6;
    }
  }
  .img-6 {
    @include for-tablet {
      grid-column: 6/9;
      grid-row: 6/8;
    }
    @include for-desktop {
      grid-column: 1/5;
      grid-row: 6/8;
    }
  }
  .img-7 {
    @include for-tablet {
      grid-column: 9/13;
      grid-row: 5/8;
    }
    @include for-desktop {
      grid-column: 5/7;
      grid-row: 6/8;
    }
  }
  .img-8 {
    @include for-tablet {
      grid-column: 1/5;
      grid-row: 8/11;
    }
    @include for-desktop {
      grid-column: 7/9;
      grid-row: 6/8;
    }
  }
  .img-9 {
    @include for-tablet {
      grid-column: 5/10;
      grid-row: 8/10;
    }
    @include for-desktop {
      grid-column: 9/13;
      grid-row: 4/7;
    }
  }
  .img-10 {
    @include for-tablet {
      grid-column: 10/13;
      grid-row: 8/11;
    }
    @include for-desktop {
      grid-column: 1/4;
      grid-row: 8/10;
    }
  }
  .img-11 {
    @include for-tablet {
      grid-column: 1/5;
      grid-row: 11/13;
    }
    @include for-desktop {
      grid-column: 4/7;
      grid-row: 8/11;
    }
  }
  .img-12 {
    @include for-tablet {
      grid-column: 5/10;
      grid-row: 10/13;
    }
    @include for-desktop {
      grid-column: 7/9;
      grid-row: 8/10;
    }
  }
  .img-13 {
    @include for-tablet {
      grid-column: 10/13;
      grid-row: 11/14;
    }
    @include for-desktop {
      grid-column: 9/13;
      grid-row: 7/10;
    }
  }
  .img-14 {
    @include for-tablet {
      grid-column: 1/6;
      grid-row: 13/15;
    }
    @include for-desktop {
      grid-column: 1/4;
      grid-row: 10/13;
    }
  }
  .img-15 {
    @include for-tablet {
      grid-column: 6/10;
      grid-row: 13/15;
    }
    @include for-desktop {
      grid-column: 4/7;
      grid-row: 11/13;
    }
  }
  .img-16 {
    @include for-tablet {
      grid-column: 10/13;
      grid-row: 14/17;
    }
    @include for-desktop {
      grid-column: 7/10;
      grid-row: 10/12;
    }
  }
  .img-17 {
    @include for-tablet {
      grid-column: 1/5;
      grid-row: 15/18;
    }
    @include for-desktop {
      grid-column: 10/13;
      grid-row: 10/13;
    }
  }
  .img-18 {
    @include for-tablet {
      grid-column: 5/10;
      grid-row: 15/17;
    }
    @include for-desktop {
      grid-column: 1/5;
      grid-row: 13/15;
    }
  }
  .img-19 {
    @include for-tablet {
      grid-column: 1/5;
      grid-row: 18/20;
    }
    @include for-desktop {
      grid-column: 5/7;
      grid-row: 13/15;
    }
  }
  .img-20 {
    @include for-tablet {
      grid-column: 5/9;
      grid-row: 17/20;
    }
    @include for-desktop {
      grid-column: 7/10;
      grid-row: 12/15;
    }
  }

  .img-21 {
    @include for-tablet {
      grid-column: 9/13;
      grid-row: 17/20;
    }
    @include for-desktop {
      grid-column: 10/13;
      grid-row: 13/15;
    }
  }
}
</style>
