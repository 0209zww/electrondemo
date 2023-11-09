const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: {
      '^/api': {
        target: 'http://localhost:3033',
        changeOrigin: true,
        ws: false,
        pathRewrite: {
          '^/api': '',
        },
      },
    },
  },
  pluginOptions: {
    electronBuilder: {
      builderOptions: {
        "electronDownload": {
          "mirror": "https://npm.taobao.org/mirrors/electron/"
        },
        "productName": "yanxi",
        "appId": "com.apitool",
        "win": {
        },
        //window自动义安装
        "nsis": {
            "oneClick": false,            //是否静默安装（一键式安装）
            "perMachine": true,           //安装模式 true=所有用户 false=自己
            "allowElevation": true,       //允许请求提升。 如果为false，则用户必须使用提升的权限重新启动安装程序
            "allowToChangeInstallationDirectory": true,   //是否安装时是否能更换安装目录
            "createDesktopShortcut": true,    //是否创建桌面快捷建
            // "menuCategory": true,             //是否在开始菜单里创建子菜单
            // "installerIcon":  "build/icons/icon.ico",     //安装应用的图片,一定要 ico格式的图片
            // "installerSidebar": "public/logo.bmp",   //安装程序左边的图片，一定是要位图 bmp 格式 一定要 164*314
            // "uninstallerSidebar": "build/icons/uninstall.bmp",   //安装程序左边的图片，一定是要位图 bmp 格式 一定要 164*314
            "include": "scripts/installer.nsi"
        }
      }
    }
  }
})
