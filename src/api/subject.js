import {instance} from "./axiso";

function subjectAdd(where){
    return instance({
        url:"/subject/subjectAdd",
        method:"post",
        data:where
    })
}

function subjectFind(where){
    return instance({
        url:"/subject/subjectFind",
        method:"get",
        data:where
    })
}

function subjectDelete(where){
    return instance({
        url:"/subject/subjectDelete",
        method:"post",
        data:where
    })
}

function subjectUpdata(where,params){
    return instance({
        url:"/subject/subjectUpdate",
        method:"post",
        data:{where,params}
    })
}


export default {
    subjectAdd,
    subjectFind,
    subjectUpdata,
    subjectDelete
}