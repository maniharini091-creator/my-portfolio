import React, { createContext, useContext, useState, useEffect } from 'react';
import { playSound } from '../utils/sound';

export const DEFAULT_PROFILE_PHOTO = '/src/assets/images/harini_photo_1787634130975.jpg';
const STORAGE_KEY = 'harini_portfolio_profile_photo_custom';
const STORAGE_FIT_KEY = 'harini_portfolio_photo_fit_custom';

interface PhotoContextType {
  photoUrl: string;
  objectPosition: string;
  zoomLevel: number;
  isCustom: boolean;
  isModalOpen: boolean;
  openPhotoModal: () => void;
  closePhotoModal: () => void;
  updatePhoto: (newUrl: string, position?: string, zoom?: number) => void;
  resetToDefault: () => void;
  handleFileDrop: (file: File) => void;
}

const PhotoContext = createContext<PhotoContextType | undefined>(undefined);

export const PhotoProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [photoUrl, setPhotoUrl] = useState<string>(DEFAULT_PROFILE_PHOTO);
  const [objectPosition, setObjectPosition] = useState<string>('object-top');
  const [zoomLevel, setZoomLevel] = useState<number>(1);
  const [isCustom, setIsCustom] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  // Load persisted photo from localStorage on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        setPhotoUrl(saved);
        setIsCustom(true);
      }
      const savedFit = localStorage.getItem(STORAGE_FIT_KEY);
      if (savedFit) {
        const parsed = JSON.parse(savedFit);
        if (parsed.position) setObjectPosition(parsed.position);
        if (parsed.zoom) setZoomLevel(parsed.zoom);
      }
    } catch (e) {
      console.warn('Could not read photo from localStorage', e);
    }
  }, []);

  const openPhotoModal = () => {
    playSound('click');
    setIsModalOpen(true);
  };

  const closePhotoModal = () => {
    playSound('click');
    setIsModalOpen(false);
  };

  const updatePhoto = (newUrl: string, position = 'object-top', zoom = 1) => {
    try {
      localStorage.setItem(STORAGE_KEY, newUrl);
      localStorage.setItem(STORAGE_FIT_KEY, JSON.stringify({ position, zoom }));
      setPhotoUrl(newUrl);
      setObjectPosition(position);
      setZoomLevel(zoom);
      setIsCustom(true);
      playSound('success');
    } catch (e) {
      console.error('Failed to save photo locally', e);
    }
  };

  const resetToDefault = () => {
    try {
      localStorage.removeItem(STORAGE_KEY);
      localStorage.removeItem(STORAGE_FIT_KEY);
      setPhotoUrl(DEFAULT_PROFILE_PHOTO);
      setObjectPosition('object-top');
      setZoomLevel(1);
      setIsCustom(false);
      playSound('click');
    } catch (e) {
      console.error('Failed to reset photo', e);
    }
  };

  const handleFileDrop = (file: File) => {
    if (!file.type.startsWith('image/')) {
      alert('Please upload a valid image file (JPG, PNG, WebP).');
      return;
    }
    const reader = new FileReader();
    reader.onload = (e) => {
      const result = e.target?.result as string;
      if (result) {
        updatePhoto(result, 'object-top', 1);
      }
    };
    reader.readAsDataURL(file);
  };

  return (
    <PhotoContext.Provider
      value={{
        photoUrl,
        objectPosition,
        zoomLevel,
        isCustom,
        isModalOpen,
        openPhotoModal,
        closePhotoModal,
        updatePhoto,
        resetToDefault,
        handleFileDrop,
      }}
    >
      {children}
    </PhotoContext.Provider>
  );
};

export const useProfilePhoto = () => {
  const context = useContext(PhotoContext);
  if (!context) {
    throw new Error('useProfilePhoto must be used within a PhotoProvider');
  }
  return context;
};
