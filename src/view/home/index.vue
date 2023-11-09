<template>
    <div class=''>
        <el-button @click="loginOUt">退出登录</el-button>
        <el-button @click="info">获取个人信息</el-button>
        <div>
            头像:
            <img :src="infoData.portrait" alt="" srcset="">
            <span  class="iconfont icon-yanxixiugai"></span>

            用户名:
            {{ infoData.name }}
            手机号:
            {{ infoData.phone }}
            性别:
            {{ infoData.gender? infoData.gender :"--"}}
            <span  class="iconfont icon-yanxixiugai"></span>


        </div>
    </div>
</template>

<script>
import { clearLocal } from '@/utils/auth'
import { info } from '@/api/login'
export default {
    name: 'HomeVue',
    data() {
        return {
            infoData: {},
        }
    },
    created(){
        this.info()
    },
    methods: {
        loginOUt() {
            clearLocal()
            this.$router.push('/login')
        },
        info() {
            info().then((data) => {
                if (data.code == 200) {
                    this.infoData = data.data.userInfo
                }
            })
        }
    },
}

</script>
<style></style>
