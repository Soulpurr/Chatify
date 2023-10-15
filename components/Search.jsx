import React from "react";

function Search() {
  return (
    <div className="flex w-[390px] max-w-full items-start justify-between gap-5 mr-2">
      <div className="self-stretch flex flex-col grow shrink-0 basis-auto w-[341px]">
        <div className="bg-neutral-900 self-stretch flex w-full grow flex-col px-5 py-4 rounded-3xl">
          <div className="flex w-[68px] max-w-full items-start gap-3">
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/1c93e83c-a2d5-4916-9de7-f9ab7fa8899e?apiKey=e74082b80b2042a383841c0a6d125528&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/1c93e83c-a2d5-4916-9de7-f9ab7fa8899e?apiKey=e74082b80b2042a383841c0a6d125528&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/1c93e83c-a2d5-4916-9de7-f9ab7fa8899e?apiKey=e74082b80b2042a383841c0a6d125528&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/1c93e83c-a2d5-4916-9de7-f9ab7fa8899e?apiKey=e74082b80b2042a383841c0a6d125528&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/1c93e83c-a2d5-4916-9de7-f9ab7fa8899e?apiKey=e74082b80b2042a383841c0a6d125528&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/1c93e83c-a2d5-4916-9de7-f9ab7fa8899e?apiKey=e74082b80b2042a383841c0a6d125528&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/1c93e83c-a2d5-4916-9de7-f9ab7fa8899e?apiKey=e74082b80b2042a383841c0a6d125528&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/1c93e83c-a2d5-4916-9de7-f9ab7fa8899e?apiKey=e74082b80b2042a383841c0a6d125528&"
              className="aspect-[0.92] object-cover object-center w-[11px] overflow-hidden shrink-0"
            />
            <div className="text-white text-sm leading-[142.86%] tracking-tight opacity-80 self-stretch">
              Search
            </div>
          </div>
        </div>
      </div>
      <img
        loading="lazy"
        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/d8803e37-4c76-494a-b638-0d53537ad93d?apiKey=e74082b80b2042a383841c0a6d125528&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/d8803e37-4c76-494a-b638-0d53537ad93d?apiKey=e74082b80b2042a383841c0a6d125528&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/d8803e37-4c76-494a-b638-0d53537ad93d?apiKey=e74082b80b2042a383841c0a6d125528&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/d8803e37-4c76-494a-b638-0d53537ad93d?apiKey=e74082b80b2042a383841c0a6d125528&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/d8803e37-4c76-494a-b638-0d53537ad93d?apiKey=e74082b80b2042a383841c0a6d125528&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/d8803e37-4c76-494a-b638-0d53537ad93d?apiKey=e74082b80b2042a383841c0a6d125528&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/d8803e37-4c76-494a-b638-0d53537ad93d?apiKey=e74082b80b2042a383841c0a6d125528&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/d8803e37-4c76-494a-b638-0d53537ad93d?apiKey=e74082b80b2042a383841c0a6d125528&"
        className="aspect-square object-cover object-center w-6 overflow-hidden self-center shrink-0 my-auto"
      />
    </div>
  );
}

export default Search;
