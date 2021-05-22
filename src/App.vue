<template>
  <div
    id="nav"
    class="bg-gray-100 w-100 h-full dark:dark:bg-gray-900 dark:text-white"
  >
    <Theme />
    <router-view />
  </div>
</template>

<script>
import Theme from "./views/Theme";
import { mapGetters } from "vuex";

export default {
  name: "App",

  components: {
    Theme,
  },

  beforeMount() {
    this.$store.dispatch("initTheme");
  },

  computed: {
    ...mapGetters({ theme: "getTheme" }),
  },

  watch: {
    theme(newTheme) {
      newTheme === "light"
        ? document.querySelector("html").classList.remove("dark")
        : document.querySelector("html").classList.add("dark");
    },
  },
  data() {
    return {
      //
    };
  },
};
</script>
