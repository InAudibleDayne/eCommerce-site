import React, { Component } from 'react';

import { connect } from 'react-redux';
import * as actions from '../../actions';

class Shop extends Component {
    componentDidMount() {

        const headerLinks = [
            {
                _id: 1,
                title: 'Login',
                path: '/signin'
            }
        ]
        this.props.setHeaderLinks(headerLinks);
        this.props.fetchShopCategories();
        this.props.fetchShopProducts();
            //fetch navbar links
            //set navbar links
            //filter products with links
    }
  render() {
    return (
        <div className='shop'>
            Shop
            {/*
            shop searchbar component
            shop product
            cart button
            */}
        </div>
    );
  }
}

function mapStateToProps(state) {
    return { state }
}

Shop=connect(mapStateToProps, actions)(Shop);

export default Shop;