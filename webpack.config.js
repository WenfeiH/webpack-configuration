const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");

const config = {
  mode: "production",
  entry: "./client/src/index.js", // 入口文件
  output: {
    // 打包输出
    path: path.join(__dirname, "client/dist"),
    filename: "bundle.js"
  },
  // resolve: {
  //     extensions: [".js", ".json"]//当requrie的模块找不到时，添加这些后缀
  // },
  // 模块加载
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: "babel-loader" // 旧版本的webpack可以省略写成babel，新版本的每个loader都不克在省略
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader",
            options: {
              sourceMap: true
            }
          },
          {
            loader: "sass-loader",
            options: {
              sourceMap: true
            }
          }
        ]
      }
      //   {
      //     test: /\.(png|jpg|jpng|eot|ttf)$/,
      //     loader: "url-loader?limit=8192&name=images/[name].[ext]"
      //   }
    ]
  },
  // 插件配置
  plugins: [
    new HtmlWebPackPlugin({
      template: "./client/src/index.html",
      filename: path.join(__dirname, "client/dist", "index.html")
    })

    // // 热更新
    // new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    contentBase: path.join(__dirname, "client/dist"),
    inline: true, // 实时刷新
    port: 3000,
    // hot: true
    // webpack-dev-server2.x后不再支持colors、hot、prosses等参数
    // 配置webpack dev server单独启动而不是结合exprees服务器时的代理 如执行npm start 而不是执行其他命令时即是单独使用webpack dev server
    proxy: {
      "/api/*": {
        target: "http://localhost:5000",
        secure: true
      }
    }
  }
};

module.exports = config;
