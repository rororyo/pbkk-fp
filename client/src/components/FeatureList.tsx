const IconComponents = () => {
  return (
    <div className="flex justify-around py-8">
      <div className="flex flex-col items-center">
        <img
          src="/assets/features/1.png"
          alt="Logo 1"
          className="md:w-17 md:h-17 transform transition-transform duration-300 hover:scale-110"
        />
      </div>
      <div className="flex flex-col items-center">
        <img
          src="/assets/features/2.png"
          alt="Logo 2"
          className="md:w-17 md:h-17 transform transition-transform duration-300 hover:scale-110"
        />
      </div>
      <div className="flex flex-col items-center">
        <img
          src="/assets/features/3.png"
          alt="Logo 3"
          className="md:w-17 md:h-17 transform transition-transform duration-300 hover:scale-110"
        />
      </div>
      <div className="flex flex-col items-center">
        <img
          src="/assets/features/4.png"
          alt="Logo 4"
          className="md:w-17 md:h-17 transform transition-transform duration-300 hover:scale-110"
        />
      </div>
    </div>
  );
};

export default IconComponents;
