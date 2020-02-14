<template>
  <nav :class="{bg: search}" class="nav" ref="nav">
    <a href="/" class="nav__logo">
      <img src="@/assets/logo.png" alt="Logo" />
      <span>Photo App</span>
    </a>
    <Search :class="{display: !search}"></Search>
    <div class="nav__burger" @click="openMenu()">
      <div></div>
      <div></div>
      <div></div>
    </div>
    <ul class="nav__list" ref="menu">
      <li>
        <router-link to="/">Home</router-link>
      </li>
      <li>
        <router-link to="/popular">Popular</router-link>
      </li>
      <li>
        <router-link to="/categories">Categories</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
import Search from "@/components/Search";
export default {
  name: "Navbar",
  components: {
    Search
  },
  data() {
    return {
      menuOpen: false
    };
  },
  props: ["search"],
  methods: {
    openMenu() {
      this.menuOpen = !this.menuOpen;
      this.$refs.menu.classList.toggle("menu-active");
      this.$emit("menuOpen", this.menuOpen);

      if (this.menuOpen) {
        this.$refs.nav.classList.add("bg-active");
        document.querySelector("html").style.overflow = "hidden";
      } else if (!this.menuOpen) {
        this.$refs.nav.classList.remove("bg-active");
        document.querySelector("html").style.overflow = "auto";
      }
    }
  },
  watch: {
    $route(to, from) {
      if (this.menuOpen) {
        this.openMenu();
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@mixin for-tablet {
  @media (max-width: 1080px) {
    @content;
  }
}

@mixin for-tablet-small {
  @media (max-width: 840px) {
    @content;
  }
}

.nav {
  position: fixed;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: transparent;
  padding: 0.5rem 0;
  width: 100%;
  z-index: 5;

  @include for-tablet {
    font-size: 0.9rem;
  }

  &__logo {
    display: flex;
    flex-direction: row;
    align-items: center;

    @include for-tablet {
      margin-right: 0 !important;
    }

    img {
      width: 50px;
      margin-right: 5px;

      @include for-tablet {
        width: 40px;
      }
    }

    span {
      display: inline-block;
      margin: auto 0;

      @include for-tablet {
        font-size: 0.6rem;
      }
    }
  }

  &__burger {
    display: none;
    cursor: pointer;
    margin-right: 2rem;

    @include for-tablet-small {
      display: block;
    }

    div {
      width: 30px;
      height: 3px;
      background: #ffffff;
      margin: 4px;
    }
  }

  &__list {
    padding-left: 0;

    @include for-tablet-small {
      position: absolute;
      top: 56px;
      width: 100vw;
      height: 100vh;
      background-color: rgb(46, 46, 46);
      margin-top: 0;
      padding: 10px 0;
      box-sizing: border-box;
      display: none;
    }

    li:nth-child(1) {
      display: none;
      @include for-tablet-small {
        display: block;
      }
    }

    li {
      display: inline-block;
      cursor: pointer;

      @include for-tablet-small {
        width: 100%;
        padding-right: 30px;
        box-sizing: border-box;
        background-color: rgb(46, 46, 46);

        &:hover {
          background-color: rgb(83, 83, 83);
        }

        a {
          font-size: 1.3rem;
          line-height: 3.5rem;
          width: 100%;
          text-align: right;
        }
      }
    }
  }

  a {
    margin: 0 2rem;
    float: right;
    text-decoration: none;
    text-transform: uppercase;
    color: #ffffff;
    font-weight: bold;

    @include for-tablet {
      margin: 0 1rem;
    }
  }
}

.display {
  display: none;
}
.bg {
  background-color: rgb(46, 46, 46);
}
.bg-active {
  background-color: rgb(46, 46, 46);
}
.menu-active {
  display: block;
  overflow: hidden;
}
</style>
