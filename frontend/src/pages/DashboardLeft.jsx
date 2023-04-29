import { MdOutlineSpaceDashboard } from 'react-icons/md'
import { ImStatsBars2 } from 'react-icons/im'
import { GiMoneyStack } from 'react-icons/gi'
import { AiTwotoneAlert } from 'react-icons/ai'
import { BsChatDots, BsCardChecklist } from 'react-icons/bs'
const DashboardLeft = () => {
    return (
        <div className="leftt text-white max-h-full  bg-[#00083B] w-1/5">
                <div className="  top-[15%] left-[2%] font-semibold my-[25%]">
               <div className='flex  items-center justify-center'>
                <MdOutlineSpaceDashboard/>
                <p className='ml-1' >Dashboard</p>
                    </div>
                    <div className='flex mt-5  flex-row items-center  justify-center'>
                <ImStatsBars2/>
                        <p className='ml-1' >Stats</p>
                    </div>
                    <div className='flex mt-5 flex-row items-center justify-center'>
                <GiMoneyStack/>
                <p className="ml-1">Jobs</p>
                    </div>
                    <div className='flex mt-5 flex-row items-center justify-center'>
                <AiTwotoneAlert/>
                <p className='ml-1' >Alerts</p>
                    </div>
                    <div className='flex mt-5 flex-row items-center justify-center'>
                <BsChatDots/>
                <p className='ml-1' >Chats</p>
                    </div>
                    <div className='flex mt-5 flex-row items-center justify-center'>
                <BsCardChecklist/>
                <p className='ml-1' >List Job</p>
                    </div>
            </div>
            <div className='flex items-center justify-center'>
            <button className='bg-white  bottom-5  w-fit text-black px-4  rounded-md py-2 fixed'>Profile</button>
                
            </div>
            </div>
    )
}
export default DashboardLeft