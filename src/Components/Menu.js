import React, {useState} from 'react';
import Data from './Data';
import './Menu.css';

export const Menu = () => {
    const [items, setitems] = useState(Data);
    const filterItem =(cateItems)=>{
        const updateditems = Data.filter((curElem)=>{
            return curElem.Category === cateItems
        });

        setitems (updateditems);
    }
    return (
        <div>
            <h1 className="text-center my-3 p-3">Dining Menu</h1>
            <hr />
            <div className="d-flex justify-content-between container my-4">
                <button onClick={()=> setitems(Data)} className="btn btn-outline-primary">All</button>
                <button onClick={()=> filterItem('breakfast')} className="btn btn-outline-primary">Breakfast</button>
                <button onClick={()=> filterItem('lunch')} className="btn btn-outline-primary">Lunch</button>
                <button onClick={()=> filterItem('evening')} className="btn btn-outline-primary">Evening</button>
                <button onClick={()=> filterItem('dinner')} className="btn btn-outline-primary">Dinner</button>
                <button onClick={()=> filterItem('drinks')} className="btn btn-outline-primary">Drinks</button> 
            </div>
            <div className="container-fluid mt-5">
                <div className="row">

                        {
                            items.map((elem)=>{
                                const {name, img, desc, price, subdesc} = elem;
                                return(
                                    <div className="col-lg-4 col-md-6 col-sm-12">
                                        <div className="card my-3">
                                            <img src={img} className="card-img-top image_class" alt="image1"/>
                                            <div className="card-body">
                                                <div>
                                                    <h5 className="card-title">{name}</h5>
                                                    <p className="card-text">{desc}</p>
                                                </div>
                                                <div className="d-lg-flex justify-content-between mt-3">
                                                    <h4>Price : {price} </h4>
                                                    <a href="#" className="btn btn-primary">Order Now</a>
                                                    
                                                </div>
                                                <p className="mt-4">{subdesc}</p>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                </div>
            </div>
        </div>
    )
}
