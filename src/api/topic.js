import {instance} from './axiso'

function selectAdd(where){
    return instance({
        url:"/topics/selectAdd",
        method:"post",
        data:where
    })
}

function selectFind(where){
    return instance({
        url:"/topics/selectFind",
        method:"get",
        params:where
    })
}

 function selectDelete(where){
    return instance({
        url:"/topics/selectDelete",
        method:"post",
        data:where
    })
}

 function selectUpdate(where,params){
    return instance({
        url:"/topics/selectUpdate",
        method:"post",
        data:{where,params}
    })
}

 function RightOrWrongAdd(where){
    return instance({
        url:"/topics/RightOrWrongAdd",
        method:"post",
        data:where
    })
}

function RightOrWrongFind(where){
    return instance({
        url:"/topics/RightOrWrongFind",
        method:"get",
        params:where
    })
}

 function RightOrWrongDelete(where){
    return instance({
        url:"/topics/RightOrWrongDelete",
        method:"post",
        data:where
    })
}

 function RightOrWrongUpdate(where,params){
    return instance({
        url:"/topics/RightOrWrongUpdate",
        method:"post",
        data:{where,params}
    })
}

 function FillingAdd(where){
    return instance({
        url:"/topics/FillingAdd",
        method:"post",
        data:where
    })
}

 function FillingFind(where){
    return instance({
        url:"/topics/FillingFind",
        method:"get",
        params:where
    })
}

 function FillingDelete(where){
    return instance({
        url:"/topics/FillingDelete",
        method:"post",
        data:where
    })
}

 function FillingUpdate(where,params){
    return instance({
        url:"/topics/FillingUpdate",
        method:"post",
        data:{where,params}
    })
}


export default {
    selectAdd,
    selectFind,
    selectDelete,
    selectUpdate,
    RightOrWrongAdd,
    RightOrWrongFind,
    RightOrWrongDelete,
    RightOrWrongUpdate,
    FillingAdd,
    FillingFind,
    FillingDelete,
    FillingUpdate
}