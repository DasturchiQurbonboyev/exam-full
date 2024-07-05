import React from 'react'

const LoadingSinlePage = () => {
    return (
        <div className="pt-[60px]">
            <section className="relative kontainer">
                <div className="grid min-[750px]:grid-cols-2 items-start gap-16 mx-auto max-md:px-2 animate-pulse">
                    <div className="img flex max-[920px]:flex-col-reverse gap-5">
                        <div className="mb-8 flex min-[920px]:flex-col justify-between min-[350px]:gap-4">
                            <div className="w-[60px] h-[60px] bg-gray-200 rounded-[15px]"></div>
                            <div className="w-[60px] h-[60px] bg-gray-200 rounded-[15px]"></div>
                            <div className="w-[60px] h-[60px] bg-gray-200 rounded-[15px]"></div>
                            <div className="w-[60px] h-[60px] bg-gray-200 rounded-[15px]"></div>
                        </div>
                        <div className="flex w-full justify-center items-center object-contain img-box h-full max-lg:mx-auto">
                            <div className="w-96 h-80 bg-gray-200 rounded"></div>
                        </div>
                    </div>
                    <div className="data w-full lg:pr-8 pr-0 xl:justify-start justify-center flex items-center max-lg:pb-10 xl:my-2 lg:my-5 my-0">
                        <div className="data w-full max-w-xl">
                            <div className="h-8 bg-gray-200 w-3/4 mb-4"></div>
                            <div className="flex flex-col sm:flex-row sm:items-center mb-4">
                                <div className="flex max-[400px]:flex-col min-[400px]:items-center gap-2">
                                    <div className="flex items-center gap-1">
                                        <div className="w-5 h-5 bg-gray-200 rounded"></div>
                                        <div className="w-5 h-5 bg-gray-200 rounded"></div>
                                        <div className="w-5 h-5 bg-gray-200 rounded"></div>
                                        <div className="w-5 h-5 bg-gray-200 rounded"></div>
                                        <div className="w-5 h-5 bg-gray-200 rounded"></div>
                                    </div>
                                    <div className="flex gap-4 items-center">
                                        <div className="h-5 bg-gray-200 w-24"></div>
                                        <div className="h-5 bg-gray-200 w-16"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="h-8 bg-gray-200 w-1/4 mb-4"></div>
                            <div className="h-16 bg-gray-200 mb-4"></div>
                            <hr />
                            <div className="flex gap-3 items-center justify-start mt-5">
                                <div className="h-5 bg-gray-200 w-16"></div>
                                <div className="w-[20px] h-5 bg-gray-200 rounded-full"></div>
                                <div className="w-[20px] h-5 bg-gray-200 rounded-full"></div>
                            </div>
                            <div className="flex max-[350px]:flex-col gap-6 min-[350px]:items-center mt-5 w-full pb-8 border-b border-gray-100 flex-wrap">
                                <div className="h-5 bg-gray-200 w-16 mb-4"></div>
                                <div className="grid grid-cols-5 gap-3 max-w-md">
                                    <div className="w-8 h-8 bg-gray-200 rounded-[4px]"></div>
                                    <div className="w-8 h-8 bg-gray-200 rounded-[4px]"></div>
                                    <div className="w-8 h-8 bg-gray-200 rounded-[4px]"></div>
                                    <div className="w-8 h-8 bg-gray-200 rounded-[4px]"></div>
                                    <div className="w-8 h-8 bg-gray-200 rounded-[4px]"></div>
                                </div>
                            </div>
                            <div className="flex gap-3 py-8">
                                <div className="w-full h-14 bg-gray-200 rounded-[100px]"></div>
                                <div className="w-14 h-14 bg-gray-200 rounded-full"></div>
                            </div>
                            <div className="flex items-center gap-3"></div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default LoadingSinlePage