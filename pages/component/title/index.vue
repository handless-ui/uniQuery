<template>
    <view>
        <ui-title ref="mytitle" title="标题" backicon="/static/images/backBlack.png"></ui-title>
        <scroll-view scroll-y="true" :style="{
            height: scrollHeight + 'px',
        }">
            <view class="container">
                <view class="title"> 《茅屋为秋风所破歌》 </view>
                <view class="author">作者：【唐】杜甫</view>
                <view class="content">
                    八月秋高风怒号，卷我屋上三重茅。茅飞渡江洒江郊，高者挂罥长林梢，下者飘转沉塘坳。
                </view>
                <view class="content">
                    南村群童欺我老无力，忍能对面为盗贼。公然抱茅入竹去，唇焦口燥呼不得，归来倚杖自叹息。
                </view>
                <view class="content">
                    俄顷风定云墨色，秋天漠漠向昏黑。布衾多年冷似铁，娇儿恶卧踏里裂。床头屋漏无干处，雨脚如麻未断绝。自经丧乱少睡眠，长夜沾湿何由彻！
                </view>
                <view class="content">
                    安得广厦千万间，大庇天下寒士俱欢颜！风雨不动安如山。呜呼！何时眼前突兀见此屋，吾庐独破受冻死亦足！
                </view>
                <image class="img" src="/static/images/thatched-cottage.jpeg"></image>
            </view>
        </scroll-view>
    </view>
</template>
  
<script>
export default {
    data() {
        return {
            scrollHeight: 0,
        };
    },
    onReady() {
        this.scrollHeight = this.$refs.mytitle.getHeight();
    },
};
</script>
  
<style lang="scss" scoped>
.container {
    padding: 50rpx;
    box-sizing: border-box;

    .title {
        text-align: center;
        font-weight: 800;
        font-size: 40rpx;
    }

    .author {
        font-size: 24rpx;
        padding: 40rpx 0;
        text-align: center;
        font-weight: 800;
    }

    .content {
        margin-top: 10rpx;
        text-indent: 2em;
        line-height: 1.8em;
        font-size: 32rpx;
    }

    .img {
        margin-top: 30px;
        width: 650rpx;
        height: 406.25rpx;
    }
}
</style>