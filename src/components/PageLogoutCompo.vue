<template>
    <div>
        <h3>로그아웃</h3>
        <button type="button" @click="doLogout">로그아웃</button>
    </div>
</template>
<script>
import axios from 'axios';
import { mapActions } from 'vuex';

const checkLogout = async (userid, password) => {
    const res = await axios.get('http://localhost:3003/logout', {
        params: { username: userid, password: password },
        withCredentials: true,
    });

    const data = res.data;
    if (data.code === '200') {
        return true;
    } else {
        return false;
    }
};

export default {
    methods: {
        doLogout() {
            checkLogout().then((res) => {
                if (res) {
                    alert('로그아웃 되었습니다.');
                    this.logout({ user_id: null, check: false });
                    this.$router.push('/');
                } else {
                    alert('로그아웃 실패.');
                }
            });
        },
        ...mapActions({ logout: 'user/logout' }),
    },
};
</script>

<style scoped></style>
