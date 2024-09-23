import patternCurve from "./images/pattern-curve.svg";
import patternBg from "./images/pattern-bg.svg";
import patternQuotes from "./images/pattern-quotes.svg";
import imageJohn from "./images/image-john.jpg";
import imageTanya from "./images/image-tanya.jpg";
import iconNext from "./images/icon-next.svg";
import iconPrev from "./images/icon-prev.svg";
import { useState } from "react";
import { easeInOut, motion } from "framer-motion";

function App() {
  const [currentSlide, setCurrentSlide] = useState(0);

  function handleChangeSlide() {
    if (currentSlide === 0) {
      setCurrentSlide(1);
    } else {
      setCurrentSlide(0);
    }
  }

  let content = {
    quote: "",
    author: "",
    title: "",
  };
  if (currentSlide === 0) {
    content.quote =
      "“ I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future. ”";
    content.author = "Tanya Sinclair";
    content.title = "UX Engineer";
  } else if (currentSlide === 1) {
    content.quote =
      "“ If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer. ”";
    content.author = "John Tarkpor";
    content.title = "Junior Front-end Developer";
  }

  return (
    <div className="relative grid min-h-dvh place-items-center">
      {/* pattern curve */}
      <img
        src={patternCurve}
        alt="pattern curve"
        className="absolute bottom-0 left-0"
      />
      {/* pattern curve */}

      {/* content */}
      <div className="flex w-full max-w-[1110px] flex-col items-center gap-14 py-8 lg:flex-row-reverse lg:gap-0 xl:py-0">
        {/* image  */}
        <div className="relative px-6 lg:-ml-20 lg:px-0">
          <img
            src={patternBg}
            alt="pattern bg"
            className="absolute left-1/2 top-1/2 min-w-[327px] -translate-x-1/2 -translate-y-1/2 lg:min-w-[697px]"
          />
          <motion.img
            key={currentSlide}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.15, ease: easeInOut }}
            src={currentSlide === 0 ? imageTanya : imageJohn}
            alt="avatar"
            className="relative max-w-[254px] shadow-2xl lg:max-w-full"
          />
          <div className="absolute -bottom-5 left-1/2 flex h-10 w-20 -translate-x-1/2 items-center justify-center rounded-[20px] bg-white shadow-lg lg:-bottom-7 lg:left-[72px] lg:h-14 lg:w-28 lg:translate-x-0 lg:rounded-[56px]">
            <div
              className="flex h-full w-full cursor-pointer items-center justify-center"
              onClick={handleChangeSlide}
            >
              <img src={iconPrev} alt="icon prev" />
            </div>
            <div
              className="flex h-full w-full cursor-pointer items-center justify-center"
              onClick={handleChangeSlide}
            >
              <img src={iconNext} alt="icon prev" />
            </div>
          </div>
        </div>
        {/* image  */}

        {/* quote */}
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.15, ease: easeInOut }}
          className="relative max-w-[635px] px-8 lg:px-0"
        >
          <img
            src={patternQuotes}
            alt="pattern quotes"
            className="absolute -top-6 left-1/2 w-[60px] -translate-x-1/2 lg:-top-16 lg:left-[85px] lg:w-[120px] lg:translate-x-0"
          />

          <div className="flex flex-col items-center gap-8 lg:items-start">
            <p className="text-center text-lg font-light leading-6 text-dark-blue lg:text-left lg:text-[32px] lg:leading-[44px]">
              {content.quote}
            </p>

            <div className="lg:gap-[10px]text-[15px] flex flex-col items-center gap-1 leading-5 lg:flex-row lg:text-xl lg:leading-[38px]">
              <h1 className="font-bold text-dark-blue">{content.author}</h1>
              <p className="font-medium text-grayish-blue">{content.title}</p>
            </div>
          </div>
        </motion.div>
        {/* quote */}
      </div>
      {/* content */}
    </div>
  );
}
export default App;
