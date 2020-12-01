<template>
  <div class="home">    
    <HelloWorld msg="Welcome to Your Vue.js App" :details="details" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    HelloWorld
  },
  data() {
    return {
      details: ["50% cotton", "30% wool", "20% polyester"]
    };
  }
};
</script>
