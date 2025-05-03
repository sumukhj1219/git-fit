import React from 'react';

const Preview = () => {
  return (
    <div className="w-full max-w-5xl mx-auto mt-20 px-4 sm:px-6 lg:px-8">
      <div className="w-full h-[50vh] sm:h-[60vh] md:h-[70vh] rounded-xl shadow-md overflow-hidden flex items-center justify-center border-8 border-neutral-900 ">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-contain"
          src="/vid.mp4"
        />
      </div>
    </div>
  );
};

export default Preview;
