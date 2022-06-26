import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./itemcount.css";


export default function ItemCount ({ inicial, dispo, onAdd, setStock }){
    

    const [count, setCount] = useState(inicial)
    const [botonActivo, setBotonActivo] = useState(true)
    

    const menu = (e) => {
        if(e.target.textContent === "Agregar al carrito"){
            setBotonActivo(false)
        } 
    }

    const sumar = () =>{
        if (count === inicial) setCount(count + 1) 
        if (count < dispo) setCount(count + 1)
           
    }


    const restar = () =>{
        if ( count > inicial) {setCount(count - 1)}
    }

    const reset = () => {
        setCount(inicial)
    }

    const carritoCompras = () => {
        if ( count => inicial ) {setCount(carrito)}
    }


    function carrito (){
        return <Link to="/cart"><button className='btn btn-warning fw-bold p-2 m-2'>Ver carrito de compras</button></Link>
    }


    
    return(
    <>
        <div className="text-center div-card">
            <div className="card-body-counter">
                <Link to="/home"><button className='btn btn-warning fw-bold p-2 m-2'>Volver a la librería</button></Link>
                <p className="contador">{count}</p>
                <div className='button-display'>
                <button onClick={restar} className="button-subtract">-</button>
                <button  disabled={!botonActivo}  onClick={(e) => {onAdd(count); reset();  carritoCompras(); menu(e); setStock(dispo - count); console.log(dispo) }} className="button-agregar">Agregar al carrito</button>
                <button onClick={sumar} className="button-add">+</button>
                <button disabled={!botonActivo} onClick={reset} className="button-reset">Reset</button>
                </div>
            </div>
        </div>
    </>
    )
}
    




