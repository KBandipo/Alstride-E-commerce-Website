import React from 'react';
import { useCart } from './cartContext';
import CartItem from './CartItem';  // Update the import statement
import cartData from './cartData';
import Footer from '../../Page/homePageFolder/Footer';
import AccountHeader from '../ProductDetailsPage/AccountHeader';


const Cart = () => {  
  const { cartState, removeFromCart } = useCart();
  
  // Filter the products based on the items in the cart
  const cartProducts = cartState.cartItems.map((cartItem) => {
    const product = cartData.find((p) => p.id === cartItem.id);
    return { ...product, quantity: cartItem.quantity };
  });

   // Filter the selected products
   const selectedProducts = cartProducts.filter((item) => item.selected);

  

   // Calculate total price of items
   const totalItemsPrice = cartProducts.reduce(
    (total, item) => total + (item.discountPrice || item.price) * (item.quantity || 1),
    0
  );

  // Placeholder values for shipping fee and tax (modify based on your logic)
  const shippingFee = 10.0;
  const taxRate = 0.1; // 10% tax rate

  // Calculate total cost including shipping fee and tax
  const totalCost = totalItemsPrice + shippingFee + totalItemsPrice * taxRate;


  const handleCheckout = () => {
    const selectedItems = selectedProducts;
    // Navigate to the checkout page with selectedItems
    // Example using React Router
    history.push('/checkout', { selectedItems });
  };

  const handleRemove = (productId) => {
    removeFromCart(productId);
  };

  
  return (
    <div className='w-full'>
     <AccountHeader/>
      <div className='bg-[#F7E7CE] w-full h-[80px] flex items-center mt-[45px]'>
  <div className='flex ml-[100px]'>
    <h1 className=' font-bold text-[#444]'>Cart</h1>
    <div className='flex bg-[#F7E7CE] w-[175px] h-[30px] justify-center items-center border border-[#C5CED4] border-solid rounded-full ml-4'>
      <img src="/image/LocationMarkerOutline.svg" alt="Location Marker" className="w-4 h-4 mr-2" />
      <p className='text-[#444] text-[18px] font-normal'>Ship to Nigeria</p>
    </div>
  </div>
  <div className='ml-auto'>
    <img src="public/image/ShareOutline.svg" alt="Share" className="w-4 h-4" />
  </div>
</div>
     
      {cartProducts.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul>
          {cartProducts.map((item) => (
    <CartItem
    key={item.id}
    item={item}
    onClick={() => handleRemove(item.id)}  
    onUpdateQuantity={(newQuantity) => updateQuantity(item.id, newQuantity)}
    onSelect={() => toggleItemSelection(item.id)}
    selectedColor={item.selectedColor}
    selectedSize={item.selectedSize}
  />
  ))}
</ul>
          <div className='md:ml-[1200px]'>
          <input
            type="checkbox"
            id="selectAll"
            className='rounded-lg'
          />
          <label htmlFor="selectAll" className="ml-2">
          Delete All
          </label></div>
          <div className='ml-[100px] '>
          <button className='text-[#007074] text-[18px]'>Shipping and Return Policy</button>
           {/* Display total price of items */}
           <div className='mt-[100px]'>
      <p>Sub Total: ${totalItemsPrice.toFixed(2)}</p>

      {/* Display shipping fee */}
      <p>Shipping Fee: ${shippingFee.toFixed(2)}</p>

      {/* Display tax */}
      <p>Tax (10%): ${totalItemsPrice * taxRate.toFixed(2)}</p>

      {/* Display total cost */}
      <p>Total : ${totalCost.toFixed(2)}</p>
      </div>
      </div>
        </>
        
      )}
      <div className='md:ml-[100px] mt-[100px] '>
      <input type="text" 
      placeholder='Enter Voucher Code'
      className='w-[418px] h-[56px] flex-shrink-0 border border-solid border-[#9B9B9B66]'/>
      <button className='bg-[#F6F8F9] ml-[25px] w-[87px] h-[56px] justify-center text-[#000]  rounded inline-flex items-center border border-[#007074] border-solid'>Apply</button>
      </div>
      <button className='ml-[100px] mt-[140px] text-[#007074] text-[18px]'>Security and Privacy</button>
      <div className='flex w-full md:w-[90%] mt-[83px] md:ml-[100px] h-[80px] mb-[80px]  items-center border border-[#A8B6BF] border-solid'>
      <input
            type="checkbox"
            id="selectAll"
            className='rounded-lg'
          />
          <label htmlFor="selectAll" className="ml-2">
            Select All
          </label>
          <div className='flex ml-[100px] md:ml-[900px] justify-center items-center'>
      <p> ${totalCost.toFixed(2)}</p>
       <button className='bg-[#007074] w-[160px]  h-[56px] text-white px-4 py-2 rounded'
       onClick={handleCheckout}>Checkout</button></div>
       </div>
       <Footer/>
    </div>
  );
};

export default Cart;
