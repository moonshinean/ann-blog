<template>
    <div class="header">
        <div class="header-content">
            <div class="title">
                <img src="../assets/ic_header.jpg" alt="">
                <h2>Moonshine</h2>
            </div>
            <div class="tab">
                <ul>
                    <li v-for="(item, index) in TabList" :key="index" @click="changeRouter(item.url, index)"
                        :class="{'active': item.active}">
                        <i :class="['iconfont', `${item.iclass}`]"></i>
                        <span>{{ item.lable }}</span>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import {defineComponent, ref, toRaw, onMounted, watch} from 'vue';
import router from "@/router";
import { useRoute } from 'vue-router'
export default defineComponent({
    name: 'header',
    setup() {
        const TabList = ref([
            {iclass: 'icon-shouye', lable: '首页', url: '/home/main', active: true},
            {iclass: 'icon-biaoqian', lable: '标签', url: '/home/tag', active: false},
            {iclass: 'icon-leimupinleifenleileibie2', lable: '分类', url: '/home/sort', active: false},
            {iclass: 'icon-lajitong', lable: '历程', url: '/home/course', active: false},
            // {iclass: 'icon-liuyan', lable: '留言板', url: '/home/mboard', active: false},
            {iclass: 'icon-yonghu', lable: '关于', url: '/home/about', active: false},
        ])
        // 获取路由对象
        const route = useRoute()

        // tab切换路由
        const changeRouter = (url: string, index: number): void => {
            TabList.value.forEach(val => {
                val.active = false;
            })
            TabList.value[index].active = true;
            router.push(url);
        }
        // 页面显示时 激活路由
        onMounted(() => {
            setRouterListActive();
        })
        // 监听路由变化
        watch(() => route.path, () => {
            setRouterListActive();
        })

        //  设置路由激活状态
        const setRouterListActive = (): void => {
            const path = toRaw(route).path as any
            TabList.value.forEach(val => {
                val.active = val.url === path['value'];
            })
        }

        return {
            TabList,
            changeRouter
        }
    }
})
</script>

<style scoped lang="scss">
.header {
    padding: 0 18vw;
    height: 8vh;
    border-bottom: 1px solid #DADCE0;
    line-height: 8vh;
    position: fixed;
    background: rgba(255,255,255,0.8);
    width: 70%;
    .header-content {
        display: flex;
        justify-content: space-between;
        margin-right: 4vw;
        .title {
            display: flex;
            justify-content: center;
            align-items: center;

            img {
                width: 60px;
                border-radius: 50%;
                margin-right: 10px;
            }

            h2 {
                font-size: 20px;
                font-weight: 800;
            }
        }

        .tab {
            display: flex;
            align-items: center;

            ul {
                list-style: none;

                li {
                    float: left;
                    padding: 0 2vw;
                    font-weight: 600;
                }
            }
        }
    }

    .active {
        color: #409EFF;
    }
}
</style>
