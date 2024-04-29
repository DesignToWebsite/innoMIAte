import React, { useRef, useEffect } from 'react';

function ImageComponent({src, width, height, x, y, position,  }) {
  const imageRef = useRef(null);

  useEffect(() => {
    const image = imageRef.current;
    image.style.width = `${width}px`;
    image.style.height = `${height}px`;
    image.style.position = 'absolute';
    image.style.left = `${x}px`;
    image.style.top = `${y}px`;
    image.style.backgroundColor = "white";
  }, [width, height, x, y]);

  return (
    <img ref={imageRef} src={src} alt=""  />
  );
}

export default ImageComponent;