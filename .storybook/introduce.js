import React from "react";

import { storiesOf } from "@storybook/react";
import { wInfo } from "./utils";

storiesOf("简介", module).addWithJSX(
  "简介",
  wInfo(`


    ### Notes

    这是一个简单的StoryBook+Typescript+Sass脚手架.

    ### Usage
    ~~~js
    <div>我是一个DIV</div>
    ~~~

    ### 使用左边的导航进行组件选择
  `)(() => <div> 这是一个简单的StoryBook+Typescript+Sass脚手架.</div>)
);
