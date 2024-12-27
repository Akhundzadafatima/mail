import data from "../json/news.json"
export default function News(){
    return(
        <div className="mx-8 md:mx-20 py-8 flex flex-col items-center md:items-start text-[#252525]">
            <h1 className="font-playfair font-normal text-[48px] leading-10  ">Xəbərlər</h1>
            <div className="flex flex-col md:flex-row md:items-start gap-6 mt-8 md:mt-12">

            {
                data.news.map((newsd)=>(
                    <div key={newsd.id} className="flex flex-col  justify-center w-full  ">
                        <img src={newsd.newsimage} alt="" className="w-full"/>
                        <h1 className="mt-4 font-playfair font-medium text-[18px] leading-5 ">{newsd.newstitle}</h1>
                        <p className="mt-2 font-nunito font-normal text-[11px] leading-4 ">{newsd.newstime}</p>
                    </div>
                ))
            }
            </div>
            <button className="mt-8 w-full md:w-1/5 border-[2px] border-[#252525] py-3  rounded-[8px] flex items-center justify-center font-nunito ftext-[18px] text-[#252525]">
            Bütün xəbərlər
            <i className="fa-solid fa-arrow-right mt-[2px] ml-2"></i>
            </button>
        </div>
    )
}