<template>
  <div>
    <h3>基础用法</h3>
     <sakura-card>
       <s-tab v-model="selected">
        <s-tab-head>
          <s-tab-item name="x" disabled>源氏</s-tab-item>
          <s-tab-item name="bee">
             桐壶更衣
            <s-icon name="heart" slot="icon" color="#BF827E"></s-icon>
          </s-tab-item>
          <s-tab-item name="flower">
             若紫
            <s-icon name="flower" color="plum" slot="icon"></s-icon>
          </s-tab-item>
          <s-tab-item name="grass">
            葵姬
            <s-icon name="shamrock" color="#B74D55" slot="icon"></s-icon>
          </s-tab-item>
          <s-tab-item name="herb">
            夕颜
            <s-icon name="clover" color="#E6A4A5" slot="icon"></s-icon>
          </s-tab-item>
          <s-tab-item name="tree">
            明石姬
             <s-icon name="star-fill" color="#E3CBA8" slot="icon"></s-icon>
          </s-tab-item>
        </s-tab-head>
        <s-tab-body>
          <s-tab-pane name="x"></s-tab-pane>
          <s-tab-pane name="bee">紫式部小说《源氏物语》中的角色。她是书中主角光源氏的母亲，也是桐壶帝的宠妃。她的父亲是按察大纳言，母亲则是拥有皇族血统的女子。</s-tab-pane>
          <s-tab-pane name="flower">也叫做紫儿、若紫，日本国宝级古典名著《源氏物语》中的女主角，是一位美丽温顺的女子，兵部卿宫的私生女，藤壶中宫的侄女。光源氏第一任正妻葵之上过世后，在实质上是光源氏的正室，后来在六条院里是春之町的女主人。</s-tab-pane>
          <s-tab-pane name="grass">其夫为源氏，其子夕雾。葵端庄温柔，款款大方，相貌出众，气质高贵。产后因遭阴物袭击，当场身亡。</s-tab-pane>
          <s-tab-pane name="herb">夕颜的名字是源自于以她为主角的夕颜一帖，文中对此女以夕颜花来形容，因此得名。夕颜是源氏的情人之一，也是头中将的情人，是玉鬘的母亲。</s-tab-pane>
          <s-tab-pane name="tree">日本古典名著《源氏物语》中的人物，是光源氏的侧室，明石中宫的生母。</s-tab-pane>
        </s-tab-body>
      </s-tab>

       <template v-slot:code><pre v-highlightjs><code class="vue">{{code1}}</code></pre></template>
     </sakura-card>

    <h3>垂直标签</h3>
    <sakura-card>
    <p>当前选中的标签是： <span class="highlight">{{selected1}}</span></p>
      <s-tab tab-position="left" v-model="selected1">
        <s-tab-head>
          <s-tab-item name="紫式部">
            紫式部
          </s-tab-item>
          <s-tab-item name="清少纳言">清少纳言</s-tab-item>
          <s-tab-item name="和泉式部">和泉式部</s-tab-item>
        </s-tab-head>
        <s-tab-body>
          <s-tab-pane name="紫式部">
            <p>紫式部（约973年—？），日本平安时代女作家，中古三十六歌仙之一。本姓藤原，字不详，式部是她在宫廷服务期间的称呼，因其兄曾任式部丞，当时宫中女官多以父兄之官衔为名，故称为藤式部。后来她写成《源氏物语》，书中女主人公紫姬为世人传诵，遂又称作紫式部。一般认为其名不可考，亦有人认为其本名为藤原香子或藤原则子。 主要作品有长篇小说《源氏物语》，作品描写人物心理细腻，文字典雅，情节曲折，被认为是世界最早的长篇小说，对往后日本文学之影响极大。另著《紫式部日记》，成书于公元1010年秋。</p>
            <p>她出身于贵族文人世家，幼时从父学习汉学，通晓音律和佛典。父兄都擅长汉诗、和歌。1004年4月，紫式部丧夫寡居，同年秋开始创作《源氏物语》。36岁那年冬天，紫式部受召入宫侍奉一条天皇的中宫藤原彰子。“</p>
          </s-tab-pane>
          <s-tab-pane name="清少纳言">
            <p>清少纳言（约966~约1025），清是姓，少纳言是她在宫中的官职。日本平安时期著名的女作家，中古三十六歌仙之一，与紫式部、和泉式部并称平安时期的三大才女，曾任一条天皇皇后藤原定子的女官。
