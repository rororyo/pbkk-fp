import Slider from 'react-infinite-logo-slider';

const LogoSection = () => {
    return (
      <>
        <Slider
            width="250px"
            duration={40}
            pauseOnHover={true}
            blurBorders={false}
            blurBorderColor={'#fff'}
        >
            <Slider.Slide>
                <img src="/assets/logo/1.png" alt="Logo 1" className='w-12 transform transition-transform duration-300 hover:scale-110' />
            </Slider.Slide>
            <Slider.Slide>
                <img src="/assets/logo/2.png" alt="Logo 2" className='w-15 h-7 transform transition-transform duration-300 hover:scale-110' />
            </Slider.Slide>
            <Slider.Slide>
                <img src="/assets/logo/3.png" alt="Logo 3" className='w-15 h-7 transform transition-transform duration-300 hover:scale-110'  />
            </Slider.Slide>
            <Slider.Slide>
                <img src="/assets/logo/4.png" alt="Logo 4" className='w-12 transform transition-transform duration-300 hover:scale-110' />
            </Slider.Slide>
            <Slider.Slide>
                <img src="/assets/logo/5.png" alt="Logo 5" className='w-15 h-7 transform transition-transform duration-300 hover:scale-110' />
            </Slider.Slide>
        </Slider>
      </>
    );
}

export default LogoSection;
