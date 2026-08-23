import { createContext, useContext, useState } from 'react';
import { allProducts } from '../../data/products';

const CartContext = createContext();

export function CartProvider({ children }) {
    const [cartItems, setCartItems] = useState([]);
    const [likedItems, setLikedItems] = useState([]);
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [isLikeOpen, setIsLikeOpen] = useState(false);

    const addToCart = (id) => {
        const product = allProducts.find(item => item.id === id);
        if (!product) return;
        setCartItems(prev => [...prev, product]);
        setIsCartOpen(true);
        setIsLikeOpen(false);
    };

    const addToLikes = (id) => {
        const product = allProducts.find(item => item.id === id);
        if (!product) return;
        setLikedItems(prev => {
            if (prev.some(item => item.id === id)) return prev;
            return [...prev, product];
        });
        setIsLikeOpen(true);
        setIsCartOpen(false);
    };

    const removeFromCart = (index) => {
        setCartItems(prev => prev.filter((_, i) => i !== index));
    };

    const removeFromLikes = (index) => {
        setLikedItems(prev => prev.filter((_, i) => i !== index));
    };

    const toggleCart = () => {
        setIsCartOpen(prev => !prev);
        if (isCartOpen) setIsLikeOpen(false);
    };

    const toggleLikes = () => {
        setIsLikeOpen(prev => !prev);
        if (isLikeOpen) setIsCartOpen(false);
    };

    const closeCart = () => setIsCartOpen(false);
    const closeLikes = () => setIsLikeOpen(false);

    const cartCount = cartItems.length;
    const likeCount = likedItems.length;

    return (
        <CartContext.Provider value={{
            cartItems, likedItems, isCartOpen, isLikeOpen,
            addToCart, addToLikes, removeFromCart, removeFromLikes,
            toggleCart, toggleLikes, closeCart, closeLikes,
            cartCount, likeCount
        }}>
            {children}
        </CartContext.Provider>
    );
}

export function useCart() {
    const context = useContext(CartContext);
    if (!context) throw new Error('useCart must be used within CartProvider');
    return context;
}