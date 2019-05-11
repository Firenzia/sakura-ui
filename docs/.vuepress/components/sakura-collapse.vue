<template>
  <div>
    <h3>基础用法</h3>
     <sakura-card>
        <s-collapse v-model="selected1" style="width:600px">
          <s-collapse-item title="香蕉 Banana" name="1">
            <div>香蕉是淀粉质丰富的有益水果。</div>
          </s-collapse-item>
          <s-collapse-item title="菠萝 Pineapple" name="2">
            <div>菠萝果实品质优良，营养丰富，含有大量的果糖，葡萄糖，维生素B、C，磷，柠檬酸和蛋白酶等物质。</div>
          </s-collapse-item>
          <s-collapse-item title="葡萄 Grape" name="3">
            <div>成熟的浆果中葡萄含糖量高达10%-30%，以葡萄糖为主。</div>
          </s-collapse-item>
          <s-collapse-item title="柠檬 Lemon" name="4">
            <div>柠檬富含维生素C、糖类、钙、磷、铁、维生素B1、维生素B2、烟酸、奎宁酸、柠檬酸、苹果酸、橙皮苷、柚皮苷、香豆精、高量钾元素和低量钠元素等，对人体十分有益。</div>
          </s-collapse-item>
        </s-collapse>
       <p>你当前选择了&nbsp;<span class="highlight">{{selected1}}</span></p>

      <template v-slot:code><pre v-highlightjs><code class="vue">{{code1}}</code></pre></template>
    </sakura-card>

    

    <h3 style="margin-top:60px">手风琴效果</h3>
     <sakura-card>
      <s-collapse v-model="selected2" accordion style="width:600px;">
        <s-collapse-item title="丰城秀吉" name="1">
          <div>（1537年3月17日-1598年9月18日）日本战国时代、安土桃山时代大名、天下人，著名政治家，继室町幕府之后，首次以“天下人”的称号统一日本的战国三杰之一。本是足轻（下级步兵），后因侍奉织田信长而崛起。</div>
        </s-collapse-item>
        <s-collapse-item title="德川家康" name="2">
          <div>（1543年1月31日-1616年6月1日）江户幕府第一代征夷大将军；丰臣秀吉死后，在关原合战中率领东军战胜西军，确定了霸权。庆长八年（1603年）受封为征夷大将军，在江户开创幕府。</div>
        </s-collapse-item>
        <s-collapse-item title="织田信长" name="3">
          <div>（1534年6月23日-1582年6月21日）织田信长于永禄十一年（1568年）至天正十年（1582年）间推翻了名义上管治日本逾200年的室町幕府，并使从应仁之乱起持续百年以上的战国乱世步向终结。织田信长被日本民众评选为“2014年日本人最喜爱的历史人物第一名”。</div>
        </s-collapse-item>
      </s-collapse>
      <p >你当前选择了&nbsp;<span class="highlight">{{selected2}}</span></p>

       <template v-slot:code><pre v-highlightjs><code class="vue">{{code2}}</code></pre></template>
    </sakura-card>

  </div>
</template>
<script>
import Collapse from "../../../src/collapse/collapse";
import CollapseItem from "../../../src/collapse/collapse-item";
export default {
  data() {
    return {
      selected1: ["1", "2"],
      selected2: "3",
      code1: `
        <s-collapse v-model="selected1" style="width:600px">
          <s-collapse-item title="香蕉 Banana" name="1">
            <div>香蕉是淀粉质丰富的有益水果。</div>
          </s-collapse-item>
          <s-collapse-item title="菠萝 Pineapple" name="2">
            <div>菠萝果实品质优良，营养丰富，含有大量的果糖，葡萄糖，维生素B、C，磷，柠檬酸和蛋白酶等物质。</div>
          </s-collapse-item>
          <s-collapse-item title="葡萄 Grape" name="3">
            <div>成熟的浆果中葡萄含糖量高达10%-30%，以葡萄糖为主。</div>
          </s-collapse-item>
          <s-collapse-item title="柠檬 Lemon" name="4">
            <div>柠檬富含维生素C、糖类、钙、磷、铁、维生素B1、维生素B2、烟酸、奎宁酸、柠檬酸、苹果酸、橙皮苷、柚皮苷、香豆精、高量钾元素和低量钠元素等，对人体十分有益。</div>
          </s-collapse-item>
        </s-collapse>
       `.replace(/^ {8}/gm, "").trim(),
      code2: `
        <s-collapse v-model="selected2" accordion style="width:600px;">
          <s-collapse-item title="丰城秀吉" name="1">
            <div>（1537年3月17日-1598年9月18日）日本战国时代、安土桃山时代大名、天下人，著名政治家，继室町幕府之后，首次以“天下人”的称号统一日本的战国三杰之一。本是足轻（下级步兵），后因侍奉织田信长而崛起。</div>
          </s-collapse-item>
          <s-collapse-item title="德川家康" name="2">
            <div>（1543年1月31日-1616年6月1日）江户幕府第一代征夷大将军；丰臣秀吉死后，在关原合战中率领东军战胜西军，确定了霸权。庆长八年（1603年）受封为征夷大将军，在江户开创幕府。</div>
          </s-collapse-item>
          <s-collapse-item title="织田信长" name="3">
            <div>（1534年6月23日-1582年6月21日）织田信长于永禄十一年（1568年）至天正十年（1582年）间推翻了名义上管治日本逾200年的室町幕府，并使从应仁之乱起持续百年以上的战国乱世步向终结。织田信长被日本民众评选为“2014年日本人最喜爱的历史人物第一名”。</div>
          </s-collapse-item>
        </s-collapse>
       `.replace(/^ {8}/gm, "").trim()
    };
     
  },
  components: {
    "s-collapse": Collapse,
    "s-collapse-item": CollapseItem
  }
};
</script>
<style lang="scss" scoped>
 .highlight{
  color:#3ba0e9;
  font-weight: bold;
}
</style>