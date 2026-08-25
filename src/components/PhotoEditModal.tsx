import React, { useState, useRef, useEffect } from 'react';
import { X, Upload, Link as LinkIcon, Image as ImageIcon, RotateCcw, Check, Sparkles, Sliders, Camera, AlertCircle } from 'lucide-react';
import { useProfilePhoto, DEFAULT_PROFILE_PHOTO } from '../context/PhotoContext';
import { initialProfile } from '../data/portfolioData';
import { playSound } from '../utils/sound';

export const PhotoEditModal: React.FC = () => {
  const {
    isModalOpen,
    closePhotoModal,
    photoUrl,
    objectPosition: initialPos,
    zoomLevel: initialZoom,
    updatePhoto,
    resetToDefault,
    isCustom,
  } = useProfilePhoto();

  const [activeTab, setActiveTab] = useState<'upload' | 'url'>('upload');
  const [previewUrl, setPreviewUrl] = useState<string>(photoUrl);
  const [position, setPosition] = useState<string>(initialPos || 'object-top');
  const [zoom, setZoom] = useState<number>(initialZoom || 1);
  const [urlInput, setUrlInput] = useState<string>('');
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [isSavedToast, setIsSavedToast] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState<string>('');

  const fileInputRef = useRef<HTMLInputElement>(null);

  // Sync state when modal opens
  useEffect(() => {
    if (isModalOpen) {
      setPreviewUrl(photoUrl);
      setPosition(initialPos || 'object-top');
      setZoom(initialZoom || 1);
      setErrorMsg('');
      setIsSavedToast(false);
    }
  }, [isModalOpen, photoUrl, initialPos, initialZoom]);

  if (!isModalOpen) return null;

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    processFile(file);
  };

  const processFile = (file: File) => {
    if (!file.type.startsWith('image/')) {
      setErrorMsg('Please select a valid image format (JPEG, PNG, WebP, GIF).');
      return;
    }
    setErrorMsg('');
    const reader = new FileReader();
    reader.onload = (event) => {
      const res = event.target?.result as string;
      if (res) {
        setPreviewUrl(res);
        playSound('hover');
      }
    };
    reader.readAsDataURL(file);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files?.[0];
    if (file) {
      processFile(file);
    }
  };

  const handleApplyUrl = () => {
    if (!urlInput.trim()) return;
    setErrorMsg('');
    setPreviewUrl(urlInput.trim());
    playSound('hover');
  };

  const handleSave = () => {
    updatePhoto(previewUrl, position, zoom);
    setIsSavedToast(true);
    setTimeout(() => {
      setIsSavedToast(false);
      closePhotoModal();
    }, 900);
  };

  const handleReset = () => {
    resetToDefault();
    setPreviewUrl(DEFAULT_PROFILE_PHOTO);
    setPosition('object-top');
    setZoom(1);
    setUrlInput('');
    setErrorMsg('');
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
      onClick={closePhotoModal}
    >
      <div
        className="w-full max-w-3xl gold-card rounded-2xl border border-[#E5A93C]/40 shadow-[0_0_50px_rgba(229,169,60,0.3)] overflow-hidden flex flex-col text-xs text-white"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#E5A93C]/20 bg-[#090D15]">
          <div className="flex items-center gap-2.5">
            <Camera className="w-4 h-4 text-[#E5A93C]" />
            <span className="text-xs font-mono uppercase tracking-wider font-bold text-[#E5A93C]">
              PHOTO STUDIO // CUSTOM PORTRAIT UPLOAD
            </span>
          </div>
          <button
            onClick={closePhotoModal}
            className="p-1.5 rounded-lg bg-white/[0.04] hover:bg-[#E5A93C]/20 text-[#CBD5E1] hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-6 font-sans bg-[#07090E]">
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
            
            {/* Left Column: Interactive Live Preview Card */}
            <div className="md:col-span-5 flex flex-col items-center">
              <span className="text-xs font-mono uppercase tracking-wider text-[#94A3B8] mb-2 self-start flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-[#E5A93C]" />
                Live Display Preview
              </span>

              <div className="w-full gold-card p-3 rounded-2xl border border-[#E5A93C]/35 relative overflow-hidden shadow-2xl">
                <div className="relative aspect-[3/4] overflow-hidden rounded-xl bg-[#0F1420] border border-[#E5A93C]/20">
                  <img
                    src={previewUrl}
                    alt="Preview"
                    referrerPolicy="no-referrer"
                    style={{
                      transform: `scale(${zoom})`,
                      transformOrigin: position === 'object-top' ? 'top center' : position === 'object-bottom' ? 'bottom center' : 'center center',
                    }}
                    className={`w-full h-full object-cover ${position} filter contrast-[1.05] brightness-105 transition-all duration-300`}
                    onError={() => {
                      setErrorMsg('Failed to load image from this URL. Please check the link or upload a local file.');
                    }}
                  />
                  
                  {/* Subtle Gradient Shadow */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#07090E] via-transparent to-transparent opacity-75 pointer-events-none" />

                  {/* Status Badge */}
                  <div className="absolute top-2.5 left-2.5 bg-[#07090E]/80 backdrop-blur-md px-2.5 py-1 rounded-md border border-[#E5A93C]/40 text-[9px] font-mono font-bold text-[#FDD26E]">
                    {initialProfile.name}
                  </div>

                  {/* Signature */}
                  <div className="absolute bottom-2.5 right-3.5 text-right select-none">
                    <span className="font-signature text-3xl text-[#FDD26E] drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
                      {initialProfile.signatureName}
                    </span>
                  </div>
                </div>

                <div className="flex justify-between items-center pt-2.5 text-[11px] font-mono">
                  <span className="text-[#94A3B8]">Aspect Ratio 3:4</span>
                  <span className="text-[#E5A93C] font-bold">Harini M</span>
                </div>
              </div>
            </div>

            {/* Right Column: Upload Controls & Adjustments */}
            <div className="md:col-span-7 space-y-5">
              
              {/* Tab Selector */}
              <div className="flex rounded-xl bg-white/[0.03] p-1 border border-[#E5A93C]/20 font-mono text-xs">
                <button
                  type="button"
                  onClick={() => {
                    setActiveTab('upload');
                    playSound('hover');
                  }}
                  className={`flex-1 py-2 rounded-lg flex items-center justify-center gap-2 font-bold transition-all ${
                    activeTab === 'upload'
                      ? 'bg-[#E5A93C] text-black shadow-md'
                      : 'text-[#94A3B8] hover:text-white'
                  }`}
                >
                  <Upload className="w-3.5 h-3.5" />
                  <span>Upload File</span>
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setActiveTab('url');
                    playSound('hover');
                  }}
                  className={`flex-1 py-2 rounded-lg flex items-center justify-center gap-2 font-bold transition-all ${
                    activeTab === 'url'
                      ? 'bg-[#E5A93C] text-black shadow-md'
                      : 'text-[#94A3B8] hover:text-white'
                  }`}
                >
                  <LinkIcon className="w-3.5 h-3.5" />
                  <span>Image URL</span>
                </button>
              </div>

              {/* Error Message if any */}
              {errorMsg && (
                <div className="p-3 rounded-xl bg-red-950/50 border border-red-500/40 text-red-200 text-xs flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 text-red-400 shrink-0" />
                  <span>{errorMsg}</span>
                </div>
              )}

              {/* Upload Tab: Drag & Drop Zone */}
              {activeTab === 'upload' && (
                <div
                  onDragOver={handleDragOver}
                  onDragLeave={handleDragLeave}
                  onDrop={handleDrop}
                  onClick={() => fileInputRef.current?.click()}
                  className={`border-2 border-dashed rounded-2xl p-6 sm:p-8 flex flex-col items-center justify-center text-center cursor-pointer transition-all ${
                    isDragging
                      ? 'border-[#E5A93C] bg-[#E5A93C]/10 scale-[1.01]'
                      : 'border-[#E5A93C]/30 bg-white/[0.02] hover:border-[#E5A93C]/60 hover:bg-white/[0.04]'
                  }`}
                >
                  <input
                    type="file"
                    ref={fileInputRef}
                    onChange={handleFileChange}
                    accept="image/png, image/jpeg, image/jpg, image/webp, image/gif"
                    className="hidden"
                  />
                  <div className="w-12 h-12 rounded-full bg-[#E5A93C]/10 border border-[#E5A93C]/30 flex items-center justify-center text-[#E5A93C] mb-3">
                    <Upload className="w-6 h-6" />
                  </div>
                  <h4 className="text-sm font-bold text-white mb-1">
                    Drag & Drop your photo here
                  </h4>
                  <p className="text-xs text-[#94A3B8] mb-3">
                    or click to browse from your device
                  </p>
                  <span className="text-[10px] font-mono text-[#FDD26E] bg-white/[0.05] px-3 py-1 rounded-full border border-[#E5A93C]/20">
                    Supports JPG, PNG, WebP
                  </span>
                </div>
              )}

              {/* URL Tab */}
              {activeTab === 'url' && (
                <div className="space-y-3 p-4 rounded-xl bg-white/[0.02] border border-[#E5A93C]/20">
                  <label className="text-xs font-mono text-[#94A3B8] block">
                    Paste Direct Image URL:
                  </label>
                  <div className="flex gap-2">
                    <input
                      type="url"
                      placeholder="https://example.com/my-photo.jpg"
                      value={urlInput}
                      onChange={(e) => setUrlInput(e.target.value)}
                      className="flex-1 bg-white/[0.04] border border-[#E5A93C]/30 rounded-xl px-3 py-2 text-xs text-white placeholder-[#94A3B8] focus:outline-none focus:border-[#E5A93C]"
                    />
                    <button
                      type="button"
                      onClick={handleApplyUrl}
                      className="px-4 py-2 gold-btn rounded-xl text-xs font-bold font-mono uppercase"
                    >
                      Preview
                    </button>
                  </div>
                  <p className="text-[11px] text-[#94A3B8]">
                    Tip: You can paste public image links from LinkedIn, GitHub, Google Drive, or Cloudinary.
                  </p>
                </div>
              )}

              {/* Adjustments: Framing & Zoom */}
              <div className="space-y-3 p-4 rounded-xl bg-white/[0.02] border border-[#E5A93C]/20 font-mono">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-[#E5A93C] font-bold flex items-center gap-1.5">
                    <Sliders className="w-3.5 h-3.5" />
                    Framing Alignment
                  </span>
                  <span className="text-[11px] text-[#94A3B8]">
                    Zoom: {Math.round(zoom * 100)}%
                  </span>
                </div>

                <div className="grid grid-cols-3 gap-2 text-xs">
                  {[
                    { id: 'object-top', label: 'Top (Face Focus)' },
                    { id: 'object-center', label: 'Center' },
                    { id: 'object-bottom', label: 'Bottom' },
                  ].map((pos) => (
                    <button
                      key={pos.id}
                      type="button"
                      onClick={() => {
                        setPosition(pos.id);
                        playSound('hover');
                      }}
                      className={`py-1.5 px-2 rounded-lg border text-center transition-all ${
                        position === pos.id
                          ? 'border-[#E5A93C] bg-[#E5A93C]/20 text-[#FDD26E] font-bold'
                          : 'border-white/10 bg-white/[0.02] text-[#94A3B8] hover:text-white'
                      }`}
                    >
                      {pos.label}
                    </button>
                  ))}
                </div>

                {/* Zoom Slider */}
                <div className="pt-2">
                  <div className="flex justify-between text-[11px] text-[#94A3B8] mb-1">
                    <span>100%</span>
                    <span>150%</span>
                    <span>200%</span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="2"
                    step="0.05"
                    value={zoom}
                    onChange={(e) => setZoom(parseFloat(e.target.value))}
                    className="w-full accent-[#E5A93C] cursor-pointer"
                  />
                </div>
              </div>

            </div>

          </div>

        </div>

        {/* Modal Footer Actions */}
        <div className="p-4 sm:p-6 bg-[#090D15] border-t border-[#E5A93C]/20 flex flex-wrap items-center justify-between gap-4 font-mono">
          
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handleReset}
              className="px-4 py-2 rounded-xl bg-white/[0.03] border border-[#E5A93C]/20 hover:border-[#E5A93C] text-[#CBD5E1] hover:text-white transition-all text-xs flex items-center gap-1.5"
            >
              <RotateCcw className="w-3.5 h-3.5 text-[#E5A93C]" />
              <span>Reset Default</span>
            </button>
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={closePhotoModal}
              className="px-4 py-2 rounded-xl bg-white/[0.03] border border-white/15 text-[#94A3B8] hover:text-white transition-colors text-xs"
            >
              Cancel
            </button>

            <button
              type="button"
              onClick={handleSave}
              className="px-6 py-2.5 gold-btn rounded-xl font-bold text-xs uppercase tracking-wider flex items-center gap-2 transition-all shadow-lg"
            >
              {isSavedToast ? (
                <>
                  <Check className="w-4 h-4 text-black" />
                  <span>Photo Saved!</span>
                </>
              ) : (
                <>
                  <Sparkles className="w-4 h-4" />
                  <span>Save & Apply Photo</span>
                </>
              )}
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};
