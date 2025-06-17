

export default function FilterButton({ city, toggleCity, customCss }) {
    return <>
        <button
            key={city}
            onClick={() => toggleCity(city)}
            className={`flex items-center justify-center font-bold  gap-3 rounded-full border px-8 py-4 text-lg transition ${customCss}`}
        >
           
            {city}
        </button>




    </>
}
