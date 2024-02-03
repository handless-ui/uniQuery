<template>
  <view class="privacy-container" v-if="show">
    <view class="view">
      <view class="title">
        {{ title }}
      </view>
      <view class="view">
        <view class="text">
          {{ desc1 }}
        </view>
        <view class="url" @click="openPrivacyContract()">
          {{ urlTitle }}
        </view>
        <view class="text">
          {{ desc2 }}
        </view>
      </view>
      <view class="btns">
        <button class="cancel" @click="handleDisagree()">不同意</button>
        <button
          class="submit"
          @agreeprivacyauthorization="handleAgree()"
          open-type="agreePrivacyAuthorization"
        >
          同意
        </button>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  name: "UQPrivacy",
  data() {
    return {
      title: "用户隐私保护提示",
      desc1: "感谢您使用本小程序，您使用本小程序前应当阅井同意",
      urlTitle: "《用户隐私保护指引》",
      desc2:
        "当您点击同意并开始时用产品服务时，即表示你已理解并同意该条款内容，该条款将对您产生法律约束力。如您拒绝，将无法正常使用本小程序。",
      show: false,
    };
  },
  mounted() {
    let _this = this;
    if (wx.getPrivacySetting) {
      wx.getPrivacySetting({
        success: (res) => {
          console.log(
            "是否需要授权：",
            res.needAuthorization,
            "隐私协议的名称为：",
            res.privacyContractName
          );
          if (res.needAuthorization) {
            _this.show = true;
          } else {
            this.$emit("agree");
          }
        },
        fail: () => {},
        complete: () => {},
      });
    } else {
      // 低版本基础库不支持 wx.getPrivacySetting 接口，隐私接口可以直接调用
      this.$emit("agree");
    }
  },
  methods: {
    openPrivacyContract() {
      wx.openPrivacyContract({
        success: (res) => {
          console.log("openPrivacyContract success");
        },
        fail: (res) => {
          console.error("openPrivacyContract fail", res);
        },
      });
    },
    handleDisagree() {
      this.$emit("disagree");
      this.show = false;
    },
    handleAgree() {
      this.$emit("agree");
      this.show = false;
    },
  },
};
</script>

<style lang="scss" scoped>
.privacy-container {
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  background-color: #727272cc;
  text-align: center;

  & > .view {
    text-align: left;
    padding: 50rpx;
    box-sizing: border-box;
    width: 500rpx;
    background-color: white;
    display: inline-block;
    position: relative;
    top: 50%;
    transform: translateY(-50%);
    border-radius: 20rpx;

    & > .title {
      display: block;
      font-weight: 800;
      font-size: 30rpx;
    }

    & > .view {
      font-size: 28rpx;

      & > .text {
        padding: 32rpx 0;
        line-height: 1.4;
      }

      & > .url {
        color: #2196f3;
      }
    }

    & > .btns {
      display: flex;
      justify-content: center;

      & > button {
        margin: 0 16rpx;
        width: 250rpx;
        font-size: 26rpx;
        white-space: nowrap;
        border-radius: 40px;

        &.cancel {
          background-color: #e2e2e2;
          color: black;
        }

        &.submit {
          background-color: #1892c2;
          color: white;
        }
      }
    }
  }
}
</style>