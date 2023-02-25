import md5 from "js-md5"
import {
    createDiscreteApi
} from "naive-ui"

export const fetchConfig = {
    baseURL:"http://pan.zhuiun.com:81/api.php",
    appid:"maozedong",
    appSecret: "xiao379ye",
    timestamp : Date.parse(new Date()) / 1000,
    signature:md5(md5("maozedong" + "xiao379ye" + Date.parse(new Date()) / 1000)),
    headers:{
        'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8' 
    },
}
//请求体封装
function useGetFetchOptions(options = {}){
    options.baseURL = options.baseURL ?? fetchConfig.baseURL
    options.headers = options.headers ?? fetchConfig.headers
    options.signature = fetchConfig.signature
    options.timestamp = fetchConfig.timestamp
    options.appid = fetchConfig.appid
    options.initialCache = options.initialCache ?? false
    options.lazy = options.lazy ?? false

    // 用户登录，默认传token
    // const token = useCookie("token")
   
    // if(token.value){ 
    //     options.headers.token = token.value
    // }

    return options
}
export async function useHttp(key,url,options = {}) {
    options = useGetFetchOptions(options)
    options.key = key
    let res = await useFetch(url,{
        ...options,
        //相当于响应拦截器
        // transform:(res)=>{
        //     return res.data
        // }
    })
    console.log(res);
    return res
}

//get
export function useHttpGet(key,url,options={}){
    options.method = "GET"
    return useHttp(key,url,options)
}
//post
export function useHttpPost(key,url,options={}){
    options.method = "POST"
    return useHttp(key,url,options)
}