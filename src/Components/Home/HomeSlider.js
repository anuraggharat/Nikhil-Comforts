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
    src: 'https://images.pexels.com/photos/380768/pexels-photo-380768.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
    altText: 'Slide 1',
    caption: 'Innovating your life comfortably..'
  },
  {
    src:'https://images.pexels.com/photos/380768/pexels-photo-380768.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
    altText: 'Slide 2',
    caption: 'Innovating your life comfortably..'
  },
  {
    src: 'https://images.pexels.com/photos/380768/pexels-photo-380768.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
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
              <button className="btn btn-primary px-4">Learn More</button>       
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