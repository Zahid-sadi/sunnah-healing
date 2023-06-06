import React from "react";

const ServiceCategory = ({service}) => {
    const {name, detail, img} = service;
    return (
        <div className="card w-96  shadow-xl  mx-auto bg-white">
            <figure><img className='w-full h-36' src={img} alt="" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{detail}</p>
            </div>
        </div>
    );
};

export default ServiceCategory;
