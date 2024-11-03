# DynamicNodeVue

# 一、简介

这是一款以数据驱动页面展示的框架，虽然整体还很简陋，但是正在一点点丰富中！其中数据为常见的类似dom树结构，布局整体涉及layout布局结构和card卡片结构两种，以layout承载card的方式展现页面。



# 二、数据介绍

```typescript
import { StyleValue } from "vue";

// 节点类型
export interface NodeType {
    type: LayoutType;
    id: LayoutId | string;
    data: any;
    style: StyleValue;
    children: NodeType[];
}

// 布局类型
export enum LayoutType {
    // card类型
    COMPONENT = 'component',
    // layout类型
    CONTAINER = 'container',
}

// 动态组件参数
export interface DynamicComponent {
    data: NodeType
}

// 布局ID
export enum LayoutId {
    // 竖型结构
    FLVNODE = 'flvnode',
    // 橫型结构
    FLHNODE = 'flhnode',
}
```

**ps:一定是布局样式包裹着卡片的方式，否则就是倒反天罡！**

# 三、运行项目

```typescript
// 进入文件
cd dynamic-node-vue
// 安装依赖
pnpm install
// 运行
pnpm run dev
// 打包(默认package文件,打项目文件则只需注释vite.config.ts中lib对象及outDir属性即可)
pnpm run build
```

最新的组件地址:[dynamic-node-vue](https://www.npmjs.com/package/dynamic-node-vue?activeTab=readme)



# 四、引用组件

```typescript
// 装包
npm i dynamic-node-vue

// main.ts全局注册
import { DynamicNodeVue } from 'dynamic-node-vue';
const app = createApp(App);
// 注册组件
app.use(DynamicNodeVue);
// 注册你的本地卡片
import DynamicOperation from 'dynamic-node-vue';
DynamicOperation.registeCard('卡片名', 组件); // 卡片名自定义，但是数据里使用的id和这个值需要相同

// 页面里使用
<dynamic-node :data="data" /> // data的类型即:DynamicComponent
```

# 五、附录数据

```json
{
  "type": "container",
  "id": "flvnode",
  "data":{},
  "children": [
    {
      "type": "container",
      "id": "flvnode",
      "children": [
        {
          "type": "component",
          "id": "TitleCard",
          "data": {
            "title": "Component 3"
          },
          "style": {
            "flex": "1"
          }
        },
        {
          "type": "component",
          "id": "ImageCard",
          "data": {
            "src":"https://p3-passport.byteacctimg.com/img/user-avatar/49c8f53ae251055fa531abf6356fb553~80x80.awebp"
          }
        }
      ],
      "data":{}
    },
    {
      "type": "container",
      "id": "flhnode",
      "children": [
        {
          "type": "component",
          "id": "TitleCard",
          "data": {
            "title": "Component 5"
          },
          "style": {
            "flex": "1"
          }
        },
        {
          "type": "component",
          "id": "TitleCard",
          "data": {
            "title": "Component 6"
          },
          "style": {
            "flex": "1",
            "margin": "0 0 0 10px"
          }
        }
      ],
      "data":{}
    },
    {
      "type": "container",
      "id": "flhnode",
      "children": [
        {
          "type": "component",
          "id": "TitleCard",
          "data": {
            "title": "Component 3"
          },
          "style": {
            "flex": "1"
          }
        },
        {
          "type": "component",
          "id": "TitleCard",
          "data": {
            "title": "Component 4"
          },
          "style": {
            "flex": "1",
            "margin": "0 0 0 10px"
          }
        }
      ],
      "data":{}
    }
  ]
}
```



