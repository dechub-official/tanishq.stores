import { useEffect, useState } from "react";

import { useLocation, useNavigate, useParams } from "react-router-dom";
import SearchBox from "../component/search";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import StorePlate from "../component/storePlate";
import Subscription from "../component/Subscription";

import BookAnAppointment from "../component/bookAnAppointment";

export default function StoreList({ data, setIndividualStoreData, individualStoreData,BookAnAppointmentModal, setBookAnAppointmentModal }) {

    
    return (
        <>
         
            <div class="row my-5 grid-rows-1 w-[90%] md:w-[unset] grid md:grid-cols-2 gap-4">
                {/* <div className="my-4 lg:max-w-[1700px] md:w-[88%] flex flex-wrap justify-around  items-center  rounded-[17px]   py-5 px-4 md:px-6  ">  */}

                {data.map((storeData, i) => {
                    return (
                        <>
                            {i == 1 && <Subscription />}
                            {
                                individualStoreData?.activeStore == i && BookAnAppointmentModal.visible && BookAnAppointmentModal.mode == "card" ?
                                    <BookAnAppointment
                                        key={i}
                                        cities={data}
                                        activeStore={individualStoreData.activeStore}
                                        setIndividualStoreData={setIndividualStoreData}
                                        page={"city"}
                                        openingTime={individualStoreData.storeOpeningTime}
                                        isOpen={BookAnAppointmentModal.visible}
                                        storeCode={individualStoreData.storeCode}
                                        storeName={individualStoreData.storeName}
                                        setisOpen={() => setBookAnAppointmentModal({ visible: false })}
                                        closingTime={individualStoreData.storeClosingTime}
                                    />
                                    : <StorePlate key={i} index={i} data={storeData} setIndividualStoreData={setIndividualStoreData} setBookAnAppointmentModal={setBookAnAppointmentModal} />
                            }

                        </>
                    );
                })}
                {data.length <= 1 && <Subscription />}
            </div>

        </>
    );
}
