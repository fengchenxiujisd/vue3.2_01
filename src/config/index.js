/**
 * 环境配置封装
 */
const env = import.meta.env.MODE || 'prod'
const EnvConfig = {
    dev:{
       baseAPI: '',
       mockApi:""
    },
    test:{
       baseAPI:'',
       mockApi: '',
    },
    prod:{
        baseApi:'',
        mockApi:''
    }
}
export default {
    env: 'dev',
    mock: true,
    baseApi: ''
}