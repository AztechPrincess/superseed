import React from "react";
import Navbar from "./Navbar";

const Landing = () => {

    return (
        <>
        <Navbar/>
        <section className="relative w-full h-full py-8 overflow-hidden bg-white sm:py-12 md:py-20 lg:py-32 tails-selected-element">
            <img alt="" src="https://cdn.devdojo.com/images/march2021/bg-gradient.png" className="absolute left-0 object-cover w-full h-full opacity-50 sm:opacity-100"></img>
            <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent to-white"></div>
            <div className="relative flex flex-col items-center justify-start h-full mx-auto px-14 max-w-7xl lg:flex-row">
                <div className="relative z-10 w-full h-full lg:w-1/2 xl:pr-12 2xl:pr-24">
                    <div className="flex flex-col items-start justify-center h-full pt-12 lg:pt-0">
                        <h1 className="max-w-lg mx-auto text-4xl font-bold tracking-tight text-center text-gray-700 lg:mx-0 sm:text-5xl lg:text-6xl lg:text-left">
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">Supercharge </span>
                            your investing strategy while dollar cost averaging. 
                        </h1>
                        <p className="max-w-md mx-auto mt-4 text-center text-gray-500 lg:mx-0 lg:text-left">Learn, Buy, Sell and Invest in Crypto Assets easily and safely with SuperSeed. You can also learn about investing within our community!</p>
                        <div className="max-w-lg mx-auto lg:mx-0">
                            <div className="flex items-center justify-center w-full my-6 space-x-2 lg:justify-start sm:space-x-6 lg:my-12">
                                <a href="#_" className="px-4 py-3 text-sm font-bold tracking-tight text-white transition duration-200 transform rounded-lg shadow-2xl sm:px-6 bg-gradient-to-tr from-green-500 to-green-300 sm:text-lg hover:scale-105">Start Investing Today!</a>
                                <a href="#_" className="flex items-center justify-start px-4 py-3 text-sm font-bold tracking-tight text-black transition duration-200 rounded-lg sm:px-6 sm:text-lg group hover:text-blue-500">
                                    <svg className="w-6 mr-2 text-black transition duration-200 fill-current group-hover:scale-125 group-hover:text-blue-500" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.26587 8.87988H2.26587V20.8799C2.26587 21.4103 2.47658 21.919 2.85166 22.2941C3.22673 22.6692 3.73544 22.8799 4.26587 22.8799H16.2659V20.8799H4.26587V8.87988Z"></path><path d="M20.2659 2.87988H8.26587C7.73544 2.87988 7.22673 3.0906 6.85166 3.46567C6.47658 3.84074 6.26587 4.34945 6.26587 4.87988V16.8799C6.26587 17.4103 6.47658 17.919 6.85166 18.2941C7.22673 18.6692 7.73544 18.8799 8.26587 18.8799H20.2659C20.7963 18.8799 21.305 18.6692 21.6801 18.2941C22.0552 17.919 22.2659 17.4103 22.2659 16.8799V4.87988C22.2659 4.34945 22.0552 3.84074 21.6801 3.46567C21.305 3.0906 20.7963 2.87988 20.2659 2.87988ZM11.2659 14.8799V6.87988L18.2659 10.8799L11.2659 14.8799Z"></path></svg>
                                    Watch Demo
                                </a>
                            </div>
                            <div className="hidden grid-cols-3 gap-8 sm:grid">
                                <div className="col-span-1 text-center lg:text-left">
                                    <h4 className="text-3xl font-bold tracking-tight text-transparent lg:text-4xl bg-clip-text bg-gradient-to-r from-blue-300 to-blue-500">DCA into</h4>
                                    <p className="text-sm font-semibold text-black">All Tokens Supported</p>
                                </div>
                                <div className="col-span-1 text-center lg:text-left">
                                    <h4 className="text-3xl font-bold tracking-tight text-transparent lg:text-4xl bg-clip-text bg-gradient-to-r from-blue-300 to-blue-500">Earn</h4>
                                    <p className="text-sm font-semibold text-black">NFT Rewards</p>
                                </div>
                                <div className="col-span-1 text-center lg:text-left">
                                    <h4 className="text-3xl font-bold tracking-tight text-transparent lg:text-4xl bg-clip-text bg-gradient-to-r from-blue-300 to-blue-500">Donate</h4>
                                    <p className="text-sm font-semibold text-black">To Public Goods</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="relative z-10 w-full h-full px-10 pb-32 mt-16 lg:w-1/2 md:px-20 lg:px-5 xl:px-0 lg:pb-0 lg:mt-0 group">

                    <div className="relative flex items-center justify-center w-full h-full">
                        <div className="relative w-full h-auto md:h-full lg:h-auto">
                            <img alt="" className="absolute right-0 z-10 object-cover object-center w-32 -mt-8 -mr-8 transition duration-300 transform rounded-md shadow-2xl md:w-40 lg:w-40 lg:top-0 lg:-mt-16 md:-mr-16 lg:-mr-6 md:rounded-lg lg:rounded-xl group-hover:scale-105" src="https://cdn.devdojo.com/images/september2021/payment.png"></img>
                            <img alt="" className="absolute bottom-0 left-0 z-10 object-cover object-center w-24 -mb-12 -ml-4 transition duration-300 transform rounded-md shadow-2xl md:w-32 lg:w-32 xl:w-40 md:-ml-12 md:rounded-lg lg:rounded-xl group-hover:scale-95" src="https://cdn.devdojo.com/images/september2021/chart.png"></img>
                            <div className="relative w-full h-auto overflow-hidden transition duration-300 transform shadow-lg rounded-xl group-hover:scale-95">
                                <img alt="" className="w-full" src="https://cdn.devdojo.com/images/september2021/dashboard.png" ></img>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    );
}

export default Landing;