# sakura-ui
[![Build Status](https://www.travis-ci.org/Firenzia/sakura-ui.svg?branch=master)](https://www.travis-ci.org/Firenzia/sakura-ui)

## Introduction
This is an UI framework based on Vue. The inspiration comes from Sakura :cherry_blossom:.

## Usage
1. Install package [heian-sakura-ui]
   ```
   npm i heian-sakura-ui
   ```
2. Import Heian-Sakura-UI
   ```
   <template>
    <div>
        <s-button icon="setting">你好</s-button>
    </div>
    </template>

    <script>
    import {Button} from 'heian-sakura-ui'

    export default {
    name: 'HelloWorld',
    data () {
        return {
        }
    },
    components:{
        's-button':Button
    }
    }
    </script>
    <style>
    @import 'heian-sakura-ui/dist/index.css';
    </style>

   ```
3. Global CSS Setting 
    Besure to set global css property box-sizing
    ```
    *, *:before, *:after{box-sizing:border-box}
    ```
    Browser Supportment: IE 8+

    Besure to set global style
    ```
    html {
        --button-height: 32px;
        --font-size: 14px;
        --button-bg: white;
        --button-active-bg: #eee;
        --border-radius: 4px;
        --color: #333;
        --border-color: #999;
        --border-color-hover: #666;
    }
    ```
    Browser Supportment: IE 15+
## Issue

## Changelog

## Contribution