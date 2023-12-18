import React from "react";
import { Accordion, AccordionBody, AccordionHeader, AccordionItem } from "react-headless-accordion";

const Faq = () => {
    return (
        <div className="hero h-[450px] bg-blue-300 p-10  mx-auto">
            <div className="hero-content flex-col lg:flex-row-reverse mx-auto  ">
                
                <div className="text-center h-full lg:text-left">
                    <h1 className=" text-4xl p-5 bg-green-300 rounded-lg shadow-2xl mb-5  font-bold  ">Hijama FAQ</h1>
                    <Accordion>
                    <AccordionItem>
                            <AccordionHeader className= " bg-blue-400 p-4 rounded-t-xl mb-2 w-full font-bold text-lg">
                                <h3 className={`accordion-title`}></h3>hijama kokhon korar boyos koto
                            </AccordionHeader>

                            <AccordionBody>
                                <div className="accordion-body rounded-b-xl bg-blue-200 p-4 mb-2">apni je kono boyosei hijama korte parben .  </div>
                            </AccordionBody>
                        </AccordionItem>

                        <AccordionItem>
                            <AccordionHeader className= " bg-blue-400 p-4  mb-2 w-full font-bold text-lg">
                                <h3 className={`accordion-title`}>hijma korle ki blooding hoy </h3>
                            </AccordionHeader>

                            <AccordionBody>
                                <div className="accordion-body rounded-b-xl bg-blue-200 p-4 mb-2">hijamr onek dhoron ache jemon dry fire cupping etc je khane blooding hoyna </div>
                            </AccordionBody>
                        </AccordionItem>
                        <AccordionItem>
                            <AccordionHeader className= " bg-blue-400 p-4 rounded-b-xl mb-2 w-full font-bold text-lg">
                                <h3 className={`accordion-title`}>hijma korle ki blooding hoy </h3>
                            </AccordionHeader>

                            <AccordionBody>
                                <div className="accordion-body rounded-b-xl bg-blue-200 p-4 mb-2">hijamr onek dhoron ache jemon dry fire cupping etc je khane blooding hoyna </div>
                            </AccordionBody>
                        </AccordionItem>
                    </Accordion>
                </div>
                <div className="text-center h-full lg:text-left">
                    <h1 className=" text-4xl p-5 bg-green-300 rounded-lg shadow-2xl mb-5  font-bold  ">Ruqiya FAQ</h1>
                    <Accordion>
                    <AccordionItem>
                            <AccordionHeader className= " bg-blue-400 p-4 rounded-t-xl mb-2 w-full font-bold text-lg">
                                <h3 className={`accordion-title`}></h3>Ruqiya kokhon korar boyos koto
                            </AccordionHeader>

                            <AccordionBody>
                                <div className="accordion-body rounded-b-xl bg-blue-200 p-4 mb-2">apni je kono boyosei hijama korte parben .  </div>
                            </AccordionBody>
                        </AccordionItem>

                        <AccordionItem>
                            <AccordionHeader className= " bg-blue-400 p-4 mb-2 w-full font-bold text-lg">
                                <h3 className={`accordion-title`}>hijma korle ki blooding hoy </h3>
                            </AccordionHeader>

                            <AccordionBody>
                                <div className="accordion-body rounded-b-xl bg-blue-200 p-4 mb-2">hijamr onek dhoron ache jemon dry fire cupping etc je khane blooding hoyna </div>
                            </AccordionBody>
                        </AccordionItem>
                        <AccordionItem>
                            <AccordionHeader className= " bg-blue-400 p-4 rounded-b-xl mb-2 w-full font-bold text-lg">
                                <h3 className={`accordion-title`}>hijma korle ki blooding hoy </h3>
                            </AccordionHeader>

                            <AccordionBody>
                                <div className="accordion-body rounded-b-xl bg-blue-200 p-4 mb-2">hijamr onek dhoron ache jemon dry fire cupping etc je khane blooding hoyna </div>
                            </AccordionBody>
                        </AccordionItem>
                    </Accordion>
                </div>
                <div className="text-center h-full lg:text-left">
                    <h1 className=" text-4xl p-5 bg-green-300 rounded-lg shadow-2xl mb-5  font-bold ">Massage FAQ</h1>
                    <Accordion>
                    <AccordionItem>
                            <AccordionHeader className= " bg-blue-400 p-4 rounded-t-xl mb-2 w-full font-bold text-lg">
                                <h3 className={`accordion-title`}></h3>Massage kokhon korar boyos koto
                            </AccordionHeader>

                            <AccordionBody>
                                <div className="accordion-body rounded-b-xl bg-blue-200 p-4 mb-2">apni je kono boyosei hijama korte parben .  </div>
                            </AccordionBody>
                        </AccordionItem>

                        <AccordionItem>
                            <AccordionHeader className= " bg-blue-400 p-4  mb-2 w-full font-bold text-lg">
                                <h3 className={`accordion-title`}>hijma korle ki blooding hoy </h3>
                            </AccordionHeader>

                            <AccordionBody>
                                <div className="accordion-body rounded-b-xl bg-blue-200 p-4 mb-2">hijamr onek dhoron ache jemon dry fire cupping etc je khane blooding hoyna </div>
                            </AccordionBody>
                        </AccordionItem>
                        <AccordionItem>
                            <AccordionHeader className= " bg-blue-400 p-4 rounded-b-xl mb-2 w-full font-bold text-lg">
                                <h3 className={`accordion-title`}>hijma korle ki blooding hoy </h3>
                            </AccordionHeader>

                            <AccordionBody>
                                <div className="accordion-body rounded-b-xl bg-blue-200 p-4 mb-2">hijamr onek dhoron ache jemon dry fire cupping etc je khane blooding hoyna </div>
                            </AccordionBody>
                        </AccordionItem>
                    </Accordion>
                </div>
                
                
            </div>
        </div>
    );
};

export default Faq;
