<template>
    <div>
        <h3>리스트</h3>
        <section>
            <table border="1">
                <thead>
                    <th style="width: 50px">번호</th>
                    <th>제목</th>
                    <th style="width: 100px">등록일</th>
                </thead>
                <tbody>
                    <tr v-for="(memo, idx) in memos" :key="idx">
                        <td>{{ memo.id }}</td>
                        <td>
                            <router-link :to="'memo/input/' + memo.id">{{ memo.title }}&nbsp;</router-link>
                        </td>
                        <td>{{ memo.createdAt.substring(0, 10) }}</td>
                    </tr>
                </tbody>
            </table>
            <button type="button" @click="$router.push('/memo/input')">등록</button>
            <div>검색: <input type="text" @input="searchMemo" /></div>
        </section>
    </div>
</template>
<script>
import axios from 'axios';

const loadMemo = async () => {
    const res = await axios.get('http://localhost:3003/memos', {
        params: {},
        withCredentials: true,
    });

    return res.data;
};

const searchMemo = async (keyword) => {
    const res = await axios.get('http://localhost:3003/memos', {
        params: { keyword: keyword },
        withCredentials: true,
    });

    return res.data;
};

export default {
    data() {
        return {
            memos: [],
        };
    },
    methods: {
        searchMemo: function (e) {
            const keyword = e.currentTarget.value;
            searchMemo(keyword).then((res) => (this.memos = res));
        },
    },
    mounted: function () {
        loadMemo().then((res) => (this.memos = res));
    },
};
</script>

<style scoped></style>
