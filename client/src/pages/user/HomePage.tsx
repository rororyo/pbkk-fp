import React, { useState, useEffect } from 'react';
import Header from '../../components/Header';
import HeroSection from '../../components/HeroSection';
import Footer from '../../components/Footer';
import LogoSection from '../../components/LogoSection';
import IconComponents from '../../components/FeatureList';
import FullScreenVideoPlayer from '../../components/VideoSection';
import TopPicks from '../../components/TopPicks';

const HomePage: React.FC = () => {
  const [showDisclaimer, setShowDisclaimer] = useState(true);

  useEffect(() => {
    setShowDisclaimer(true);
  }, []);

  const handleClose = () => {
    setShowDisclaimer(false);
  };

  return (
    <div>
      <Header />
      <HeroSection />
      <div className='mt-3 mb-2'>
        <LogoSection />
        <br />
        <TopPicks />
        <br />
        <FullScreenVideoPlayer />
        <IconComponents />
      </div>

      {/* Modal untuk Disclaimer */}
      {showDisclaimer && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-red-100 p-6 rounded-lg w-11/12 max-w-lg">
            <h2 className="text-xl font-semibold text-red-700 mb-4">Disclaimer</h2>
            <p className="text-red-700 mb-4">
              Website ini dibuat semata-mata untuk memenuhi tugas mata kuliah Pemrograman Berbasis Kerangka Kerja ITS dan tidak merupakan platform marketplace yang berfungsi secara nyata. Semua informasi dan fitur di dalam website ini hanya digunakan untuk tujuan akademis.
            </p>
            <p className="text-red-700 mb-4">
              Jika Anda tertarik untuk membiayai atau menjalin kerja sama, Anda dapat menghubungi kami melalui email di ryonathaniel04@gmail.com.
            </p>
            <button
              onClick={handleClose}
              className="mt-4 w-full bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-700"
            >
              Tutup
            </button>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default HomePage;
