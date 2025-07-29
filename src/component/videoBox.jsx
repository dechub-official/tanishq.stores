import { useRef, useState, useEffect } from 'react';

export default function VideoBox({ height, src, playBtn, thumbnail, pauseBtn }) {
     const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasEnded, setHasEnded] = useState(false);

  const handlePlayPause = () => {
    if (!videoRef.current) return;

    if (isPlaying) {
      videoRef.current.pause();
    } else {
      if (hasEnded) {
        videoRef.current.currentTime = 0;
        setHasEnded(false);
      }
      videoRef.current.play();
    }
  };

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);
    const handleEnded = () => {
      setIsPlaying(false);
      setHasEnded(true);
    };

    video.addEventListener('play', handlePlay);
    video.addEventListener('pause', handlePause);
    video.addEventListener('ended', handleEnded);

    return () => {
      video.removeEventListener('play', handlePlay);
      video.removeEventListener('pause', handlePause);
      video.removeEventListener('ended', handleEnded);
    };
  }, []);

  const showOverlay = !isPlaying || hasEnded;

  return (
    <div className="relative w-full" style={height}>
      <video ref={videoRef} src={src} className="w-full object-cover" style={height}/>
      {showOverlay && (
        <img
          src={thumbnail}
          alt="Video thumbnail"
          className="absolute top-0 left-0 w-full h-full object-cover pointer-events-none"
        />
      )}
      <button
        onClick={handlePlayPause}
        className="absolute inset-0 flex items-center justify-center"
      >
        {isPlaying ? pauseBtn : 
      <div className='relative flex justify-center items-center rounded-full overflow-hidden'>
          <div
        className='border border-[rgba(255,255,255,0.2)] rounded-full overflow-hidden'
        style={{
          backdropFilter: 'blur(10px)',
          clipPath: 'url(#bgblur_0_265_1352_clip_path)',
          height: '80px',
          width: '80px',
        }}
      />
      <div className='absolute'>{playBtn}</div>
      </div>
    }
      </button>
    </div>
  );
};

 
