import { createDiscreteApi } from "naive-ui";

export const useUser = ()=> useState("user",()=>null)

// 更新用户信息
export async function useRefreshUserInfo(){
    const token = useCookie("token")
    const user = useUser()
    // 用户已登录，直接获取用户信息
    if(token.value){
        const {data} = await getUserIndex()
        const userData = JSON.parse(JSON.stringify(data.value));
        user.value = userData.userInfo;
        console.log(user.value);
    }
}

// 退出登录
export async function useLogout(){
    await goUserLogout()
    const user = useUser()
    user.value = null
    const token = useCookie("token")
    token.value = null
    const { message } = createDiscreteApi(["message"])
    message.success("退出登录成功")
    // 回到首页
    const route = useRoute()
    if(route.path != "/"){
        navigateTo("/",{ replace:true })
    }
}

// 登录并且绑定手机号之后才能操作
export function useHasAuth(callback = null){
    const route = useRoute()
    const token = useCookie("token")
    const user = useUser()
    const { message } = createDiscreteApi(["message"])
    // 未登录
    if(!token.value){
        message.error("请先登录")
        return navigateTo("/login?from="+route.fullPath)
    }

    // 未绑定手机号
    const phone = user.value?.phone
    if(!phone && route.name != 'bindphone'){
        message.error("请先绑定手机号")
        return navigateTo("/bindphone?from="+route.fullPath)
    }

    if(callback && typeof callback === "function"){
        callback()
    }
}

// 点赞/取消点赞
export function useHandleSupportPost(){
    const supportLoading = ref(false)
    // 点赞/取消点赞
    const handleSupport = (item)=>{
        useHasAuth(async ()=>{
            // 行为判断
            let type = item.issupport ? 'unsupport' : 'support'
            let msg = item.issupport ? '取消点赞' : '点赞'

            supportLoading.value = true

            const {
                error
            } = await usePostSupportApi(item.id,type)

            supportLoading.value = false

            // 操作失败，直接返回
            if(error.value) return

            // 点赞数 +1/-1
            if(type === 'unsupport'){
                item.support_count--
            } else {
                item.support_count++
            }

            item.issupport = !item.issupport

            const { message } = createDiscreteApi(["message"])
            message.success(msg + '成功')
        })
    }

    return {
        supportLoading,
        handleSupport
    }
}