import lapone from "../../assets/lap.jpg";
import laptwo from "../../assets/lap2.jpg";
import lapthree from "../../assets/lap3.jpg";
import lapfour from "../../assets/lap4.jpg";
import lapfive from "../../assets/lap5.jpg";

export default function Home() {
  return (
    <>
      <div
        id="default-carousel"
        className="relative w-full cursor-pointer "
        data-carousel="slide"
      >
        {/* Carousel wrapper */}
        <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
          {/* Item 1 */}
          <div
            className=" duration-700 ease-in-out"
            data-carousel-item="active"
          >
            <img
              src={lapone}
              className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt="lapone"
            />
          </div>
          {/* Item 2 */}
          <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <img
              src={laptwo}
              className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt="laptwo"
            />
          </div>
          {/* Item 3 */}
          <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <img
              src={lapthree}
              className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt="lapthree"
            />
          </div>
          {/* Item 4 */}
          <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <img
              src={lapfour}
              className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt="lapfour"
            />
          </div>
          {/* Item 5 */}
          <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <img
              src={lapfive}
              className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt="lapfive"
            />
          </div>
        </div>
        {/* Slider indicators */}
        <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse cursor-pointer">
          <button
            type="button"
            aria-current="true"
            aria-label="Slide 1"
            data-carousel-slide-to={0}
          />
          <button
            type="button"
            aria-current="false"
            aria-label="Slide 2"
            data-carousel-slide-to={1}
          />
          <button
            type="button"
            aria-current="false"
            aria-label="Slide 3"
            data-carousel-slide-to={2}
          />
          <button
            type="button"
            aria-current="false"
            aria-label="Slide 4"
            data-carousel-slide-to={3}
          />
          <button
            type="button"
            aria-current="false"
            aria-label="Slide 5"
            data-carousel-slide-to={4}
          />
        </div>
        {/* Slider controls */}
        <button
          type="button"
          className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          data-carousel-prev
        >
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-transparent dark:bg-transparent group-hover:bg-transparent dark:group-hover:bg-transparent group-focus:ring-4 group-focus:ring-gray-700 dark:group-focus:ring-white group-focus:outline-none">
            <svg
              className="w-4 h-4 text-white dark:text-white rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 1 1 5l4 4"
              />
            </svg>
            <span className="sr-only">Previous</span>
          </span>
        </button>
        <button
          type="button"
          className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          data-carousel-next
        >
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-transparent dark:bg-transparent group-hover:bg-transparent dark:group-hover:bg-transparent group-focus:ring-4 group-focus:ring-gray-700 dark:group-focus:ring-white group-focus:outline-none">
            <svg
              className="w-4 h-4 text-white dark:text-white rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="m1 9 4-4-4-4"
              />
            </svg>
            <span className="sr-only">Next</span>
          </span>
        </button>
      </div>

      <div className="cotainer bg-black dark:bg-white border-white border">
        <div className="text-header text-center py-12 text-white dark:text-black">
          <h1 className="text-[50px]">Tools</h1>
          <p>Lorem ipsum dolor sit amet consectetur !</p>
        </div>

        <div className="row gap-y-6 mt-2 pb-20 ">
          <div className="w-full md:w-1/2 lg:w-1/3 px-1">
            <div className="inner border border-black bg-white rounded-2xl text-center ">
              <i class="fa-solid fa-anchor icons-midel bg-[#fbd5d5] p-2 text-sm -translate-y-3"></i>
              <h3 className="text-2xl">Product</h3>
              <div className=" h-px w-10  bg-black my-2 mx-auto"></div>
              <p className="pb-4">
                Lorem ipsum dolor sit amet, consectetur adipisicing.
              </p>
            </div>
          </div>

          <div className="w-full md:w-1/2 lg:w-1/3 px-1">
            <div className="inner border border-black bg-white rounded-2xl text-center ">
              <i class="fa-solid fa-square-h icons-midel bg-[#fbd5d5] p-2 text-sm -translate-y-3"></i>
              <h3 className="text-2xl">Product</h3>
              <div className=" h-px w-10  bg-black my-2 mx-auto"></div>
              <p className="pb-4">
                Lorem ipsum dolor sit amet, consectetur adipisicing.
              </p>
            </div>
          </div>

          <div className="w-full md:w-1/2 lg:w-1/3 px-1">
            <div className="inner border border-black bg-white rounded-2xl text-center ">
              <i class="fa-solid fa-jar icons-midel bg-[#fbd5d5] p-2 text-sm -translate-y-3"></i>
              <h3 className="text-2xl">Product</h3>
              <div className=" h-px w-10  bg-black my-2 mx-auto"></div>
              <p className="pb-4">
                Lorem ipsum dolor sit amet, consectetur adipisicing.
              </p>
            </div>
          </div>

          <div className="w-full md:w-1/2 lg:w-1/3 px-1">
            <div className="inner border border-black bg-white rounded-2xl text-center ">
              <i class="fa-solid fa-water-ladder icons-midel bg-[#fbd5d5] p-2 text-sm -translate-y-3"></i>
              <h3 className="text-2xl">Product</h3>
              <div className=" h-px w-10  bg-black my-2 mx-auto"></div>
              <p className="pb-4">
                Lorem ipsum dolor sit amet, consectetur adipisicing.
              </p>
            </div>
          </div>

          <div className="w-full md:w-1/2 lg:w-1/3 px-1">
            <div className="inner border border-black bg-white rounded-2xl text-center ">
              <i class="fa-solid fa-icicles icons-midel bg-[#fbd5d5] p-2 text-sm -translate-y-3"></i>
              <h3 className="text-2xl">Product</h3>
              <div className=" h-px w-10  bg-black my-2 mx-auto"></div>
              <p className="pb-4">
                Lorem ipsum dolor sit amet, consectetur adipisicing.
              </p>
            </div>
          </div>

          <div className="w-full md:w-1/2 lg:w-1/3 px-1">
            <div className="inner border border-black bg-white rounded-2xl text-center ">
              <i class="fa-solid fa-wrench icons-midel bg-[#fbd5d5] p-2 text-sm -translate-y-3"></i>
              <h3 className="text-2xl">Product</h3>
              <div className=" h-px w-10  bg-black my-2 mx-auto"></div>
              <p className="pb-4">
                Lorem ipsum dolor sit amet, consectetur adipisicing.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
