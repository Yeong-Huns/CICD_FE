<template>
    <div style="width: 1024px; margin: 0 auto; border: 1px solid navy">
        <header-compo></header-compo>
        <middle-compo></middle-compo>
        <footer-compo></footer-compo>
    </div>
</template>

<script>
import HeaderCompo from '@/components/HeaderCompo.vue';
import MiddleCompo from '@/components/MiddleCompo.vue';
import FooterCompo from '@/components/FooterCompo.vue';

export default {
    name: 'App',
    components: {
        FooterCompo,
        MiddleCompo,
        HeaderCompo,
    },
};
</script>

<style>
@import 'assets/base.css';
div {
    color: darkslategray;
}
</style>
