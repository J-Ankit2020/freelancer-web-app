const Filters = () => {
    return (
        <div className="bg-white h-full w-[95%] mr-8 ">
            <div className="ml-2 ">
                <div className="first">
                <p className="mt-2 ml-2">
                Filter
                </p>
                <div className="">
                    <label htmlFor="">
                    <input type="checkbox"  />
<span className="ml-2">Recent</span>                    
                    </label>
                </div>

                    <div className="">
                    <label htmlFor="">
                    <input type="checkbox" />
                    <span className="ml-2">Lowest</span>                    
                    </label>
                </div>
                <p className="mt-4">Show more ▼</p>
                </div>

                <div className="2nd mt-4">
                <p>pay   ▼ </p>
                <div className="">
                    <label htmlFor="">
                    <input type="checkbox" />
                    <span className="ml-1 text-[12px]">Less than $25</span>                    
                    </label>
                    </div>

                    <div className="">
                    <label htmlFor="">
                    <input type="checkbox" />
                    <span className="ml-1 text-[12px]">$150-$250</span>                    
                    </label>
                    </div>

                    <div className="">
                    <label htmlFor="">
                    <input type="checkbox" />
                    <span className="ml-1 text-[12px]">$250-$350</span>                    
                    </label>
                    </div>

                    <div className="">
                    <label htmlFor="">
                    <input type="checkbox" />
                    <span className="ml-1 text-[12px]">More than $250</span>                    
                    </label>
                    </div>
                <p className="mt-4">Show more ▼</p>
                    
                </div>

                <div className="3rd">
                <p className="mt-4">Rating ▼</p>
                <div className="">
                    <label htmlFor="">
                    <input type="radio" />
                    <span className="ml-1 text-[12px]">1 ⭐</span>                    
                    </label>
                    </div>

                    <div className="">
                    <label htmlFor="">
                    <input type="radio" />
                    <span className="ml-1 text-[12px]">2 ⭐</span>                    
                    </label>
                    </div>

                    <div className="">
                    <label htmlFor="">
                    <input type="radio" />
                    <span className="ml-1 text-[12px]">3 ⭐</span>                    
                    </label>
                    </div>

                    <div className="">
                    <label htmlFor="">
                    <input type="radio" />
                    <span className="ml-1 text-[12px]">4 ⭐</span>                    
                    </label>
                    </div>

                    <div className="">
                    <label htmlFor="">
                    <input type="radio" />
                    <span className="ml-1 text-[12px]">5 ⭐</span>                    
                    </label>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Filters