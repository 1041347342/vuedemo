<template>
    <div id="home">
        <nav-bar class="home-nav-bar">
            <div slot="left">&lt;</div>
            <div slot="center"><input type="search" placeholder="衣服"></div>
            <div slot="right">登录</div>
        </nav-bar>
    </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar.vue"
export default {
    name:"Home",
    components:{
        NavBar
    }
}
</script>

<style scoped>
    #home{
        /* padding-top:40px; */
        height:100vh;
    }
    #home .home-nav-bar{
        background:#e43130;
        color:#fff;
        display: fixed;
        top:0;
        left:0;
        right:0;
        z-index:100;
    }
</style>