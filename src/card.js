import React from "react";

export default function Card(props){
    return(
        <div class="col mb-5">
                        <div class="card h-100">
                            {
                                (props.data.type == "Sale Item" || props.data.type == "Special Item") ? <div class="badge bg-dark text-white position-absolute" >Sale</div> : ""
                            }
                            <img class="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                            
                            <div class="card-body p-4">
                                <div class="text-center">
                                    <h5 class="fw-bolder">{props.data.type}</h5>
                                    {
                                        (props.data.type == "Special Item" || props.data.type == "Popular Item") ?<div class="d-flex justify-content-center small text-warning mb-2">
                                        <div class="bi-star-fill"></div>
                                        <div class="bi-star-fill"></div>
                                        <div class="bi-star-fill"></div>
                                        <div class="bi-star-fill"></div>
                                        <div class="bi-star-fill"></div>
                                        </div>:""
                                    }
                                    {
                                        props.data.type == "Fancy Product"?
                                        "$" + props.data.price[0] + " - " + "$" + props.data.price[1]:(((props.data.type == "Sale Item") || (props.data.type == "Special Item")) ? 
                                        <div>
                                        <span class="text-muted text-decoration-line-through">${props.data.price[0]}</span>
                                        {" $" + props.data.price[1]}
                                        </div>
                                        : "$" + props.data.price[0])
                                    }                                
                                </div>
                            </div>
                           
                            <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div class="text-center">
                                    <button type="button" class="btn btn-dark" onClick={() => {props.addcart(props.data.id)}} disabled={props.data.count ? true:false}>Add</button>
                                    <button type="button" class="btn btn-danger" onClick={() => {props.delcart(props.data.id)}} disabled={!props.data.count ? true:false}>Remove</button>
                                </div>
                            </div>
                        </div>
                    </div>
    )
}