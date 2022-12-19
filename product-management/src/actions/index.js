import * as types from '../constants/actionTypes';

export const act_Change_Notify = (content)=>{
    return{
        type:types.CHANGE_NOTIFY,
        content
    }
}
export const  act_Product_View = (product)=>{
    return{
        type:types.PRODUCT_VIEW,
        product:product,
    }
}
export const  act_Product_Edit = (product)=>{
    return{
        type:types.PRODUCT_EDIT,
        product
    }
}
export const  act_Product_Delete = (product)=>{
    return{
        type:types.PRODUCT_DELETE,
        product
    }
}