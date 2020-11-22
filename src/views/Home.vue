<template>
<div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" :details="details" :variants="variants" />
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
            details: [
                '50% cotton',
                '30% wool',
                '20% polyester',
            ],
            variants: [{
                    id: 2212,
                    color: 'green',
                    image: '../assets/images/socks_green.jpg',
                    quanlity: 50,
                    active: false
                },
                {
                    id: 2213,
                    color: 'blue',
                    image: '../assets/images/socks_blue.jpg',
                    quanlity: 0,
                    active: true
                },
            ],
        }
    },
};
</script>
