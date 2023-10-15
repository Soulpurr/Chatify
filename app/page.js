import Chat from "@/components/Chat";
import Messages from "@/components/Messages";
import Search from "@/components/Search";
import Sidebar from "@/components/Sidebar";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-neutral-800 flex flex-col pr-5">
      <div className=" w-full max-w-[100%] max-md:max-w-full">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <Sidebar />
          <div className="flex flex-col items-stretch w-[79%] px-5 max-md:w-full">
            <div className="flex flex-col mt-8 max-md:max-w-full max-md:mt-12 items-end 2xl:items-center">
              <Search />
              <div
                style={{ background: (255, 255, 255, 0.03) }}
                className="self-center w-full max-w-[1064px] mt-8 max-md:max-w-full"
              >
                <div className="flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                  <Messages />
                  <Chat />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
