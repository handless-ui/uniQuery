<script setup lang="ts">
import { onLaunch, onShow, onHide } from '@dcloudio/uni-app';

onLaunch(() => {
  console.log('App Launch');
});
onShow(() => {
  console.log('App Show');
});
onHide(() => {
  console.log('App Hide');
});
</script>

<style lang="scss">
/*每个页面公共css */
// 类别标题
.example-title {
  padding: 20rpx 0 10rpx 10rpx;
  font-weight: 800;
  font-size: 30rpx;
}

// 按钮输入
.example-btnInput {
  display: flex;
  align-items: center;

  input {
    flex-grow: 1;
    border-bottom: 1px solid gray;
    margin: 0 20rpx;
    height: 50rpx;
    padding: 4rpx 10rpx;
    font-size: 26rpx;
  }

  button {
    flex-shrink: 0;
    margin-right: 20rpx;
    height: 50rpx;
    line-height: 50rpx;
    font-size: 12px;
    display: inline-block;
    padding: 0 20rpx;
  }
}

// 底部按钮
.example-btnbottom {
  margin: 20rpx auto;
  width: fit-content;
  font-size: 12px;
}

// 无序列表
.example-ul {
  padding: 30rpx;

  &>.example-li {
    margin-top: 20rpx;
    font-size: 12px;

    &::before {
      content: " # ";
      font-weight: 800;
      color: rgb(5, 21, 142);
    }
  }
}
</style>