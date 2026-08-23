export const products = [
    {
        id: 1,
        title: "One Life Graphic T-Shirt",
        price: 260,
        oldPrice: 300,
        discount: 40,
        rating: 4.5,
        image: "/img/Frame 33.png"
    },
    {
        id: 2,
        title: "Polo with Contrast Trims",
        price: 212,
        oldPrice: 242,
        discount: 12,
        rating: 4.0,
        image: "/img/Frame 33.png"
    },
    {
        id: 3,
        title: "Gradient Graphic T-Shirt",
        price: 145,
        oldPrice: 0,
        discount: 0,
        rating: 3.5,
        image: "/img/Frame 33.png"
    },
    {
        id: 4,
        title: "Black Striped T-Shirt",
        price: 120,
        oldPrice: 150,
        discount: 20,
        rating: 5.0,
        image: "/img/Frame 33.png"
    }
];

export const topSelling = [
    {
        id: 5,
        title: "Polo with Tipping Details",
        price: 180,
        oldPrice: 0,
        discount: 0,
        rating: 4.5,
        image: "/img/Frame 33.png"
    },
    {
        id: 6,
        title: "Classic Denim Jacket",
        price: 270,
        oldPrice: 300,
        discount: 10,
        rating: 4.7,
        image: "/img/Frame 33.png"
    }
];

export const allProducts = [...products, ...topSelling];