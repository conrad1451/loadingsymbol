import React, { useState, useEffect } from 'react';

const ImageLoader: React.FC = () => {
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const loadImage = async () => {
      try {
        const response = await fetch('https://picsum.photos/id/237/200/300'); // replace image.jpg if necessary
        if (!response.ok) {
          throw new Error('Failed to load image');
        }
        const blob = await response.blob();
        const objectUrl = URL.createObjectURL(blob);
        setImageUrl(objectUrl);
        setIsLoading(false);
      } catch (error) {
        console.error('Error loading image:', error);
        setIsLoading(false);
      }
    };

    loadImage();

    return () => {
      if (imageUrl) {
        URL.revokeObjectURL(imageUrl); // Clean up object URL on unmount
      }
    };
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (imageUrl) {
    return <img src={imageUrl} alt="Loaded from endpoint" />;
  }

  return <div>Failed to load image.</div>; // optional error display
};

export default ImageLoader;