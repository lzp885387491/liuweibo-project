<template>
    <!-- 产品「说⼈话」 -->
    <div class="product">
        <h1 class="title center wrap">让复杂的数据「说人话」</h1>
        <div class="last-title center wrap">财务报表让您头疼了吗？来试试「早早财」吧！</div>
        <div class="last-title center wrap">通过AI驱动，结合财务和记账软件，助您更好决策！</div>
        <div class="title-btn center wrap">
            <div class="on-trial">免费试用</div>
        </div>

        <div class="video wrap">
            <video class="video1" autoplay loop webkit-playsinline playsinline muted
                poster="https://file.qingflow.com/official-page/index/v2022/section1-video-poster.png?x-oss-process=image/format,webp">
                <source type="video/mp4" src="@/assets/video/WeChat_20230423192825.mp4" />
            </video>
            <el-button @click="handleVideo" class="video-btn" size="medium" type="primary" round>观看视频</el-button>
        </div>

        <div class="scale wrap">
            <div class="scale-content"><span class="blue">500+ </span><span>优秀企业</span></div>
            <div class="scale-content"><span class="blue">10+ </span><span>行业</span></div>
            <div class="scale-content"><span>平均规模 </span><span class="blue">天使轮~A轮</span></div>
            <div class="scale-content"><span>市值总规模 </span><span class="blue">xxx亿</span></div>
        </div>

        <div class="grid-understand wrap">
            <div class="understand-item"><img src="@/assets/images/understand-1.png" alt=""></div>
            <div class="understand-item"><img src="@/assets/images/understand-2.png" alt=""></div>
            <div class="understand-item"><img src="@/assets/images/understand-3.png" alt=""></div>
            <div class="understand-item"><img src="@/assets/images/understand-4.png" alt=""></div>
            <div class="understand-item"><img src="@/assets/images/understand-5.png" alt=""></div>
            <div class="understand-item"><img src="@/assets/images/understand-6.png" alt=""></div>
            <div class="understand-item"><img src="@/assets/images/understand-7.png" alt=""></div>
            <div class="understand-item"><img src="@/assets/images/understand-8.png" alt=""></div>
            <div class="understand-item"><img src="@/assets/images/understand-9.png" alt=""></div>
        </div>

        <div class="title-btn center wrap">
            <div class="on-trial">了解用户故事</div>
        </div>

        <div class="AI-model wrap">
            <div class="AI-item">
                <h1>AI驱动 ,让你的时间更高效</h1>
                <div class="AI-model-detail">⼤数据 + 算法模型 + ⻛险控制模型 + ⼤模型问答</div>
                <div class="AI-model-grid">
                    <div class="model-grid-item">
                        <div>简洁易懂</div>
                        <div>理解企业家痛点，全⾯提⾼企业家对财务状
                            况的理解能⼒。</div>
                    </div>
                    <div class="model-grid-item">
                        <div>⻛险警报</div>
                        <div>财务⻛险控制，简单易⾏；专业⻛险管理，放⼼经营。
                            让财务管理更⾼效，让⻛险控制更可靠。</div>
                    </div>
                    <div class="model-grid-item">
                        <div>财务ChatGPT</div>
                        <div>⼤模型随时为您的问题提供专业解答，
                            不必等待你的会计提供报表和数据！</div>
                    </div>
                    <div class="model-grid-item">
                        <div>税务合作</div>
                        <div>通过平台，让多⽅努⼒展现在财务⾥。可根据企业
                            家的定制合作⽅。</div>
                    </div>
                </div>
            </div>
            <div class="AI-item"><img src="@/assets/images/details.png" alt=""></div>
        </div>


        <div class="AI-model wrap">
            <div class="AI-item"><img src="@/assets/images/details.png" alt=""></div>
            <div class="AI-item">
                <h1>好服务，不只是说说的</h1>
                <div class="AI-model-detail2">
                    <div>除了线上平台和智能化⼯具，</div>
                    <div>我们还拥有⼀⽀⼀流的注册会计师、税务顾问和⾸席财务官CFO团队，</div>
                    <div>积极管理创业公司的整个财务职能。</div>
                </div>
                <div class="clear"></div>
                <div class="AI-model-grid">
                    <div class="model-grid-item">
                        <div>简洁易懂</div>
                        <div>理解企业家痛点，全⾯提⾼企业家对财务状
                            况的理解能⼒。</div>
                    </div>
                    <div class="model-grid-item">
                        <div>⻛险警报</div>
                        <div>财务⻛险控制，简单易⾏；专业⻛险管理，放⼼经营。
                            让财务管理更⾼效，让⻛险控制更可靠。</div>
                    </div>
                    <div class="model-grid-item">
                        <div>财务ChatGPT</div>
                        <div>⼤模型随时为您的问题提供专业解答，
                            不必等待你的会计提供报表和数据！</div>
                    </div>
                    <div class="model-grid-item">
                        <div>税务合作</div>
                        <div>通过平台，让多⽅努⼒展现在财务⾥。可根据企业
                            家的定制合作⽅。</div>
                    </div>
                </div>
            </div>
        </div>


        <h1 class="title center wrap">创业者的信任，创新者的责任</h1>
        <div class="info-title center wrap">来⾃不同⾏业的优秀⼈才都给予我们最棒的反馈</div>

        <div class="user-info wrap">
            <img src="@/assets/images/user-info-1.png" alt="">
            <img src="@/assets/images/user-info-2.png" alt="">
            <img src="@/assets/images/user-info-3.png" alt="">
        </div>

        <div class="wrap">
            <div class="enterprise-flex">
                <div class="enterprise-certification">
                    <div class="title2 flex-center">
                        企业认证
                    </div>
                    <div class="item mt-20 flex-space-around">
                        <div class="item_box flex-x_a-j-center">
                            <div class="img_box flex-center">
                                <img src="@/assets/images/icon-huawei.png" alt="">
                            </div>
                            <div>华为云初创伙伴</div>
                        </div>
                        <div class="item_box flex-x_a-j-center">
                            <div class="img_box flex-center">
                                <img src="@/assets/images/icon-huawei.png" alt="">
                            </div>
                            <div>华为云初创伙伴</div>
                        </div>
                        <div class="item_box flex-x_a-j-center">
                            <div class="img_box flex-center">
                                <img src="@/assets/images/icon-huawei.png" alt="">
                            </div>
                            <div>华为云初创伙伴</div>
                        </div>
                        <div class="item_box flex-x_a-j-center">
                            <div class="img_box flex-center">
                                <img src="@/assets/images/icon-huawei.png" alt="">
                            </div>
                            <div>华为云初创伙伴</div>
                        </div>
                        <div class="item_box flex-x_a-j-center">
                            <div class="img_box flex-center">
                                <img src="@/assets/images/icon-huawei.png" alt="">
                            </div>
                            <div>华为云初创伙伴</div>
                        </div>
                    </div>

                    <div class="item mt-20 flex-space-around">
                        <div class="item_box flex-x_a-j-center">
                            <div class="img_box flex-center">
                                <img src="@/assets/images/icon-huawei.png" alt="">
                            </div>
                            <div>华为云初创伙伴</div>
                        </div>
                        <div class="item_box flex-x_a-j-center">
                            <div class="img_box flex-center">
                                <img src="@/assets/images/icon-huawei.png" alt="">
                            </div>
                            <div>华为云初创伙伴</div>
                        </div>
                        <div class="item_box flex-x_a-j-center">
                            <div class="img_box flex-center">
                                <img src="@/assets/images/icon-huawei.png" alt="">
                            </div>
                            <div>华为云初创伙伴</div>
                        </div>
                        <div class="item_box flex-x_a-j-center">
                            <div class="img_box flex-center">
                                <img src="@/assets/images/icon-huawei.png" alt="">
                            </div>
                            <div>华为云初创伙伴</div>
                        </div>
                        <div class="item_box flex-x_a-j-center">
                            <div class="img_box flex-center">
                                <img src="@/assets/images/icon-huawei.png" alt="">
                            </div>
                            <div>华为云初创伙伴</div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="apply_for flex-x_a-j-center">
                <div class="text">
                    让企业家专注自己的事业
                </div>
                <div class="text">
                    早早财专家即刻为您解答
                </div>
                <div class="btn">
                    申请免费试用
                </div>
            </div>

            <div class="footer">
                <div class="upper">
                    <div class="left">
                        <div class="item">
                            <div class="logo">
                                早早财
                                <!-- <img src="" alt=""> -->
                            </div>
                            <div class="third_party">
                                <img src="@/assets/images/icon-wx.png" alt="">
                                <img src="@/assets/images/icon-wx.png" alt="">
                                <img src="@/assets/images/icon-wx.png" alt="">
                                <img src="@/assets/images/icon-wx.png" alt="">
                            </div>
                        </div>
                        <div class="item">
                            <div class="title2">服务</div>
                            <div class="mt-20">
                                <div class="item_i">产品</div>
                                <div class="item_i">价格</div>
                                <div class="item_i">客户</div>
                                <div class="item_i">活动</div>
                            </div>
                        </div>
                        <div class="item">
                            <div>公司</div>
                            <div class="mt-20">
                                <div class="item_i">联系我们</div>
                                <div class="item_i">隐私政策</div>
                                <div class="item_i">服务条款</div>
                                <div class="item_i">数据安全</div>
                                <div class="item_i">免责条款</div>
                            </div>
                        </div>
                    </div>
                    <div class="right">
                        <div>联系我们</div>
                        <div class="right_box mt-20">
                            <div>
                                地址：北京市海淀区北京理工大学国防科技园1号楼606室
                            </div>
                            <div>
                                电话/微信：159-4002-3641
                            </div>
                            <div>
                                Email：contact@zaozaocai.com
                            </div>
                            <div>
                                添加客服微信：
                                <div class="ewm">
                                    <img src="@/assets/images/ewm.png" alt="">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="below flex-center">
                    <div>Copyright ©2023 HiBug 北京一平方科技有限公司</div>
                    <div>网站备案号：京ICP备2021031205号-7</div>
                    <div class="flex-center">
                        <img src="@/assets/images/icon-jc.png" alt="">
                        京公网安备 11010802040993号
                    </div>
                </div>
            </div>
        </div>
        <el-dialog class="video-box" v-model="dialogVisible" :visible.sync="dialogVisible"
            :before-close="handleClose">
            <video ref="video" id='myvideo2' controls autoplay loop webkit-playsinline playsinline>
                <source src="@/assets/video/WeChat_20230423192825.mp4">
            </video>
        </el-dialog>

    </div>
