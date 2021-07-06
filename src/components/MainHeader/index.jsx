import React, { useState, useEffect } from 'react';
import Header from '../Header';
import MobileHeader from '../MobileHeader';

const MainHeader = () => {
  const [isMobile, setIsmobile] = useState(false);

  useEffect(() => {
    const resize = () =>  {
      setIsmobile(window.innerWidth < 800);
    };

    window.addEventListener("resize", resize);
    resize();

    return () => window.removeEventListener('resize', resize);
  }, []);

  return (
    <div className='main__header'>
      {
        !isMobile
          ?
            <Header/>
          : <MobileHeader/>
      }
    </div>
  );
}

export default MainHeader;
