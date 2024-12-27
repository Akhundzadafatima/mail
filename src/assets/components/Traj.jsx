import data from "../json/traj.json"
export default function Traj(){
    
    return(
        <>
        <div className="mx-8 md:mx-20 flex flex-col md:flex-row items-center md:items-end md:justify-between md:py-[48px] text-[#252525] ">
            <div className="w-full md:w-1/2">
                <h1 className="font-playfair font-normal text-4xl md:text-[56px] leading-[43px] text-center md:text-start ">Jurnalımızın ötən tirajları</h1>
                <p className="mt-2 md:mt-5 font-nunito font-normal  text-xs md:text-base leading-[18px] md:leading-6 text-center md:text-start">Oxucularımız üçün hüquqi bilikləri daha əlçatan etmək məqsədiylə, hər bir buraxılışı peşəkar yanaşma və geniş araşdırma ilə hazırlayırıq.</p>
            </div>
            <button className="mt-4 flex items-center ">
                <p className="mr-2 font-nunito font-normal text-base leading-6 ">Hamsına bax</p>
                <i className="fa-solid fa-chevron-right"></i>
            </button>
        </div>
        <div className="text-[#252525]  mt-12 mx-8  md:mx-28 flex flex-col justify-center md:justify-between md: md:flex-row gap-12 ">
            
            {data.trajs.map((traj)=>(
                <div key={traj.id} className="text-center">
                    <img src={traj.image} alt="" className="h-[440px] w-full " />
                    <p className="mt-4 font-playfair font-medium text-2xl leading-7 ">{traj.trajtime}</p>
                </div>
            ))}
        </div>
        </>
    )
}