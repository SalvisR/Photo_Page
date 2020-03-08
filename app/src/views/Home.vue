<template>
  <div class="home">
    <section
      class="home__header"
      :style="{ backgroundImage: 'url(' + titleImg + ')' }"
    >
      <div ref="searchEl" class="home__box">
        <h1>
          Find The Best Free Photos
          <span>Photos For Everyone</span>
        </h1>
        <Search :class="{ display: search }" v-if="!menuOpens"></Search>
      </div>

      <span class="home__author">
        Photo By
        <a :href="authorUrl">{{ authorName }}</a>
      </span>
    </section>
    <section class="home__content">
      <h3 class="home__tile">Free Stock Photos</h3>
      <ImageContainer :images="imgs"></ImageContainer>
    </section>
    <LoadMoreBtn @click.native="getCuratedImgs" :load="loading"></LoadMoreBtn>
  </div>
</template>

<script>
import axios from 'axios';
import ImageContainer from '@/components/ImageContainer';
import Search from '@/components/Search';
import LoadMoreBtn from '@/components/LoadMoreBtn';

export default {
  name: 'Home',
  components: {
    ImageContainer,
    Search,
    LoadMoreBtn
  },
  data() {
    return {
      titleImg: null,
      authorName: null,
      authorUrl: null,
      imgs: [],
      current_page: 1,
      loading: false,
      search: false
    };
  },
  props: ['menuOpens'],
  methods: {
    getTitleImg() {
      axios
        .get(`${process.env.VUE_APP_URL}/title`)
        .then(res => {
          this.titleImg = res.data.data.photos[0].src.large2x;
          this.authorName = res.data.data.photos[0].photographer;
          this.authorUrl = res.data.data.photos[0].photographer_url;
        })
        .catch(err => {});
    },
    getCuratedImgs() {
      this.loading = true;

      axios
        .get(`${process.env.VUE_APP_URL}/curated`, {
          params: { page: this.current_page }
        })
        .then(res => {
          this.imgs.push(res.data.data.photos);

          this.current_page++;
          this.loading = false;
        })
        .catch(err => {
          this.loading = false;
        });
    },
    handleScroll() {
      const searchEl = this.$refs.searchEl.offsetTop + 50;
      if (searchEl >= window.scrollY) {
        this.search = false;
        this.$emit('search', this.search);
      } else {
        this.$emit('search', this.search);
        this.search = true;
      }
    }
  },
  created() {
    this.getTitleImg();
    this.getCuratedImgs();
    window.addEventListener('scroll', this.handleScroll);
  },
  destroyed() {
    window.removeEventListener('scroll', this.handleScroll);
  }
};
</script>

<style lang="scss" scoped>
@mixin for-tablet {
  @media (max-width: 1080px) {
    @content;
  }
}
@mixin for-mobile {
  @media (max-width: 840px) {
    @content;
  }
}

.home {
  &__header {
    position: relative;
    height: 70vh;
    background-size: 100%;
    background-repeat: no-repeat;
    background-position: center;
    display: flex;

    justify-content: center;
    padding-top: 100px;

    @include for-tablet {
      height: 50vh;
      padding-top: 60px;
    }
    @include for-mobile {
      height: 30vh;
      padding-top: 60px;
    }

    h1 {
      color: #ffffff;
      font-size: 4rem;

      @include for-tablet {
        font-size: 2.5rem;
      }
      @include for-mobile {
        font-size: 1.9rem;
      }

      span {
        display: block;
        font-size: 1rem;
      }
    }
  }

  &__author {
    position: absolute;
    bottom: 20px;
    color: #4b4b4b;

    a {
      text-decoration: none;
      color: #4b4b4b;
    }
  }

  h3 {
    margin-bottom: 0;
  }

  &__box {
    width: 60vw;
    text-align: center;

    @include for-mobile {
      width: 80vw;
    }
  }

  &__content {
    display: flex;
    flex-direction: column;
    padding: 1rem;
  }

  .display {
    display: none;
  }
}
</style>
