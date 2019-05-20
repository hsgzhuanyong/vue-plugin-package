> vue3 插件开发构建包

## 脚本方法
``` bash
# 安装依赖文件
yarn install
# 开启本地服务
yarn serve            
# 打包成单页面文件
yarn build            
# 打包插件主题
yarn build:theme      
# 打包插件
yarn build:lib        
# 打包插件后打包主题
yarn build:package   
```

## 项目结构解析
``` bash
| -- examples                    # 存放示例目录
| -- packages                    # 插件存放目录
    | -- textarea                # textarea插件示例文件
         | -- src                # vue文件存放目录
         | -- index.js           # 暴露出vue文件的方法
    | -- index.js                # 入口文件
    | -- theme                   # 主题样式
|--public                        # 公用部分
```