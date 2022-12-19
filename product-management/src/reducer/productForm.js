import { PRODUCT_VIEW } from "../constants/actionTypes";

const initialState = {
    product:{},
    actionName:''
};
const productForm = (state=initialState, action)=>{
    
    switch(action.type){
        case PRODUCT_VIEW:
            state.product=action.product;
            state.actionName=action.type;
            
            return state;
        default:
            return state;
    }
    
}
export default productForm;