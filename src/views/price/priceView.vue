<template>
    <div class="main wrap">
        <div class="title">
            <h1>价格 & 方案</h1>
            <p>我们有专业的方案供您选择</p>
        </div>
        <div class="middle">
            <div class="selector">
                <el-switch style="display: block" v-model="value" active-color="#5417f4" inactive-color="red"
                    active-text="每年" inactive-text="每月">
                </el-switch>
            </div>
            <div class="content">
                <div class="item" v-for="item,i in list" :key="i">
                    <div class="header">
                        <h1 class="header-title">{{ item.headerTitle }}</h1>
                        <span>{{ item.introduce }}</span>
                    </div>
                    <div class="price">
                        <div class="no-free" v-if="item.isFree == 1">限时免费</div>
                        <span>
                            <span class="x" v-if="item.isprice == 1">{{ item.price }}</span>
                            <span class="unit" v-if="item.isprice == 1">元/人</span>
                            <span class="unit" v-if="item.isprice == 0">{{ item.price }}</span>
                        </span>
                        <button class="person-btn">{{ item.buttonText }}</button>
                    </div>
                    <div class="service">
                        <h2 class="service-title">包含服务</h2>
                        <div class="service-other" v-if="item.serviceOther != ''">{{ item.serviceOther }}</div>
                        <div class="list" v-for="el,index in item.service" :key="index">
                            <div class="list-item">
                                <div class="list-item_icon">
                                    ✔
                                </div>
                                <span class="ml-10">{{ el.text }}</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="line"></div>
            </div>
        </div>
        <div class="guarantee">
            <div class="guarantee-header">
                <h1 class="guarantee-title">多重保障，为您保驾护航</h1>
                <span>「码捕快」确保您的数据高枕无欧</span>
            </div>
            <div class="guarantee-list mt-50">
                <div class="guarantee-list_item" v-for="item,i in guaranteeList" :key="i">
                    <div class="icon">{{ item.icon }}</div>
                    <h2 class="item-title">{{ item.title }}</h2>
                    <span class="">{{ item.introduce }}</span>
                </div>
            </div>
        </div>
        <div class="problem">
            <div class="problem-title">常见问题</div>
            <div class="problem-list">
                <div class="question" v-for="item,i in problemList" :key="i">
                    <span class="desc">{{ item.text }}</span>
                    <span class="show-more">显示更多</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            value: true,
            list:[
                {
                    id:1,
                    headerTitle:'个人版',
                    introduce:'注册即用，按需购买，运维专业保障，每周更新',
                    isprice:1,
                    price:'588',
                    isFree:1,//是否限免
                    buttonText:'免费试用',
                    serviceOther:'',
                    service:[
                        {
                            text:'个人代码分析'
                        },{
                            text:'代码理解',
                        },{
                            text:'CodeReview工具',
                        },{
                            text:'Git集成',
                        },{
                            text:'行业横向分析',
                        },{
                            text:'提交代码历史',
                        },{
                            text:'项目审查',
                        },{
                            text:'代码复用度检测甘特图',
                        },{
                            text:'需求管理'
                        }
                    ]
                },
                {
                    id:2,
                    headerTitle:'企业版',
                    introduce:'5人起购，专业放心',
                    isprice:1,
                    price:'2388',
                    isFree:1,//是否限免
                    buttonText:'免费试用',
                    serviceOther:'个人版所有功能',
                    service:[
                        {
                            text:'项目优化建议'
                        },{
                            text:'DevOps分析报告',
                        },{
                            text:'绩效设置',
                        },{
                            text:'业务分析',
                        },{
                            text:'协同账号',
                        },{
                            text:'项目流程分析',
                        },{
                            text:'代码库备份',
                        },{
                            text:'分支策略',
                        },{
                            text:'安全漏洞分析'
                        },{
                            text:'安全管理'
                        },{
                            text:'团队管理'
                        }
                    ]
                },
                {
                    id:3,
                    headerTitle:'私有部署版',
                    introduce:'企业自身私有服务器部署，网络隔离，数据自控',
                    isprice:0,
                    price:'咨询报价',
                    isFree:0,//是否限免
                    buttonText:'联系我们',
                    serviceOther:'企业版所有功能',
                    service:[
                        {
                            text:'私有云部署'
                        },{
                            text:'专属技术支持',
                        },{
                            text:'专属迭代部署',
                        }
                    ]
                }
            ],
            guaranteeList:[
                {
                    id:1,
                    icon:'图片',
                    title:'稳定性保障',
                    introduce:'混合云备份，免运维、全托管；资源弹性伸缩的云灾备方案'
                },{
                    id:2,
                    icon:'图片',
                    title:'数据安全保障',
                    introduce:'数据安全中心和安全成熟度框架（DSMM）数据安全'
                },{
                    id:3,
                    icon:'图片',
                    title:'用户安全保障',
                    introduce:'多重身份验证，管理权限设置，平台身份管理（RAM）'
                }
            ],
            problemList:[
                {
                    id:1,
                    text:'我的订阅费是多少？'
                },{
                    id:2,
                    text:'我能否免费试用HiBug？'
                },{
                    id:3,
                    text:'我可以要求私有化部署吗？'
                },{
                    id:4,
                    text:'我可以取消订阅吗？'
                },{
                    id:5,
                    text:'我如何确定我的需求？'
                }
            ]
        }
    },
    created() {

    },
    methods: {

    },
    mounted() {

    }
}
</script>

