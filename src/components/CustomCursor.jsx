import React, { useState, useEffect, useRef } from 'react';
import './CustomCursor.css';

function CustomCursor() {
  const cursorRef = useRef(null);

  useEffect(() => {
    const onMouseMove = (e) => {
      cursorRef.current.style.left = `${e.clientX}px`;
      cursorRef.current.style.top = `${e.clientY}px`;
    };

    const onMouseOver = (e) => {
      if (e.target.tagName === 'A' || e.target.tagName === 'BUTTON') {
        cursorRef.current.classList.add('hover');
      }
    };

    const onMouseOut = (e) => {
      if (e.target.tagName === 'A' || e.target.tagName === 'BUTTON') {
        cursorRef.current.classList.remove('hover');
      }
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseover', onMouseOver);
    document.addEventListener('mouseout', onMouseOut);


    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseover', onMouseOver);
      document.removeEventListener('mouseout', onMouseOut);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="custom-cursor"
    />
  );
}

export default CustomCursor;
