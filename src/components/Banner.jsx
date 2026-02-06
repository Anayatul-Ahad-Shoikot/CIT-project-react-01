import heroImage from "../assets/hero-img.png";

import professionals from "../assets/professionals.png";
import customers from "../assets/customers.png";
import years from "../assets/years.png";

const Banner = () => {
    return (
        <div className="wrapper bg-[url('./assets/banner-img.png')] bg-cover bg-no-repeat overflow-x-clip pb-[50px] pt-[80px] md:pt-0 gap-10 md:gap-0">
            <div className="sectionContent flex flex-col items-center justify-center md:flex-row md:h-screen">
                <div className="w-full mb-10 md:mb-0 md:min-w-[580px]">
                    <p className="font-raleway font-medium md:font-bold text-white md:text-lg tracking-[0.9px] leading-[22.3px] mb-[11px]">
                        Business &amp; Technologies
                    </p>
                    <h1 className="font-raleway text-white font-bold text-[40px] leading-[120%] md:text-[52px] md:leading-[62px] mb-5 md:mb-[44px]">
                        We help tech
                        <br />
                        companies deliver
                        <br />
                        great software
                    </h1>
                    <p className="font-raleway text-[16px] text-white leading-[150%] mb-5 md:mb-[44px]">
                        Since 1999. For millions of users. We transform
                        businesses with powerful and
                        <br />
                        adaptable digital solutions that satisfy the needs of
                        today and unlock the
                        <br />
                        opportunities of tomorrow.
                    </p>
                    <form className="w-full flex items-center justify-start h-[50px] md:h-[60px]">
                        <input
                            type="text"
                            className="bg-white border-0 outline-0 rounded-tl-[8px] rounded-bl-[8px] h-full w-[100%]"
                        />
                        <button className="font-raleway text-white font-medium md:font-semibold text-[14px] md:text-[16px] md:px-[25px] bg-primarySkyblue h-full border-0 outline-0 rounded-tr-[8px] rounded-br-[8px] md:max-w-[200px] w-[75%] md:w-[100%]">
                            Request for Demo
                        </button>
                    </form>
                </div>
                <div className="relative w-full md:min-w-[350px] md:h-full">
                    <div className="md:absolute md:top-1/2 md:left-1/2 md:transform md:-translate-x-[30%] md:-translate-y-1/2 md:w-[756px] h-auto">
                        <img src={heroImage} alt="dashboard screenshot" />
                    </div>
                </div>
            </div>
            <div className="sectionContent flex flex-col w-full rounded-xl bg-white shadow-[0px_7px_40px_rgba(0,0,0,0.1)] p-8 md:p-12.5">
                <div className="flex flex-col gap-10 md:flex-row justify-between items-center pb-10 border-b border-[#112f421f]">
                    <div>
                        <p className="font-raleway text-primarySkyblue text-[14px] leading-[17.3px] tracking-[0.28px] font-medium md:font-bold mb-2 md:mb-4.25">
                            Who we are?
                        </p>
                        <h2 className="font-raleway text-textBlue font-bold text-3xl md:text-[36px] leading-[120%]">
                            More than 5,000 users around the world are
                            <br />
                            already using STDEV actively
                        </h2>
                    </div>
                    <div className="bg-[#CFDDDB] p-5 md:p-9 rounded-2.5 flex flex-col items-center justify-center gap-2.5 md:min-w-44.5 md:min-h-46.5">
                        <h2 className="font-inter text-textBlue font-bold md:leading-[120%] tracking-[2.5px] text-[25px] md:text-[50px]">
                            4.8
                        </h2>
                        <div className="flex gap-1">
                            <img src="/star.png" />
                            <img src="/star.png" />
                            <img src="/star.png" />
                            <img src="/star.png" />
                            <img src="/star.png" />
                        </div>
                        <p className="font-inter text-[12px] md:text-[16px] leading-[27.2px] text-[#495E6C]">
                            35 Reviews
                        </p>
                    </div>
                </div>
                <div className="flex flex-col gap-10 md:flex-row md:gap-5 justify-between mt-[25px]">
                    <div className="flex items-center gap-[20px]">
                        <img src={professionals} width={75} height={75} />
                        <div>
                            <h2 className="font-inter text-primarySkyblue font-bold text-[22px] md:text-[30px] md:leading-10 tracking-[1.5px]">
                                70+
                            </h2>
                            <p className="font-inter text-[16px] md:leading-[27.2px] text-[#495E6C] font-medium">
                                Professionals
                            </p>
                        </div>
                    </div>
                    <div className="flex items-center gap-[20px]">
                        <img src={years} width={75} height={75} />
                        <div>
                            <h2 className="font-inter text-primarySkyblue font-bold text-[22px] md:text-[30px] md:leading-10 t tracking-[1.5px]">
                                22 Years
                            </h2>
                            <p className="font-inter text-[16px] md:leading-[27.2px] text-[#495E6C] font-medium">
                                Year of experience
                            </p>
                        </div>
                    </div>
                    <div className="flex items-center gap-[20px]">
                        <img src={customers} width={75} height={75} />
                        <div>
                            <h2 className="font-inter text-primarySkyblue font-bold text-[22px] md:text-[30px] md:leading-10 t tracking-[1.5px]">
                                $40+ M
                            </h2>
                            <p className="font-inter text-[16px] md:leading-[27.2px] text-[#495E6C] font-medium">
                                Fundraised by customers
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
