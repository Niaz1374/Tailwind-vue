<template>
  <div id="home">
    <!-- Cards -->
    <div class="home flex justify-center flex-col items-center">
      <img
        class="w-full h-80 object-cover hidden md:block"
        src="https://source.unsplash.com/random"
      />
      <div class="container mx-5">
        <div
          class="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-12 md:-mt-36 justify-items-center"
        >
          <div
            class="flex flex-col items-center bg-white p-10 rounded-lg shadow-xl w-4/5 mt-10 relative"
            v-for="(item, index) in array"
            :key="index"
          >
            <img
              class="lg:h-64 lg:w-64 sm:h-64 sm:w-64 md:h-60 md:w-60 rounded-full object-cover opacity-100 hover:opacity-30 relative"
              :src="item.img"
            />
            <p class="text-gray-500 font-bold absolute top-1/3 opacity-0 ">
              {{ item.test }}
            </p>
            <h5 class="text-2xl font-semibold">{{ item.title }}</h5>
            <p class="text-center mt-4">{{ item.text }}</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Slider -->
    <Slider />
  </div>
</template>

<script>
import Slider from "./Slider.vue";
export default {
  components: { Slider },
  name: "Home",
  data() {
    return {
      array: [
        {
          img: "https://source.unsplash.com/random",
          test: "Some text for test",
          title: "Some img info",
          text:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum ipsam deleniti consectetur pariatur, eius at eos repudiandae saepecorporis omnis asperiores dolore ratione recusandae in doloribus,itaque sunt. Alias, totam.",
        },
        {
          img: "https://source.unsplash.com/random",
          test: "Some text for test",
          title: "Some img info",
          text:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum ipsam deleniti consectetur pariatur, eius at eos repudiandae saepecorporis omnis asperiores dolore ratione recusandae in doloribus,itaque sunt. Alias, totam.",
        },
        {
          img: "https://source.unsplash.com/random",
          test: "Some text for test",
          title: "Some img info",
          text:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum ipsam deleniti consectetur pariatur, eius at eos repudiandae saepecorporis omnis asperiores dolore ratione recusandae in doloribus,itaque sunt. Alias, totam.",
        },
        {
          img: "https://source.unsplash.com/random",
          test: "Some text for test",
          title: "Some img info",
          text:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum ipsam deleniti consectetur pariatur, eius at eos repudiandae saepecorporis omnis asperiores dolore ratione recusandae in doloribus,itaque sunt. Alias, totam.",
        },
        {
          img: "https://source.unsplash.com/random",
          test: "Some text for test",
          title: "Some img info",
          text:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum ipsam deleniti consectetur pariatur, eius at eos repudiandae saepecorporis omnis asperiores dolore ratione recusandae in doloribus,itaque sunt. Alias, totam.",
        },
        {
          img: "https://source.unsplash.com/random",
          test: "Some text for test",
          title: "Some img info",
          text:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum ipsam deleniti consectetur pariatur, eius at eos repudiandae saepecorporis omnis asperiores dolore ratione recusandae in doloribus,itaque sunt. Alias, totam.",
        },
      ],
    };
  },
};
</script>

<style>
nav {
  display: flex;
  justify-content: flex-end;
  padding: 20px 0;
}
/*slider switch css */
.theme-switch-wrapper {
  display: flex;
  align-items: center;
}
.theme-switch-wrapper em {
  margin-left: 10px;
  font-size: 1rem;
}
.theme-switch {
  display: inline-block;
  height: 34px;
  position: relative;
  width: 60px;
}
.theme-switch input {
  display: none;
}

.slider {
  background-color: #ccc;
  bottom: 0;
  cursor: pointer;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  transition: 0.4s;
}
.slider:before {
  background-color: #f9fafb;
  bottom: 4px;
  content: "";
  height: 26px;
  left: 4px;
  position: absolute;
  transition: 0.4s;
  width: 26px;
}
input:checked + .slider {
  background-color: #1f2937;
}
input:checked + .slider:before {
  transform: translateX(26px);
}
.slider.round {
  border-radius: 34px;
}
.slider.round:before {
  border-radius: 50%;
}
</style>
