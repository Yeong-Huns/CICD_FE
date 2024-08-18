<template>
    <div>
        <h3>Login</h3>
        <form @submit="doLogin">
            id: <input type="text" required v-model="id" /><br />
            pwd: <input type="text" required v-model="pwd" /><br />
            <button type="submit">로그인</button>
        </form>
    </div>
</template>
<script>
import axios from 'axios';
import { mapGetters, mapActions } from 'vuex';
const checkUser = async (userid, password) => {
    const res = await axios.get('http://localhost:3003/login', {
        params: { username: userid, password: password },
        withCredentials: true,
    });

    const data = res.data[0];
    if (data.user_id === userid && data.password === password) {
        return true;
    } else return false;
};

export default {
    data() {
        return {
            id: '',
            pwd: '',
        };
    },
    computed: {
        ...mapGetters({ user_info: 'user/getUserInfo' }),
    },
    methods: {
        doLogin(e) {
            e.preventDefault(); // submit 취소
            console.log(`아이디 : ${this.id}, 비밀번호 : ${this.pwd}`);
            checkUser(this.id, this.pwd).then((result) => {
                if (result) {
                    alert('로그인 성공');
                    this.login({ user_id: this.id, check: true });
                    console.log(this.user_info);
                    this.$router.push('/');
                } else {
                    alert('로그인 실패');
                    this.loginfail({ user_id: null, check: false });
                }
            });
        },
        ...mapActions({ login: 'user/login', logout: 'user/logout', loginfail: 'user/loginfail' }),
    },
};
</script>

<style scoped></style>
