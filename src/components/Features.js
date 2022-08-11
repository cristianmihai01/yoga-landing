import React, { useState } from 'react';

// import modal video
import ModalVideo from 'react-modal-video';
import '../video.scss';

// import icons
import { BsPlayCircleFill } from 'react-icons/bs';

const Features = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <section className='bg-pink-200'>
      <div className='container mx-auto'>
        <div className='bg-video bg-cover bg-center bg-no-repeat h-[35vh] lg:h-[622px] w-full max-w-[90vw] flex justify-center items-center rounded-md'>
          {/* play btn */}
          <div
            onClick={() => setOpen(!isOpen)}
            className='text-4xl lg:text-[120px] text-orange cursor-pointer hover:scale-110 transition'
          >
            <BsPlayCircleFill />
          </div>
        </div>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore ea
          hic accusantium deserunt rem repellendus quam atque nesciunt! Natus
          quas cumque et cum accusamus, laborum unde labore ratione magnam
          soluta voluptatibus, quo cupiditate nostrum aspernatur eaque odio? Quo
          fugit sint minima ad, doloremque quaerat soluta necessitatibus nostrum
          quod. Ullam suscipit et commodi debitis beatae fugit, dolorem unde a,
          doloribus ipsa recusandae ab iusto nesciunt error molestias, veritatis
          rem provident quas?
        </div>
      </div>
      {/* video */}
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

export default Features;
