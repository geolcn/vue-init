<template>
    <div class="hello">
        <h1>{{ msg }}</h1>
        <h3 @click="handleClick">Ecosystem</h3>
    </div>
</template>

<script>
export default {
    name: "HelloWorld",
    props: {
        msg: String
    },
    methods: {
        handleClick() {
            this.$axios
                .get("http://localhost:3000/api/course/list")
                .then(() => {
                    window.console.log(123);
                });
        }
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
    margin: 40px 0 0;
}
ul {
    list-style-type: none;
    padding: 0;
}
li {
    display: inline-block;
    margin: 0 10px;
}
a {
    color: #42b983;
}
</style>
