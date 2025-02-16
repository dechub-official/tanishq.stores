import { BoxIcon, CollectionIcon, DailywearIcon, EarringIcon, GIftingIcon, GoldIcon, MobDiamondIcon, RingsIcon, TanishqIcon, WeddingIcon } from "../../shared/svg/Icon"

export default function MobileLinks() {
   
    const VisitOutside = (url) => {
        window.open(url, '_blank');
      };
    const links = [
        {
            name: 'All Jewellery',
            path: `https://www.tanishq.co.in/shop/jewellery?lang=en_IN`,
            icon: <BoxIcon />
        },
        {
            name: 'Diamond',
            path: `https://www.tanishq.co.in/shop/diamond?lang=en_IN`,
            icon: <MobDiamondIcon />
        },
        {
            name: 'Gold',
            path: `https://www.tanishq.co.in/shop/gold-1?lang=en_IN`,
            icon: <GoldIcon />
        },
        {
            name: 'Earrings',
            path: `https://www.tanishq.co.in/shop/earring?lang=en_IN`,
            icon: <EarringIcon />
        },
        {
            name: 'Rings',
            path: `https://www.tanishq.co.in/shop/finger-rings?lang=en_IN`,
            icon: <RingsIcon />
        },
        {
            name: 'Daily wear',
            path: `https://www.tanishq.co.in/shop/glamdays?lang=en_IN`,
            icon: <DailywearIcon />
        },
        {
            name: 'Wedding',
            path: `https://www.tanishq.co.in/rivaah?lang=en_IN`,
            icon: <WeddingIcon />
        },
        {
            name: 'Collections',
            path: `https://www.tanishq.co.in/thejoyofdressing?lang=en_IN`,
            icon: <CollectionIcon />
        },
        {
            name: 'Gifting',
            path: `https://www.tanishq.co.in/gifting-guide?lang=en_IN`,
            icon: <GIftingIcon />
        },
        {
            name: 'More from Tanishq',
            path: `https://www.tanishq.co.in/digigold/home?lang=en_IN`,
            icon: <TanishqIcon />
        }
    ];
    
    return <>
        <div>
            {
                links.map((link,index)=>{
                    return <div onClick={()=>VisitOutside(link.path)} key={index} className="flex items-center justify-between py-5 border-b border-gray-200">
                        <div className="flex items-center">
                            <div className="ml-2 mr-3">
                                {link.icon}
                            </div>
                            <div className="font-fraunces font-medium text-[14px] text-black">
                                {link.name}
                            </div>
                        </div>
                        <div className="-rotate-90">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="black">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </div>
                    </div>
                })
            }
        </div>
    </>
}