import { useNavigate } from "react-router-dom";
import { CartIcon, DiamondIcon, ProfileIcon, StoreIcon, WishlistIcon } from "../../shared/svg/Icon";

import QrExpander from "../qrExpander";


  
  const DesktopNavLinks = () => {
    const VisitOutside = (url) => {
      window.open(url, '_blank');
    };
    const nav=useNavigate()

    const navItems = [
        {
          label: 'Diamonds',
          icon: <DiamondIcon />,
          url: 'https://www.tanishq.co.in/shop/diamond?lang=en_IN',
          visibleLg: true,
        },
        {
          label: 'Stores',
          icon: <StoreIcon />,
          action: () => nav('/'),
          visibleLg: true,
        },
        {
          label: 'WishList',
          icon: <WishlistIcon />,
          url: 'https://www.tanishq.co.in/myaccount?lang=en_IN#Wishlist',
          visibleLg: true,
        },
        {
          label: 'Cart',
          icon: <CartIcon />,
          url: 'https://www.tanishq.co.in/cart?lang=en_IN',
          visibleLg: false,
        },
        {
          label: 'Account',
          icon: <ProfileIcon />,
          url: 'https://www.tanishq.co.in/myaccount?lang=en_IN#AccountOverview',
          visibleLg: false,
        },
      ];
  
    return (
      <div className='list flex  justify-end md:gap-x-10 gap-x-6 items-center md:my-0 my-3 md:items-center w-[40%] max-w-[12rem] md:max-w-[40%] md:w-[40%] cursor-pointer'>
        {navItems.map((item, index) => (
          <>
          <p
            key={index}
            className={`${
              item.visibleLg ? 'hidden lg:flex' : 'block'
            } items-center flex-col hover:scale-[1.2] transition-all duration-150 text-[15px] text-[#631517] font-[400] cursor-pointer af-bl`}
            onClick={() => (item.action ? item.action() : VisitOutside(item.url))}
          >
            {item.icon}
            {/* <span className='hidden lg:flex items-center flex-col'>{item.label}</span> */}
          </p>
          {index===3&&<><p key={index+'a'} className={`block md:hidden lg:hidden items-center flex-col hover:scale-[1.2] transition-all duration-150 text-[15px] text-[#631517] font-[400] cursor-pointer af-bl`}
            onClick={() => (navItems[0].action ? navItems[0].action() : VisitOutside(navItems[0].url))}
          >
            {navItems[0].icon}
          
          </p></>}
          </>
        ))}

  
        <div className='md:flex hidden items-center text-[#631517] flex-col justify-center'>
          <QrExpander />
          GET THE APP
        </div>
      </div>
    );
  };
  
  export default DesktopNavLinks;
  