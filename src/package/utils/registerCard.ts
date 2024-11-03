/**
 * 注册卡片
 */
export class RegisterCard {
  private static cardMap: Map<string, any> = new Map<string, any>();

  public static registerCard(name: string, component: any): void {
    RegisterCard.cardMap.set(name, component);
  }

  public static getCard(name: string): any {
    return RegisterCard.cardMap.get(name);
  }

  // 销毁时清除单例
  public static destroy(): void {
    RegisterCard.cardMap.clear();
  }
}