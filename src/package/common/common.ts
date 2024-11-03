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
    COMPONENT = 'component',
    CONTAINER = 'container',
}

// 动态组件参数
export interface DynamicComponent {
    data: NodeType
}

// 布局ID
export enum LayoutId {
    FLVNODE = 'flvnode',
    FLHNODE = 'flhnode',
}