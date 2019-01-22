<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Routing</h1>
                <main-header></main-header>
                <hr>
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<script>
    import mainHeader from './components/header'

    export default {
        components: {
            mainHeader
        }
    }
</script>

<style>
</style>
