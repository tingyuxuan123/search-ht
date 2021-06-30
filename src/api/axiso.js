import axios from 'axios'
import subject from './subject';

let api={}
api=Object.assign(api,subject)
console.log(api);

const instance=axios.create({
    baseURL:"http://localhost:3000",
    timeout:3000
})

instance.interceptors.request.use((config)=>{
    return config
})

instance.interceptors.response.use((config)=>{

    return config.data
})


export {instance,api}
