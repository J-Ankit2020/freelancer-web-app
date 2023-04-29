import { MdOutlineSpaceDashboard } from 'react-icons/md';
import { ImStatsBars2 } from 'react-icons/im';
import { GiMoneyStack } from 'react-icons/gi';
import { AiTwotoneAlert } from 'react-icons/ai';
import { BsChatDots, BsCardChecklist } from 'react-icons/bs';
const SideBar = () => {
  return (
    <div className='leftt text-white h-screen  bg-[#00083B] w-1/5'>
      <div className='absolute mt-[3px] top-[15%] left-[2%] font-semibold text-xl'>
        <div className='flex flex-row items-center justify-center'>
          <MdOutlineSpaceDashboard />
          <p className='ml-2'>Dashboard</p>
        </div>
        <div className='flex mt-5  flex-row items-center '>
          <ImStatsBars2 />
          <p className='ml-2'>Stats</p>
        </div>
        <div className='flex mt-5 flex-row items-center '>
          <GiMoneyStack />
          <p className='ml-2'>Jobs</p>
        </div>
        <div className='flex mt-5 flex-row items-center '>
          <AiTwotoneAlert />
          <p className='ml-2'>Alerts</p>
        </div>
        <div className='flex mt-5 flex-row items-center '>
          <BsChatDots />
          <p className='ml-2'>Chats</p>
        </div>
        <div className='flex mt-5 flex-row items-center '>
          <BsCardChecklist />
          <p className='ml-2'>List Job</p>
        </div>
      </div>
      <button className='bg-white absolute bottom-5 left-[2%] w-fit font-semibold hover:bg-transparent hover:border-white hover:text-white hover:border-2 text-black px-6 rounded-md py-2'>
        Profile
      </button>
    </div>
  );
};
export default SideBar;