</template>

<script>
import videojs from 'video.js'
import 'video.js/dist/video-js.css'
export default {
    data() {
        return {
            dialogVisible: false,
            video: null
        }
    },

    mounted() {
    },
    methods: {
        hh() {
            var player = videojs('myvideo', {}, function () {
                console.log('初始化成功');
            })
            player.play();
        },
        handleVideo() {
            this.dialogVisible = true;
            if(this.$refs.video){
                this.$refs.video.currentTime = 0
                this.$refs.video.play()
            }
        },
        del() {
            this.dialogVisible = false;
            this.$refs.video.pause()
        },
        handleClose() {
            this.dialogVisible = false;
            this.$refs.video.pause()
        }

    },

}
</script>

<style lang="scss" scoped>
::v-deep .el-dialog__headerbtn{
    font-size: 50px;
    z-index: 99;
}
::v-deep .el-dialog__close{
    // color: transparent;
    background-color: #fff;
    border-radius: 50%;
}
::v-deep .el-dialog__header{
    padding: 0;
}
::v-deep .el-dialog__body{
    padding: 0;
}
::v-deep #myvideo2{
    border-radius: 30px;
}
::v-deep .el-dialog{
    background-color: transparent;
    box-shadow: none;
    width: 1300px;
    border-radius: 10px;
    border-radius: 25px;
}
.none {
    display: none;
}

