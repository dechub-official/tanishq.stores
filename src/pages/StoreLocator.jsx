import { useStoreCount, useCitiesByCollection, useSoulmateStores, useCelesteStores, useEnchantedCollectionStores } from '../hooks/useStores';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { gtmEventHandler } from '../utils/gtmDataLayer';

export default function StoreLocator() {
    const navigate = useNavigate();
    const { collection } = useParams();
    const [selectedCity, setSelectedCity] = useState('');
    const [selectedCollection, setSelectedCollection] = useState(collection || 'all');

    // Use Tanstack Query hooks
    const { data: storeCount } = useStoreCount();
    const { data: cities } = useCitiesByCollection(selectedCollection);
    const { data: soulmateStores } = useSoulmateStores();
    const { data: celesteStores } = useCelesteStores(selectedCity);
    const { data: enchantedStores } = useEnchantedCollectionStores(selectedCity);

    const handleCityChange = (city) => {
        setSelectedCity(city);
        gtmEventHandler('store_locator_city_selected', {
            city: city,
            collection: selectedCollection
        });
    };

    const handleCollectionChange = (collection) => {
        setSelectedCollection(collection);
        setSelectedCity('');
        navigate(`/store-locator/${collection}`);
        gtmEventHandler('store_locator_collection_selected', {
            collection: collection
        });
    };

    const getStoresForCollection = () => {
        switch (selectedCollection) {
            case 'soulmate':
                return soulmateStores?.result || [];
            case 'celeste':
                return celesteStores?.result || [];
            case 'enchanted':
                return enchantedStores?.result || [];
            default:
                return [];
        }
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-8">Find a Store</h1>
            
            {/* Collection Selector */}
            <div className="mb-8">
                <h2 className="text-xl mb-4">Select Collection</h2>
                <div className="flex gap-4">
                    <button 
                        className={`px-4 py-2 rounded ${selectedCollection === 'all' ? 'bg-[#832729] text-white' : 'bg-gray-200'}`}
                        onClick={() => handleCollectionChange('all')}
                    >
                        All Stores
                    </button>
                    <button 
                        className={`px-4 py-2 rounded ${selectedCollection === 'soulmate' ? 'bg-[#832729] text-white' : 'bg-gray-200'}`}
                        onClick={() => handleCollectionChange('soulmate')}
                    >
                        Soulmate
                    </button>
                    <button 
                        className={`px-4 py-2 rounded ${selectedCollection === 'celeste' ? 'bg-[#832729] text-white' : 'bg-gray-200'}`}
                        onClick={() => handleCollectionChange('celeste')}
                    >
                        Celeste
                    </button>
                    <button 
                        className={`px-4 py-2 rounded ${selectedCollection === 'enchanted' ? 'bg-[#832729] text-white' : 'bg-gray-200'}`}
                        onClick={() => handleCollectionChange('enchanted')}
                    >
                        Enchanted
                    </button>
                </div>
            </div>

            {/* City Selector */}
            {selectedCollection !== 'all' && (
                <div className="mb-8">
                    <h2 className="text-xl mb-4">Select City</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {cities?.result?.map((city) => (
                            <button
                                key={city}
                                className={`px-4 py-2 rounded ${selectedCity === city ? 'bg-[#832729] text-white' : 'bg-gray-200'}`}
                                onClick={() => handleCityChange(city)}
                            >
                                {city}
                            </button>
                        ))}
                    </div>
                </div>
            )}

            {/* Store List */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {getStoresForCollection().map((store) => (
                    <div key={store.storeCode} className="border rounded-lg p-4">
                        <h3 className="text-lg font-semibold">{store.storeName}</h3>
                        <p className="text-gray-600">{store.address}</p>
                        <p className="text-gray-600">{store.storeCity}, {store.storeState}</p>
                        <p className="text-gray-600">Phone: {store.phone}</p>
                        <button 
                            className="mt-4 bg-[#832729] text-white px-4 py-2 rounded"
                            onClick={() => navigate(`/store-locator/jewellery-stores/${store.storeState.toLowerCase()}/${store.storeCity.toLowerCase()}/${store.storeName.toLowerCase().split("- ")[1] ? store.storeName.toLowerCase().split("- ")[1].replace(/ /g, "-").replace(",", "-") : store.storeName.toLowerCase().replace(" ", "-").replace(",", "-")}-${store.storeCode}`)}
                        >
                            View Details
                        </button>
                    </div>
                ))}
            </div>

            {/* Store Count */}
            <div className="mt-8 text-center">
                <p className="text-gray-600">Total Stores: {storeCount?.result || 0}</p>
            </div>
        </div>
    );
} 