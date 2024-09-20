import patternCurve from "./images/pattern-curve.svg";
import patternBg from "./images/pattern-bg.svg";
import patternQuotes from "./images/pattern-quotes.svg";
import imageJohn from "./images/image-john.jpg";
import imageTanya from "./images/image-tanya.jpg";

function App() {
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
      <div className="flex max-w-[1110px] flex-col items-center gap-14 py-8 lg:flex-row-reverse lg:gap-0 xl:py-0">
        {/* image  */}
        <div className="relative px-6 lg:px-0">
          <img src={patternBg} alt="pattern bg" className="w-full" />
          <img
            src={imageJohn}
            alt="avatar"
            className="absolute left-1/2 top-1/2 max-w-[254px] -translate-x-1/2 -translate-y-1/2 sm:max-w-full"
          />
        </div>
        {/* image  */}

        {/* quote */}
        <div className="relative max-w-[635px] px-8 lg:px-0">
          <img
            src={patternQuotes}
            alt="pattern quotes"
            className="absolute -top-6 left-1/2 w-[60px] -translate-x-1/2 lg:-top-16 lg:left-[85px] lg:w-[120px] lg:translate-x-0"
          />

          <div className="flex flex-col items-center gap-8 lg:items-start">
            <p className="text-center text-lg font-light leading-6 text-dark-blue lg:text-justify lg:text-[32px] lg:leading-[44px]">
              “ If you want to lay the best foundation possible I’d recommend
              taking this course. The depth the instructors go into is
              incredible. I now feel so confident about starting up as a
              professional developer. ”
            </p>

            <div className="lg:gap-[10px]text-[15px] flex flex-col items-center gap-1 leading-5 lg:flex-row lg:text-xl lg:leading-[38px]">
              <h1 className="font-bold text-dark-blue">John Tarkpor</h1>
              <p className="font-medium text-grayish-blue">
                Junior Front-end Developer
              </p>
            </div>
          </div>
        </div>
        {/* quote */}
      </div>
      {/* content */}
    </div>
  );
}
export default App;