#myvideo2 {
    width: 100%;
    height: 100%;
}

.video1 {
    border-radius: 20px;
}

.el-button {
    background-color: #fff !important;
    color: black !important;
    font-size: 20px;
    padding: 20px 40px;
}

.video {
    position: relative;
}

.video-btn {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border: none !important;
}

.video-btn:hover {
    background-color: #268bfb !important;
    color: #fff !important;
    border: none !important;
}

#myvideo {
    border-radius: 20px;
}

.center {
    text-align: center;
}

.title {
    font-size: 40px;
    padding: 40px 0;
}

.last-title {
    font-size: 25px;
}

.title-btn {
    display: flex;
    justify-content: center;
}

.on-trial {
    font-size: 25px;
    background: #373b44;
    color: white;
    padding: 15px 25px;
    border-radius: 10px;
    margin: 40px 0;
    cursor: pointer;
}

.video {
    height: 500px !important;
    display: flex;
    justify-content: center;
    margin-bottom: 40px;
}

.myvideo-dimensions {
    height: 500px !important;
    display: flex;
    justify-content: center;
    margin-bottom: 40px;
    overflow: hidden;
}

.scale {
    display: flex;
    justify-content: space-around;
    margin-top: 40px;
    margin-bottom: 40px;
    font-size: 30px;
}

.blue {
    color: #007aff;
}

.grid-understand {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    grid-template-areas:
        'left1 center1  right1'
        'left2 center2  right2'
        'left3 center3  right3'
    ;
}

.grid-understand img {
    cursor: pointer;
}

.understand-item:nth-of-type(1) {
    grid-area: left1;
    text-align: center;
}

.understand-item:nth-of-type(2) {
    grid-area: center1;
    text-align: center;
}

.understand-item:nth-of-type(3) {
    grid-area: right1;
    text-align: center;
}

