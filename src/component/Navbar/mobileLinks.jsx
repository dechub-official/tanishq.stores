import { BoxIcon, CollectionIcon, DailywearIcon, EarringIcon, GIftingIcon, GoldIcon, MobDiamondIcon, RingsIcon, TanishqIcon, WeddingIcon } from "../../shared/svg/Icon"

export default function MobileLinks() {
    const links = [
        {
            name:'All Jewellery',
            path:'',
            icon:<BoxIcon/>
        },
        {
            name:'Diamond',
            path:'',
            icon:<MobDiamondIcon/>
        },
        {
            name:'Gold',
            path:'',
            icon:<GoldIcon/>
        },{
            name:'Earrings',
            path:'',
            icon:<EarringIcon/>
        },{
            name:'Rings',
            path:'',
            icon:<RingsIcon/>
        },{
            name:'Daily wear',
            path:'',
            icon:<DailywearIcon/>
        },{
            name:'Wedding',
            path:'',
            icon:<WeddingIcon/>
        },{
            name:'Collections',
            path:'',
            icon:<CollectionIcon/>
        },{
            name:'Gifting',
            path:'',
            icon:<GIftingIcon/>
        },{
            name:'More from tanishq',
            path:'',
            icon:<TanishqIcon/>
        }
        

    ]
    return <>
        <div>
            {
                links.map((link,index)=>{
                    return <div key={index} className="flex items-center justify-between py-5 border-b border-gray-200">
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