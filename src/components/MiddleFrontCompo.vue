<template>
    <div class="middle">
        <menu-compo> </menu-compo>
        <div class="content">
            <!--<h3>content</h3>-->
            <router-view></router-view>
        </div>
    </div>
</template>
<script>
import MenuCompo from '@/components/MenuCompo.vue';

export default {
    components: { MenuCompo },
};
</script>

<style scoped></style>
