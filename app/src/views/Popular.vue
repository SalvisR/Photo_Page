<template>
  <div class="popular">
    <h1>Most popular photos</h1>
    <ImageContainer :images="imgs"></ImageContainer>
    <LoadMoreBtn @click.native="getImages" :load="loading"></LoadMoreBtn>
  </div>
</template>

<script>
import axios from "axios";
import ImageContainer from "@/components/ImageContainer";
import LoadMoreBtn from "@/components/LoadMoreBtn";

export default {
  name: "popular",
  data() {
    return {
      search: true,
      loading: false,
      imgs: [],
      current_page: 1
    };
  },
  components: {
    ImageContainer,
    LoadMoreBtn
  },
  methods: {
    getImages() {
      this.loading = true;
      axios
        .get(`${process.env.VUE_APP_URL}/popular`, {
          params: { page: this.current_page }
        })
        .then(res => {
          this.imgs.push(res.data.data.photos);

          this.current_page++;
          this.loading = false;
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  mounted() {
    this.getImages();
    this.$emit("search", this.search);
  }
};
</script>

<style lang="scss" scoped>
.popular {
  padding: 3rem 1rem;
}
</style>
