import { useRef } from 'react'

export default function InfoSection() {
    const videoRef = useRef(null)
    const playBtnRef = useRef(null)

    const handlePlay = () => {
        if (videoRef.current.paused) {
            videoRef.current.play()
            playBtnRef.current.classList.add('hidden')
        }
    }

    const handleVideoClick = () => {
        if (videoRef.current.paused) {
            videoRef.current.play()
            playBtnRef.current.classList.add('hidden')
        } else {
            videoRef.current.pause()
            playBtnRef.current.classList.remove('hidden')
        }
    }

    const handleVideoEnd = () => {
        playBtnRef.current.classList.remove('hidden')
    }

    return (
        <div className="py-10  lg:block">
            <div className="container mx-auto px-4">
                <div className="grid lg:grid-cols-3 gap-6">
                    {/* Card 1 */}
                    <div className="bg-white rounded-[24px] px-[36px] flex flex-col items-start justify-center border-[#F4E3CC] border 
          relative before:content-[''] before:absolute before:inset-0 before:border before:border-[#F4E3CC] before:mx-[10px] before:rounded-[24px] before:mt-[-1px] before:mb-[-1px]
             relative after:content-[''] after:absolute after:inset-0 after:border after:border-[#F4E3CC] after:my-[10px] after:rounded-[24px] after:ml-[-0.5px] after:mr-[-1px]">
                        <h2 className="text-[37px] font-semibold tracking-tight text-[#2B2A26] leading-[45px] font-fraunces">
                            Beautiful Hands - An Initiative by Tanishq
                        </h2>
                        <p className="text-[16px] text-[#767469] ibm-plex leading-relaxed mt-4">
                            Kundan jewelry, an ancient Indian craft, features pure gold and gemstones inlaid with precision. Rooted in royal heritage, each piece tells a story of love and legacy, making it a timeless treasure.
                        </p>
                        <button className={`text-[10px] mt-10 text-[rgb(255_255_255/52%)] rounded-full bg-[linear-gradient(90.18deg,#832729_0.17%,#631517_99.86%)] border-0 gap-1 md:flex rounded-pill hidden justify-center items-center py-2 pl-6 pr-2`}>
                            <span className="pr-1 text-[12px] text-white font-fraunces max-md:text-[11px] font-[500]">Learn More</span>
                            <i className="bi bi-chevron-right  p-1 rounded-circle bg-[#832729] rounded-full w-8 h-8 flex items-center justify-center"
                                style={{ boxShadow: 'inset -1px -1px 4px rgba(131, 39, 40, 0.6), inset 16px 16px 15.9px 4px rgba(73, 10, 12, 0.57)', }}></i>
                        </button>
                       
                    </div>

                    {/* Card 2 */}
                    <div className="rounded-[24px] bg-[#FFFCF7] flex flex-col justify-end border border-[#F4E3CC] p-4">
                        <div className="relative flex justify-center items-center">
                            <img src="https://tanishq-gold.vercel.app/assets/images/highlight-ring.png" className="w-full object-contain" alt="ring" />
                            <div className='absolute top-[45px] group'>
                                 <div style={{ boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.08)' }} className="w-8  h-8 bg-[rgb(255_255_255/59%)] rounded-full animate-pulse cursor-pointer flex justify-center items-center">
                                <div style={{ boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.08)' }} className='h-4 w-4 bg-white rounded-full'></div>
                             </div>
                              <div style={{borderRadius: "0 5px 5px 5px", boxShadow: "18px 8px 29px rgba(0, 0, 0, 0.12)"}} className="fraunces absolute top-full mb-2 bg-white text-black px-4 py-2 border border-[#E2E1DF] text-4 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
          Casual wear
        </div>
                            </div>
                              <div className='absolute top-[155px] left-[100px] group'>
                                 <div className="w-8  h-8 bg-[rgb(255_255_255/59%)] rounded-full animate-pulse cursor-pointer flex justify-center items-center">
                                <div className='h-4 w-4 bg-white rounded-full'></div>
                             </div>
                              <div style={{borderRadius: "0 5px 5px 5px", boxShadow: "18px 8px 29px rgba(0, 0, 0, 0.12)"}} className="fraunces absolute top-full mb-2 bg-white text-black px-4 py-2 border border-[#E2E1DF] text-4 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
          22k Gold
        </div>
                            </div>
                          
                        </div>
                        <div className="bg-white rounded-[12px] p-4 mt-6 border border-[rgba(0,0,0,0.1)" style={{boxShadow: "6px 8px 24px -5px rgba(0, 0, 0, 0.2)"}}>
                            <div className="flex items-center justify-between gap-2">
                                <div>
                                    <h4 className="text-sm font-normal text-gray-900 ">
                                        <a className='fraunces' href="#">Statement Gold Finger Ring</a>
                                    </h4>
                                    <div className="flex items-center gap-2">
                                        <span className="text-base font-fraunces text-gray-900">35,000/-</span>
                                        <small className="text-[#631517] -mb-[2px]">20% off</small>
                                    </div>
                                </div>
                                <a href="#" className="p-2 rounded-full hover:bg-gray-100 border border-[#CFCEC8]">
                                    <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clipPath="url(#clip0_16_760)">
                                            <path d="M8.16028 1.63965C9.23081 4.12054 10.5974 5.25929 13.875 7.13701" stroke="#490A0C" strokeWidth="0.6875" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M0.8125 7.1377L13.8747 7.1377" stroke="#490A0C" strokeWidth="0.6875" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M8.15479 12.6396C9.22532 10.1588 10.5919 9.02001 13.8695 7.14229" stroke="#490A0C" strokeWidth="0.6875" strokeLinecap="round" strokeLinejoin="round" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_16_760">
                                                <rect width="13.75" height="13.75" fill="white" transform="translate(0.125 0.264648)" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Card 3 - Video */}
                    <div className="relative rounded-[24px] overflow-hidden">
                        <video
                            ref={videoRef}
                            className="    h-[470px] object-cover w-full h-auto"
                            poster="https://tanishq-gold.vercel.app/assets/images/portrait-video-banner.png"
                            onClick={handleVideoClick}
                            onEnded={handleVideoEnd}
                        >
                            <source src="https://tanishq-gold.vercel.app/assets/images/video/video.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                        <button
                            ref={playBtnRef}
                            onClick={handlePlay}
                            type="button"
                            className="absolute inset-0 flex items-center justify-center"
                        >
                            <svg
    width="102"
    height="102"
    viewBox="0 0 102 102"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <clipPath id="bgblur_0_1_1250_clip_path">
        <circle cx="51" cy="51" r="50" />
      </clipPath>
    </defs>

    {/* Blurred background layer */}
    <foreignObject x="-28" y="-28" width="158" height="158">
      <div
        xmlns="http://www.w3.org/1999/xhtml"
        style={{
          backdropFilter: 'blur(14px)',
          WebkitBackdropFilter: 'blur(14px)',
          clipPath: 'url(#bgblur_0_1_1250_clip_path)',
          height: '100%',
          width: '100%',
        }}
      />
    </foreignObject>

    {/* Outer circles */}
    <g data-figma-bg-blur-radius="28">
      <circle cx="51" cy="51" r="50" fill="white" fillOpacity="0.1" />
      <circle cx="51" cy="51" r="50.5" stroke="white" strokeOpacity="0.2" />
    </g>

    {/* Play arrow */}
    <path
      d="M62.4698 47.5358C65.1365 49.0754 65.1365 52.9244 62.4698 54.464L48.265 62.6652C45.5984 64.2048 42.265 62.2803 42.265 59.2011L42.265 42.7987C42.265 39.7195 45.5984 37.795 48.265 39.3346L62.4698 47.5358Z"
      fill="white"
    />
  </svg>

                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
