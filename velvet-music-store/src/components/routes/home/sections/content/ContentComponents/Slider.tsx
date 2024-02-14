import styled from 'styled-components';

const CarouselImage = styled.img`
  object-fit: cover;
  width: 100%;
  height: 40rem;
  display: block;
`;


type SliderProps = {
  imgUrl :string;
}


const Slider = ( { imgUrl } : SliderProps) => {
  return (
      <CarouselImage
        src={`${imgUrl}`}
        alt=""
      ></CarouselImage>
      
  );
};

export default Slider;
