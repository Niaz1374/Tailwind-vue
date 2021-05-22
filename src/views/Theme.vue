<template>
  <div id="theme">
    <!-- Switch mode -->
    <nav>
      <div class="theme-switch-wrapper">
        <label class="theme-switch" for="checkbox">
          <input
            type="checkbox"
            id="checkbox"
            v-model="theme"
            @click="toggleTheme"
          />
          <div class="slider round"></div>
        </label>
        <em>Enable Dark Mode!</em>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      theme: "light",
    };
  },
  methods: {
    toggleTheme() {},
  },
};
</script>
