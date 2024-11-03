// 注册布局
import { LayoutId } from '../common/common'
import basenode from '../layout/basenode/basenode.vue'
import { RegisterCard } from './registerCard'
import { RegisterLayout } from './registerLayout'

export const mainRegister = (): void => {
    // 注册布局
    RegisterLayout.registerLayout(LayoutId.FLVNODE, basenode)
    RegisterLayout.registerLayout(LayoutId.FLHNODE, basenode)
}

export const destoryRegister = (): void => {
    RegisterLayout.destroy();
    RegisterCard.destroy();
}

