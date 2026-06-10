import { useState, useRef } from 'react';

const EditableMedia = ({ initialSrc, className = "", doubleClickHint = true }) => {
  const isInitialVideo =
    initialSrc.includes('.mp4') ||
    initialSrc.includes('.webm') ||
    initialSrc.includes('video');
  
  const [mediaSrc, setMediaSrc] = useState(initialSrc);
  const [mediaType, setMediaType] = useState(isInitialVideo ? 'video' : 'image');
  const fileInputRef = useRef(null);

  const handleDoubleClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setMediaSrc(url);
      setMediaType(file.type.startsWith('video/') ? 'video' : 'image');
    }
  };

  return (
    <div
      className={`cursor-pointer overflow-hidden ${className}`}
      onDoubleClick={handleDoubleClick}
    >
      <input
        type="file"
        accept="video/*,image/*"
        ref={fileInputRef}
        onChange={handleFileChange}
        className="hidden"
      />

      {mediaType === 'video' ? (
        <video
          key={mediaSrc}
          src={mediaSrc}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover block"
        />
      ) : (
        <img
          key={mediaSrc}
          src={mediaSrc}
          className="w-full h-full object-cover block"
          alt="Editable Content"
        />
      )}

      {doubleClickHint && (
        <div className="absolute top-4 right-4 z-10 pointer-events-none opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center gap-2 bg-carbono/70 px-3 py-1.5 rounded backdrop-blur-md">
          <svg
            className="w-4 h-4 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
            ></path>
          </svg>
          <span className="text-[10px] text-white uppercase tracking-widest font-bold">
            2 Cliques p/ Alterar
          </span>
        </div>
      )}
    </div>
  );
};

export default EditableMedia;
