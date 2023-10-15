import React from "react";

function Sidebar() {
  return (
    <div className="flex flex-col items-stretch w-[21%] max-md:w-full">
      <div className="items-start border backdrop-blur-[4.800000190734863px] bg-white bg-opacity-0 flex w-[100%] max-w-full grow flex-col  border-solid border-white border-opacity-10 max-md:mt-11">
        <div className="justify-between items-start self-stretch flex grow flex-col py-8">
          <div className="items-start self-stretch flex flex-col pl-5 pr-5">
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/72b42e14-72ac-41b5-b44e-b038a86c61d5?apiKey=e74082b80b2042a383841c0a6d125528&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/72b42e14-72ac-41b5-b44e-b038a86c61d5?apiKey=e74082b80b2042a383841c0a6d125528&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/72b42e14-72ac-41b5-b44e-b038a86c61d5?apiKey=e74082b80b2042a383841c0a6d125528&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/72b42e14-72ac-41b5-b44e-b038a86c61d5?apiKey=e74082b80b2042a383841c0a6d125528&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/72b42e14-72ac-41b5-b44e-b038a86c61d5?apiKey=e74082b80b2042a383841c0a6d125528&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/72b42e14-72ac-41b5-b44e-b038a86c61d5?apiKey=e74082b80b2042a383841c0a6d125528&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/72b42e14-72ac-41b5-b44e-b038a86c61d5?apiKey=e74082b80b2042a383841c0a6d125528&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/72b42e14-72ac-41b5-b44e-b038a86c61d5?apiKey=e74082b80b2042a383841c0a6d125528&"
              className="aspect-[2.95] object-cover object-center w-[236px] items-center overflow-hidden shrink-0 ml-1.5"
            />
            <div className="items-start self-center flex w-[220px] max-w-full grow flex-col mt-14">
              <div className="items-start flex w-[138px] max-w-full gap-3 ml-3 max-md:ml-2.5">
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/6d542a5b-deea-4958-89d9-a9388307dd35?apiKey=e74082b80b2042a383841c0a6d125528&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/6d542a5b-deea-4958-89d9-a9388307dd35?apiKey=e74082b80b2042a383841c0a6d125528&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/6d542a5b-deea-4958-89d9-a9388307dd35?apiKey=e74082b80b2042a383841c0a6d125528&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/6d542a5b-deea-4958-89d9-a9388307dd35?apiKey=e74082b80b2042a383841c0a6d125528&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/6d542a5b-deea-4958-89d9-a9388307dd35?apiKey=e74082b80b2042a383841c0a6d125528&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/6d542a5b-deea-4958-89d9-a9388307dd35?apiKey=e74082b80b2042a383841c0a6d125528&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/6d542a5b-deea-4958-89d9-a9388307dd35?apiKey=e74082b80b2042a383841c0a6d125528&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/6d542a5b-deea-4958-89d9-a9388307dd35?apiKey=e74082b80b2042a383841c0a6d125528&"
                  className="aspect-square object-cover object-center w-6 overflow-hidden shrink-0"
                />
                <div className="text-gray-100 text-lg font-medium leading-[133.33%] self-stretch">
                  Dashboard
                </div>
              </div>
              <div className="items-start flex w-[109px] max-w-full gap-3 ml-3 mt-9 max-md:ml-2.5">
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/fab619d6-6096-435b-8e73-75e8e9e0d9e2?apiKey=e74082b80b2042a383841c0a6d125528&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/fab619d6-6096-435b-8e73-75e8e9e0d9e2?apiKey=e74082b80b2042a383841c0a6d125528&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/fab619d6-6096-435b-8e73-75e8e9e0d9e2?apiKey=e74082b80b2042a383841c0a6d125528&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/fab619d6-6096-435b-8e73-75e8e9e0d9e2?apiKey=e74082b80b2042a383841c0a6d125528&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/fab619d6-6096-435b-8e73-75e8e9e0d9e2?apiKey=e74082b80b2042a383841c0a6d125528&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/fab619d6-6096-435b-8e73-75e8e9e0d9e2?apiKey=e74082b80b2042a383841c0a6d125528&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/fab619d6-6096-435b-8e73-75e8e9e0d9e2?apiKey=e74082b80b2042a383841c0a6d125528&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/fab619d6-6096-435b-8e73-75e8e9e0d9e2?apiKey=e74082b80b2042a383841c0a6d125528&"
                  className="aspect-square object-cover object-center w-6 overflow-hidden shrink-0"
                />
                <div className="text-gray-100 text-lg font-medium leading-[133.33%] self-stretch">
                  Projects
                </div>
              </div>
              <div className="items-start flex w-[89px] max-w-full gap-3 ml-3 mt-9 max-md:ml-2.5">
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/76cf19e2-3ebc-4916-9504-dac772cc9264?apiKey=e74082b80b2042a383841c0a6d125528&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/76cf19e2-3ebc-4916-9504-dac772cc9264?apiKey=e74082b80b2042a383841c0a6d125528&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/76cf19e2-3ebc-4916-9504-dac772cc9264?apiKey=e74082b80b2042a383841c0a6d125528&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/76cf19e2-3ebc-4916-9504-dac772cc9264?apiKey=e74082b80b2042a383841c0a6d125528&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/76cf19e2-3ebc-4916-9504-dac772cc9264?apiKey=e74082b80b2042a383841c0a6d125528&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/76cf19e2-3ebc-4916-9504-dac772cc9264?apiKey=e74082b80b2042a383841c0a6d125528&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/76cf19e2-3ebc-4916-9504-dac772cc9264?apiKey=e74082b80b2042a383841c0a6d125528&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/76cf19e2-3ebc-4916-9504-dac772cc9264?apiKey=e74082b80b2042a383841c0a6d125528&"
                  className="aspect-square object-cover object-center w-6 overflow-hidden shrink-0"
                />
                <div className="text-gray-100 text-lg font-medium leading-[133.33%] self-stretch">
                  Hiring
                </div>
              </div>
              <div className="items-center bg-neutral-900 flex w-full grow flex-col mt-6 pl-3 pr-5 py-3 rounded-md">
                <div className="items-start flex w-32 max-w-full gap-3">
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/c9a58519-f33d-4682-9e63-b3be87bd9c3b?apiKey=e74082b80b2042a383841c0a6d125528&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/c9a58519-f33d-4682-9e63-b3be87bd9c3b?apiKey=e74082b80b2042a383841c0a6d125528&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/c9a58519-f33d-4682-9e63-b3be87bd9c3b?apiKey=e74082b80b2042a383841c0a6d125528&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/c9a58519-f33d-4682-9e63-b3be87bd9c3b?apiKey=e74082b80b2042a383841c0a6d125528&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/c9a58519-f33d-4682-9e63-b3be87bd9c3b?apiKey=e74082b80b2042a383841c0a6d125528&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/c9a58519-f33d-4682-9e63-b3be87bd9c3b?apiKey=e74082b80b2042a383841c0a6d125528&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/c9a58519-f33d-4682-9e63-b3be87bd9c3b?apiKey=e74082b80b2042a383841c0a6d125528&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/c9a58519-f33d-4682-9e63-b3be87bd9c3b?apiKey=e74082b80b2042a383841c0a6d125528&"
                    className="aspect-square object-cover object-center w-6 overflow-hidden shrink-0"
                  />
                  <div className="text-gray-100 text-lg font-medium leading-[133.33%] self-stretch">
                    Messages
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="items-start self-center flex w-[219px] max-w-full flex-col mt-80 max-md:mt-52">
            <div className="items-center self-stretch bg-gray-900 bg-opacity-0 flex w-full flex-col pl-3 pr-5 py-3 rounded-md">
              <div className="items-start flex w-[101px] max-w-full gap-3">
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/cc6927ff-0e4d-4980-b59b-509b1463771d?apiKey=e74082b80b2042a383841c0a6d125528&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/cc6927ff-0e4d-4980-b59b-509b1463771d?apiKey=e74082b80b2042a383841c0a6d125528&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/cc6927ff-0e4d-4980-b59b-509b1463771d?apiKey=e74082b80b2042a383841c0a6d125528&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/cc6927ff-0e4d-4980-b59b-509b1463771d?apiKey=e74082b80b2042a383841c0a6d125528&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/cc6927ff-0e4d-4980-b59b-509b1463771d?apiKey=e74082b80b2042a383841c0a6d125528&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/cc6927ff-0e4d-4980-b59b-509b1463771d?apiKey=e74082b80b2042a383841c0a6d125528&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/cc6927ff-0e4d-4980-b59b-509b1463771d?apiKey=e74082b80b2042a383841c0a6d125528&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/cc6927ff-0e4d-4980-b59b-509b1463771d?apiKey=e74082b80b2042a383841c0a6d125528&"
                  className="aspect-square object-cover object-center w-6 overflow-hidden shrink-0"
                />
                <div className="text-gray-100 text-base font-medium leading-[150%] self-stretch">
                  Support
                </div>
              </div>
            </div>
            <div className="items-center self-stretch bg-gray-900 bg-opacity-0 flex w-full grow flex-col mt-3 pl-3 pr-5 py-3 rounded-md">
              <div className="items-start flex w-[102px] max-w-full gap-3">
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/a5b5e967-de0a-4249-8d0b-8768b0913c47?apiKey=e74082b80b2042a383841c0a6d125528&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/a5b5e967-de0a-4249-8d0b-8768b0913c47?apiKey=e74082b80b2042a383841c0a6d125528&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/a5b5e967-de0a-4249-8d0b-8768b0913c47?apiKey=e74082b80b2042a383841c0a6d125528&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/a5b5e967-de0a-4249-8d0b-8768b0913c47?apiKey=e74082b80b2042a383841c0a6d125528&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/a5b5e967-de0a-4249-8d0b-8768b0913c47?apiKey=e74082b80b2042a383841c0a6d125528&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/a5b5e967-de0a-4249-8d0b-8768b0913c47?apiKey=e74082b80b2042a383841c0a6d125528&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/a5b5e967-de0a-4249-8d0b-8768b0913c47?apiKey=e74082b80b2042a383841c0a6d125528&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/a5b5e967-de0a-4249-8d0b-8768b0913c47?apiKey=e74082b80b2042a383841c0a6d125528&"
                  className="aspect-square object-cover object-center w-6 overflow-hidden shrink-0"
                />
                <div className="text-gray-100 text-base font-medium leading-[150%] self-stretch">
                  Settings
                </div>
              </div>
            </div>
          </div>
          <div className="items-start self-center flex w-[247px] max-w-full flex-col mt-8">
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/e64c2605-0350-4227-bb0e-89415c58e9be?apiKey=e74082b80b2042a383841c0a6d125528&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/e64c2605-0350-4227-bb0e-89415c58e9be?apiKey=e74082b80b2042a383841c0a6d125528&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e64c2605-0350-4227-bb0e-89415c58e9be?apiKey=e74082b80b2042a383841c0a6d125528&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/e64c2605-0350-4227-bb0e-89415c58e9be?apiKey=e74082b80b2042a383841c0a6d125528&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/e64c2605-0350-4227-bb0e-89415c58e9be?apiKey=e74082b80b2042a383841c0a6d125528&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e64c2605-0350-4227-bb0e-89415c58e9be?apiKey=e74082b80b2042a383841c0a6d125528&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/e64c2605-0350-4227-bb0e-89415c58e9be?apiKey=e74082b80b2042a383841c0a6d125528&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/e64c2605-0350-4227-bb0e-89415c58e9be?apiKey=e74082b80b2042a383841c0a6d125528&"
              className="aspect-[247] object-cover object-center w-full self-stretch fill-slate-600 overflow-hidden"
            />
            <div className="justify-between items-start self-center flex w-[231px] max-w-full gap-4 mt-6">
              <div className="items-start self-stretch flex justify-between gap-3">
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/f846c8a1-6e8a-4a99-aeda-33a57b28d90a?apiKey=e74082b80b2042a383841c0a6d125528&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/f846c8a1-6e8a-4a99-aeda-33a57b28d90a?apiKey=e74082b80b2042a383841c0a6d125528&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/f846c8a1-6e8a-4a99-aeda-33a57b28d90a?apiKey=e74082b80b2042a383841c0a6d125528&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/f846c8a1-6e8a-4a99-aeda-33a57b28d90a?apiKey=e74082b80b2042a383841c0a6d125528&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/f846c8a1-6e8a-4a99-aeda-33a57b28d90a?apiKey=e74082b80b2042a383841c0a6d125528&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/f846c8a1-6e8a-4a99-aeda-33a57b28d90a?apiKey=e74082b80b2042a383841c0a6d125528&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/f846c8a1-6e8a-4a99-aeda-33a57b28d90a?apiKey=e74082b80b2042a383841c0a6d125528&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/f846c8a1-6e8a-4a99-aeda-33a57b28d90a?apiKey=e74082b80b2042a383841c0a6d125528&"
                  className="aspect-square object-cover object-center w-10 justify-center items-center overflow-hidden shrink-0"
                />
                <div className="items-start self-stretch flex flex-col">
                  <div className="text-white text-sm font-semibold leading-[142.86%]">
                    Monica Geller
                  </div>
                  <div className="text-gray-100 text-sm leading-[142.86%]">
                    monicag@mail.com
                  </div>
                </div>
              </div>
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/56b4836e-670f-4278-820e-93092e6946e4?apiKey=e74082b80b2042a383841c0a6d125528&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/56b4836e-670f-4278-820e-93092e6946e4?apiKey=e74082b80b2042a383841c0a6d125528&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/56b4836e-670f-4278-820e-93092e6946e4?apiKey=e74082b80b2042a383841c0a6d125528&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/56b4836e-670f-4278-820e-93092e6946e4?apiKey=e74082b80b2042a383841c0a6d125528&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/56b4836e-670f-4278-820e-93092e6946e4?apiKey=e74082b80b2042a383841c0a6d125528&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/56b4836e-670f-4278-820e-93092e6946e4?apiKey=e74082b80b2042a383841c0a6d125528&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/56b4836e-670f-4278-820e-93092e6946e4?apiKey=e74082b80b2042a383841c0a6d125528&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/56b4836e-670f-4278-820e-93092e6946e4?apiKey=e74082b80b2042a383841c0a6d125528&"
                className="aspect-square object-cover object-center w-5 justify-center items-center overflow-hidden self-center shrink-0 my-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
