import React, { useState } from 'react';
import styled from 'styled-components';
import { CarouselImagesUrls } from '../../../../../../constants/DataObjects/DataObjects';
import { PiArrowCircleRightLight } from 'react-icons/pi';
import { PiArrowCircleLeftLight } from 'react-icons/pi';
import { IoRadioButtonOff } from 'react-icons/io5';
import { IoRadioButtonOn } from 'react-icons/io5';
import { IoMdRadioButtonOn } from 'react-icons/io';

const SliderContainer = styled.div`
  width: 100%;
  position: relative;
`;

const CarouselImage = styled.img`
  object-fit: cover;
  width: 100%;
  height: 40rem;
  display: block;
`;

const ArrowButton = styled.button`
  all: unset;
  position: absolute;
  color: white;
  top: 50%;
  transition: transform 600ms ease-in-out;
  cursor: pointer;
`;

const LeftArrowButton = styled(ArrowButton)`
  left: 5%;
  &:hover {
    transform: scale(1.1);
  }
`;

const RightArrowButton = styled(ArrowButton)`
  right: 5%;

  &:hover {
    transform: scale(1.1);
  }
`;

const RadioButtons = styled.div`
  position: absolute;
  display: flex;
  gap: 0.3rem;
  top: 92%;
  right: 50%;
`;

const RadioBtn = styled.button`
  all: unset;
  color: white;
`;

const Slider = () => {
  const [imageIndex, setImagesIndex] = useState(0);

  const MovePrevImage = () => {
    setImagesIndex((index: number) => {
      if (index === 0) return CarouselImagesUrls.length - 1;
      return index - 1;
    });
  };

  const MoveNextImage = () => {
    setImagesIndex((index: number) => {
      if (index === CarouselImagesUrls.length - 1) return 0;
      return index + 1;
    });
  };
  return (
    <SliderContainer>
      <CarouselImage
        src={`carousel-images/${CarouselImagesUrls[imageIndex]}`}
        alt=""
      ></CarouselImage>
      <LeftArrowButton>
        <PiArrowCircleLeftLight size={50} onClick={MovePrevImage} />
      </LeftArrowButton>
      <RightArrowButton onClick={MoveNextImage}>
        <PiArrowCircleRightLight size={50} />
      </RightArrowButton>
      <RadioButtons>
        {CarouselImagesUrls.map((_, index) => (
          <RadioBtn onClick={() => setImagesIndex(index)}>
            {index === imageIndex ? (
              <IoRadioButtonOn size={25} />
            ) : (
              <IoMdRadioButtonOn size={25} />
            )}
          </RadioBtn>
        ))}
      </RadioButtons>
    </SliderContainer>
  );
};

export default Slider;
