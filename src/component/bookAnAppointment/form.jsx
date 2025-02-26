import { useState } from 'react';
import buttonGIF from '../../assets/images/buton.gif';

export default function FormSection({ handelStep, handleInputChange }) {
    const [formValues, setFormValues] = useState({
        name: '',
        phone: '',
        email: ''
    });
    const [errors, setErrors] = useState({});

    const validate = () => {
        const newErrors = {};
        // alert('validate');
        // Full Name Validation
        if (!formValues.name.trim()) {
            newErrors.name = 'Full Name is required';
        } else if (formValues.name.trim().length < 3) {
            newErrors.name = 'Full Name must be at least 3 characters';
        }

        // Phone Number Validation
        if (!formValues.phone.trim()) {
            newErrors.phone = 'Phone Number is required';
        } else if (!/^\d{10}$/.test(formValues.phone.trim())) {
            newErrors.phone = 'Phone Number must be 10 digits';
        }

        // E-mail Validation
        if (!formValues.email.trim()) {
            newErrors.email = 'E-mail is required';
        } else if (!/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(formValues.email.trim())) {
            newErrors.email = 'E-mail is not valid';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({
            ...formValues,
            [name]: value
        });
        handleInputChange(e);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            handelStep(3);
        }
    };

    return (
        <>
            <h1 className="text-black px-4 text-[22px] font-fraunces text-left mb-2 mt-[2rem] font-medium">
                <span className="text-[#832729] font-fraunces">You're</span> Almost There!
            </h1>
            <div className="my-3 px-4 gap-x-1">
                <form autoComplete='off' onSubmit={handleSubmit}>
                    <div className="relative mb-6 mt-10">
                        <label className="ibm-plex text-[#636363] font-medium flex gap-x-1 mb-3 text-[14px]">
                            Full Name *
                        </label>
                        <input
                            autoComplete="off"
                            type="text"
                            name="name"
                            value={formValues.name}
                            onChange={handleChange}
                            className="px-4 border w-[90%] py-3 placeholder:text-[#969288] placeholder:font-medium ibm-plex outline-none rounded-full shadow-md"
                            placeholder="Name"
                        />
                        {errors.name && <p className="text-red-600 text-xs mt-1">{errors.name}</p>}
                    </div>

                    <div className="relative my-6">
                        <label className="ibm-plex text-[#636363] font-medium flex items-center mb-3 gap-x-1 text-[14px]">
                            Phone Number*
                        </label>
                        <input
                            autoComplete="off"
                            type="text"
                            name="phone"
                            value={formValues.phone}
                            onChange={handleChange}
                            className="px-4 border w-[90%] py-3 placeholder:text-[#969288] placeholder:font-medium ibm-plex outline-none rounded-full shadow-md"
                            placeholder="Phone"
                        />
                        {errors.phone && <p className="text-red-600 text-xs mt-1">{errors.phone}</p>}
                    </div>

                    <div className="relative mt-6 mb-8">
                        <label className="ibm-plex text-[#636363] font-medium flex items-center mb-3 gap-x-1 text-[14px]">
                            E-mail*
                        </label>
                        <input
                            autoComplete="off"
                            type="email"
                            name="email"
                            value={formValues.email}
                            onChange={handleChange}
                            className="px-4 border w-[90%] py-3 placeholder:text-[#969288] placeholder:font-medium ibm-plex outline-none rounded-full shadow-md"
                            placeholder="E-mail"
                        />
                        {errors.email && <p className="text-red-600 text-xs mt-1">{errors.email}</p>}
                    </div>

                    <div className="my-4 px-4 w-full mx-auto flex justify-center">
                        <img
                            src={buttonGIF}
                            onClick={handleSubmit}
                            className="w-[180px] cursor-pointer"
                            alt=""
                        />
                    </div>
                </form>
            </div>
        </>
    );
}
