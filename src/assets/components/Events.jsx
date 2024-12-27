import data from "../json/events.json"
export default function Events(){
    return(
        <div className="px-8 md:px-20 flex flex-col items-center md:items-start  py-16 bg-[#D1D1D1] text-[#252525]">
            <div className="flex flex-col md:flex-row items-center md:justify-between w-full">
            <h1 className="font-playfair font-medium md:font-normal text-[36px] md:text-[48px]  leading-10 md:leading-[57px] ">Tədbirlər</h1>
            <button className="border-none flex items-center mt-[10px] font-nunito font-normal text-[16px] leading-6 ">
            Hamsına bax
            <i className="fa-solid fa-chevron-right mt-1 ml-3"></i>
            </button>
            </div>
            <div className="flex flex-col md:flex-row mt-10 ">
                {data.events.map((event,index)=>(
                  <div key={event.id} className="flex flex-col md:flex-row  w-full items-center ">
                    <div className="flex flex-col items-center ">
                    <h1 className="font-nunito font-[700] text-[42px] md:text-[56px] leading-[54px] md:leading-[72px] ">{event.day}</h1>
                    <p className="mt-1 md:mt-2 font-nunito font-[550] text-[18px] leading-5 ">{event.month}</p>
                    <p className="mt-6 md:mt-8 font-playfair font-medium text-[18px] md:text-[24px] leading-5 md:leading-7 ">{event.type}</p>
                    <p className="mt-3 font-playfair font-medium text-[18px] md:text-[24px] leading-5 md:leading-7  text-center ">{event.about}</p>
                    <button className="border-none flex items-center mt-[24px] font-nunito font-normal text-[16px] leading-6 ">
                    Keçid et
                    <i className="fa-solid fa-chevron-right  ml-3"></i>
                    </button>
                    </div>
                    {
                        index< data.events.length-1 && <hr className="h-[1px] md:h-full w-full md:w-[1px] bg-[#252525] border-none my-5 md:mx-5"/>
                        
                    }
                    
                    
                  </div>  
                ))}
            </div>
        </div>
    )
}