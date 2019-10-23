/**
 * NPM：Node Package Manager 是基于nodejs的包管理工具
 * 
 * 1、什么是包？包 == 项目 || 模块 === 文件
 * 
 * 2、什么是pakeage.json？以json文件形式的nodejs包的描述文件
 *  1）如何创建package.json？npm init /npm init -y (所有描述文件都是默认生成)
 *  2)package常用
 *  mian 主模块
 * dependencies 依赖模块
 * devDependencies 开发时依赖
 * script 脚本命令 可用npm命令进行执行
 * 
 * 3、npm的常用命令
 * npm install <包名称> ===  npm i <包名称> 
 * npm i <包名称>@版本号 -g(全局安装)
 * npm i <包名称> --save(将安装包写入package.json依赖列表)
 * * npm i <包名称> --save-dev(将安装包写入package.json开发时依赖)
 * 
 * npm search <包名称>//搜索包
 * npm view <包名称>//查看包信息
 * npm uninstall/update <包名称>//卸载包
 * 
 * 4、cnpm npm是包下载工具
 * 安装cnpm：npm install -g cnpm --registry=https://registry.npm.taobao.org
 * 
 */