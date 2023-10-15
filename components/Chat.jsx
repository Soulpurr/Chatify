import React from 'react'

function Chat() {
  return (
    <div className="flex flex-col items-stretch w-[67%]  max-md:w-full">
                    <div className="justify-between items-start border flex grow flex-col w-full mx-auto border-solid border-neutral-600 border-opacity-10 max-md:max-w-full">
                      <div className="justify-center items-center border shadow-[0px_1px_2px_0px_rgba(0,0,0,0.12)] h-[5rem] bg-white bg-opacity-0 self-stretch flex flex-col pl-4 pr-5 py-7 rounded-none border-solid border-neutral-600 max-md:max-w-full">
                        <div className="flex w-[660px] max-w-full items-start justify-between gap-5 mt-0.5 -mb-0.5 max-md:flex-wrap">
                          <div className="text-white text-base leading-[125%] self-stretch w-[255px]">
                            Rohit Sharma
                          </div>
                          <img
                            loading="lazy"
                            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/59a0f3cf-dff9-4159-8ea5-b68968bfc7e7?apiKey=e74082b80b2042a383841c0a6d125528&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/59a0f3cf-dff9-4159-8ea5-b68968bfc7e7?apiKey=e74082b80b2042a383841c0a6d125528&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/59a0f3cf-dff9-4159-8ea5-b68968bfc7e7?apiKey=e74082b80b2042a383841c0a6d125528&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/59a0f3cf-dff9-4159-8ea5-b68968bfc7e7?apiKey=e74082b80b2042a383841c0a6d125528&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/59a0f3cf-dff9-4159-8ea5-b68968bfc7e7?apiKey=e74082b80b2042a383841c0a6d125528&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/59a0f3cf-dff9-4159-8ea5-b68968bfc7e7?apiKey=e74082b80b2042a383841c0a6d125528&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/59a0f3cf-dff9-4159-8ea5-b68968bfc7e7?apiKey=e74082b80b2042a383841c0a6d125528&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/59a0f3cf-dff9-4159-8ea5-b68968bfc7e7?apiKey=e74082b80b2042a383841c0a6d125528&"
                            className="aspect-[0.22] object-cover object-center w-1 fill-white fill-opacity-90 overflow-hidden shrink-0 mt-px"
                          />
                        </div>
                      </div>
                      <div className="justify-end items-start self-stretch bg-white bg-opacity-0 flex grow flex-col pl-4 pr-3.5 pt-10 pb-4 max-md:max-w-full">
                        <div className="items-center self-stretch flex flex-col mt-28 max-md:max-w-full">
                          <div className="text-zinc-500 text-center text-sm leading-[157.14%] self-center">
                            02 September
                          </div>
                          <div className="max-w-full items-start backdrop-blur-[17.5px] bg-white bg-opacity-10 flex w-[483px] flex-col mt-4 pl-4 pr-3 py-2.5 rounded-2xl">
                            <div className="max-w-[456px] text-white text-sm leading-[157.14%] mt-0.5 max-md:max-w-full">
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit, sed do eiusmod tempor incididunt ut labore
                              et dolore magna aliqua. Ut enim ad minim veniam,
                              quis nostrud exercitation ullamco laboris nisi ut
                              aliquip ex ea commodo consequat. Duis aute irure
                              dolor in reprehenderit in voluptate velit esse
                              cillum dolore eu fugiat nulla pariatur.
                            </div>
                            <div className="justify-end items-start flex w-[65px] max-w-full gap-1 mr-1 mt-2 -mb-0.5">
                              <div className="text-zinc-500 text-right text-xs font-medium leading-[133.33%] self-stretch">
                                2:04 PM
                              </div>
                              <img
                                loading="lazy"
                                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/2790035d-b0c7-41a1-b60c-5ddca69800c3?apiKey=e74082b80b2042a383841c0a6d125528&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/2790035d-b0c7-41a1-b60c-5ddca69800c3?apiKey=e74082b80b2042a383841c0a6d125528&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/2790035d-b0c7-41a1-b60c-5ddca69800c3?apiKey=e74082b80b2042a383841c0a6d125528&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/2790035d-b0c7-41a1-b60c-5ddca69800c3?apiKey=e74082b80b2042a383841c0a6d125528&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/2790035d-b0c7-41a1-b60c-5ddca69800c3?apiKey=e74082b80b2042a383841c0a6d125528&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/2790035d-b0c7-41a1-b60c-5ddca69800c3?apiKey=e74082b80b2042a383841c0a6d125528&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/2790035d-b0c7-41a1-b60c-5ddca69800c3?apiKey=e74082b80b2042a383841c0a6d125528&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/2790035d-b0c7-41a1-b60c-5ddca69800c3?apiKey=e74082b80b2042a383841c0a6d125528&"
                                className="aspect-[1.56] object-cover object-center w-3.5 fill-sky-600 overflow-hidden self-center shrink-0 my-auto"
                              />
                            </div>
                          </div>
                          <div className="max-w-full items-end shadow-[0px_1px_0.5px_0px_rgba(0,0,0,0.12)] bg-white bg-opacity-10 flex w-[517px] grow flex-col mt-3.5 pl-4 pr-3 py-3 rounded-2xl">
                            <div className="items-start flex w-[490px] max-w-full flex-col">
                              <div className="text-white text-sm leading-[157.14%] max-md:max-w-full">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut
                                enim ad minim veniam, quis nostrud exercitation
                                ullamco laboris nisi ut aliquip ex ea commodo
                                consequat.
                              </div>
                              <div className="text-white text-sm leading-[157.14%] mt-7">
                                Thanks,
                                <br />
                                Rohit Sharma
                              </div>
                            </div>
                            <div className="text-zinc-500 text-right text-xs font-medium leading-[133.33%] mt-3 -mb-px">
                              10:54 PM
                            </div>
                          </div>
                        </div>
                        <div className="items-start self-stretch flex justify-between gap-4 ml-2 mr-2 mt-7 max-md:max-w-full max-md:flex-wrap">
                          <div className="justify-center items-start flex flex-col grow shrink-0 basis-auto w-[75%] max-md:max-w-full">
                            <div className="justify-between items-start bg-neutral-800 self-stretch flex w-full gap-5 px-5 py-3 rounded-xl max-md:flex-wrap">
                              <div className="text-white text-sm w-[131px]">
                                Write a message...
                              </div>
                              <img
                                loading="lazy"
                                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/149aa47e-7ba2-4ad9-9594-7f949e07f4ca?apiKey=e74082b80b2042a383841c0a6d125528&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/149aa47e-7ba2-4ad9-9594-7f949e07f4ca?apiKey=e74082b80b2042a383841c0a6d125528&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/149aa47e-7ba2-4ad9-9594-7f949e07f4ca?apiKey=e74082b80b2042a383841c0a6d125528&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/149aa47e-7ba2-4ad9-9594-7f949e07f4ca?apiKey=e74082b80b2042a383841c0a6d125528&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/149aa47e-7ba2-4ad9-9594-7f949e07f4ca?apiKey=e74082b80b2042a383841c0a6d125528&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/149aa47e-7ba2-4ad9-9594-7f949e07f4ca?apiKey=e74082b80b2042a383841c0a6d125528&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/149aa47e-7ba2-4ad9-9594-7f949e07f4ca?apiKey=e74082b80b2042a383841c0a6d125528&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/149aa47e-7ba2-4ad9-9594-7f949e07f4ca?apiKey=e74082b80b2042a383841c0a6d125528&"
                                className="aspect-[0.89] object-cover object-center w-[17px] fill-white overflow-hidden shrink-0"
                              />
                            </div>
                          </div>
                          <div className="min-w-[80px] items-start bg-red-500 flex w-20 max-w-full flex-col mt-0.5 px-5 py-3 rounded-2xl">
                            <div className="text-white text-center text-sm font-semibold leading-[114.29%] self-center -mt-px">
                              Send
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
  )
}

export default Chat