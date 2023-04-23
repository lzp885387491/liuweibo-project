<template>
    <div class="layout">
        <el-container>
            <el-header class="flex-center">
                <div class="header-box">
                    <div class="logo">早早财</div>
                    <div class="right flex-center">
                        <div class="nav flex-center" style="min-width: 300px;">
                            <div class="item" :class="item.isShow ? 'active' : ''" v-for="item in navList" :key="item.id"
                                @click="nav(item)">
                                {{ item.text }}
                            </div>
                        </div>
                        <div class="userinfo flex-center" style="min-width: 150px !important;">
                            <div class="text">登录</div>
                            <div class="describe">免费试用</div>
                        </div>
                    </div>
                </div>
            </el-header>

            <el-main>
                <router-view />
                <div class="advertisement">
                    <div class="item">
                        <img src="@/assets/images/icon-vx.png" alt="">
                        <div>微信客服</div>
                    </div>
                    <div class="border-button"></div>
                    <div class="item">
                        <img src="@/assets/images/icon-phone.png" alt="">
                        <div>电话咨询</div>
                    </div>
                    <div class="border-button"></div>
                    <div class="item">
                        <img src="@/assets/images/icon-us.png" alt="">
                        <div>联系我们</div>
                    </div>
                </div>
            </el-main>
        </el-container>
    </div>
</template>

<script>
export default {
    data() {
        return {
            navList: [
                {
                    id: 1,
                    text: '产品',
                    link: 'product',
                    isShow: false,
                },
                {
                    id: 2,
                    text: '价格',
                    link: 'price',
                    isShow: false,
                },
                {
                    id: 3,
                    text: '客户',
                    link: 'customer',
                    isShow: false,
                },
                {
                    id: 4,
                    text: '活动',
                    link: 'activity',
                    isShow: false,
                },
            ],
        }
    },
    created() {
        let name = this.$route.name.slice(0, -4);
        this.navList.forEach(element => {
            if (element.link == name) {
                element.isShow = !element.isShow;
            }
        });
    },
    methods: {
        nav(item) {
            this.$router.push(item.link);
            this.active(item)
        },
        active(item) {
            this.navList.forEach(element => {
                element.isShow = false;
                if (element == item) {
                    element.isShow = !element.isShow;
                }
            });
        },
        abc() {
            console.log(document.querySelector('body').scrollTop)
        }
    },
}
</script>

<style scoped lang="scss">
.el-header {
    height: 60px !important;
    padding: 0;
    border-bottom: 1px solid #000;

    .header-box {
        width: 100vw;
        height: 60px;
        padding: 0 30px;
        box-sizing: border-box;
        display: flex;
        align-items: center;
        justify-content: space-between;

        .logo {
            margin-left: 50px;
        }

        .right {
            width: 50%;
            display: flex;
            align-items: center;
            justify-content: space-between;

            .nav {
                .item {
                    padding: 0 10px;
                    box-sizing: border-box;
                    margin: 0 10px;
                    cursor: pointer;
                }

                .item:hover {
                    color: #2339de;
                }
            }

            .userinfo {
                padding: 10px 20px;
                box-sizing: border-box;
                background-color: #e6e6e6;

                .text {
                    margin-right: 10px;
                    cursor: pointer;
                }
            }
        }
    }
}

.el-main {
    height: calc(100vh - 61px);
    background-color: #fff;
    padding: 0;

    .advertisement {
        padding: 10px 5px;
        box-sizing: border-box;
        background-color: #fff;
        box-shadow: 0 0 5px #000;
        position: fixed;
        bottom: 300px;
        right: 0px;

        .item {
            font-size: 12px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            margin: 20px 0;
            cursor: pointer;

            img {
                width: 26px;
                height: 26px;
            }
        }

        .item:hover {
            color: #2339de;
        }

        .border-button {
            width: 100%;
            height: 1px;
            background-color: #8a8989;
        }
    }
}

::-webkit-scrollbar {
    display: none;
}

.active {
    color: #2339de;
    box-sizing: border-box;
}

.flex-center {
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>