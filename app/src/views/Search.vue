<template>
  <div class="search">
    <h1>Search results for {{ title }}</h1>
    <ImageContainer :images="imgs"></ImageContainer>
    <LoadMoreBtn @click.native="getImages" :load="loading"></LoadMoreBtn>
  </div>
</template>

<script>
import axios from "axios";
import ImageContainer from "@/components/ImageContainer";
import LoadMoreBtn from "@/components/LoadMoreBtn";

export default {
  name: "search-page",
  components: {
    ImageContainer,
    LoadMoreBtn
  },
  data() {
    return {
      imgs: [],
      current_page: 1,
      loading: false,
      search: true,
      title: null
    };
  },
  methods: {
    getImages() {
      this.loading = true;
      this.title = this.$route.params.search;

      axios
        .get(`${process.env.VUE_APP_URL}/search`, {
          params: { page: this.current_page, search: this.$route.params.search }
        })
        .then(res => {
          this.imgs.push(res.data.data.photos);

          if (this.current_page === 1) {
            this.addToLocalStorage();
          }

          this.current_page++;
          this.loading = false;
        })
        .catch(err => {
          this.loading = false;
          console.log(err);
        });
    },
    addToLocalStorage() {
      if (this.imgs[0].length < 1) {
        return;
      }
      let storage = localStorage.getItem("search");
      if (storage) {
        storage = JSON.parse(storage);
      } else {
        storage = [];
      }

      const val = this.$route.params.search;
      storage.unshift(val);
      const unique = [...new Set(storage)].slice(0, 11);

      localStorage.setItem("search", JSON.stringify(unique));
    }
  },
  mounted() {
    this.getImages();
    this.$emit("search", this.search);
  }
};
</script>

<style lang="scss" scoped>
.search {
  padding: 4rem 1rem 1rem 1rem;
}
</style>
