import data from "../json/return.json"
export default function Return(){
    return(
        <div className="mx-8 md:mx-20 flex flex-col pb-12 text-[#252525]">
        <div>
            <h1 className="font-playfair font-medium md:font-normal text-4xl md:text-[48px] leading-10 md:leading-[57px] text-center md:text-start ">Oxucuların geri dönüşləri</h1>
            <p className="mt-2 md:mt-4 font-nunito font-normal text-[11px] md:text-[18px] text-center md:text-start leading-4 md:leading-7  ">Jurnalımızın abunələrinin jurnalımız haqqında düşüncələri</p>
        </div>
        <div className="flex flex-col md:flex-row gap-8" >
            {
                data.users.map((user)=>(
                    <div key={user.id} className="mt-12 flex flex-col  items-center md:items-start">
                        <img src={user.stars} alt="" className="w-1/4"/>
                        <p className=" mt-4 font-nunito font-medium text-xl md:text-[20px] leading-7 md:leading-[30px] text-center md:text-start ">{user.title}</p>
                        <div className="flex items-center justify-center md:justify-start mt-6">
                            <img src={user.userimage} alt="" className="w-9 h-9 rounded-full" />
                            <div className="ml-[14px] ">
                                <p className="font-nunito font-bold text-sm leading-[30px] ">{user.username}</p>
                                <p className="font-nunito font-normal text-xs leading-4 ">{user.position}</p>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
        </div>
    )
}