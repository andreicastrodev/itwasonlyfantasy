export const IMG_ARR = [
    "/resources/images/green-home.jpg",
    "/resources/images/green-home-zoomed.jpg",
    "/resources/images/yellow-home.jpg",
    "/resources/images/yellow-home-zoomed.jpg",
    "/resources/images/white-home.jpg",
    "/resources/images/white-home-zoomed.jpg",
]


export const SHOP_IMG_ARR = [{
    id: '4553933410',
    title: 'fantasy green tee',
    price: 30,
    images: {
        image1: '/resources/shop/green-tee-1.webp',
        image2: '/resources/shop/green-tee-2.webp',
    }
}, {
    id: "7533543439",
    title: 'fantasy white tee',
    price: 30,
    images: {
        image1: '/resources/shop/white-tee-1.webp',
        image2: '/resources/shop/white-tee-2.webp',
    }
},
{
    id: "5204956499",
    title: 'fantasy yellow tee',
    price: 30,
    images: {
        image1: '/resources/shop/yellow-tee-1.webp',
        image2: '/resources/shop/yellow-tee-2.webp',
    }
},
]


export const findShopItemById = (id) => {

    return SHOP_IMG_ARR.find(item => item.id === id)

}