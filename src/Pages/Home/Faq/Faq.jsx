import React from "react";
import { Accordion, AccordionBody, AccordionHeader, AccordionItem } from "react-headless-accordion";

const Faq = () => {
    return (
        <div className="hero h-fit bg-blue-300 p-10">
            <div className="hero-content flex-col lg:flex-row-reverse m-auto  ">
                
                <div className="text-center lg:text-left">
                    <h1 className=" text-4xl p-5 bg-slate-400 rounded-lg shadow-2xl mb-5  font-bold  animate__heartBeat">Hijama FAQ</h1>
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
                            <AccordionHeader className= " bg-blue-400 p-4 rounded-t-xl mb-2 w-full font-bold text-lg">
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
                <div className="text-center lg:text-left">
                    <h1 className=" text-4xl p-5 bg-slate-400 rounded-lg shadow-2xl mb-5  font-bold animate__heartBeat">Ruqiya FAQ</h1>
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
                            <AccordionHeader className= " bg-blue-400 p-4 rounded-t-xl mb-2 w-full font-bold text-lg">
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
                <div className="text-center lg:text-left">
                    <h1 className=" text-4xl p-5 bg-slate-400 rounded-lg shadow-2xl mb-5  font-bold animate__heartBeat">Massage FAQ</h1>
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
                            <AccordionHeader className= " bg-blue-400 p-4 rounded-t-xl mb-2 w-full font-bold text-lg">
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
