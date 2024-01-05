import React, { useEffect, useRef, useState } from 'react';
import styles from '@/styles/Home.module.css';
import Image from 'next/image';
import img1 from "../assets/img1.jpg";

const Hero = () => {
  const cursor1Ref = useRef(null);
  const cursor2Ref = useRef(null);
  const targetElementRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleMouseMove = (e) => {
    if (cursor1Ref.current && cursor2Ref.current) {
      const offsetX1 = cursor1Ref.current.offsetWidth / 2;
      const offsetY1 = cursor1Ref.current.offsetHeight / 2;
      const offsetX2 = cursor2Ref.current.offsetWidth / 2;
      const offsetY2 = cursor2Ref.current.offsetHeight / 2;

      cursor1Ref.current.style.left = `${e.clientX - offsetX1}px`;
      cursor1Ref.current.style.top = `${e.clientY - offsetY1}px`;

      cursor2Ref.current.style.left = `${e.clientX - offsetX2}px`;
      cursor2Ref.current.style.top = `${e.clientY - offsetY2}px`;

      if (isHovered) {
        cursor1Ref.current.style.transform = cursor2Ref.current.style.transform = 'scale(0.6)';
        cursor1Ref.current.style.mixBlendMode = cursor2Ref.current.style.mixBlendMode = 'difference';
      } else {
        cursor1Ref.current.style.transform = cursor2Ref.current.style.transform = 'scale(1)';
        cursor1Ref.current.style.mixBlendMode = cursor2Ref.current.style.mixBlendMode = 'normal';
      }
    }
  };

  const handleMouseOver = () => {
    setIsHovered(true);
  };

  const handleMouseOut = () => {
    setIsHovered(false);
  };

  useEffect(() => {
    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, [isHovered]);


  return (
    <>
      <div className={styles.cursor1} ref={cursor1Ref}></div>
      <div className={styles.cursor2} ref={cursor2Ref}></div>
      <div>
        <div className={styles.logo}>
          <h1>
            <span className={styles.s}>S</span>
            <span className={styles.y}>Y</span>
            <span className={styles.n}>N</span>
            <span className={styles.t}>T</span>
            <span className={styles.a}>A</span>
            <span className={styles.x}>X</span>
          </h1>
          <h3>CODE CONNECT COMMUNICATE</h3>
        </div>
        <p
          className={styles.logoheading}
          ref={targetElementRef}
          onMouseEnter={handleMouseOver}
          onMouseLeave={handleMouseOut}
        >
          MANDEEP YADAV, CREATIVE DEVELOPER WITH A FOCUS ON 3D, INTERACTIVE EXPERIENCES, AND SEAMLESS ANIMATIONS. BASED IN INDIA, WORKING REMOTELY GLOBALLY.
        </p>

        <div className={styles.buttons}>
          <a
            className={styles.chatbtn}
            href="#"
            ref={targetElementRef}
            onMouseEnter={handleMouseOver}
            onMouseLeave={handleMouseOut}
          >
            CHAT NOW
          </a>
          <a
            className={styles.contbtn}
            href=""
            ref={targetElementRef}
            onMouseEnter={handleMouseOver}
            onMouseLeave={handleMouseOut}
          >
            CONTACT
          </a>
        </div>

        <div className={styles.imagecont}
        ref={targetElementRef}
            onMouseEnter={handleMouseOver}
            onMouseLeave={handleMouseOut}
            >
          <Image src={img1} height={250} width={600} 
            onMouseEnter={handleMouseOver}
            onMouseLeave={handleMouseOut}
          />
        </div>
      </div>
    </>
  );
};

export default Hero;