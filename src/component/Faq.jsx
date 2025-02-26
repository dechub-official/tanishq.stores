import { useState } from "react"
import ReactGA from 'react-ga4'
export default function FAQ(props) {
  let [open, setOpen] = useState([...Array(5).fill("0")])
  const handleChange = (index, data) => {

    if (open[index] == "0") {
      ReactGA.event({
        tital: data.question,
        // value: Clicks.getDir + 1,
        action: "faq_click",
      });
      open[index] = "fit"
      setOpen([...open])
    }
    else {
      open[index] = "0"
      setOpen([...open])
    }

  }
  return <>

    <main className="p-5 bg-light-blue h-[max-content]">
      <div className="flex justify-center items-start my-2">
        <div className="w-full sm:w-10/12 md:w-1/2 my-1 ">
          <div className="flex justify-center w-full">
            <h2 className="text-[20px] w-fit border-b-[3px] border-[#832729] pb-2 leading-10  font-semibold font-fraunces  text-center text-[#832729] mb-2">Frequently Asked Questions</h2>
          </div>
          <ul className="flex flex-col">
            {props.data?.map((data, i) => {
              return <li key={i} onClick={() => { handleChange(i, data) }} className={open[i] != 0 ? `bg-[#F3F3F3] my-2  rounded-[5px] shadow-lg border-r-4  border-[#832729]` : 'bg-[#F3F3F3] my-2 shadow-lg  rounded-[5px]'} x-data="accordion(1)">
                <h2

                  className="flex flex-row  items-center font-semibold p-3 cursor-pointer"
                  onClick={() => { handleChange(i) }}
                >
                  {open[i] == "0" ? <svg xmlns="http://www.w3.org/2000/svg" className="max-w-[30px] min-w-[30px]" onClick={() => { handleChange(i) }} width="34" height="34" viewBox="0 0 34 34" fill="none">
                    <g filter="url(#filter0_d_58_2403)">
                      <circle cx="16.6597" cy="12.6301" r="12.4595" transform="rotate(90 16.6597 12.6301)" fill="white" />
                    </g>
                    <path d="M20.3411 11.171C20.6644 10.8484 21.1879 10.8483 21.5113 11.1708C21.836 11.4945 21.8361 12.0202 21.5117 12.3441L19.1957 14.6557C17.5981 16.2504 15.0109 16.2504 13.4133 14.6557L11.0973 12.3441C10.7728 12.0202 10.773 11.4945 11.0977 11.1708C11.4211 10.8483 11.9446 10.8484 12.2679 11.171L13.9933 12.8923C15.2706 14.1666 17.3384 14.1666 18.6157 12.8923L20.3411 11.171Z" fill="#832729" />
                    <defs>
                      <filter id="filter0_d_58_2403" x="0.200195" y="0.170654" width="32.9189" height="32.9189" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                        <feOffset dy="4" />
                        <feGaussianBlur stdDeviation="2" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_58_2403" />
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_58_2403" result="shape" />
                      </filter>
                    </defs>
                  </svg> : <svg xmlns="http://www.w3.org/2000/svg" className="max-w-[30px] min-w-[30px]" onClick={() => { handleChange(i) }} width="34" height="34" viewBox="0 0 34 34" fill="none">
                    <g filter="url(#filter0_d_58_2414)">
                      <circle cx="12.4595" cy="12.4595" r="12.4595" transform="matrix(0 -1 -1 0 29.1191 25.6909)" fill="white" />
                    </g>
                    <path d="M20.3411 14.6906C20.6644 15.0132 21.1879 15.0133 21.5113 14.6908C21.836 14.3671 21.8361 13.8413 21.5117 13.5175L19.1957 11.2059C17.5981 9.61122 15.0109 9.61122 13.4133 11.2059L11.0973 13.5175C10.7728 13.8413 10.773 14.3671 11.0977 14.6908C11.4211 15.0133 11.9446 15.0132 12.2679 14.6906L13.9933 12.9693C15.2706 11.6949 17.3384 11.6949 18.6157 12.9693L20.3411 14.6906Z" fill="#832729" />
                    <defs>
                      <filter id="filter0_d_58_2414" x="0.200195" y="0.771973" width="32.9189" height="32.9189" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                        <feOffset dy="4" />
                        <feGaussianBlur stdDeviation="2" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_58_2414" />
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_58_2414" result="shape" />
                      </filter>
                    </defs>
                  </svg>}
                  <span onClick={() => { handleChange(i) }} className="ml-2">{data.question}</span>

                </h2>
                {open[i] == "fit" && <div
                  className={`rounded-[5px] overflow-hidden max-h-${open[i]} duration-500 transition-all`}
                  x-ref="tab">
                  <p className="p-3 text-gray-900">
                    {data.answer}
                  </p>
                </div>}
              </li>
            })}


          </ul>
        </div>
      </div>
    </main>

    {/* <script>
    document.addEventListener('alpine:init', () => {
      Alpine.store('accordion', {
        tab: 0
      });
      
      Alpine.data('accordion', (idx) => ({
        init() {
          this.idx = idx;
        },
        idx: -1,
        handleClick() {
          this.$store.accordion.tab = this.$store.accordion.tab === this.idx ? 0 : this.idx;
        },
        handleRotate() {
          return this.$store.accordion.tab === this.idx ? 'rotate-180' : '';
        },
        handleToggle() {
          return this.$store.accordion.tab === this.idx ? `max-height: ${this.$refs.tab.scrollHeight}px` : '';
        }
      }));
    })
  </script> */}

  </>
}