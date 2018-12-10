import React from "react";

import Menu from "../components/Menu.js";
import User from "../components/User.js";
import News from "../components/News.js";

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      menu: [],
      user: [],
      news: []
    };
  }
  componentWillMount() {
    // 无论是否需要配置反响代理，都是相对路径而无需使用全路径
    // 当使用express服务器加载时react项目(该项目中除start命令外的其他命令都会使用express服务器去渲染前端)时，其实是一个同构的项目，不存在跨域
    // 当使用webpack dev server单独启动前端项目时，同时后端的expreess分开启动命令，server，只提供服务器不加载渲染前端时存在跨域(执行start命令可以单独通过localhost:8080)单独的访问前端页面，再用任何其他命令来启动express服务器来提供数据，此时的前端页面与后段分离了，若想获取服务器数据，则需要配置代理
    // 本项目的代理只针对单独使用webpack dev server启动另外的服务器，不使用express服务器渲染前端页面时，
    fetch("/api/user/")
      .then(res => res.json())
      .then(data => {
        console.log(data);
        this.setState({ user: data });
      });
    fetch("/api/menu/")
      .then(res => res.json())
      .then(data => {
        console.log(data);
        this.setState({ menu: data });
      });
    fetch("/api/news/")
      .then(res => res.json())
      .then(data => {
        console.log(data);
        this.setState({
          news: data
        });
      });
  }
  render() {
    const { menu, user, news } = this.state;
    return (
      <div>
        <h1>你好世界111111111</h1>
        <h2>mock menu data 模拟数据</h2>
        <Menu menu={menu} />
        <h2>mock user data 模拟数据</h2>
        <User user={user} />
        <h2>mock news data 模拟数据</h2>
        <News news={news} />
      </div>
    );
  }
}

export default Home;
