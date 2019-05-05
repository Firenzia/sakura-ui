<template>
    <div class="item">
        <div class="header" @click="toggle">
          {{title}}
          <div class="ico" :class="icoClass">
            <s-icon name="right"></s-icon>
          </div>
        </div>
        <div class="body" v-show="visible">
           <slot></slot>
        </div>
    </div>
</template>
<script>
import Icon from '../icon/icon'
export default {
  name: 's-collapse-item',
  props: {
    title: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    }
  },
  components: {
    's-icon': Icon
  },
  inject: ['eventBus'],
  computed: {
    icoClass () {
      return { 'ico-active': this.visible }
    }
  },
  data () {
    return {
      visible: false
    }
  },

  mounted () {
    this.eventBus.$on('update:selected', (v) => {
      if (v.includes(this.name)) {
        this.visible = true
      } else {
        this.visible = false
      }
    })
  },
  methods: {
    addSelectItem () {
      this.eventBus.$emit('update:addSelected', this.name)
    },
    removeSelectItem () {
      this.eventBus.$emit('update:removeSelected', this.name)
    },
    showPane () {
      this.addSelectItem()
    },
    closePane () {
      this.removeSelectItem()
    },
    toggle () {
      this.visible = !this.visible
      if (this.visible) {
        this.showPane()
      } else {
        this.closePane()
      }
    }
  }
}
</script>
<style lang="scss" scoped>
    $border-color:#ccc;
   .item{
      .header{
        padding:.5em 0em;
        display: flex;
        justify-content: space-between;
      }
      .body{
        padding:.6em 0em;
      }
      border-bottom:1px solid $border-color;
      &:last-child{
        border-bottom: none;
      }
      .ico{
        margin-left:auto;
        transition: all .3s;
      }
      .ico-active{
        transform-origin:center;
        transform: rotate(90deg);
      }
   }
</style>
