import React from 'react';

const Preview = () => {
  return (
    <div className="w-full max-w-5xl mx-auto mt-20 px-4 sm:px-6 lg:px-8 ">
      <div className="w-ful h-full  rounded-xl shadow-2xl shadow-neutral-600 bg-neutral-950 overflow-hidden flex items-center justify-center border-8 border-neutral-900 ">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-contain"
          src="/video.mp4"
        />
      </div>
    </div>
  );
};

export default Preview;
