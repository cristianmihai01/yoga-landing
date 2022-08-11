import React, { useState } from 'react';

// import modal video
import ModalVideo from 'react-modal-video';
import '../video.scss';

const Start = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <section className='bg-pink-100 min-h-[428px]'>
      <div className='container mx-auto'>
        <div className='bg-green-200'>
          <button>btn</button>
        </div>
        {/* video */}
      </div>
      <ModalVideo
        channel='youtube'
        autoplay
        isOpen={isOpen}
        videoId='klmBssEYkdU'
        onClose={() => setOpen(false)}
      />
    </section>
  );
};

export default Start;
