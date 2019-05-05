<template>
    <div class="s-col" :class="colClasses" :style="colStyle">
        <slot></slot>
    </div>
</template>
<script>
const validatorFunc = function (val) {
  return Object.keys(val).every((item) => {
    return item === 'span' || item === 'offset'
  })
}
export default {
  name: 's-col',
  props: {
    span: {
      type: [Number, String],
      deault: 24
    },
    offset: {
      type: [Number, String],
      default: 0
    },
    xs: { validator: validatorFunc },
    sm: { validator: validatorFunc },
    md: { validator: validatorFunc },
    lg: { validator: validatorFunc },
    xl: { validator: validatorFunc }
  },
  methods: {
    createClass (deviceType, obj) {
      if (!obj) {
        return []
      }
      let { span, offset } = obj
      let arr = []
      span && arr.push(`col-${deviceType}${span}`)
      offset && arr.push(`offset-${deviceType}${offset}`)
      return arr
    }
  },
  computed: {
    // xs、sm、md、lg 和 xl
    colClasses () {
      let { span, offset, xs, sm, md, lg, xl } = this

      return [...this.createClass('', { span, offset }),
        ...this.createClass('xs-', xs),
        ...this.createClass('sm-', sm),
        ...this.createClass('md-', md),
        ...this.createClass('lg-', lg),
        ...this.createClass('xl-', xl)
      ]
    },
    colStyle () {
      let { gutter } = this
      return `padding: 0 ${gutter / 2}px`
    }
  },
  data () {
    return {
      gutter: 0
    }
  }
}
</script>
<style lang="scss" scoped>
    .s-col{
        height: 40px;
        padding: 0 10px;
    }
    @for $i from 1 through 24 {
       $col-prefix: col-;
      .#{$col-prefix}#{$i} {width: 1/24*$i*100%}
    }
    @for $i from 1 through 24 {
       $offset-prefix: offset-;
      .#{$offset-prefix}#{$i} {margin-left: 1/24*$i*100%}
    }

    // Extra small devices (portrait phones, less than 576px)
    @media (max-width: 575.98px) {
         $col-xs-prefix:col-xs-;
         $offset-xs-prefix:offset-xs-;
        @for $i from 1 through 24 {
        .#{$col-xs-prefix}#{$i} {width: 1/24*$i*100%}
        }

        @for $i from 1 through 24 {
        .#{$offset-xs-prefix}#{$i} {margin-left: 1/24*$i*100%}
        }
     }

    // Small devices (landscape phones, 576px and up)
    @media (min-width: 576px) and (max-width: 767.98px) {
         $col-sm-prefix:col-sm-;
         $offset-sm-prefix:offset-sm-;
        @for $i from 1 through 24 {
        .#{$col-sm-prefix}#{$i} {width: 1/24*$i*100%}
        }

        @for $i from 1 through 24 {
        .#{$offset-sm-prefix}#{$i} {margin-left: 1/24*$i*100%}
        }
    }

    // Medium devices (tablets, 768px and up)
    @media (min-width: 768px) and (max-width: 991.98px) {
         $col-md-prefix:col-md-;
         $offset-md-prefix:offset-md-;
        @for $i from 1 through 24 {
        .#{$col-md-prefix}#{$i} {width: 1/24*$i*100%}
        }

        @for $i from 1 through 24 {
        .#{$offset-md-prefix}#{$i} {margin-left: 1/24*$i*100%}
        }
    }

    // Large devices (desktops, 992px and up)
    @media (min-width: 992px) and (max-width: 1199.98px) {
         $col-lg-prefix:col-lg-;
         $offset-lg-prefix:offset-lg-;
        @for $i from 1 through 24 {
        .#{$col-lg-prefix}#{$i} {width: 1/24*$i*100%}
        }

        @for $i from 1 through 24 {
        .#{$offset-lg-prefix}#{$i} {margin-left: 1/24*$i*100%}
        }
     }

    // Extra large devices (large desktops, 1200px and up)
    @media (min-width: 1200px) {
         $col-xl-prefix:col-xl-;
         $offset-xl-prefix:offset-xl-;
        @for $i from 1 through 24 {
        .#{$col-xl-prefix}#{$i} {width: 1/24*$i*100%}
        }

        @for $i from 1 through 24 {
        .#{$offset-xl-prefix}#{$i} {margin-left: 1/24*$i*100%}
        }
     }
</style>
