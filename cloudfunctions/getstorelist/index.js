// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

// 云函数入口函数
exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext()
  var storedishlist=db.collection(dish).where({
    store:event.storename
    })
    .get()
  console.log("调用云函数获取商店数据库")
  return(storedishlist)
  return {
    event,
    openid: wxContext.OPENID,
    appid: wxContext.APPID,
    unionid: wxContext.UNIONID,
  }
}