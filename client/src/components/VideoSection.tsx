import React from 'react';
import ReactPlayer from 'react-player';

const FullScreenVideoPlayer: React.FC = () => {
  return (
    <div className="relative w-full h-screen">
      {/* Full screen container */}
      <ReactPlayer
        url="../assets/video/shoe_promo.mp4"
        className="absolute top-0 left-0 w-full h-full"
        playing={true}
        controls={false} // Disable controls to hide the icon
        width="100%"
        height="100%"
      />
    </div>
  );
};

export default FullScreenVideoPlayer;