她的随笔作品《枕草子》执笔于在宫中供职的时候，成书于离开宫廷之后。</p>
            <p>作品记叙她在宫廷里的所见所闻，作者出身于中层贵族，这部作品虽然反映了社会等级之间的不平等和对时代的忧虑，但是着力渲染的还是对皇后定子的赞美，对日本贵族社会的肯定。
在《枕草子》之前，日本已经出现了物语文学和日记文学，清少纳言的《枕草子》开拓了一个新的领域，她的随笔为日本散文奠定了基础。</p>
          </s-tab-pane>
          <s-tab-pane name="和泉式部">
            <p>和泉式部，（987～1048年），日本平安时期的女诗人。她不仅是天才的诗人，而且是个热情奔放的绝代佳人。她的一生是颇多恋爱纠葛并为之所苦的一生。她的诗歌直抒胸怀，构思奇特，充满了新颖别致的魅力。她位列中古三十六歌仙。她与《枕草子》作者清少纳言、《源氏物语》作者紫式部并称平安时代的“王朝文学三才媛”。</p>
          </s-tab-pane>
        </s-tab-body>
      </s-tab>
      <template v-slot:code><pre v-highlightjs><code class="vue">{{code2}}</code></pre></template>
     </sakura-card>
    
  </div>
</template>
<script>
import Tab from "../../../src/tab/tab";
import TabHead from "../../../src/tab/tab-head";
import TabItem from "../../../src/tab/tab-item";
import TabBody from "../../../src/tab/tab-body";
import TabPane from "../../../src/tab/tab-pane";
import Icon from "../../../src/icon/icon";
export default {
  data() {
    return {
      selected1:'紫式部',
      selected:'herb',
      code1: `
        <s-tab v-model="selected">
          <s-tab-head>
            <s-tab-item name="x" disabled>源氏</s-tab-item>
            <s-tab-item name="bee">
              桐壶更衣
              <s-icon name="heart" slot="icon" color="#BF827E"></s-icon>
            </s-tab-item>
            <s-tab-item name="flower">
              若紫
              <s-icon name="flower" color="plum" slot="icon"></s-icon>
            </s-tab-item>
            <s-tab-item name="grass">
              葵姬
              <s-icon name="shamrock" color="#B74D55" slot="icon"></s-icon>
            </s-tab-item>
            <s-tab-item name="herb">
              夕颜
              <s-icon name="clover" color="#E6A4A5" slot="icon"></s-icon>
            </s-tab-item>
            <s-tab-item name="tree">
              明石姬
              <s-icon name="star-fill" color="#E3CBA8" slot="icon"></s-icon>
            </s-tab-item>
          </s-tab-head>
          <s-tab-body>
            <s-tab-pane name="x"></s-tab-pane>
            <s-tab-pane name="bee">紫式部小说《源氏物语》中的角色。她是书中主角光源氏的母亲，也是桐壶帝的宠妃。她的父亲是按察大纳言，母亲则是拥有皇族血统的女子。</s-tab-pane>
            <s-tab-pane name="flower">也叫做紫儿、若紫，日本国宝级古典名著《源氏物语》中的女主角，是一位美丽温顺的女子，兵部卿宫的私生女，藤壶中宫的侄女。光源氏第一任正妻葵之上过世后，在实质上是光源氏的正室，后来在六条院里是春之町的女主人。</s-tab-pane>
            <s-tab-pane name="grass">其夫为源氏，其子夕雾。葵端庄温柔，款款大方，相貌出众，气质高贵。产后因遭阴物袭击，当场身亡。</s-tab-pane>
            <s-tab-pane name="herb">夕颜的名字是源自于以她为主角的夕颜一帖，文中对此女以夕颜花来形容，因此得名。夕颜是源氏的情人之一，也是头中将的情人，是玉鬘的母亲。</s-tab-pane>
            <s-tab-pane name="tree">日本古典名著《源氏物语》中的人物，是光源氏的侧室，明石中宫的生母。</s-tab-pane>
          </s-tab-body>
        </s-tab>
        `.replace(/^ {8}/gm, "").trim(),
      code2: `
        <s-tab tab-position="left" v-model="selected1">
          <s-tab-head>
            <s-tab-item name="紫式部">
              紫式部
            </s-tab-item>
            <s-tab-item name="清少纳言">清少纳言</s-tab-item>
            <s-tab-item name="和泉式部">和泉式部</s-tab-item>
          </s-tab-head>
          <s-tab-body>
            <s-tab-pane name="紫式部">
              <p>紫式部（约973年—？），日本平安时代女作家，中古三十六歌仙之一。本姓藤原，字不详，式部是她在宫廷服务期间的称呼，因其兄曾任式部丞，当时宫中女官多以父兄之官衔为名，故称为藤式部。后来她写成《源氏物语》，书中女主人公紫姬为世人传诵，遂又称作紫式部。一般认为其名不可考，亦有人认为其本名为藤原香子或藤原则子。 主要作品有长篇小说《源氏物语》，作品描写人物心理细腻，文字典雅，情节曲折，被认为是世界最早的长篇小说，对往后日本文学之影响极大。另著《紫式部日记》，成书于公元1010年秋。</p>
              <p>她出身于贵族文人世家，幼时从父学习汉学，通晓音律和佛典。父兄都擅长汉诗、和歌。1004年4月，紫式部丧夫寡居，同年秋开始创作《源氏物语》。36岁那年冬天，紫式部受召入宫侍奉一条天皇的中宫藤原彰子。“</p>
            </s-tab-pane>
            <s-tab-pane name="清少纳言">
              <p>清少纳言（约966~约1025），清是姓，少纳言是她在宫中的官职。日本平安时期著名的女作家，中古三十六歌仙之一，与紫式部、和泉式部并称平安时期的三大才女，曾任一条天皇皇后藤原定子的女官。她的随笔作品《枕草子》执笔于在宫中供职的时候，成书于离开宫廷之后。</p>
              <p>作品记叙她在宫廷里的所见所闻，作者出身于中层贵族，这部作品虽然反映了社会等级之间的不平等和对时代的忧虑，但是着力渲染的还是对皇后定子的赞美，对日本贵族社会的肯定。在《枕草子》之前，日本已经出现了物语文学和日记文学，清少纳言的《枕草子》开拓了一个新的领域，她的随笔为日本散文奠定了基础。</p>
            </s-tab-pane>
            <s-tab-pane name="和泉式部">
              <p>和泉式部，（987～1048年），日本平安时期的女诗人。她不仅是天才的诗人，而且是个热情奔放的绝代佳人。她的一生是颇多恋爱纠葛并为之所苦的一生。她的诗歌直抒胸怀，构思奇特，充满了新颖别致的魅力。她位列中古三十六歌仙。她与《枕草子》作者清少纳言、《源氏物语》作者紫式部并称平安时代的“王朝文学三才媛”。</p>
            </s-tab-pane>
          </s-tab-body>
        </s-tab>
      `.replace(/^ {8}/gm, "").trim()
    };
  },
  components: {
    "s-tab": Tab,
    "s-tab-head": TabHead,
    "s-tab-item": TabItem,
    "s-tab-body": TabBody,
    "s-tab-pane": TabPane,
    "s-icon": Icon
  }
};
</script>
<style lang="scss" scoped>
.highlight{
  color:#3ba0e9;
  font-weight: bold;
}
</style>