<style lang="scss" scoped>
.mt-50{
    margin-top: 50px;
}
.ml-10{
    margin-left: 10px;
}
.x{
    text-decoration: line-through 4px;
}
.title {
    height: 207px;
    padding: 45px 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    color: #000;
    box-sizing: border-box;

    h1 {
        font-size: 24px;
        line-height: 26px;
        text-align: center;
        letter-spacing: 0;
    }

    p {
        font-size: 36px;
        line-height: 54px;
        text-align: center;
        letter-spacing: -.38px;
    }
}

.middle {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 50px 60px 76px;
    align-items: center;
    .selector {
        height: 100px;
    }
    .content{
        width: 100%;
        border-radius: 15px;
        background: #fff;
        border: 1px solid #d8d8d8;
        display: flex;
        position: relative;
        overflow: hidden;
        .item{
            width: 400px;
            height: 100%;
            .header{
                height: 194px;
                padding: 66px 0 40px;
                background: #f8f6fb;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: space-between;
                box-sizing: border-box;
                h1{
                    font-size: 30px;
                    font-weight: 500;
                    line-height: 36px;
                    text-align: center;
                    letter-spacing: 0;
                    color: #333;
                }
                span{
                    font-size: 14px;
                    font-weight: 350;
                    line-height: 36px;
                    text-align: center;
                    letter-spacing: 0;
                    color: #999;
                }
            }
            .price{
                height: 217px;
                padding: 40px 0 56px;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: space-between;
                position: relative;
                box-sizing: border-box;
                .no-free{
                    width: 82px;
                    border-radius: 3px;
                    opacity: 1;
                    color: #fff;
                    background: #fd4c5c;
                    line-height: 34px;
                    text-align: center;
                    letter-spacing: 0;
                    position: absolute;
                    right: 81px;
                    top: 27px;
                }
                span{
                    font-size: 36px;
                    font-weight: 700;
                    line-height: 55px;
                    text-align: center;
                    letter-spacing: 0;
                    color: #333;
                    .unit{
                        font-size: 20px;
                        font-weight: 700;
                        line-height: 55px;
                        text-align: center;
                        letter-spacing: 0;
                        color: #333;
                        margin-left: 5px;
                    }
                }
                .person-btn{
                    width: 120px;
                    height: 42px;
                    border-radius: 5px;
                    border: 1px solid #5417f4;
                    font-size: 16px;
                    font-weight: 700;
                    text-align: center;
                    letter-spacing: 0;
                    color: #5417f4;
                    background-color: transparent;
                }
                .person-btn:hover{
                    cursor: pointer;
                    background: linear-gradient(102deg,#8056f4 1%,#5417f4 93%);
                    color: #fff;
                }
            }
            .service{
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: space-between;
                padding: 58px 0 49px;
                .service-title{
                    font-size: 24px;
                    font-weight: 500;
                    line-height: 36px;
                    text-align: center;
                    letter-spacing: 0;
                    color: #666;
                    margin-bottom: 22px;
                }
                .service-other{
                    width: 169px;
                    height: 50px;
                    border-radius: 6px;
                    background: #f8f6fb;
                    font-size: 20px;
                    font-weight: 500;
                    line-height: 50px;
                    letter-spacing: 0;
                    color: #5417f4;
                    margin-bottom: 25px;
                    text-align: center;
                }
                .list-item{
                    font-size: 20px;
                    font-weight: 350;
                    letter-spacing: 0;
                    color: #666;
                    margin-bottom: 30px;
                    display: flex;
                    .list-item_icon{
                        color: #5417f4;
                    }
                }
            }
        }
        .line{
            position: absolute;
            top: 420px;
            left: 50%;
            transform: translateX(-50%);
            width: 1100px;
            height: 0;
            border: 1px solid #d8d8d8;
            opacity: .5;
        }
    }
    .item:hover{
        box-shadow: 0 7px 20px 0 rgba(39,0,142,.1);
        z-index: 10;
    }
}
.guarantee{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 76px 0 58px;
    box-sizing: border-box;
    .guarantee-header{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        .guarantee-title{
            font-size: 40px;
            font-weight: 500;
            line-height: 48px;
            text-align: center;
            letter-spacing: 0;
            color: #333;
            margin-bottom: 27px;
        }
    }
    .guarantee-list{
        width: 100%;
        display: flex;
        justify-content: space-between;
        .guarantee-list_item{
            width: 360px;
            height: 246px;
            padding: 30px;
            background: #f8f6fb;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-between;
            box-sizing: border-box;
            .icon{
                display: inline-block;
                width: 1em;
                height: 1em;
                color: inherit;
                font-style: normal;
                vertical-align: -2px;
                outline: none;
                stroke: currentColor;
            }
            .item-title{
                font-size: 24px;
                font-weight: 500;
                line-height: 29px;
                text-align: center;
                letter-spacing: 0;
                color: #333;
            }
            span{
                font-size: 14px;
                font-weight: 350;
                line-height: 24px;
                text-align: justify;
                letter-spacing: 0;
                color: #666;
            }
        }
    }
}
.problem{
    padding: 50px 89px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    box-sizing: border-box;
    .problem-title{
        font-size: 26px;
        font-weight: 500;
        line-height: 29px;
        text-align: center;
        letter-spacing: 0;
        color: #333;
        margin-bottom: 50px;
    }
    .problem-list{
        width: 100%;
        .question{
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
            border-top: 1px solid hsla(0,0%,84%,.841);
            height: 100px;
            .desc{
                font-size: 20px;
                font-weight: 500;
                line-height: 29px;
                text-align: center;
                letter-spacing: 0;
                color: #333;
                max-width: 80%;
                overflow: hidden;
                text-overflow: ellipsis;
                word-break: break-all;
                display: -webkit-box;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 1;
            }
            .show-more{
                font-size: 20px;
                color: #0052cc;
                cursor: pointer;
            }
        }
    }
}
</style>