import { destoryRegister, mainRegister } from './utils/mainRegister';
import DyanmicNode from './DynamicNode.vue';
import { RegisterCard } from './utils/registerCard';
import { App } from 'vue';
import { RegisterLayout } from './utils/registerLayout';
export * from './common/common';

const coms = [DyanmicNode];

export const DynamicNodeVue = (Vue: App<Element>) => {
    coms.forEach((com: any) => {
        Vue.component(com.__file.split('/').pop().split('.')[0], com);
    })
    mainRegister();
}

export default class DynamicOperation {
    /**
     * 销毁组件
     */
    public static destroy(): void {
        destoryRegister();
    }

    /**
     * 注册卡片
     * @param name 卡片名称
     * @param component 卡片组件
     * @returns void
     */
    public static registeCard(name: string, component: any): void {
        return RegisterCard.registerCard(name, component);
    }

    /**
     * 注册布局
     * 
     * @param name 布局名称
     * @param layout  布局组件
     * @returns void
     */
    public static registeLayout(name: string, layout: any): void {
        return RegisterLayout.registerLayout(name, layout);
    }
}



