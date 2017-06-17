import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import * as cartActions from '../actions/actionCreatorCart';

import Shelf from './Shelf';

class Cart extends Component {

    render() {

        return (
            <div className="Cart">
                <Shelf addItem={this.props.actions.addToCart}/>
                <h2>Shopping Bag</h2>
                <ol>
                    {this
                        .props
                        .cart
                        .map((item, idx) => {
                            return <li key={idx}>{item}</li>;
                        })}
                </ol>
            </div>
        );
    }
}
const mapStateToProps = state => {
    return {cart: state.cart};
}

const mapDispatchToProps = dispatch => {
    return {
        actions: bindActionCreators(cartActions, dispatch)
    }
}

const CartContainer = connect(mapStateToProps, mapDispatchToProps)(Cart);

export default CartContainer;