# betteryeah浏览器插件

## 启动方式
- 安装依赖:
```js
pnpm install
```

- 本地启动:
```js
pnpm dev
```

- 打包:
```js
pnpm build
```

- 调试：
  - 打开 [chrome://extensions](chrome://extensions)
  - 打开开发者模式
  - 加载已解压的扩展程序，引用根目录的dist文件夹

## 目录结构
```csharp
├── src
│   ├── api                      接口文件
│   ├── assets                   公共资源
│   ├── common                   公共样式、类型、常量
│   ├── extension                插件相关
│   │   ├── background           对应插件的background脚本
│   │   ├── content              对应插件的content_script
│   │   │   ├── generalScript    被注入到所有页面的content_script
│   │   └── popup                对应插件的下拉弹窗popup
│   ├── utils                    工具函数
```
