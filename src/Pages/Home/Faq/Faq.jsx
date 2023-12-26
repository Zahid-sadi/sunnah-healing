import React from "react";
import { Accordion, AccordionBody, AccordionHeader, AccordionItem } from "react-headless-accordion";

const Faq = () => {
    return (
        <div className="hero h-fit lg:h-[450px] bg--300 p-10  mx-auto">
            <div className="hero-content flex-col lg:flex-row-reverse mx-auto ">
                
                <div className="text-center h-[450px]  lg:text-left">
                    <h1 className=" text-4xl p-5 bg-blue-400 rounded-lg shadow-2xl mb-5  font-bold text-center  shadow-blue-600 ">Massage</h1>
                    <Accordion>
                    <AccordionItem>
                            <AccordionHeader className= " bg-blue-300 p-4 rounded-t-xl mb-2 w-full font-bold text-lg shadow-xl shadow-blue-600">
                                <h3 className={`accordion-title`}></h3>Massage kokhon korar boyos koto
                            </AccordionHeader>

                            <AccordionBody>
                                <div className="accordion-body rounded-b-xl bg-blue-100 p-4 mb-2">apni je kono boyosei hijama korte parben .  </div>
                            </AccordionBody>
                        </AccordionItem>
                    <AccordionItem>
                            <AccordionHeader className= " bg-blue-300 p-4 rounded-t-xl mb-2 w-full font-bold text-lg shadow-xl shadow-blue-600">
                                <h3 className={`accordion-title`}></h3>Massage kokhon korar boyos koto
                            </AccordionHeader>

                            <AccordionBody>
                                <div className="accordion-body rounded-b-xl bg-blue-100 p-4 mb-2">apni je kono boyosei hijama korte parben .  </div>
                            </AccordionBody>
                        </AccordionItem>
                    <AccordionItem>
                            <AccordionHeader className= " bg-blue-300 p-4 rounded-t-xl mb-2 w-full font-bold text-lg shadow-xl shadow-blue-600">
                                <h3 className={`accordion-title`}></h3>Massage kokhon korar boyos koto
                            </AccordionHeader>

                            <AccordionBody>
                                <div className="accordion-body rounded-b-xl bg-blue-100 p-4 mb-2">apni je kono boyosei hijama korte parben .  </div>
                            </AccordionBody>
                        </AccordionItem>

                      
                    </Accordion>
                </div>
                <div className="text-center h-[450px] lg:text-left">
                    <h1 className=" text-4xl p-5 bg-blue-400 rounded-lg shadow-2xl mb-5  font-bold text-center  shadow-blue-600 ">Ruqiya</h1>
                    <Accordion>
                    <AccordionItem>
                            <AccordionHeader className= " bg-blue-300 p-4 rounded-t-xl mb-2 w-full font-bold text-lg shadow-xl shadow-blue-600">
                                <h3 className={`accordion-title`}></h3>Ruqiya kokhon korar boyos koto
                            </AccordionHeader>

                            <AccordionBody>
                                <div className="accordion-body rounded-b-xl bg-blue-100 p-4 mb-2">apni je kono boyosei hijama korte parben .  </div>
                            </AccordionBody>
                        </AccordionItem>
                    <AccordionItem>
                            <AccordionHeader className= " bg-blue-300 p-4 rounded-t-xl mb-2 w-full font-bold text-lg shadow-xl shadow-blue-600">
                                <h3 className={`accordion-title`}></h3>Ruqiya kokhon korar boyos koto
                            </AccordionHeader>

                            <AccordionBody>
                                <div className="accordion-body rounded-b-xl bg-blue-100 p-4 mb-2">apni je kono boyosei hijama korte parben .  </div>
                            </AccordionBody>
                        </AccordionItem>
                    <AccordionItem>
                            <AccordionHeader className= " bg-blue-300 p-4 rounded-t-xl mb-2 w-full font-bold text-lg shadow-xl shadow-blue-600">
                                <h3 className={`accordion-title`}></h3>Ruqiya kokhon korar boyos koto
                            </AccordionHeader>

                            <AccordionBody>
                                <div className="accordion-body rounded-b-xl bg-blue-100 p-4 mb-2">apni je kono boyosei hijama korte parben .  </div>
                            </AccordionBody>
                        </AccordionItem>

                      
                    </Accordion>
                </div>
                <div className="text-center h-[450px] lg:text-left">
                    <h1 className=" text-4xl p-5 bg-blue-400 rounded-lg shadow-2xl mb-5  font-bold text-center  shadow-blue-600 ">Hijama</h1>
                    <Accordion>
                    <AccordionItem>
                            <AccordionHeader className= " bg-blue-300 p-4 rounded-t-xl mb-2 w-full font-bold text-lg shadow-xl shadow-blue-600">
                                <h3 className={`accordion-title`}></h3>hijama kokhon korar boyos koto
                            </AccordionHeader>

                            <AccordionBody>
                                <div className="accordion-body rounded-b-xl bg-blue-100 p-4 mb-2">apni je kono boyosei hijama korte parben .  </div>
                            </AccordionBody>
                        </AccordionItem>
                    <AccordionItem>
                            <AccordionHeader className= " bg-blue-300 p-4 rounded-t-xl mb-2 w-full font-bold text-lg shadow-xl shadow-blue-600">
                                <h3 className={`accordion-title`}></h3>hijama kokhon korar boyos koto
                            </AccordionHeader>

                            <AccordionBody>
                                <div className="accordion-body rounded-b-xl bg-blue-100 p-4 mb-2">apni je kono boyosei hijama korte parben .  </div>
                            </AccordionBody>
                        </AccordionItem>
                    <AccordionItem>
                            <AccordionHeader className= " bg-blue-300 p-4 rounded-t-xl mb-2 w-full font-bold text-lg shadow-xl shadow-blue-600">
                                <h3 className={`accordion-title`}></h3>hijama kokhon korar boyos koto
                            </AccordionHeader>

                            <AccordionBody>
                                <div className="accordion-body rounded-b-xl bg-blue-100 p-4 mb-2">apni je kono boyosei hijama korte parben .  </div>
                            </AccordionBody>
                        </AccordionItem>

                      
                    </Accordion>
                </div>
               
                
                
            </div>
        </div>
    );
};

export default Faq;
