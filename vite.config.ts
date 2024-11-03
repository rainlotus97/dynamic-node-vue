import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import dts from 'vite-plugin-dts';
import { visualizer } from 'rollup-plugin-visualizer'


// https://vite.dev/config/
export default defineConfig({
  plugins: [
    // vue本体插件
    vue(),
    // 自动生成声明文件
    dts({
      tsconfigPath: './tsconfig.app.json',
    }),
    // 分析文件大小插件
    visualizer({
      filename: './dist/stats.html',
      open: true,
      gzipSize: true,
    }),
  ],
  build: {
    // 输出目录地址
    outDir: 'lib',
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue',
        },
        exports: 'named',
      },
    },
    // 打包组件，注释则编译整个项目
    lib: {
      // 入口文件
      entry: './src/package/index.ts',
      // 插件文件名
      name: 'dynamic-node-vue',
      fileName: (format) => `index.${format}.js`
    },
    terserOptions: {
      compress: {
        //生产环境时移除console
        drop_console: true,
        drop_debugger: true
      }
    },
    // 关闭文件计算
    reportCompressedSize: false,
    // 关闭生成map文件
    sourcemap: false,
    // css拆分
    cssCodeSplit: true,
  },
  server: {
    // 服务端口
    port: 3000,
    // 是否自动打开浏览器
    open: true,
    // 服务地址
    host: '0.0.0.0',
  }
})
