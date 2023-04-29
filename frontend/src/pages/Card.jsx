const Card = () => {
    return (
        <div class='flex  flex-row h-full items-center justify-center '>
            <div class="rounded-xl border p-5 shadow-md w-[90%]  bg-white">
    <div class="flex  w-full items-center justify-between border-b pb-3">
      <div class="flex items-center space-x-3">
        <div class="text-lg font-bold text-slate-700">Job Title</div>
      </div>
      <div class="flex items-center space-x-8">
    <div>⭐⭐⭐⭐⭐</div>
      </div>
    </div>

    <div class="mt-4 mb-6">
      <div class="mb-3 text-xl font-bold">Nulla sed leo tempus, feugiat velit vel, rhoncus neque?</div>
      <div class="text-sm text-neutral-600">Aliquam a tristique sapien, nec bibendum urna. Maecenas convallis dignissim turpis, non suscipit mauris interdum at. Morbi sed gravida nisl, a pharetra nulla. Etiam tincidunt turpis leo, ut mollis ipsum consectetur quis. Etiam faucibus est risus, ac condimentum mauris consequat nec. Curabitur eget feugiat massa</div>
    </div>

    <div>
      <div class="flex items-center justify-between text-slate-500">
        <div class="flex space-x-4 md:space-x-8">
          <div class="flex cursor-pointer items-center transition hover:text-slate-600">
           <button className="bg-[#00083B] text-white rounded-md px-4 py-1">Apply</button>
          </div>
          <div class="flex cursor-pointer items-center transition hover:text-slate-600">
           
                            <div className="">
                            <span className="text-[#8690D1]  mx-2 "> Intermediate</span>
                                <span className="text-[#8690D1] mx-2"> 10 days</span>
                  <span className="text-[#8690D1] mx-2">$150-$250</span>
                                
                            </div>
                            
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
    )
}
export default Card