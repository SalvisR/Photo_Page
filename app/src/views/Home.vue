<template>
  <div class="home">
    <section class="home__header" :style="{ backgroundImage: 'url(' + titleImg + ')' }">
      <div ref="searchEl" class="home__box">
        <h1>
          Find The Best Free Photos
          <span>Photos For Everyone</span>
        </h1>
        <Search :class="{ display: search }"></Search>
      </div>
    </section>
    <section class="home__content">
      <h3 class="home__tile">Free Stock Photos</h3>
      <ImageContainer :images="imgs"></ImageContainer>
    </section>
    <LoadMoreBtn @click.native="getCuratedImgs" :load="loading"></LoadMoreBtn>
    <!-- <button class="home__loading" @click="getCuratedImgs">
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
          :class="{ loader: loading }"
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
          :class="{ textLoading: loading }"
          transform="matrix(1 0 0 1 24.7812 43.3737)"
        >
          <tspan x="-12" y="13" font-family="'Arial'" font-size="16">
            Load More
          </tspan>
        </text>
      </svg>
    </button>-->
  </div>
</template>

<script>
import axios from "axios";
import ImageContainer from "@/components/ImageContainer";
import Search from "@/components/Search";
import LoadMoreBtn from "@/components/LoadMoreBtn";

export default {
  name: "Home",
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
  methods: {
    getTitleImg() {
      axios
        .get("http://192.168.1.78:3000/title")
        .then(res => {
          this.titleImg = res.data.data.photos[0].src.large2x;
          this.authorName = res.data.data.photos[0].photographer;
          this.authorUrl = res.data.data.photos[0].photographer_url;
        })
        .catch(err => console.log(err));
    },
    getCuratedImgs() {
      this.loading = true;

      axios
        .get("http://192.168.1.78:3000/curated", {
          params: { page: this.current_page }
        })
        .then(res => {
          this.imgs.push(res.data.data.photos);

          this.current_page++;
          this.loading = false;
        })
        .catch(err => {
          console.log(err);
          this.loading = false;
        });
    },
    handleScroll() {
      const searchEl = this.$refs.searchEl.offsetTop + 50;
      if (searchEl >= window.scrollY) {
        this.search = false;
        this.$emit("search", this.search);
      } else {
        this.$emit("search", this.search);
        this.search = true;
      }
    }
  },
  created() {
    this.getTitleImg();
    this.getCuratedImgs();
    window.addEventListener("scroll", this.handleScroll);
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  }
};
</script>

<style lang="scss" scoped>
@mixin for-tablet {
  @media (max-width: 1080px) {
    @content;
  }
}

.home {
  &__header {
    height: 70vh;
    background-size: 100%;
    background-repeat: no-repeat;
    background-position: center;
    overflow: hidden;
    display: flex;
    justify-content: center;
    padding-top: 100px;

    @include for-tablet {
      height: 50vh;
      padding-top: 60px;
    }

    h1 {
      color: #ffffff;
      font-size: 4rem;

      @include for-tablet {
        font-size: 2.5rem;
      }

      span {
        display: block;
        font-size: 1rem;
      }
    }
  }

  h3 {
    margin-bottom: 0;
  }

  &__box {
    width: 80vw;
    text-align: center;
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
