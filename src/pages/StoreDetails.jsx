import { useStoreDetails, useBookAppointment, useUpdateStoreUserDetails } from '../hooks/useStores';
import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { gtmEventHandler } from '../utils/gtmDataLayer';

export default function StoreDetails() {
    const { state, city, store } = useParams();
    const navigate = useNavigate();
    const [appointmentData, setAppointmentData] = useState({
        name: '',
        phone: '',
        email: '',
        date: '',
        time: ''
    });

    // Use Tanstack Query hooks
    const { data: storeDetails, isLoading } = useStoreDetails(store);
    const { mutate: bookAppointment } = useBookAppointment();
    const { mutate: updateUserDetails } = useUpdateStoreUserDetails();

    const handleAppointmentSubmit = (e) => {
        e.preventDefault();
        bookAppointment(appointmentData, {
            onSuccess: () => {
                gtmEventHandler('appointment_booked', {
                    store: store,
                    city: city,
                    state: state
                });
                // Handle success (e.g., show success message)
            },
            onError: (error) => {
                // Handle error (e.g., show error message)
                console.error('Failed to book appointment:', error);
            }
        });
    };

    const handleUserDetailsUpdate = (mobileNo, name) => {
        updateUserDetails({ mobileNo, name }, {
            onSuccess: () => {
                gtmEventHandler('user_details_updated', {
                    store: store,
                    city: city,
                    state: state
                });
                // Handle success
            },
            onError: (error) => {
                // Handle error
                console.error('Failed to update user details:', error);
            }
        });
    };

    if (isLoading) {
        return <div>Loading...</div>;
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-8">{storeDetails?.result?.storeName}</h1>
            
            {/* Store Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div>
                    <h2 className="text-xl font-semibold mb-4">Store Details</h2>
                    <p className="text-gray-600">{storeDetails?.result?.address}</p>
                    <p className="text-gray-600">{storeDetails?.result?.storeCity}, {storeDetails?.result?.storeState}</p>
                    <p className="text-gray-600">Phone: {storeDetails?.result?.phone}</p>
                    <p className="text-gray-600">Email: {storeDetails?.result?.email}</p>
                </div>
                
                {/* Store Hours */}
                <div>
                    <h2 className="text-xl font-semibold mb-4">Store Hours</h2>
                    {storeDetails?.result?.storeHours?.map((hours, index) => (
                        <p key={index} className="text-gray-600">
                            {hours.day}: {hours.timing}
                        </p>
                    ))}
                </div>
            </div>

            {/* Book Appointment Form */}
            <div className="mb-8">
                <h2 className="text-xl font-semibold mb-4">Book an Appointment</h2>
                <form onSubmit={handleAppointmentSubmit} className="max-w-md">
                    <div className="mb-4">
                        <label className="block text-gray-700 mb-2">Name</label>
                        <input
                            type="text"
                            value={appointmentData.name}
                            onChange={(e) => setAppointmentData({ ...appointmentData, name: e.target.value })}
                            className="w-full px-4 py-2 border rounded"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 mb-2">Phone</label>
                        <input
                            type="tel"
                            value={appointmentData.phone}
                            onChange={(e) => setAppointmentData({ ...appointmentData, phone: e.target.value })}
                            className="w-full px-4 py-2 border rounded"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 mb-2">Email</label>
                        <input
                            type="email"
                            value={appointmentData.email}
                            onChange={(e) => setAppointmentData({ ...appointmentData, email: e.target.value })}
                            className="w-full px-4 py-2 border rounded"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 mb-2">Date</label>
                        <input
                            type="date"
                            value={appointmentData.date}
                            onChange={(e) => setAppointmentData({ ...appointmentData, date: e.target.value })}
                            className="w-full px-4 py-2 border rounded"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 mb-2">Time</label>
                        <input
                            type="time"
                            value={appointmentData.time}
                            onChange={(e) => setAppointmentData({ ...appointmentData, time: e.target.value })}
                            className="w-full px-4 py-2 border rounded"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="bg-[#832729] text-white px-6 py-2 rounded"
                    >
                        Book Appointment
                    </button>
                </form>
            </div>

            {/* Back Button */}
            <button
                onClick={() => navigate(-1)}
                className="bg-gray-200 text-gray-800 px-6 py-2 rounded"
            >
                Back to Store List
            </button>
        </div>
    );
} 