<template>
  <nav></nav>
  <router-view />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>

<!--<script>
    import axios from 'axios';

    export default {
        data() {
            return {
                users: []
            }
        },
        created() {

            axios.get('/api/weatherforecast', {
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Content-Type': 'application/json; charset = utf-8'
                }
            })
                .then(response => {
                    console.log(response.data);
                })
                .catch(e => {
                    console.log('error : ', e)
                })


        }
    }
</script>-->
