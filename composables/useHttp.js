import {
    createDiscreteApi
} from "naive-ui"
export const fetchConfig = {
    baseURL:"http://api.zhuiun.com:81",
    headers:{
        'content-type': 'application/json'
    },
    noLoginUrl: [
        '/addons/cms/api.common/init',
        '/addons/cms/api.common/captcha',
        '/addons/cms/api.ems/send',
        '/addons/cms/api.sms/send',
        '/addons/cms/api.archives/index',
        '/addons/cms/api.archives/detail',
        '/addons/cms/api.login/login',
        '/addons/cms/api.login/mobilelogin',
        '/addons/cms/api.login/register',
        '/addons/cms/api.login/resetpwd',
        '/addons/cms/api.login/wxLogin',
        '/addons/cms/api.login/appLogin',
        '/addons/cms/api.login/getWechatMobile',
        '/addons/cms/api.my/aboutus',
        '/addons/cms/api.my/agreement',
        '/addons/third/api/getAuthUrl',
        '/addons/third/api/callback',
        '/addons/third/api/account',
        '/addons/cms/api.search/index',
        '/addons/cms/api.tag/index',
        '/addons/cms/api.common/getCategory',
        '/addons/cms/api.user/getSigned',
        '/addons/cms/api.user/userInfo',
        '/addons/cms/api.comment/index',
        '/addons/vip/api.index/index',
        '/addons/cms/api.diyform/formList',
        '/addons/cms/api.diyform/show',
        '/addons/cms/api.diyform/index',
        '/addons/cms/api.common/selectpage',
        '/addons/cms/api.diyform/postForm',
        '/addons/cms/api.special/special',
        '/addons/cms/api.special/index',
        '/addons/cms/api.page/detail'
      ],
}

function useGetFetchOptions(options = {}){
    options.baseURL = options.baseURL ?? fetchConfig.baseURL
    options.headers = fetchConfig.headers
    options.initialCache = options.initialCache ?? false
    options.lazy = options.lazy ?? false


    // 用户登录，默认传token
    const token = useCookie("token")
    if(token.value){
        options.headers.token = token.value
    }

    return options
}


export async function useHttp(key,url,options = {}){
    options = useGetFetchOptions(options)
    options.key = key
    if (!fetchConfig.noLoginUrl.includes(url)) {
        const { message } = createDiscreteApi(["message"])
        message.error("请先登录") 
        return navigateTo("/login")
    }
    if(options.$){
        const data = ref(null)
        const error = ref(null)
        return await $fetch(url,options).then(res=>{
            data.value = res.data
            return {
                data,
                error
            }
        }).catch(err=>{
            const msg = err?.data?.data
            if(process.client){
                const { message } = createDiscreteApi(["message"])
                message.error(msg || '服务端错误')
            }
            error.value = msg
            return {
                data,
                error
            }
        })
    }

    let res = await useFetch(url,{
        ...options,
        // 相当于响应拦截器
        transform:(res)=>{
            return res.data
        },
    })

    // 客户端错误处理
    if(process.client && res.error.value){
        const msg = res.error.value?.data?.data
        if(!options.lazy){
            const { message } = createDiscreteApi(["message"])
            message.error(msg || '服务端错误')
        }
    }

    return res
}

// GET请求
export function useHttpGet(key,url,options = {}){
    options.method = "GET"
    return useHttp(key,url,options)
}

// POST请求
export function useHttpPost(key,url,options = {}){
    options.method = "POST";
    options.body = options.data;
    return useHttp(key,url,options)
}