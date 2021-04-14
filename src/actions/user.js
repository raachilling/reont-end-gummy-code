import { 
    SET_USER_PURCHASES,
    SET_PURCHASE_DETAIL
} from './types';

export function setPurchaseDetail(_id) {
    console.log(_id);
    return ({
        type: SET_PURCHASE_DETAIL,
        payload: _id
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