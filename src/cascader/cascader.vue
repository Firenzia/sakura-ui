<template>
   <div class="s-cascader">
      <div class="content" @click="toggle" ref="content">
        {{content || '请点击选择'}}
      </div>
      <div class="popper" v-if="popoverVisible" ref="popper">
          <s-cascader-item
            :options="options"
            :selected="selected"
            @update:selected="onItemUpdateSelected">
          </s-cascader-item>
      </div>
   </div>
</template>
<script>
import CascaderItem from './cascader-item'
export default {
  name: 's-cascader',
  props: {
    options: {
      type: Array
    },
    selected: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  data () {
    return {
      popoverVisible: false
    }
  },
  created () {
  },
  mounted () {
    this.addDocumentListener()
  },
  computed: {
    content () {
      return this.selected.map(x => x.label).join('/')
    }
  },
  methods: {
    addDocumentListener () {
      let docClickHandler = (e) => {
        if ((this.$refs.popper && this.$refs.popper.contains(e.target)) || this.$refs.content.contains(e.target)) {
          return false
        }
        this.popoverVisible = false
      }
      window.document.addEventListener('click', docClickHandler)
    },
    onItemUpdateSelected (newSelected) {
      this.$emit('update:selected', newSelected)
    },
    toggle () {
      this.popoverVisible = !this.popoverVisible
    }

  },
  components: {
    's-cascader-item': CascaderItem
  }
}
</script>
<style lang="scss" scoped>
  .s-cascader{
    display: inline-block;
    position: relative;
  }
  .content{
    width: 200px;
    height: 24px;
    border: 1px solid #ccc;
    display: inline-flex;
    justify-content: flex-start;
    align-items: center;
    padding:.6em;
  }
  .popper{
    display: inline-flex;
    flex-direction: row;
    position: absolute;
    z-index: 100
  }
</style>
