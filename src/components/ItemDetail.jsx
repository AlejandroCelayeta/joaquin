import React, { useContext, useState } from 'react';
import {CartContext} from './context/CartContext';
import ItemCount from './ItemCount'; 
import './item.css'; 


export default function ItemDetail({ detalle }) {
    
    const { isInCart, addItem} = useContext(CartContext)

    const { nombre, imagen, precio, stock, detalles } = detalle

    const [dispo,setDispo]= useState(stock)

    const onAdd = (count, inicial) =>{
        if ( count < inicial ) {alert("Error, debe agregar productos al carrito.")
    }else{
        alert(`Se agregó ${count} productos al carrito correctamente.`)
        
        
    }

    isInCart(detalle.id)
    addItem(detalle, count)
}

   
    

    return (
        <>
        <div className="div-item">
        <h3 className='titulo-detalles text-center'>Detalles del Producto</h3>
        <div className="row row-cols-md-2 p-4 div-item">
            <div className="col">
                <div className="card text-center">
                    <img src={imagen} className="card-img-top" alt="imagen del libro" />
                    <div className="card-body">
                        <h5 className="text-nombre">{nombre}</h5>
                        <p className="text-detalles">Detalles: {detalles}</p>
                        <p className="text-precio" > Precio: ${precio}</p>
                        <p className="text-stock">Stock: {stock} unidades disponibles</p>
                        <ItemCount setDispo={setDispo} stock={dispo} inicial={1} onAdd={onAdd}/>
                    </div>
                </div>
            </div>
        </div>
        </div>
        </>
    )
}










