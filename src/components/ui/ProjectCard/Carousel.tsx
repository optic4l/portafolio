import { ReactElement, useState } from "react";
import { ChevronLeft, ChevronRight } from "react-feather";

const Carousel = ({ children: slides }: { children: ReactElement[] }) => {
  const [curr, setCurr] = useState(0);

  const prev = () =>
    setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1));

  const next = () =>
    setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1));
  return (
    <div className="relative overflow-hidden">
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${curr * 100}%)` }}
      >
        {slides}
      </div>
      <div className="absolute inset-0 flex items-center justify-between p-4">
        <button
          onClick={prev}
          className="rounded-full bg-jaguar-950/80 p-1 text-jaguar-50 shadow hover:bg-jaguar-950"
        >
          <ChevronLeft size={40} />
        </button>
        <button
          onClick={next}
          className="rounded-full bg-jaguar-950/80 p-1 text-jaguar-50 shadow hover:bg-jaguar-950"
        >
          <ChevronRight size={40} />
        </button>
      </div>
    </div>
  );
};

export default Carousel;
