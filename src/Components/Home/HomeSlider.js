import React, { useState } from 'react';
import slider1 from '../../Images/slider1.JPG'
import slider2 from '../../Images/slider2.jpg'
import slider3 from '../../Images/slider3.JPG'


import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from 'reactstrap';

const items = [
  {
    src: slider1,
    altText: 'Slide 1',
    caption: 'Innovating your life comfortably..'
  },
  {
    src:slider2,
    altText: 'Slide 2',
    caption: 'We at Nikhil Comforts enable all  your HVAC,MEP.'
  },
  {
    src: slider3,
    altText: 'Slide 3',
    caption: 'Innovating your life comfortably..'
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
        
        <div className='carouselCont'>
          <div className='ImgCont'>
          <img src={item.src} alt={item.altText} className="w-100 home-slider-image" />
          </div>
          <div className='TextCont'>
            <CarouselCaption captionHeader={item.header}  captionText={item.caption}  />
              <button className="btn btn-primary px-4" onClick={()=>alert("clicked")}>Learn More</button>       
            </div>
        </div>
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