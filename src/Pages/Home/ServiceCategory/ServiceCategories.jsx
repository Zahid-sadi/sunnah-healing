import React from "react";
import ServiceCategory from "./ServiceCategory";

const servicesData = [
    {
        id: 1,
        name: "Hijama",
        img: "https://cdn2.stylecraze.com/wp-content/uploads/2022/04/Cupping-Therapy-Benefits-Side-Effects-And-More.jpg",
        detail: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
    },
    {
        id: 2,
        img: "https://runnerstribe.com/wp-content/uploads/2023/05/massage-scaled.jpg",
        name: "Message for male",
        detail: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
    },
    {
        id: 3,
        name: "Ruqiya",
        img: "https://user-images.githubusercontent.com/43304488/191869470-85b671cd-9d64-4c20-8818-6216407b09cb.png",
        detail: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
    },
];

const ServiceCategories = () => {
    return (
        <div className="mt-1">
           
            <div className=" grid gap-1 mx-auto lg:mx-28 md:gap-8 sm:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
                {servicesData.map((service) => (
                    <ServiceCategory key={service.id} service={service}></ServiceCategory>
                ))}
            </div>
        </div>
    );
};

export default ServiceCategories;
