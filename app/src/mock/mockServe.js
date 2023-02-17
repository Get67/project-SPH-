//引入mockjs模块

import Mock, { mock } from "mockjs";

//引入json格式   json 不需要暴露  webpack默认暴露  图片 json 
import banner from './banner'
import floor from './floor'

//mock数据
Mock.mock("/mock/banner",{code:200,data:banner});//模拟首页轮播图图片
Mock.mock("/mock/floor",{code:200,data:floor});
