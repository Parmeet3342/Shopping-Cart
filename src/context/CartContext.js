
import { createContext, useState } from "react";
import toast from "react-hot-toast";


export const CartContext = createContext();

export default function CartContextProvider({children}){
    const [itemAdded , setItemAdded] = useState([]);
    const [totalItem,setTotalItem] = useState(0);
    const [cartItems,setCarItems]  = useState([]);
    const [totalAmount,setTotalAmount] = useState(0);

    function cartHandler(post){
        if(cartItems.includes(post.id)){
            setCarItems((prev) => prev.filter(cid => (cid !== post.id)));
            setTotalItem(prev => prev-1);
            setItemAdded(false);
            setTotalAmount(prev => prev-post.price);
            toast.success("Item Removed");
        }
        else{
            if(cartItems.length === 0){
                setCarItems([post.id]);
                setTotalItem(1);
            }
            else{
                setCarItems(prev => [...prev,post.id]);
                setTotalItem(prev => (prev+1));
            }
            setItemAdded(true);
            setTotalAmount(prev => prev+post.price);
            toast.success("Item Added to Cart");
        }
    }

    const value = {
        itemAdded,
        setItemAdded,
        cartItems,
        setCarItems,
        totalItem,
        setTotalItem,
        cartHandler,
        totalAmount,
        setTotalAmount
    };

    return <CartContext.Provider value={value}>
        {children}
    </CartContext.Provider>
}