import {
    SET_USER_PURCHASES
} from './types';

export function fetchUserPurchases() {
    return ({
        type: SET_USER_PURCHASES,
        payload: [
            {
                _id: 0,
                total: 8.02,
                orderNumber: 'A0048248343',
                orderDate: new Date(),
                creditCard: '-0000',
                user: {
                    name: 'Jordan Hudgens',
                    shippingAddress: '1234 West State st'
                }
            },
            {
                _id: 1,
                total: 19.40,
                orderNumber: 'A0048248343',
                orderDate: new Date(),
                creditCard: '-0000',
                user: {
                    name: 'Jordan Hudgens',
                    shippingAddress: '1234 West State st'
                }
            },            {
                _id: 2,
                total: 1.03,
                orderNumber: 'A0048248343',
                orderDate: new Date(),
                creditCard: '-0000',
                user: {
                    name: 'Jordan Hudgens',
                    shippingAddress: '1234 West State st'
                }
            },
            {
                _id: 3,
                total: 19.40,
                orderNumber: 'A0048248343',
                orderDate: new Date(),
                creditCard: '-0000',
                user: {
                    name: 'Jordan Hudgens',
                    shippingAddress: '1234 West State st'
                }
            },            {
                _id: 4,
                total: 8.02,
                orderNumber: 'A0048248343',
                orderDate: new Date(),
                creditCard: '-0000',
                user: {
                    name: 'Jordan Hudgens',
                    shippingAddress: '1234 West State st'
                }
            },
            {
                _id: 5,
                total: 19.40,
                orderNumber: 'A0048248343',
                orderDate: new Date(),
                creditCard: '-0000',
                user: {
                    name: 'Jordan Hudgens',
                    shippingAddress: '1234 West State st'
                }
            },            {
                _id: 6,
                total: 8.02,
                orderNumber: 'A0048248343',
                orderDate: new Date(),
                creditCard: '-0000',
                user: {
                    name: 'Jordan Hudgens',
                    shippingAddress: '1234 West State st'
                }
            },
            {
                _id: 7,
                total: 19.40,
                orderNumber: 'A0048248343',
                orderDate: new Date(),
                creditCard: '-0000',
                user: {
                    name: 'Jordan Hudgens',
                    shippingAddress: '1234 West State st'
                }
            }
        ]
    })
}