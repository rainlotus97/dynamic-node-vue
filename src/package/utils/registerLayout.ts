/**
 * 注册布局
 */
export class RegisterLayout {
  private static layoutMap: Map<string, any> = new Map<string, any>();

  public static registerLayout(name: string, layout: any): void {
    RegisterLayout.layoutMap.set(name, layout);
  }

  public static getLayout(name: string): any {
    return RegisterLayout.layoutMap.get(name);
  }
  // 销毁时清除单例
  public static destroy(): void {
    RegisterLayout.layoutMap.clear();
  }
}