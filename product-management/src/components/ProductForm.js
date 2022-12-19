import { React, Component } from "react";
import Notify from "./Notify";
import {connect} from 'react-redux';
import { PRODUCT_EDIT, PRODUCT_VIEW } from "../constants/actionTypes";
class ProductForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      productId:'',
      productName:'',
      quantity:0,
      price:0
    }
  }
  
  // hiển thị dữ liệu từ props => state => form
  componentWillMount  =()=>{
    // vào trước khi render trong quá trình mouting
    let {product,actionName } = this.props;
    if( actionName === PRODUCT_VIEW || actionName === PRODUCT_EDIT){
      this.setState({
        productId:product.productId,
        productName:product.productName,
        quantity:product.quantity,
        price:product.price,
      });
    }else{
      this.setState ({
        productId:'',
        productName:'',
        quantity:0,
        price:0
      });
    }
  }
  
  componentWillReceiveProps =(nextProps)=>{
    // vào trong quá trình updation
    let {product,actionName } = nextProps;
    if( actionName === PRODUCT_VIEW || actionName === PRODUCT_EDIT){
      this.setState({
        productId:product.productId,
        productName:product.productName,
        quantity:product.quantity,
        price:product.price,
      });
    }else{
      this.setState ({
        productId:'',
        productName:'',
        quantity:0,
        price:0
      });
    }
  }

  handleChange = (e)=>{
    let name=e.target.name;
    let value=e.target.value;
    this.setState({
      [name]:value
    })
  }

  render() {
    return (
        <div className="card">
        <div className="card-header">
          <h3>Thông tin sản phẩm</h3>
        </div>
        <div className="form m-3 mb-0">
          <div className="input-group mb-3">
            <span className="input-group-text" id="id">
              ID
            </span>
            <input
              type="text"
              className="form-control"
              placeholder="Product ID"
              aria-label="Product ID"
              aria-describedby="product-id"
              value={this.state.productId}
              name="productId"
              onChange={(e)=>this.handleChange(e)}
            />
          </div>
          <div className="input-group mb-3">
            <span className="input-group-text" id="name">
              Name
            </span>
            <input
              type="text"
              className="form-control"
              placeholder="Product name"
              aria-label="Product name"
              aria-describedby="name"
              value={this.state.productName}
              name="productName"
              onChange={(e)=>this.handleChange(e)}
            />
          </div>
          <div className="input-group mb-3">
            <span className="input-group-text" id="quanity">
              Quantity
            </span>
            <input
              type="text"
              className="form-control"
              placeholder="Product quanity"
              aria-label="Product quanity"
              aria-describedby="quanity"
              value={this.state.quantity}
              name="quantity"
              onChange={(e)=>this.handleChange(e)}
            />
          </div>
          <div className="input-group mb-3">
            <span className="input-group-text" id="Price">
              Price
            </span>
            <input
              type="text"
              className="form-control"
              placeholder="Product Price"
              aria-label="Product Price"
              aria-describedby="Price"
              value={this.state.price}
              name="price"
              onChange={(e)=>this.handleChange(e)}
            />
          </div>
          <div className="input-group mb-3">
            <button type="button" className="btn btn-primary">
              Edit
            </button>
          </div>
          <Notify />
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state)=>{
  return {
    product:state.productForm.product,
    actionName:state.productForm.actionName,
  }
}

export default connect(mapStateToProps,null)(ProductForm);
