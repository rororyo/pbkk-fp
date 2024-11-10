import Header from '../../components/Header';
import HeroSection from '../../components/HeroSection';
import Footer from '../../components/Footer';
import LogoSection from '../../components/LogoSection';
import IconComponents from '../../components/FeatureList';

const HomePage: React.FC = () => {

  return (
    <div>
      <Header />
      <HeroSection />
      <div className='mt-3 mb-2'>
      <LogoSection />
      <IconComponents />
      </div>
      
      <Footer />
    </div>
  );
};

export default HomePage;