.understand-item:nth-of-type(4) {
    grid-area: left2;
    text-align: center;
}

.understand-item:nth-of-type(5) {
    grid-area: center2;
    text-align: center;
}

.understand-item:nth-of-type(6) {
    grid-area: right2;
    text-align: center;
}

.understand-item:nth-of-type(7) {
    grid-area: left3;
    text-align: center;
}

.understand-item:nth-of-type(8) {
    grid-area: center3;
    text-align: center;
}

.understand-item:nth-of-type(9) {
    grid-area: right3;
    text-align: center;
}

.AI-model {
    margin-top: 50px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
    grid-template-areas:
        'left right'
    ;
    gap: 50px;
}

.AI-item h1 {
    font-size: 40px;
}

.AI-item:nth-of-type(1) {
    grid-area: left;
}

.AI-item:nth-of-type(2) {
    grid-area: right;
}

.AI-model-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    grid-template-areas:
        'left1 right1'
        'left2 right2'
    ;
    gap: 10px;
}

.model-grid-item:nth-of-type(1) {
    grid-area: left1;
}

.model-grid-item:nth-of-type(2) {
    grid-area: right1;
}

.model-grid-item:nth-of-type(3) {
    grid-area: left2;
}

.model-grid-item:nth-of-type(4) {
    grid-area: right2;
}

.AI-model-detail {
    margin: 100px 0;
}

.AI-model-detail2 {
    text-align: right;
    margin: 100px 0;
}

.model-grid-item div:nth-of-type(1) {
    font-size: 25px;
    margin: 20px 0;
}

.model-grid-item div:nth-of-type(2) {
    font-size: 14px;
}

.info-title {
    font-size: 30px;
    margin-top: 100px;
    margin-bottom: 100px;
}

.user-info {
    display: flex;
    justify-content: space-around;
}

.enterprise-certification {
    width: 90%;
    padding: 20px 0;
    box-sizing: border-box;
    border: 1px solid #000;
    background-color: #faf7fe;

    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;

    .title2 {
        width: 100%;
        height: 80px;
        font-size: 26px;
        font-weight: 600;
    }

    .item {
        width: 100%;

        .img_box {
            width: 80px;
            height: 60px;
            background-color: #fff;

            img {
                width: 50px;
                height: 50px;
            }

            margin-bottom: 10px;
        }


    }
}

.apply_for {
    width: 100%;
    padding: 24px 0;
    box-sizing: border-box;
    background-color: #e6e6e6;

    .text {
        font-family: 楷体;
        font-size: 18px;
        margin: 5px 0;
    }

    .text:nth-child(1) {
        font-size: 25px;
    }

    .btn {
        padding: 10px 20px;
        border-radius: 20px;
        margin-top: 20px;
        cursor: pointer;
        background-color: #dec745;
    }

    .btn:hover {
        background-color: #ecde8b;
    }
}

.footer {
    width: 100%;
    background-color: #fefefe;
    padding: 20px 0 0 0;
    box-sizing: border-box;

    .upper {
        height: 100% !important;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 20px;
        box-sizing: border-box;
        border-bottom: 1px solid #ccc;

        .left {
            width: 60%;
            height: 100% !important;
            display: flex;
            align-items: top;
            justify-content: space-between;
            padding: 20px 0;
            box-sizing: border-box;

            .item:nth-child(1) {
                display: flex;
                flex-direction: column;
                justify-content: space-between;

                .logo {
                    font-size: 40px;
                }

                .third_party {
                    img {
                        width: 20px;
                        height: 20px;
                    }
                }
            }

            .item:nth-child(2) {
                .item_i {
                    padding: 4px 0;
                }
            }

            .item:nth-child(3) {
                .item_i {
                    padding: 4px 0;
                }
            }
        }

        .right {
            width: 20%;
            height: 100%;
            padding: 20px 0;
            box-sizing: border-box;

            .right_box {
                div {
                    padding: 4px 0;

                    .ewm {
                        width: 80px;
                        height: 80px;

                        img {
                            width: 80px;
                            height: 80px;
                        }
                    }
                }
            }
        }
    }

    .below {
        padding: 10px 0;

        div {
            margin: 0 10px;
        }
    }
}

.mt-20 {
    margin-top: 20px;
}

.mt-10 {
    margin-top: 10px;
}

.flex-space-around {
    display: flex;
    align-items: center;
    justify-content: space-around;
}

.flex-x_a-j-center {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

.flex-center {
    display: flex;
    align-items: center;
    justify-content: center;
}

.enterprise-flex {
    display: flex;
    justify-content: center;
    margin-top: 50px;
    margin-bottom: 50px;
}
</style>