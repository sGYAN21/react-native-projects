import women from '../assets/images/women.png'
import shoe from '../assets/images/shoe.png'
import { ImageSourcePropType } from 'react-native';
import one from '../assets/images/one.png'
import two from '../assets/images/two.png'
import three from '../assets/images/three.png'
import four from '../assets/images/four.png'
import five from '../assets/images/five.png'
import apple from '../assets/logos/apple.png';
import master_card from '../assets/logos/master_card.png';
import paypal from '../assets/logos/paypal.png';
import visa from '../assets/logos/visa.png';

export type Product = {
    id: number;
    title: string;
    description: string;
    image: ImageSourcePropType;
    price: number;
    originalPrice: number;
    discount: string;
    rating: number;
    reviews: number;
}

export const productList = [
    {
        id: 1,
        title: 'Women Printed Kurta',
        description: 'Neque porro quisquam est qui dolorem ipsum quia',
        image: women,
        price: 1500,
        originalPrice: 2499,
        discount: '40% Off',
        rating: 4,
        reviews: 56890,
    },
    {
        id: 2,
        title: 'HRX by Hrithik Roshan',
        description: 'Neque porro quisquam est qui dolorem ipsum quia',
        image: shoe,
        price: 2499,
        originalPrice: 4999,
        discount: '50% Off',
        rating: 4,
        reviews: 344567,
    },
];

export type Category = {
    id: number;
    title: string;
    image: ImageSourcePropType;
}
export const categories = [
    {
        id: 1,
        title: 'Beauty',
        image: one,
    },
    {
        id: 2,
        title: 'Fashion',
        image: two,
    },
    {
        id: 3,
        title: 'Kids',
        image: three,
    },
    {
        id: 4,
        title: 'Mens',
        image: four,
    },
    {
        id: 5,
        title: 'Womens',
        image: five,

    },
]

export type PaymentMethod = {
id: number;
name: string;
icon: ImageSourcePropType;
number: string;
selected: boolean;
}

export const paymentMethods = [
    { id: 1, 
        name: 'Visa', 
        icon: visa, 
        number: '*********2109', selected: true },
    { id: 2, 
        name: 'PayPal', 
        icon: paypal, 
        number: '*********2109', 
        selected: false },
    { 
        id: 3, 
        name: 'Maestro', 
        icon: master_card, 
        number: '*********2109', 
        selected: false },
    { 
        id: 4, 
        name: 'Apple', 
        icon: apple, 
        number: '*********2109', 
        selected: false },
];