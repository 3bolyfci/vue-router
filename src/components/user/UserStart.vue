<template>
    <div>
        <p>Please select a User</p>
        <hr>
        <ul class="list-group">
            <li class="list-group-item" style="cursor: pointer" @click="userDetail(1)">User 1</li>
        </ul>
    </div>
</template>
<script>
   export default {
       methods:{
           userDetail(val){
              // console.log(val);
               this.$router.push(`user/${val}`)
           }
       }
   }
</script>