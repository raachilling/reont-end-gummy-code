import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../actions';

import ShopSearchBar from './shopSearchBar';

class Shop extends Component {

    componentDidMount() {
        const headerLinks = [
            {
                _id: 0,
                title: 'Login',
                path: '/signin'
            }
        ]
        this.props.setHeatherLinks(headerLinks);
        this.props.fetchShopCategories();
        
        // filter products with links
        this.props.fetchShopProducts();
    }

    shouldComponentUpdate(nextProps) {
        if(this.props != nextProps) {
            this.props.setNavbarLinks(nextProps.categories, (_id) => this.props.filterProductsWithCategoryId(_id));
        }
        return true
    }

    render() {
        return (
            <div className='shop'>
                <ShopSearchBar className='shop__search-bar'/>
                <div className='shop__products'>
                    {
                        this.props.filteredProducts.map(product => {
                            return (
                                <div key={product._id} className= 'shop-product'>
                                    <div className='shop-product__title'>
                                        {product.title}
                                    </div>
                                    <div className='shop-product__description'>
                                        {product.description}
                                    </div>
                                </div>

                            )
                        })
                    }
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    const { categories } = state.shop;
    return {
        categories
    }
}

Shop = connect(mapStateToProps, actions)(Shop);

export default Shop;