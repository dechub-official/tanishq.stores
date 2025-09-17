import React, { useState } from 'react';

const StoreAppointmentCard = ({ step, dayInfo, setisOpen, activeModal, setActiveModal, buttonGIF, timeDivisions, activeDivision, handleDate, handleDivisions, handelStep, storeName, DeskBookAnAppointmentImage, handleInputChange, day, days, isTimeDisabled, setDayInfo, weekDays }) => {
    // State for validation errors
    const [errors, setErrors] = useState({
        name: '',
        phone: '',
        email: ''
    });

    // State for form values (used only for validation)
    const [formValues, setFormValues] = useState({
        name: dayInfo.name || '',
        phone: dayInfo.phone || '',
        email: dayInfo.email || ''
    });

    // Validate form fields
    const validateFields = () => {
        let isValid = true;
        const newErrors = {
            name: '',
            phone: '',
            email: ''
        };

        // Name validation
        if (!formValues.name || formValues.name.trim() === '') {
            newErrors.name = 'Name is required';
            isValid = false;
        }

        // Phone validation
        if (!formValues.phone || formValues.phone.trim() === '') {
            newErrors.phone = 'Phone number is required';
            isValid = false;
        } else if (!/^\d{10}$/.test(formValues.phone.replace(/[^0-9]/g, ''))) {
            newErrors.phone = 'Enter a valid 10-digit phone number';
            isValid = false;
        }

        // Email validation
        if (!formValues.email || formValues.email.trim() === '') {
            newErrors.email = 'Email is required';
            isValid = false;
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formValues.email)) {
            newErrors.email = 'Enter a valid email address';
            isValid = false;
        }

        setErrors(newErrors);
        return isValid;
    };

    // Enhanced handleInputChange with validation
    const validateInputChange = (e) => {
        const { name, value } = e.target;

        // Update local form values for validation
        setFormValues({
            ...formValues,
            [name]: value
        });

        // Call the parent component's handleInputChange
        if (typeof handleInputChange === 'function') {
            handleInputChange(e);
        }

        // Clear error when typing
        setErrors({
            ...errors,
            [name]: ''
        });
    };

    // Enhanced handelStep with validation
    const validateAndProceed = () => {
        if (step === 1) {
            // Validate day and time selection
            if (!dayInfo.day || !dayInfo.time) {
                // alert('Please select both day and time');
                return;
            }
            handelStep(2);
        } else if (step === 2) {
            if (validateFields()) {
                handelStep(3);
            }
        }
    };

    // Update formValues when dayInfo changes
    React.useEffect(() => {
        setFormValues({
            name: dayInfo.name || '',
            phone: dayInfo.phone || '',
            email: dayInfo.email || ''
        });
    }, [dayInfo.name, dayInfo.phone, dayInfo.email]);

    if (step === 3) {
        return (
            <div className="relative md:max-w-[550px] max-h-full flex items-center justify-center">
                {typeof (setisOpen) === "function" &&
                    <svg onClick={() => setisOpen(false)} width="24" height="24" className="top-[0%] cursor-pointer absolute z-50 right-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="12" cy="12" r="12" fill="#F6F6F6" />
                        <path d="M15.3636 9L9 15.3636M9 9L15.3636 15.3636" stroke="#300708" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                }
                <div className="relative">
                    <img src={DeskBookAnAppointmentImage} alt="" />
                    <div className="absolute flex justify-around items-center bottom-[10%] w-[80%] right-[-2%] ibm-plex text-[#636363] font-bold text-[8px] md:text-[15px]">
                        <p>{dayInfo.day} ({dayInfo.formattedDate.getDate()}/{dayInfo.formattedDate.getMonth() + 1}/{dayInfo.formattedDate.getFullYear()})</p>
                        <p>{timeDivisions[activeDivision].division}, {dayInfo.time}</p>
                    </div>
                </div>
            </div>
        );
    }

    return (<>
        <div className="col storeCard relative !overflow-visible md:!block hidden md:max-w-[550px]">
            {/* glowing-border -inset-[4px]*/}
            <div className={` shadow-xl absolute rounded-xl `}></div>
            <div className="card-container group h-full relative bg-white rounded-xl shadow-sm">

                <div className="flex items-center rounded-xl stag p-3 mb-2">
                    <p className="mb-0">
                        {/* <img src={festiveStrip} className="md:w-[50%] w-[80%]" alt="" /> */}
                    </p>
                </div>
                <div className="m-4 relative z-20">

                    {typeof (setisOpen) === "function" &&
                        <div className="relative overflow-visible">
                            <svg onClick={() => setisOpen(false)} width="24" height="24" className="top-[-50%] translate-y-[-75%] cursor-pointer absolute z-50 right-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="12" cy="12" r="12" fill="#F6F6F6" />
                                <path d="M15.3636 9L9 15.3636M9 9L15.3636 15.3636" stroke="#300708" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                    }
                    {step === 1 && (
                        <>

                            <h1 className="text-[#832729] md:text-[20px] text-[18px] md:text-left text-center font-fraunces font-bold">
                                Heading torw {storeName ? storeName : "Our Store"}?
                            </h1>
                            <p className="text-black font-fraunces md:text-[16px] text-[14px] md:text-left text-center">
                                Let us make it smoother and tailored for you. Book an appointment to skip the wait.
                            </p>
                            <div className="mt-[10%] flex flex-wrap md:flex-nowrap gap-y-5 md:justify-around justify-center gap-x-5">
                                <div className="overflow-visible">
                                    <input
                                        type="text"
                                        onClick={() => setActiveModal(1)}
                                        value={dayInfo.day ? `${dayInfo.day} ${dayInfo.date}` : 'Choose Day'}
                                        className="md:px-4 px-0 md:w-[initial] w-[100px] text-center cursor-pointer border border-black py-3 placeholder:text-[#969288] rounded-full placeholder:text-center"
                                        placeholder="Choose Day"
                                        readOnly
                                    />
                                    {activeModal === 1 && (
                                        <div className="absolute z-20">
                                            <div className="box p-4 rounded-md shadow-lg bg-white">
                                                <table className="table-auto w-full">
                                                    <tbody>
                                                        {[...Array(7)].map((_, i) => (
                                                            <tr
                                                                key={i}
                                                                className={`w-full cursor-pointer ${i === dayInfo.activeIndex ? "text-black font-bold" : "text-[#767469]"} hover:bg-gray-100 transition-all`}
                                                                onClick={() => { setActiveModal(); handleDate(i); }}
                                                            >
                                                                <td className="px-4 py-1">
                                                                    {i === 0 ? "Today" : i === 1 ? "Tomorrow" : weekDays[(day + i) % 7]}
                                                                </td>
                                                                <td className="px-4 py-1">{days[i]}</td>
                                                            </tr>
                                                        ))}
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    )}
                                </div>
                                <div>
                                    <input
                                        type="text"
                                        onClick={() => setActiveModal(2)}
                                        value={dayInfo.time || ''}
                                        className="md:px-4 px-0 md:w-[initial] w-[100px] text-center cursor-pointer border border-black py-3 placeholder:text-black rounded-full placeholder:text-center"
                                        placeholder="Choose Time"
                                        readOnly
                                    />
                                    {activeModal === 2 && (
                                        <div className="absolute z-20">
                                            <div className="box p-4 flex rounded-md shadow-lg bg-white">
                                                <div>
                                                    {timeDivisions.map((timeBlock, i) => (
                                                        !isTimeDisabled(timeBlock.division) && (
                                                            <p
                                                                key={i}
                                                                onClick={() => { handleDivisions(timeBlock.division, i); }}
                                                                className={`px-1 py-1 flex gap-x-2 items-center hover:font-bold cursor-pointer hover:bg-gray-100 ${activeDivision === i ? "text-black font-bold" : "text-[#767469] font-medium"} transition-all`}
                                                            >
                                                                {timeBlock.icon} {timeBlock.division}
                                                            </p>
                                                        )
                                                    ))}
                                                </div>
                                                <div>
                                                    {timeDivisions[activeDivision].times.map((time, i) => (
                                                        <div
                                                            key={i}
                                                            className="hover:font-bold cursor-pointer hover:bg-gray-100 transition-all"
                                                            onClick={() => { setActiveModal(); setDayInfo({ ...dayInfo, time }); }}
                                                        >
                                                            <td className="px-4 py-1">{time}</td>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                                <button
                                    className={`btn border-0 gap-1 md:flex rounded-pill hidden justify-center items-center p-2 ${(!dayInfo.day || !dayInfo.time) ? 'opacity-50 cursor-not-allowed' : ''}`}
                                    onClick={validateAndProceed}
                                    disabled={!dayInfo.day || !dayInfo.time}
                                >
                                    <span className="pr-1 text-[15px] font-fraunces md:text-[14px] font-[500]">Proceed</span>
                                    <i className="bi bi-chevron-right ic-btn p-1 rounded-circle"></i>
                                </button>
                            </div>
                        </>
                    )}
                    {step === 2 && (
                        <>
                            <h1 className="text-[#832729] text-[20px] font-fraunces font-bold">You're Almost There!</h1>
                            <div className="my-3 flex flex-wrap gap-x-5 gap-y-2">
                                <div className="relative">
                                    <input
                                        type="text"
                                        name="name"
                                        value={formValues.name}
                                        onChange={validateInputChange}
                                        className={`px-4 border w-fit border-${errors.name ? 'red-500' : '[#444444]'} py-3 placeholder:text-[#969288] rounded-full placeholder:text-center`}
                                        placeholder="Name*"
                                    />
                                    {errors.name && <p className="text-red-500 text-xs ml-4">{errors.name}</p>}
                                </div>
                                <div className="relative">
                                    <input
                                        type="text"
                                        name="phone"
                                        value={formValues.phone}
                                        onChange={validateInputChange}
                                        className={`px-4 border w-fit border-${errors.phone ? 'red-500' : '[#444444]'} py-3 placeholder:text-[#969288] rounded-full placeholder:text-center`}
                                        placeholder="Phone Number*"
                                    />
                                    {errors.phone && <p className="text-red-500 text-xs ml-4">{errors.phone}</p>}
                                </div>
                            </div>
                            <div className="md:my-3 my-6 flex items-start flex-col md:flex-row gap-y-2 gap-x-3">
                                <div className="relative w-full">
                                    <input
                                        type="text"
                                        name="email"
                                        value={formValues.email}
                                        onChange={validateInputChange}
                                        className={`px-4 border border-${errors.email ? 'red-500' : '[#444444]'} w-[98%] py-3 placeholder:text-[#969288] rounded-full placeholder:text-center`}
                                        placeholder="Type Your Email ID*"
                                    />
                                    {errors.email && <p className="text-red-500 text-xs ml-4">{errors.email}</p>}
                                </div>
                                <div className="flex items-center justify-center">
                                    <img
                                        src={buttonGIF}
                                        onClick={validateAndProceed}
                                        className="w-[180px] cursor-pointer"
                                        alt="Submit"
                                    />
                                </div>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
        <style jsx>{`
        /* 🔥 Glowing Gradient Border */
        .glowing-border {
          border-radius: 0.75rem; /* same as rounded-xl */
          padding: 6px;
          background: linear-gradient(
            90deg,
            #85591C,
            #D89946,
                       #D89946,
            #85591C
          );
          background-size: 400% 400%;
          animation: glowingBorder 6s linear infinite;
          z-index: 0;
          opacity: 1;
          filter: blur(1px);
          transition: opacity 0.3s ease;
        }


        @keyframes glowingBorder {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
      `}</style>
    </>
    );
};

export default StoreAppointmentCard;