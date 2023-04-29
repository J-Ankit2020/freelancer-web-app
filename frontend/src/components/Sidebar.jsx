import { MdOutlineSpaceDashboard } from 'react-icons/md'
import { ImStatsBars2 } from 'react-icons/im'
import { GiMoneyStack } from 'react-icons/gi'
import { AiTwotoneAlert } from 'react-icons/ai'
import { BsChatDots, BsCardChecklist } from 'react-icons/bs'
const DashboardLeft = () => {
    return (
        <div className="leftt text-white h-screen  bg-[#00083B] w-1/5">
                <div className="absolute mt-[3px] top-[15%] left-[2%] font-semibold">
               <div className='flex flex-row items-center justify-center'>
                <MdOutlineSpaceDashboard/>
                <p className='ml-1' >Dashboard</p>
                    </div>
                    <div className='flex mt-5  flex-row items-center '>
                <ImStatsBars2/>
                        <p className='ml-1' >Stats</p>
                    </div>
                    <div className='flex mt-5 flex-row items-center '>
                <GiMoneyStack/>
                <p className="ml-1">Jobs</p>
                    </div>
                    <div className='flex mt-5 flex-row items-center '>
                <AiTwotoneAlert/>
                <p className='ml-1' >Alerts</p>
                    </div>
                    <div className='flex mt-5 flex-row items-center '>
                <BsChatDots/>
                <p className='ml-1' >Chats</p>
                    </div>
                    <div className='flex mt-5 flex-row items-center '>
                <BsCardChecklist/>
                <p className='ml-1' >List Job</p>
                    </div>
                </div>
                <button className='bg-white absolute bottom-5 left-[2%] w-fit text-black px-3 rounded-md py-1'>Profile</button>
            </div>
    )
}
export default DashboardLeft