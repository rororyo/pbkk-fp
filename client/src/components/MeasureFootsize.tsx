import React, { useState, useRef } from 'react';
import 'tailwindcss/tailwind.css';
import { FootSizeData } from '../types/interfaces';

const FootSizeMeasurement: React.FC = () => {
  const [footSizeLoading, setFootSizeLoading] = useState(false);
  const [footSizeData, setFootSizeData] = useState<FootSizeData | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [showTutorial, setShowTutorial] = useState(false);
  const [isCameraOpen, setIsCameraOpen] = useState(false);
  const [gender, setGender] = useState<'Men' | 'Women'>('Men');
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const handleFootSizeUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      setImagePreview(URL.createObjectURL(file));
      setFootSizeLoading(true);

      try {
        const formData = new FormData();
        formData.append('image', file);
        formData.append('gender', gender);

        const response = await fetch(`${import.meta.env.VITE_HOMEPAGE_API_URL}/foot-size`, {
          method: 'POST',
          body: formData,
        });

        const data = await response.json();

        if (data && data.status === 'success') {
          const footSize = data.data.footSize.toFixed(2);
          const shoeSize = data.data.shoeSize;

          setFootSizeData({
            footSize,
            shoeSize,
          });
        } else {
          alert('Error in calculating foot size. Please try again.');
        }
      } catch (error) {
        alert('Error during foot size calculation. Please check your connection or try again later.');
        console.log('Error calculating foot size:', error);
      } finally {
        setFootSizeLoading(false);
      }
    }
  };

  const openCamera = () => {
    setIsCameraOpen(true);
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices
        .getUserMedia({ video: true })
        .then((stream) => {
          if (videoRef.current) {
            videoRef.current.srcObject = stream;
            videoRef.current.play();
          }
        })
        .catch((error) => {
          console.error('Error accessing camera:', error);
          alert('Failed to access camera. Please check your permissions.');
        });
    }
  };

  const takePhoto = async () => {
    if (canvasRef.current && videoRef.current) {
      const context = canvasRef.current.getContext('2d');
      if (context) {
        // Ambil gambar dari video dan gambar ke dalam canvas
        context.drawImage(videoRef.current, 0, 0, canvasRef.current.width, canvasRef.current.height);
        const imageDataUrl = canvasRef.current.toDataURL('image/png');
        setImagePreview(imageDataUrl);
        setIsCameraOpen(false);
  
        // Hentikan video stream
        const stream = videoRef.current.srcObject as MediaStream;
        if (stream) {
          stream.getTracks().forEach((track) => track.stop());
        }
  
        // Ubah data URL ke objek File
        const file = base64ToFile(imageDataUrl, 'foot-photo.png');
        
        // Kirim gambar ke API
        setFootSizeLoading(true);
        try {
          const formData = new FormData();
          formData.append('image', file);
          formData.append('gender', gender);
  
          const response = await fetch(`${import.meta.env.VITE_HOMEPAGE_API_URL}/foot-size`, {
            method: 'POST',
            body: formData,
          });
  
          const data = await response.json();
  
          if (data && data.status === 'success') {
            const footSize = data.data.footSize.toFixed(2);
            const shoeSize = data.data.shoeSize;
  
            setFootSizeData({
              footSize,
              shoeSize,
            });
          } else {
            alert('Error in calculating foot size. Please try again.');
          }
        } catch (error) {
          alert('Error during foot size calculation. Please check your connection or try again later.');
          console.log('Error calculating foot size:', error);
        } finally {
          setFootSizeLoading(false);
        }
      }
    }
  };

  const base64ToFile = (base64: string, filename: string): File => {
    const arr = base64.split(',');
    const mime = arr[0].match(/:(.*?);/)?.[1];
    const bstr = atob(arr[1]);
    let n = bstr.length;
    const u8arr = new Uint8Array(n);
    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }
    return new File([u8arr], filename, { type: mime });
  };

  return (
    <div className="flex flex-col items-center justify-center bg-gray-100 text-gray-800 py-8 w-full">
      <div className="flex items-center justify-center mb-6 space-x-2">
        <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">Foot Size Measurement</h2>
        <button
          className="text-gray-500 hover:text-gray-700"
          onClick={() => setShowTutorial(true)}
          aria-label="How to use"
        >
          ?
        </button>
      </div>
      <div className="flex space-x-4 mb-4">
        <button
          className={`px-4 py-2 rounded ${gender === 'Men' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
          onClick={() => setGender('Men')}
        >
          Men
        </button>
        <button
          className={`px-4 py-2 rounded ${gender === 'Women' ? 'bg-pink-500 text-white' : 'bg-gray-200 text-gray-700'}`}
          onClick={() => setGender('Women')}
        >
          Women
        </button>
      </div>
      {showTutorial && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-11/12 max-w-md">
            <h3 className="text-xl font-bold mb-4">Tutorial Penggunaan</h3>
            <p className="text-gray-700 mb-4">
              1. Klik tombol "Choose File" untuk mengunggah gambar kaki Anda.
              <br />
              2. Pastikan gambar jelas dan sesuai dengan panduan yang diberikan.
              <br />
              3. Tunggu beberapa saat hingga hasil perhitungan ditampilkan.
            </p>
            <button
              className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700"
              onClick={() => setShowTutorial(false)}
            >
              Tutup
            </button>
          </div>
        </div>
      )}
      <div className="flex flex-col md:flex-row gap-8 w-full max-w-4xl">
        <div className="p-6 w-full md:w-1/2">
          <input
            type="file"
            onChange={handleFootSizeUpload}
            disabled={footSizeLoading}
            className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-gray-800 file:text-white hover:file:bg-gray-700 mb-4"
          />
          <button
            className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700 mb-4"
            onClick={openCamera}
          >
            Open Camera
          </button>
          {isCameraOpen && (
            <div className="camera-container">
              <video ref={videoRef} className="w-full h-auto mb-4"></video>
              <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700" onClick={takePhoto}>
                Take Photo
              </button>
              <canvas ref={canvasRef} className="hidden" width={640} height={480}></canvas>
            </div>
          )}

          {/* {imagePreview && (
            <div className="mt-4">
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Image Preview:</h3>
              <img
                src={imagePreview}
                alt="Foot Size"
                className="w-full max-w-sm h-auto rounded-lg border border-gray-300 shadow-md"
              />
            </div>
          )} */}
          {footSizeLoading && (
            <p className="text-center text-gray-600">Calculating foot size... Please wait.</p>
          )}
          {imagePreview ? (
            <div className="mt-4">
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Image Preview:</h3>
              <img
                src={imagePreview}
                alt="Foot Size"
                className="w-full max-w-sm h-auto rounded-lg border border-gray-300 shadow-md"
              />
            </div>
          ) : (
            <div className="mt-4">
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Image Preview:</h3>
              <div className="w-full h-48 bg-gray-200 rounded-lg border border-gray-300 flex items-center justify-center">
                <span className="text-gray-500">No Image Available</span>
              </div>
            </div>
          )}
        </div>
        <div className="p-6 w-full md:w-1/2">
          <h3 className="text-xl font-semibold mb-2 text-gray-800">Foot Size Results:</h3>
          <div className="space-y-1">
            <p className="text-base md:text-lg text-gray-700">
              <strong>Foot Size:</strong> {footSizeData ? footSizeData.footSize : 'N/A'} cm
            </p>
            <p className="text-base md:text-lg text-gray-700">
              <strong>Shoe Size (US):</strong> {footSizeData ? footSizeData.shoeSize.US : 'N/A'}
            </p>
            <p className="text-base md:text-lg text-gray-700">
              <strong>Shoe Size (EU):</strong> {footSizeData ? footSizeData.shoeSize.EU : 'N/A'}
            </p>
            <p className="text-base md:text-lg text-gray-700">
              <strong>Shoe Size (UK):</strong> {footSizeData ? footSizeData.shoeSize.UK : 'N/A'}
            </p>
            <p className="text-base md:text-lg text-gray-700">
              <strong>Foot Length (cm):</strong>{' '}
              {footSizeData ? footSizeData.shoeSize['Foot Length (cm)'] : 'N/A'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FootSizeMeasurement;
