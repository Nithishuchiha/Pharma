// src/App.js
import React, { useState } from 'react';
import MedicationList from './medicine';
import Invoice from './invoice';
const Main = () => {
  const [medications, setMedications] = useState([
    { id: 1, name: 'PARACETOMOL', price: 10,des:'Paracetamol is a commonly used medicine that can help treat pain and reduce a high temperature (fever).',img:'https://5.imimg.com/data5/SELLER/Default/2022/9/QR/AF/MV/69966959/paracip-paracetamol-650-tablet-500x500.jpg' },
    { id: 2, name: 'VOLINI', price: 15,des:'Paracetamol is a commonly used medicine that can help treat pain and reduce a high temperature (fever).',img:'https://static2.medplusmart.com/products/VOLI0034_L.jpg' },
    { id: 2, name: 'VOLINI', price: 15,des:'Paracetamol is a commonly used medicine that can help treat pain and reduce a high temperature (fever).',img:'https://static2.medplusmart.com/products/VOLI0034_L.jpg' },
    { id: 1, name: 'PARACETOMOL', price: 10,des:'Paracetamol is a commonly used medicine that can help treat pain and reduce a high temperature (fever).',img:'https://5.imimg.com/data5/SELLER/Default/2022/9/QR/AF/MV/69966959/paracip-paracetamol-650-tablet-500x500.jpg' },
    { id: 2, name: 'VOLINI', price: 15,des:'Paracetamol is a commonly used medicine that can help treat pain and reduce a high temperature (fever).',img:'https://static2.medplusmart.com/products/VOLI0034_L.jpg' },
    { id: 2, name: 'VOLINI', price: 15,des:'Paracetamol is a commonly used medicine that can help treat pain and reduce a high temperature (fever).',img:'https://static2.medplusmart.com/products/VOLI0034_L.jpg' },
    { id: 1, name: 'PARACETOMOL', price: 10,des:'Paracetamol is a commonly used medicine that can help treat pain and reduce a high temperature (fever).',img:'https://5.imimg.com/data5/SELLER/Default/2022/9/QR/AF/MV/69966959/paracip-paracetamol-650-tablet-500x500.jpg' },
    { id: 2, name: 'VOLINI', price: 15,des:'Paracetamol is a commonly used medicine that can help treat pain and reduce a high temperature (fever).',img:'https://static2.medplusmart.com/products/VOLI0034_L.jpg' },
    { id: 2, name: 'VOLINI', price: 15,des:'Paracetamol is a commonly used medicine that can help treat pain and reduce a high temperature (fever).',img:'https://static2.medplusmart.com/products/VOLI0034_L.jpg' },
    // Add more medications
  ]);

  const [cart, setCart] = useState([]);

  const addToCart = (medication) => {
    setCart([...cart, medication]);
  };

  return (
    <div>
      <MedicationList medications={medications} addToCart={addToCart} />
      <Invoice cart={cart} />
    </div>
  );
};

export default Main
