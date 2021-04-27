import { 
    SET_USER_PURCHASES,
    SET_PURCHASE_DETAIL,
    SET_CART_PRODUCTS,
    ADD_CART_PRODUCT
} from './types';

export function setPurchaseDetail(_id) {
    console.log(_id);
    return ({
        type: SET_PURCHASE_DETAIL,
        payload: _id
    })
}

export function addCartProduct(product) {
    return ({
        type: ADD_CART_PRODUCT,
        payload: product
    })
}

export function fetchCartProducts() {
    return({
        type: SET_CART_PRODUCTS,
        payload: [
            {
                _id: 0,
                product: {
                    _id:0,
                    title: 'JavaScript in the Browser', 
                    description:'The FitnessGram™ Pacer Test is a multistage aerobic capacity test that progressively gets more difficult as it continues. The 20 meter pacer test will begin in 30 seconds. ... The running speed starts slowly, but gets faster each minute after you hear this signal.' , 
                    price: 1.99,
                    belongsTo: [0, 1]
                },
                quantity: 2
            },
            {
                _id: 1,
                product: {
                    _id:1,
                    title: 'Graph Database', 
                    description:'The FitnessGram™ Pacer Test is a multistage aerobic capacity test that progressively gets more difficult as it continues. The 20 meter pacer test will begin in 30 seconds. ... The running speed starts slowly, but gets faster each minute after you hear this signal.' , 
                    price: 1.99,
                    belongsTo: [0, 6]
                },
                quantity: 1
            }, 
        ]
    })
}

export function fetchUserPurchases() {
    return ({
        type: SET_USER_PURCHASES,
        payload: [
            {
                _id: 1,
                total: 19.40, 
                orderNumber: 'A0048248343',
                orderDate: new Date().toDateString(),
                creditCard: '-0000',
                user: {
                    name: 'Jordan Hudgens', 
                    shippingAddress: '1234 West State Street'
                }

            },
            {
                _id: 2,
                total: 1.30, 
                orderNumber: '82YNDOQ024',
                orderDate: new Date().toDateString(),
                creditCard: '-0000',
                user: {
                    name: 'Julliette Harrison', 
                    shippingAddress: '44 Lake Lane Street'
                }

            },
            {
                _id: 3,
                total: 11.45, 
                orderNumber: '173BSO23',
                orderDate: new Date().toDateString(),
                creditCard: '-0000',
                user: {
                    name: 'Laura Fernandez', 
                    shippingAddress: '728 Berkeley Avenue'
                }

            }, 
        ]
    })
}