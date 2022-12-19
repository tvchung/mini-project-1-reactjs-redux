import { React, Component } from "react";
import Product from "./Product";
import ProductTotal from "./ProductTotal";
import { connect } from "react-redux";

class ListProduct extends Component {
  render() {
    let list = this.props.listProduct;
    let elementProduct = list.map((item,index)=>{
      return <Product key={item.productId} item={item} index={index+1} />
    });

    return (
      <div className="card">
        <div className="card-header">
          <h3>Danh sách sản phẩm</h3>
        </div>
        <div className="card-body">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">ID</th>
                <th scope="col">Name</th>
                <th scope="col">Quantity</th>
                <th scope="col">Price</th>
                <th scope="col">Subtotal</th>
                <th scope="col" className="text-center">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {elementProduct}
            </tbody>
            <tfoot>
              <ProductTotal />
            </tfoot>
          </table>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    listProduct: state.listProduct,
  };
};

export default connect(mapStateToProps, null)(ListProduct);
