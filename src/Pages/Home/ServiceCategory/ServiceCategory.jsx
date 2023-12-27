import React from "react";

const ServiceCategory = ({service}) => {
    const {name, detail, img} = service;
    return (
        <div className="card w-96 lg:-mt-44  md:mt-5 sm:mt-5 shadow-md shadow-sky-500 mx-auto">
            <figure><img className='w-full h-36 ' src={img} alt="" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{detail}</p>
            </div>
        </div>
    );
};

export default ServiceCategory;
