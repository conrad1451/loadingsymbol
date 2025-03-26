import React, { useState, useEffect } from 'react';

interface ImageLoaderProps {
  imageUrl: string;
  altText?: string;
}

const ImageLoader: React.FC<ImageLoaderProps> = ({ imageUrl, altText = "Loaded image" }) => {
  const [loadedImageUrl, setLoadedImageUrl] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null); // Add error state

  useEffect(() => {
    const loadImage = async () => {
      try {
        const response = await fetch(imageUrl);
        if (!response.ok) {
          throw new Error('Failed to load image');
        }
        const blob = await response.blob();
        const objectUrl = URL.createObjectURL(blob);
        setLoadedImageUrl(objectUrl);
        setIsLoading(false);
      } catch (err: any) {
        console.error('Error loading image:', err);
        setError(err.message || "Failed to load image"); // Set error message
        setIsLoading(false);
      }
    };

    loadImage();

    return () => {
      if (loadedImageUrl) {
        URL.revokeObjectURL(loadedImageUrl);
      }
    };
  }, [imageUrl]);

  if (isLoading) {
    return <div>Loading...</div>; // Consider a placeholder image or skeleton
  }

  if (loadedImageUrl) {
    return <img src={loadedImageUrl} alt={altText} />;
  }

  if (error) {
    return <div>{error}</div>; // Display error message
  }

  return null; // Don't show anything if no error and not loading
};

export default ImageLoader;