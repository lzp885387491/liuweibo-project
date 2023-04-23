<template>
    <div class="layout">
        <el-container>
            <el-header class="flex-center">
                <div class="header-box">
                    <div class="logo">早早财</div>
                    <div class="right flex-center">
                        <div class="nav flex-center">
                            <div class="item" :class="item.isShow ? 'active' : ''" v-for="item in navList" :key="item.id"
                                @click="nav(item)">
                                {{ item.text }}
                            </div>
                        </div>
                        <div class="userinfo flex-center">
                            <div class="text">登录</div>
                            <div class="describe">免费试用</div>
                        </div>
                    </div>
                </div>
            </el-header>
            <el-main>
                <router-view />
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
                    isShow: true,
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
            ]
        }
    },
    created() {
        this.active(this.navList[0]);
        this.$router.push(this.navList[0].link)
    },
    methods: {
        nav(item) {
            this.$router.push(item.link);
            this.active(item)
        },
        active(item) {
            this.navList.forEach(element => {
                element.isShow = false
            });
            item.isShow = true
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
                border: 1px solid #000;
                padding: 10px 20px;
                box-sizing: border-box;

                .text {
                    margin-right: 10px;
                    cursor: pointer;
                }

                // .describe{

                // }
            }
        }
    }
}

.el-main {
    height: calc(100vh - 61px);
    background-color: #fff;
    padding: 0;
}

.active {
    color: #2339de;
    box-sizing: border-box;
    border-bottom: 1px solid #2339de;
}

.flex-center {
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>