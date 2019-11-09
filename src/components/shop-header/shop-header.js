import React from 'react';
import './shop-header.css';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';

const ShopHeader = ( { items, total }) => {
    return (
        <header className="shop-header row">
            <Link to="/">
                <div className="logo text-dark" >ReStore</div>
            </Link>
            <Link to="/cart">
                <div className="shopping-cart ">
                    <i className="cart-icon fa fa-shopping-cart" />
                    {items} items (${total})
                </div>
            </Link>
        </header>
    )
}



const mapStateToProps = ({itemsTotal, orderTotal}) => {
    return {
        items: itemsTotal,
        total: orderTotal
    };
};


export default connect(mapStateToProps)(ShopHeader);