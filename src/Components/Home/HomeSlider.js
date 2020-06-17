import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from 'reactstrap';

const items = [
  {
    src: "slider1",
    altText: 'Slide 1',
    caption: '',
    text:'Innovating your life comfortably...'
  },
  {
    src:"slider2",
    altText: 'Slide 2',
    caption: '',
    text:'We at Nikhil Comforts enable all your HVAC,MEP & Interiors related development peacefully !!'
  },
  {
    src: "slider3",
    altText: 'Slide 3',
    caption: '',
    text:'Innovating your life comfortably...'
  }
];

const HomeSlider = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }

  const slides = items.map((item) => {
    return (
      <CarouselItem
        className="w-100"
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.altText}
      >
        <div className={item.src}>
          <div className="container homepage-container ">
    <h4 className="display-4 text-white font-weight-bold mt-2">{item.text}</h4>
            <button className="btn btn-first px-4">Learn More.</button>
          </div>
        </div>
        <CarouselCaption captionHeader={item.header}  captionText={item.caption}>
        </CarouselCaption>
            
      
      </CarouselItem>
    );
  });

  return (
    <Carousel
      activeIndex={activeIndex}
      next={next}
      previous={previous}
    >
      <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
      {slides}
      <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
      <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
    </Carousel>
  );
}

export default HomeSlider;



