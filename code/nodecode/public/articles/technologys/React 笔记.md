##                            React 笔记

### 任务列表

- [x] react 基础
- [x] webpack
- [x] redux
- [x] react-router

### react基础

#### Hello World

#### webpack配置React环境

##### webpack4基础

1. loader

   找到并安装要用的loader,`npm i -D xxx-loader`

   在module.rules中添加相应的loader配置

   exclude: 屏蔽不需要处理的文件或文件夹

   ```
   module: {
       rules:[
         {
           test: /\.css$/,
           use: [
             'style-loader',
             'css-loader'
           ]
         }
       ]
     }
   ```

   

2. 打包

   打包单个文件

   ```
   entry: './src/index.js',
     output: {
       filename:'bundle.js',
       path: path.resolve(__dirname, 'dist')
     }
   ```

   打包多个文件

   ```
   entry: {
       app: './src/index.js',
       print: './src/print.js'
     },
     output: {
       filename: 'bundle.js',
       filename: '[name].bundle.js',
       path: path.resolve(__dirname, 'dist')
     }
   ```

   

3. plugin

   

4. 

   

   