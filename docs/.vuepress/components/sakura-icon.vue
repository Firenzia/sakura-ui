<template>
  <div>
    <sakura-card>
      <div class="ico-list">
        <div v-for="(item, index) in list" class="ico-wrapper">
          <s-icon :name="item" class="ico"></s-icon>
          <div class="ico-name">{{item}}</div>
        </div>
      </div>
      <template v-slot:code>
        <pre v-highlightjs><code class="vue">{{code}}</code></pre>
      </template>
    </sakura-card>
  </div>
</template>
<script>
import icon from "../../../src/icon/icon";
export default {
  data() {
    return {
      // selectList:['flower','star-fill','brush-fill','home','gift-fill','movie'],
      list: [
        "movie",
        "payment",
        "nickname",
        "call",
        "visible",
        "incoming_call",
        "previous",
        "selection",
        "protect",
        "conversation",
        "privac_open",
        "favoriteslist",
        "home",
        "musiclist",
        "cancel",
        "edit",

        "ice-cream",
        "apple",
        "fire",
        "heart",
        "linechart",
        "down-circle",
        "star",
        "discovery",
        "alipay",
        "warning",
        "remind",
        "label",
        "clock",
        "camera",
        "loading",
        "setting",
        "audio",
        "right",
        "left",
        "download",
        "thumbup",
        "tick",
        "false",
        "clover",
        "shamrock",
        "flower",
        "icecream",
        "food",
        "QQ-circle-fill",
        "phone-fill",
        "wechat-fill",
        "apple-fill",
        "star-fill",
        "gift-fill",
        "brush-fill",
        "gps-fill",
        "error",
        "warn-fill"
      ],
      code: `
         <s-icon name="shamrock" color="orange"></s-icon>
      `
        .replace(/^\s*/gm, "")
        .trim()
    };
  },
  components: {
    "s-icon": icon
  }
};
</script>
<style lang="scss" scoped>
.ico-list {
  display: flex;
  flex-wrap: wrap;
}
.ico-wrapper {
  width: 140px;
  height: 120px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid #ccc;
  &:hover {
    color: #b74d55;
    border: 1px solid #b74d55;
    box-shadow: 0 0 3px 0 #b74d55;
  }
  .ico {
    width: 2.4em !important;
    height: 2.4em !important;
  }
  .ico-name {
    margin-top: 20px;
  }
}
</style>

