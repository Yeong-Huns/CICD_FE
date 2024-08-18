<template>
    <div>
        <h3 v-if="user_info.check">MyPage</h3>
        <h3 v-if="!user_info.check">로그인 필요 <router-link to="login">로그인</router-link></h3>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    computed: {
        ...mapGetters({
            user_info: 'user/getUserInfo',
        }),
    },
};
</script>

<style scoped></style>
