export function getConfig(data){
    return useHttpGet("getConfig","/addons/cms/api.common/init",{
        lazy:true,
        data
    })
}
// 验证码
export function getCaptcha(data){
    return useHttpGet("getCaptcha","/addons/cms/api.common/captcha",{
        lazy:true,
        data
    })
}
// 邮件验证码
export function getEmsSend(data){
    return useHttpPost("getEmsSend","/addons/cms/api.ems/send",{
        lazy:true,
        data
    })
}
// 短信验证码
export function getSmsSend(data){
    return useHttpPost("getSmsSend","/addons/cms/api.sms/send",{
        lazy:true,
        data
    })
}
// 个人中心
export function getUserIndex(){
    return useHttpGet("getUserIndex","/addons/cms/api.user/index",{
        lazy:true,
    })
}
// 个人资料
export function getUserProfile(data){
    return useHttpPost("getUserProfile","/addons/cms/api.user/profile",{
        lazy:true,
        data
    })
}
// 注销登录
export function goUserLogout(data){
    return useHttpGet("getUserIndex","/addons/cms/api.user/logout",{
        lazy:true,
        data
    })
}
// 保存头像
export function goUserAvatar(data){
    return useHttpPost("goUserAvatar","/addons/cms/api.user/avatar",{
        lazy:true,
        data
    })
}
// 用户信息
export function getUserInfo(data){
    return useHttpPost("goUserAvatar","/addons/cms/api.user/userInfo",{
        lazy:true,
        data
    })
}
// 用户登录
export function goLogin(data){
    return useHttpPost("goLogin","/addons/cms/api.login/login",{
        data,
        lazy:true,
    })
}
// 手机登录
export function mobilelogin(data){
    return useHttpPost("mobilelogin","/addons/cms/api.login/mobilelogin",{
        lazy:true,
        data
    })
}
// 用户注册
export function goRegister(data){
    return useHttpPost("goRegister","/addons/cms/api.login/register",{
        lazy:true,
        data
    })
}
// 重制密码
export function goResetpwd(data){
    return useHttpPost("goResetpwd","/addons/cms/api.login/resetpwd",{
        lazy:true,
        data
    })
}

// // 栏目文章单页

//列表页
export function getArchives(data){
    return useHttpGet("getArchives","/addons/cms/api.archives/index",{
        lazy:true,
        data
    })
}
//详情页
export function getArchivesDetail(data){
    return useHttpPost("getArchivesDetail","/addons/cms/api.archives/detail",{
        lazy:true,
        data
    })
}
//赞与踩
export function getArchivesVote(data){
    return useHttpPost("getArchivesVote","/addons/cms/api.archives/vote",{
        lazy:true,
        data
    })
}
//提交订单接口
export function getArchivesOrder(data){
    return useHttpPost("getArchivesOrder","/addons/cms/api.archives/order",{
        lazy:true,
        data
    })
}
//获取栏目接口，一般用于发布文章时调用
export function getChannel(data){
    return useHttpGet("getChannel","/addons/cms/api.archives/get_channel",{
        lazy:true,
        data,
    })
}
//获取栏目字段列表，一般用于发布文章
export function getChannelFields(data){
    return useHttpGet("getChannelFields","/addons/cms/api.archives/get_channel_fields",{
        lazy:true,
        data
    })
}
//提交数据，发布文档
export function archivesPost(data){
    return useHttpPost("archivesPost","/addons/cms/api.archives/archives_post",{
        lazy:true,
        data
    })
}
//发表评论
export function goCommentPost(data){
    return useHttpPost("goCommentPost","/addons/cms/api.comment/post",{
        lazy:true,
        data
    })
}
//文档评论列表接口
export function goCommentIndex(data){
    return useHttpPost("goCommentIndex","/addons/cms/api.comment/index",{
        lazy:true,
        data
    })
}
//搜索
export function search(data){
    return useHttpGet("search","/addons/cms/api.search/index",{
        lazy:true,
        data
    })
}
//tag
export function tagIndex(data){
    return useHttpGet("tagIndex","/addons/cms/api.tag/index",{
        lazy:true,
        data
    })
}
//二级栏目
export function getCategory(data){
    return useHttpGet("getCategory","/addons/cms/api.common/getCategory",{
        lazy:true,
        data
    })
}
//单页详情
export function getPageDetail(data){
    return useHttpGet("getPageDetail","/addons/cms/api.page/detail",{
        lazy:true,
        data
    })
}
//收藏
export function getCollection(data){
    return useHttpGet("getCollection","/addons/cms/api.collection/index",{
        lazy:true,
        data
    })
}
//添加到收藏 (id, 'archives')
export function addCollection(data){
    return useHttpPost("addCollection","/addons/cms/api.collection/create",{
        lazy:true,
        data
    })
}
//删除自收藏
export function delCollection(data){
    return useHttpPost("delCollection","/addons/cms/api.collection/delete",{
        lazy:true,
        data
    })
}

////我的

//删除我发布的文档接口
export function deleteArchives(data){
    return useHttpPost("deleteArchives","/addons/cms/api.archives/delete",{
        lazy:true,
        data
    })
}
//查询我发布的文档接口
export function myArchives(data){
    return useHttpGet("myArchives","/addons/cms/api.archives/my",{
        lazy:true,
        data
    })
}
//我发表的评论
export function getMyComment(data){
    return useHttpGet("myArchives","/addons/cms/api.my/comment",{
        lazy:true,
        data
    })
}
//我的消费订单
export function getOrder(data){
    return useHttpGet("getOrder","/addons/cms/api.my/order",{
        lazy:true,
        data
    })
}
//用户余额日志接口
export function getMoneyLogs(data){
    return useHttpGet("useHttpGet","/addons/cms/api.the_logs/money",{
        lazy:true,
        data
    })
}
//用户积分日志接口
export function getScoreLogs(data){
    return useHttpGet("getScoreLogs","/addons/cms/api.the_logs/score",{
        lazy:true,
        data
    })
}