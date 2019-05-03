import * as React from "react";

import {storiesOf} from "@storybook/react";
import {Button} from "./Button";
import {wInfo} from "../utils";
import {text, boolean} from "@storybook/addon-knobs/react";

(storiesOf("组件/按钮", module) as any).addWithJSX(
    "基本按钮",
  wInfo(`

  ### Notes

  按钮->基本按钮

  ### Usage
  ~~~js
  <Button label={'点击按钮'}
    disabled={false}
    onClick={() => alert('这是一个alert')}
    />
  ~~~`)
  (() => (
        <Button
            label={text("点击按钮", "点击value")}
            disabled={boolean("disabled", false)}
            onClick={() => alert("这是一个alert")}
        />
    ))
);
