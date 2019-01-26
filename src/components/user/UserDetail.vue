<template>
    <div>
        <h3>Some User Details</h3>
        <router-link tag="button" :to="'/user/'+ $route.params.id + '/edit'">edit User</router-link>
    </div>
</template>
<script>
    export default {

    }
</script>