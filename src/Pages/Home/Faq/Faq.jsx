import React from "react";
import { Accordion, AccordionBody, AccordionHeader, AccordionItem } from "react-headless-accordion";

const Faq = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse m-auto  ">
                
                <div className="text-center lg:text-left">
                    <h1 className=" text-4xl p-5 bg-slate-400 rounded-lg shadow-2xl mb-5  font-bold">Hijama FAQ</h1>
                    <Accordion>
                    <AccordionItem>
                            <AccordionHeader className= " bg-blue-400 p-4 rounded-t-xl mb-2 w-full">
                                <h3 className={`accordion-title`}>Title 1</h3>
                            </AccordionHeader>

                            <AccordionBody>
                                <div className="accordion-body rounded-b-xl bg-blue-200 p-4 mt-2">Lorem ipsum dolor sit amet. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia odio molestias, dolore praesentium esse facilis tenetur itaque numquam quaerat ratione a optio possimus </div>
                            </AccordionBody>
                        </AccordionItem>

                        <AccordionItem>
                            <AccordionHeader className= " bg-blue-400 p-4 rounded-t-xl mb-2 w-full">
                                <h3 className={`accordion-title`}>Title 1</h3>
                            </AccordionHeader>

                            <AccordionBody>
                                <div className="accordion-body rounded-b-xl bg-blue-200 p-4 mt-2">Lorem ipsum dolor sit amet. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia odio molestias, dolore praesentium esse facilis tenetur itaque numquam quaerat ratione a optio possimus </div>
                            </AccordionBody>
                        </AccordionItem>
                    </Accordion>
                </div>
                <div className="text-center lg:text-left">
                    <h1 className=" text-4xl p-5 bg-slate-400 rounded-lg shadow-2xl mb-5  font-bold">Ruqiya FAQ</h1>
                    <Accordion>
                    <AccordionItem>
                            <AccordionHeader className= " bg-blue-400 p-4 rounded-t-xl mb-2 w-full">
                                <h3 className={`accordion-title`}>Title 1</h3>
                            </AccordionHeader>

                            <AccordionBody>
                                <div className="accordion-body rounded-b-xl bg-blue-200 p-4 mt-2">Lorem ipsum dolor sit amet. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia odio molestias, dolore praesentium esse facilis tenetur itaque numquam quaerat ratione a optio possimus </div>
                            </AccordionBody>
                        </AccordionItem>

                        <AccordionItem>
                            <AccordionHeader className= " bg-blue-400 p-4 rounded-t-xl mb-2 w-full">
                                <h3 className={`accordion-title`}>Title 1</h3>
                            </AccordionHeader>

                            <AccordionBody>
                                <div className="accordion-body rounded-b-xl bg-blue-200 p-4 mt-2">Lorem ipsum dolor sit amet. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia odio molestias, dolore praesentium esse facilis tenetur itaque numquam quaerat ratione a optio possimus </div>
                            </AccordionBody>
                        </AccordionItem>
                    </Accordion>
                </div>
                <div className="text-center lg:text-left">
                    <h1 className=" text-4xl p-5 bg-slate-400 rounded-lg shadow-2xl mb-5  font-bold">Massage FAQ</h1>
                    <Accordion>
                    <AccordionItem>
                            <AccordionHeader className= " bg-blue-400 p-4 rounded-t-xl mb-2 w-full">
                                <h3 className={`accordion-title`}>Title 1</h3>
                            </AccordionHeader>

                            <AccordionBody>
                                <div className="accordion-body rounded-b-xl bg-blue-200 p-4 mt-2">Lorem ipsum dolor sit amet. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia odio molestias, dolore praesentium esse facilis tenetur itaque numquam quaerat ratione a optio possimus </div>
                            </AccordionBody>
                        </AccordionItem>

                        <AccordionItem>
                            <AccordionHeader className= " bg-blue-400 p-4 rounded-t-xl mb-2 w-full">
                                <h3 className={`accordion-title`}>Title 1</h3>
                            </AccordionHeader>

                            <AccordionBody>
                                <div className="accordion-body rounded-b-xl bg-blue-200 p-4 mt-2">Lorem ipsum dolor sit amet. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia odio molestias, dolore praesentium esse facilis tenetur itaque numquam quaerat ratione a optio possimus </div>
                            </AccordionBody>
                        </AccordionItem>
                    </Accordion>
                </div>
                
            </div>
        </div>
    );
};

export default Faq;
