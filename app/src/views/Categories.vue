<template>
  <div class="categories">
    <h1>Categories</h1>
    <div class="categories__container">
      <div
        class="categories__card"
        v-for="(category, index) in categories"
        :key="index"
        :style="{backgroundImage: 'url(' + category.img + ')'}"
        @click="searchFn(category.title)"
      >
        <span>{{category.title}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "catetgories",
  data() {
    return {
      search: true,
      categories: [
        {
          title: "relax",
          img:
            "https://images.pexels.com/photos/914929/pexels-photo-914929.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280"
        },
        {
          title: "wedding",
          img:
            "https://images.pexels.com/photos/948185/pexels-photo-948185.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280"
        },
        {
          title: "desktop wallpaper",
          img:
            "https://images.pexels.com/photos/443446/pexels-photo-443446.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280"
        },
        {
          title: "medical",
          img:
            "https://images.pexels.com/photos/40568/medical-appointment-doctor-healthcare-40568.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280"
        },
        {
          title: "home",
          img:
            "https://images.pexels.com/photos/584399/living-room-couch-interior-room-584399.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280"
        },
        {
          title: "adventure",
          img:
            "https://images.pexels.com/photos/672358/pexels-photo-672358.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280"
        },
        {
          title: "finance",
          img:
            "https://images.pexels.com/photos/53621/calculator-calculation-insurance-finance-53621.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280"
        },
        {
          title: "kitchen",
          img:
            "https://images.pexels.com/photos/533157/pexels-photo-533157.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280"
        },
        {
          title: "africa",
          img:
            "https://images.pexels.com/photos/59989/elephant-herd-of-elephants-african-bush-elephant-africa-59989.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280"
        },
        {
          title: "trees",
          img:
            "https://images.pexels.com/photos/53435/tree-oak-landscape-view-53435.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280"
        },
        {
          title: "room",
          img:
            "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280"
        },
        {
          title: "space",
          img:
            "https://images.pexels.com/photos/110854/pexels-photo-110854.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280"
        },
        {
          title: "party",
          img:
            "https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280"
        },
        {
          title: "house",
          img:
            "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280"
        },
        {
          title: "working",
          img:
            "https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280"
        },
        {
          title: "photography",
          img:
            "https://images.pexels.com/photos/368893/pexels-photo-368893.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280"
        },
        {
          title: "girl",
          img:
            "https://images.pexels.com/photos/1758144/pexels-photo-1758144.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280"
        },
        {
          title: "light",
          img:
            "https://images.pexels.com/photos/290617/pexels-photo-290617.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280"
        },
        {
          title: "smartphone",
          img:
            "https://images.pexels.com/photos/892757/pexels-photo-892757.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280"
        },
        {
          title: "communication",
          img:
            "https://images.pexels.com/photos/1181719/pexels-photo-1181719.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280"
        },
        {
          title: "ice cream",
          img:
            "https://images.pexels.com/photos/108370/pexels-photo-108370.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280"
        },
        {
          title: "technology",
          img:
            "https://images.pexels.com/photos/735911/pexels-photo-735911.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280"
        },
        {
          title: "beauty",
          img:
            "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280"
        },
        {
          title: "paint",
          img:
            "https://images.pexels.com/photos/1212407/pexels-photo-1212407.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280"
        },
        {
          title: "summer",
          img:
            "https://images.pexels.com/photos/1209610/pexels-photo-1209610.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280"
        },
        {
          title: "sunset",
          img:
            "https://images.pexels.com/photos/36744/agriculture-arable-clouds-countryside.jpg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280"
        },
        {
          title: "model",
          img:
            "https://images.pexels.com/photos/1689731/pexels-photo-1689731.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280"
        },
        {
          title: "hair",
          img:
            "https://images.pexels.com/photos/1159334/pexels-photo-1159334.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280"
        },
        {
          title: "website",
          img:
            "https://images.pexels.com/photos/1029757/pexels-photo-1029757.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280"
        },
        {
          title: "interior",
          img:
            "https://images.pexels.com/photos/1571459/pexels-photo-1571459.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280"
        },
        {
          title: "portrait",
          img:
            "https://images.pexels.com/photos/1124724/pexels-photo-1124724.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280"
        },
        {
          title: "new york city wallpaper",
          img:
            "https://images.pexels.com/photos/466685/pexels-photo-466685.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280"
        },
        {
          title: "road",
          img:
            "https://images.pexels.com/photos/1955134/pexels-photo-1955134.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280"
        },
        {
          title: "sun",
          img:
            "https://images.pexels.com/photos/3768/sky-sunny-clouds-cloudy.jpg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280"
        },
        {
          title: "forest",
          img:
            "https://images.pexels.com/photos/4827/nature-forest-trees-fog.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280"
        },
        {
          title: "couple",
          img:
            "https://images.pexels.com/photos/427547/pexels-photo-427547.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280"
        },
        {
          title: "makeup",
          img:
            "https://images.pexels.com/photos/457701/pexels-photo-457701.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280"
        },
        {
          title: "vacation",
          img:
            "https://images.pexels.com/photos/386009/pexels-photo-386009.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280"
        },
        {
          title: "rain",
          img:
            "https://images.pexels.com/photos/166360/pexels-photo-166360.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280"
        },
        {
          title: "security",
          img:
            "https://images.pexels.com/photos/207574/pexels-photo-207574.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280"
        },
        {
          title: "city",
          img:
            "https://images.pexels.com/photos/373912/pexels-photo-373912.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280"
        },
        {
          title: "healthy",
          img:
            "https://images.pexels.com/photos/1092730/pexels-photo-1092730.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280"
        },
        {
          title: "new york",
          img:
            "https://images.pexels.com/photos/290386/pexels-photo-290386.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280"
        },
        {
          title: "internet",
          img:
            "https://images.pexels.com/photos/442150/pexels-photo-442150.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280"
        },
        {
          title: "sea",
          img:
            "https://images.pexels.com/photos/1001682/pexels-photo-1001682.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280"
        },
        {
          title: "plane",
          img:
            "https://images.pexels.com/photos/358319/pexels-photo-358319.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280"
        },
        {
          title: "fitness",
          img:
            "https://images.pexels.com/photos/841131/pexels-photo-841131.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280"
        },
        {
          title: "water",
          img:
            "https://images.pexels.com/photos/113734/pexels-photo-113734.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280"
        },
        {
          title: "desert",
          img:
            "https://images.pexels.com/photos/1001435/pexels-photo-1001435.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280"
        },
        {
          title: "yoga",
          img:
            "https://images.pexels.com/photos/1051838/pexels-photo-1051838.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280"
        },
        {
          title: "building",
          img:
            "https://images.pexels.com/photos/162539/architecture-building-amsterdam-blue-sky-162539.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280"
        },
        {
          title: "nature",
          img:
            "https://images.pexels.com/photos/814499/pexels-photo-814499.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280"
        },
        {
          title: "travel",
          img:
            "https://images.pexels.com/photos/346885/pexels-photo-346885.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280"
        },
        {
          title: "gift",
          img:
            "https://images.pexels.com/photos/360624/pexels-photo-360624.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280"
        },
        {
          title: "money",
          img:
            "https://images.pexels.com/photos/259027/pexels-photo-259027.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280"
        },
        {
          title: "river",
          img:
            "https://images.pexels.com/photos/219972/pexels-photo-219972.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280"
        },
        {
          title: "businessman",
          img:
            "https://images.pexels.com/photos/716411/pexels-photo-716411.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280"
        },
        {
          title: "music",
          img:
            "https://images.pexels.com/photos/164821/pexels-photo-164821.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280"
        },
        {
          title: "vintage",
          img:
            "https://images.pexels.com/photos/247929/pexels-photo-247929.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280"
        },
        {
          title: "beach",
          img:
            "https://images.pexels.com/photos/994605/pexels-photo-994605.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280"
        },
        {
          title: "love",
          img:
            "https://images.pexels.com/photos/704748/pexels-photo-704748.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280"
        },
        {
          title: "abstract",
          img:
            "https://images.pexels.com/photos/2065820/pexels-photo-2065820.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280"
        },
        {
          title: "sport",
          img:
            "https://images.pexels.com/photos/618612/pexels-photo-618612.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280"
        },
        {
          title: "laptop",
          img:
            "https://images.pexels.com/photos/1006293/pexels-photo-1006293.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280"
        },
        {
          title: "baby",
          img:
            "https://images.pexels.com/photos/64242/baby-hand-dad-64242.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280"
        },
        {
          title: "stars",
          img:
            "https://images.pexels.com/photos/102539/nature-milky-way-night-stars-102539.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280"
        },
        {
          title: "man",
          img:
            "https://images.pexels.com/photos/736716/pexels-photo-736716.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280"
        },
        {
          title: "woman",
          img:
            "https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280"
        },
        {
          title: "fashion",
          img:
            "https://images.pexels.com/photos/291762/pexels-photo-291762.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280"
        },
        {
          title: "fire",
          img:
            "https://images.pexels.com/photos/110867/pexels-photo-110867.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280"
        },
        {
          title: "dance",
          img:
            "https://images.pexels.com/photos/270789/pexels-photo-270789.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280"
        },
        {
          title: "family",
          img:
            "https://images.pexels.com/photos/1128318/pexels-photo-1128318.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280"
        },
        {
          title: "job",
          img:
            "https://images.pexels.com/photos/580613/pexels-photo-580613.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280"
        },
        {
          title: "people",
          img:
            "https://images.pexels.com/photos/1687093/pexels-photo-1687093.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280"
        },
        {
          title: "car",
          img:
            "https://images.pexels.com/photos/1149137/pexels-photo-1149137.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280"
        },
        {
          title: "training",
          img:
            "https://images.pexels.com/photos/414029/pexels-photo-414029.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280"
        },
        {
          title: "gym",
          img:
            "https://images.pexels.com/photos/260352/pexels-photo-260352.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280"
        },
        {
          title: "animals",
          img:
            "https://images.pexels.com/photos/814898/pexels-photo-814898.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280"
        }
      ]
    };
  },
  methods: {
    searchFn(val) {
      this.$router.push({
        name: "searchpage",
        params: { search: val }
      });
    }
  },
  mounted() {
    this.$emit("search", this.search);
  }
};
</script>

<style lang="scss" scoped>
.categories {
  padding: 4rem 1rem 1rem 1rem;

  &__container {
    display: flex;
    flex-wrap: wrap;
  }

  &__card {
    position: relative;
    min-width: 250px;
    height: 150px;
    flex: 1;
    margin: 0.5rem;
    background-size: cover;
    border-radius: 20px;
    cursor: pointer;
    overflow: hidden;

    &:hover {
      &::before {
        content: "";
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.6);
        border-radius: 20px;
      }
    }

    span {
      position: absolute;
      color: #ffffff;
      font-weight: bold;
      display: block;
      margin: 1rem;
      text-transform: capitalize;
    }
  }
}
</style>
