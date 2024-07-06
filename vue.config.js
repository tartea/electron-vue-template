// 按需加载
const AutoImport = require("unplugin-auto-import/webpack");
const Components = require("unplugin-vue-components/webpack");
const { ElementPlusResolver } = require("unplugin-vue-components/resolvers");
const webpack = require("webpack");

module.exports = {
  publicPath: "./",
  lintOnSave: false,
  configureWebpack: {
    plugins: [
      new webpack.DefinePlugin({
        "process.env.NODE_ENV": "production"
      }),
      AutoImport({
        resolvers: [ElementPlusResolver()],
      }),
      Components({
        resolvers: [ElementPlusResolver()],
      }),
    ],
  },
  pluginOptions: {
    electronBuilder: {
      preload: {
        preload: "src/preload.js",
      },
      builderOptions: {
        appId: "com.lottery.app",
        productName: "lottery", //项目名，也是生成的安装文件名，即aDemo.exe
        copyright: "Copyright © 2019", //版权信息
        npmRebuild: false,
        extraResources: ["src"],
        directories: {
          output: "./builder", //输出文件路径
        },
        win: {
          //win相关配置
          // "icon":"./shanqis.ico",//图标，当前图标在根目录下，注意这里有两个坑
          target: [
            {
              target: "nsis", //利用nsis制作安装程序
              arch: [
                "x64", //64位
                "ia32", //32位
              ],
            },
          ],
        },
      },
    },
  },
};
