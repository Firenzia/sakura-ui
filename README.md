# sakura-ui
[![Build Status](https://www.travis-ci.org/Firenzia/sakura-ui.svg?branch=master)](https://www.travis-ci.org/Firenzia/sakura-ui)

## Introduction
This is an UI framework based on Vue. The inspiration comes from Sakura :cherry_blossom:. 
I haven't finished it completely, so dont't use it in the production development. 
Hope u will like it~:heart: If u like it, please give me a :star:.
I wrote an article in **juejin.im** to record some details in building this framework.:point_right: [here](https://juejin.im/post/5cd8b450e51d453a580fa8e1) . 
U can give me some feedback. :smile:

## demo
:point_right: [https://firenzia.github.io/sakura-ui/](https://firenzia.github.io/sakura-ui/)</br>
![avatar](https://user-gold-cdn.xitu.io/2019/5/14/16ab1f527248e169?imageslim)
![avatar](https://user-gold-cdn.xitu.io/2019/5/14/16ab1f8f4d386114?imageslim)
![avatar](https://user-gold-cdn.xitu.io/2019/5/14/16ab3cec51014934?imageslim)



## Usage
1. Install package [heian-sakura-ui]
   ```sh
   npm i -D heian-sakura-ui
   ```
2. Get Started
   ```vue
    <template>
        <div id="app">
            <s-button type="primary">点击报名</s-button>
        </div>
    </template>

    <script>
    import {Button} from 'heian-sakura-ui'
    import 'heian-sakura-ui/dist/sakura.css'
    export default {
        name: 'app',
        components: {
            's-button':Button
        }
    }
    </script>

   ```
    
## Issue

## Changelog

## Contribution
