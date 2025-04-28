

export default function FilterButton({ city, toggleCity, customCss, icon }) {
    return <>
        <button
            key={city}
            onClick={() => toggleCity(city)}
            className={`flex items-center justify-center  gap-3 rounded-full border px-5 py-2 text-lg transition
                             ${customCss}`}
        >
            {icon}
            {city}
        </button>




    </>
}
