import React from "react";

function Messages() {
  return (
    <div className="flex flex-col items-stretch w-[33%] max-md:w-full">
      <div className="items-start border backdrop-blur-[5.199999809265137px] bg-white bg-opacity-0  flex w-[352px] max-w-full grow flex-col mx-auto pr-px pb-10 rounded-l-2xl border-solid border-neutral-600">
        <div className="items-center self-stretch shadow-[0px_1px_2px_0px_rgba(0,0,0,0.12)] h-[5rem] flex flex-col p-5 border-b-neutral-600 border-b border-solid">
          <div className="items-start border self-center flex w-[213px] max-w-full gap-2 pr-4 rounded-2xl border-solid border-neutral-600">
            <div className="text-white text-center text-sm leading-[114.29%] self-stretch bg-red-500 w-[119px] max-w-full px-4 py-2 rounded-2xl">
              All messages
            </div>
            <div className="text-white text-center text-sm leading-[114.29%] self-center my-auto">
              Unread (0)
            </div>
          </div>
        </div>
        <div className="items-start self-stretch flex flex-col mb-56">
          <div className="items-start self-stretch flex flex-col pl-5 pr-3.5 pt-3.5 pb-5 border-b-neutral-600 border-b border-solid">
            <div className="overflow-hidden text-white text-ellipsis text-base font-medium w-[222px] max-w-full ml-1">
              Virat Kohli
            </div>{" "}
            <div className="overflow-hidden text-white text-opacity-80 text-ellipsis text-sm leading-[157.14%] ml-1 mt-1.5">
              You: Hi, Thank you for the opportunity but I'd like to withd…
            </div>
          </div>
          <div className="items-start self-stretch flex flex-col pl-5 pr-3.5 pt-3.5 pb-5 border-b-neutral-600 border-b border-solid">
            <div className="overflow-hidden text-white text-ellipsis text-base font-medium w-[222px] max-w-full ml-1">
              Virat Kohli
            </div>{" "}
            <div className="overflow-hidden text-white text-opacity-80 text-ellipsis text-sm leading-[157.14%] ml-1 mt-1.5">
              You: Hi, Thank you for the opportunity but I'd like to withd…
            </div>
          </div>
          <div className="items-start self-stretch flex flex-col pl-5 pr-5 py-5 border-b-neutral-600 border-b border-solid">
            <div className="overflow-hidden text-white text-ellipsis text-base leading-[125%] w-[222px] max-w-full -mt-0.5">
              Mahendra Singh Dhoni
            </div>
            <div className="overflow-hidden text-white text-opacity-80 text-ellipsis text-sm leading-[157.14%] mt-2.5 mb-0.5">
              You: Hi, Thank you for the opportunity but I'd like to withd…
            </div>
          </div>{" "}
          <div className="items-start self-stretch flex grow flex-col pl-5 pr-3.5 pt-3.5 pb-5 border-b-neutral-600 border-b border-solid">
            <div className="overflow-hidden text-white text-ellipsis text-base font-medium w-[222px] max-w-full ml-1">
              Surya Kumar yadav
            </div>{" "}
            <div className="overflow-hidden text-white text-opacity-80 text-ellipsis text-sm leading-[157.14%] ml-1 mt-1.5">
              You: Hi, Thank you for the opportunity but I'd like to withd…
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Messages;
