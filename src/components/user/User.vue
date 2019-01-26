<template>
    <div>
        <h1>The User Page</h1>
        <button @click="redirectToHomePage">home</button>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
      methods:{
          redirectToHomePage(){
              this.$router.push('/')
          }
      }
    }
</script>