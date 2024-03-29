// Import Swiper React components
import {Swiper, SwiperSlide} from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import img2 from "../assets/Images/hijama2.jpg";
import img3 from "../assets/Images/hijama3.jpg";
import img4 from "../assets/Images/therapy1.jpg";
import img5 from "../assets/Images/hijama4.jpg";
import img7 from "../assets/Images/hijama7.jpg";
import img8 from "../assets/Images/therapy2.png";

import {Autoplay, Navigation, Pagination} from "swiper";

const BannerCarousel = () => {
    
    return (
        <div className="h-screen w-full">
            <Swiper
                // slidesPerView={2}
                // spaceBetween={15}
                // direction={"vertical"}
                centeredSlides={true}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                loop={true}
                navigation={true}
                modules={[Autoplay, Navigation]}
                className="mySwiper"
            >
                
                <SwiperSlide>
                    <div className="hero h-screen w-screen  m-0  ">
                        <img
                            className="h-screen w-screen opacity-70 
        "
                            src={img7}
                            alt=""
                        />

                        {/* <div className="hero "></div> */}
                        <div className="  grid md:grid-cols-1 lg:grid-cols-2  ">
                            <div>
                                <h2 className="text-4xl text-center p-10 text-natural-focus  font-extrabold  italic   font-serif">
                                    Sunnah is the best way to leading life{" "}
                                </h2>
                            </div>
                            <div className=" animate-pulse ">
                                <p className=" text-xl shadow-sm text-white   mx-auto  p-10 ">
                                    Jabir ibn ‘Abd-Allah (may Allah be pleased with him) said: I heard the Messenger of
                                    Allah (peace and blessings of Allah be upon him) say: “If there is anything good in
                                    the medicines with which you treat yourselves, it is in the incision of the cupper,
                                    or a drink of honey or cauterization with fire, but I do not like to be cauterized.”
                                    (Narrated by al-Bukhari, 6583; Muslim, 2205).
                                </p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="hero h-screen w-full m-0  ">
                        <img
                            className="h-screen w-screen opacity-70 
        "
                            src={img2}
                            alt=""
                        />

                        {/* <div className="hero "></div> */}
                        <div className="  grid md:grid-cols-1 lg:grid-cols-2  ">
                            <div>
                                <h2 className="text-4xl text-center p-10   font-extrabold  italic font-serif">
                                    Sunnah is the best way to leading life{" "}
                                </h2>
                            </div>
                            <div className=" animate-pulse ">
                                <p className=" text-xl shadow-sm text-white   mx-auto  p-10 ">
                                    Jabir ibn ‘Abd-Allah (may Allah be pleased with him) said: I heard the Messenger of
                                    Allah (peace and blessings of Allah be upon him) say: “If there is anything good in
                                    the medicines with which you treat yourselves, it is in the incision of the cupper,
                                    or a drink of honey or cauterization with fire, but I do not like to be cauterized.”
                                    (Narrated by al-Bukhari, 6583; Muslim, 2205).
                                </p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="hero h-screen w-full m-0  ">
                        <img
                            className="h-screen w-screen opacity-70 
        "
                            src={img3}
                            alt=""
                        />

                        {/* <div className="hero "></div> */}
                        <div className="  grid md:grid-cols-1 lg:grid-cols-2  ">
                            <div>
                                <h2 className="text-4xl text-center p-10   text-natural-focus  font-extrabold  italic font-serif">
                                    Sunnah is the best way to leading life{" "}
                                </h2>
                            </div>
                            <div className=" animate-pulse ">
                                <p className=" text-xl shadow-sm text-white   mx-auto  p-10 ">
                                আবূ হুরাইরাহ (রাঃ) সূত্রে নাবী সাল্লাল্লাহু আলাইহি ওয়াসাল্লাম হতে বর্ণিত। তিনি বলেছেনঃ আল্লাহ এমন কোন রোগ পাঠাননি যার আরোগ্যের ব্যবস্থা দেননি। (আধুনিক প্রকাশনী- ৫২৬৭, ইসলামিক ফাউন্ডেশন- ৫১৬৩)
{/* 
Narrated Abu Huraira: The Prophet (ﷺ) said, "There is no disease that Allah has created, except that He also has created its treatment." */}
 
                                </p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="hero h-screen w-full m-0  ">
                        <img
                            className="h-screen w-screen opacity-70 
        "
                            src={img5}
                            alt=""
                        />

                        {/* <div className="hero "></div> */}
                        <div className="  grid md:grid-cols-1 lg:grid-cols-2  ">
                            <div>
                                <h2 className="text-4xl text-center p-10  text-natural-focus text-neutral-focus  font-extrabold  italic   font-serif">
                                    Sunnah is the best way to leading life{" "}
                                </h2>
                            </div>
                            <div className=" animate-pulse ">
                                <p className=" text-xl shadow-sm text-white   mx-auto  p-10 ">
                                ইবনু ‘আব্বাস (রাঃ)-এর সূত্রে নাবী সাল্লাল্লাহু আলাইহি ওয়াসাল্লাম হতে বর্ণিত। তিনি বলেনঃ রোগমুক্তি আছে তিনটি জিনিসে। শিঙ্গা লাগানোতে, মধু পানে এবং আগুন দিয়ে দাগ দেয়াতে। আমার উম্মাতকে আগুন দিয়ে দাগ দিতে নিষেধ করছি। [৫৬৮০] (আধুনিক প্রকাশনী- ৫২৭০, ইসলামিক ফাউন্ডেশন- ৫১৬৬)
{/* 
Narrated Ibn `Abbas: The Prophet (ﷺ) said, "Healing is in three things: cupping, a gulp of honey or cauterization, (branding with fire) but I forbid my followers to use cauterization (branding with fire)الْكَيِّ */}
                                </p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
               
                <SwiperSlide>
                    <div className="hero h-screen w-full m-0  ">
                        <img
                            className="h-screen w-screen opacity-70 
        "
                            src={img7}
                            alt=""
                        />

                        {/* <div className="hero "></div> */}
                        <div className="  grid md:grid-cols-1 lg:grid-cols-2  ">
                            <div>
                                <h2 className="text-4xl text-center p-10  text-natural-focus  font-extrabold  italic   font-serif">
                                    Sunnah is the best way to leading life{" "}
                                </h2>
                            </div>
                            <div className=" animate-pulse ">
                                <p className=" text-xl shadow-sm text-white   mx-auto  p-10 ">
                                আনাস (রাঃ) হতে বর্ণিত যে, তাঁকে শিঙ্গা লাগানোর পারিশ্রমিক দেয়ার ব্যাপারে প্রশ্ন করা হয়েছিল। তখন তিনি বলেনঃ রাসূলুল্লাহ সাল্লাল্লাহু আলাইহি ওয়াসাল্লাম শিঙ্গা লাগিয়েছেন। আবূ তাইবা তাঁকে শিঙ্গা লাগায়। এরপর তিনি তাকে দু সা‘ খাদ্যবস্তু প্রদান করেন। সে তার মালিকের সঙ্গে এ সম্পর্কে কথা বললে, তারা তাঁর থেকে পারিশ্রমিক কমিয়ে দেয়। নাবী সাল্লাল্লাহু আলাইহি ওয়াসাল্লাম আরো বলেনঃ তোমরা যে সব জিনিস দিয়ে চিকিৎসা কর, সেগুলোর মধ্যে সবচেয়ে উত্তম হল শিঙ্গা লাগানো এবং সামুদ্রিক চন্দন কাঠ। তিনি আরো বলেছেনঃ তোমরা তোমাদের বাচ্চাদের জিহবা, তালু টিপে কষ্ট দিও না। বরং তোমরা চন্দন কাঠ দিয়ে চিকিৎসা কর। [২১০২] (আধুনিক প্রকাশনী- ৫২৮৪, ইসলামিক ফাউন্ডেশন- ৫১৮০) <br />

                                </p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="hero h-screen w-full m-0  ">
                        <img
                            className="h-screen w-screen opacity-70 
        "
                            src={img8}
                            alt=""
                        />

                        {/* <div className="hero "></div> */}
                        <div className="  grid md:grid-cols-1 lg:grid-cols-2  ">
                            <div>
                                <h2 className="text-4xl text-center p-10   text-black font-extrabold  italic   font-serif">
                                    Sunnah is the best way to leading life{" "}
                                </h2>
                            </div>
                            <div className=" animate-pulse">
                                <p className=" text-xl shadow-sm text-white   mx-auto  p-10 ">
                                আসিম ইবনু ‘উমার ইবনু ক্বাতাদাহ (রহঃ) হতে বর্ণিত যে, জাবির ইবনু ‘আবদুল্লাহ (রাঃ) অসুস্থ মুকান্নাকে দেখতে যান। এরপর তিনি বলেনঃ আমি হটব না, যতক্ষণ না তুমি শিঙ্গা লাগাবে। কেননা, আমি রাসূলুল্লাহ সাল্লাল্লাহু আলাইহি ওয়াসাল্লাম-কে বলতে শুনেছিঃ নিশ্চয় এতে আছে নিরাময়। [৫৬৮৩] (আধুনিক প্রকাশনী- ৫২৮৫, ইসলামিক ফাউন্ডেশন- ৫১৮১) <br />
{/* 
Narrated Jabir bin `Abdullah: that he paid Al-Muqanna a visit during his illness and said, "I will not leave till he gets cupped, for I heard Allah's Messenger (ﷺ) saying, "There is healing in cupping." */}
                                </p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="hero h-screen w-full m-0  ">
                        <img
                            className="h-screen w-screen opacity-70 
        "
                            src={img4}
                            alt=""
                        />

                        {/* <div className="hero "></div> */}
                        <div className="  grid md:grid-cols-1 lg:grid-cols-2  ">
                            <div>
                                <h2 className="text-4xl text-center p-10  text-natural-focus  font-extrabold  italic   font-serif">
                                    Sunnah is the best way to leading life{" "}
                                </h2>
                            </div>
                            <div className=" animate-pulse">
                                <p className=" text-xl shadow-sm text-white   mx-auto  p-10 ">
                                আবদুল্লাহ ইবনু বুহাইনা (রাঃ) হতে বর্ণিত। রাসূলুল্লাহ সাল্লাল্লাহু আলাইহি ওয়াসাল্লাম ইহরাম বাঁধা অবস্থায় মক্কার পথে ‘লাহয়ী জামাল’ নামীয় জায়গায় তাঁর মাথার মাঝখানে শিঙ্গা লাগান। (আধুনিক প্রকাশনী- ৫২৮৬, ইসলামিক ফাউন্ডেশন- ৫১৮২) <br />

Narrated `Abdullah bin Buhaina: Allah's Messenger (ﷺ) was cupped on the middle of his head at Lahl Jamal on his way to Mecca while he was in a state of Ihram. 
                                </p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                
            </Swiper>
        </div>
    );
};

export default BannerCarousel;
