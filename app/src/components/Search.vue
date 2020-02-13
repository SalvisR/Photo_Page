<template>
  <div class="search">
    <form @submit.prevent="searchFn">
      <input
        placeholder="Search"
        v-model="searchVal"
        type="text"
        @click="openMenu"
        v-on:blur="closeMenu"
      />
      <button class="search__btn" type="submit">
        <img src="@/assets/search.svg" alt="Search" />
      </button>
      <div tabindex="0" class="search__menu" :class="{ 'menu-active': searchMenu }">
        <button
          v-for="(val, index) in storageValues"
          :key="index"
          @click.prevent="redirect(val)"
        >{{ val }}</button>
        <span @click.prevent="clearHistory" class="search__clearBtn" title="Clear search history">X</span>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "search",
  data() {
    return {
      searchVal: null,
      searchValues: null,
      searchMenu: false,
      storageValues: null
    };
  },
  methods: {
    searchFn() {
      if (!this.searchVal) {
        return;
      }

      if (this.$route.path.startsWith("/search")) {
        window.location = `${window.location.origin}/search/${this.searchVal}`;
      } else {
        this.$router.push({
          name: "searchpage",
          params: { search: this.searchVal }
        });
      }
    },
    getSearchValues() {
      let values = localStorage.getItem("search");
      values = JSON.parse(values);
      this.storageValues = values;
    },
    clearHistory() {
      localStorage.removeItem("search");
      this.storageValues = null;
    },
    openMenu() {
      this.searchMenu = true;
    },
    closeMenu() {
      setTimeout(() => {
        this.searchMenu = false;
      }, 500);
    },
    redirect(val) {
      this.searchVal = val;
      this.searchFn();
    }
  },
  watch: {
    $route(to, from) {
      this.getSearchValues();
    }
  },
  created() {
    this.getSearchValues();
  }
};
</script>

<style lang="scss" scoped>
@mixin for-tablet {
  @media (max-width: 840px) {
    @content;
  }
}

.search {
  position: relative;
  flex: 1;
  text-align: center;
  margin: auto 0;
  z-index: 100;

  input[type="text"] {
    width: 70%;
    height: 40px;
    border: none;
    outline: none;
    border-radius: 8px;
    padding-left: 10px;
    font-size: 1.1rem;
    box-sizing: border-box;
    transition: all 0.3s ease-in;
    position: relative;

    @include for-tablet {
      width: 90%;
    }

    &:focus {
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
    }
  }

  .menu-active {
    height: auto;

    button {
      transform: translateY(0);
    }
  }

  &__btn {
    padding: 0;
    height: 40px;
    width: 40px;
    background-color: transparent;
    border: none;
    outline: none;
    position: absolute;
    right: 15%;
    cursor: pointer;

    img {
      width: 80%;
      display: block;
      margin: auto 0;
      opacity: 0.5;
    }
  }

  &__menu {
    position: absolute;
    left: 50%;
    transform: translate(-50%, 0);
    width: 70%;
    height: 0;
    background-color: #ffffff;
    box-shadow: inset 0px 48px 24px -49px rgba(130, 130, 130, 1);
    box-shadow: 0px 5px 12px -1px rgba(130, 130, 130, 1);
    transition: all 0.3s ease-in;
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
    overflow-y: hidden;
    padding: 0 1rem;
    box-sizing: border-box;
    z-index: 2;
    outline: none;

    button {
      transform: translateY(-100%);
      transition: all 0.3s ease-in;
      float: left;
      margin: 0.5rem;
      background-color: rgb(180, 180, 180);
      color: rgb(36, 36, 36);
      border: none;
      outline: none;
      border-radius: 15px;
      padding: 5px 20px;
      cursor: pointer;

      &:hover {
        background-color: rgb(202, 202, 202);
      }
    }
  }

  &__clearBtn {
    display: block;
    position: absolute;
    top: 25%;
    left: 96%;
    color: rgb(179, 179, 179);
    font-weight: bold;
    cursor: pointer;
    transition: all 0.3s ease-in;

    &:hover {
      transform: scale(1.3);
      color: rgb(255, 56, 56);
    }
  }
}
</style>
