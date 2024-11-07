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
                <img src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" alt="Apple" className='w-10' />
            </Slider.Slide>
            <Slider.Slide>
                <img src="https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg" alt="Microsoft" className='w-10' />
            </Slider.Slide>
            <Slider.Slide>
                <img src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" alt="Google" className='w-10' />
            </Slider.Slide>
            <Slider.Slide>
                <img src="https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg" alt="IBM" className='w-10' />
            </Slider.Slide>
        </Slider>
      </>
    );
}

export default LogoSection;
