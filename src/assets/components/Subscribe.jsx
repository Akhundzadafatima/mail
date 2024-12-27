import image1 from "/src/assets/images/Ellipse 1.jpg"
import image2 from "/src/assets/images/Ellipse 2.jpg"
import image3 from "/src/assets/images/Ellipse 3.jpg"
import image4 from "/src/assets/images/Ellipse 4.jpg"


export default function Subscribe(){
    return(
        <div className="bg-[#D1D1D1] py-12 flex flex-col px-8 md:px-20 w-full md:flex-row md:justify-between md:items-center text-[#252525]" >
        <div className="  flex flex-col items-center md:items-start md:w-1/2">
            <h1 className="font-playfair font-medium text-[32px] md:text-[40px] leading-9 md:leading-10 text-center md:text-start  ">Jurnalımıza abunə olun və heç bir yeniliyi qaçırmayın!</h1>
            <p className="mt-2 md:mt-4 font-nunito font-normal text-[12px] md:text-[18px] leading-4 md:leading-7 text-center md:text-start ">Ən son hüquqi məlumat və məsləhətləri birbaşa gələnlər qutunuza çatdırın. Bu gün bizə qoşulun!</p>
            <div className="flex flex-col md:flex-row items-center mt-0 md:mt-6">
            <div className="flex relative mr-16 mt-6 md:mt-0 ">
                <img src={image1} alt="" className="rounded-full  " />
                <img src={image2} alt="" className="rounded-full absolute left-[20px]"/>
                <img src={image3} alt="" className="rounded-full absolute left-[40px]"/>
                <img src={image4} alt="" className="rounded-full absolute left-[60px]"/>  
            </div>
              <p className="mt-3 md:mt-0 ml-0 md:ml-2 font-nunito font-normal text-[12px] md:text-[14px] leading-4 md:leading-6 ">+10000 şəxs bloqlarımıza daimi abunədir!</p>
            </div>
        </div>
        <div className="flex flex-col  text-start  mt-8 md:mt-6 md:w-1/3">
            <h1 className="font-nunito font-semibold text-[18px] leading-7  ">E-mail</h1>
            <input type="text" placeholder="E-mailiniz daxil edin" className="p-4 mt-3 rounded-[8px] border-2 bg-transparent border-[#252525] w-full placeholder:text-[16px] placeholder:font-nunito placeholder:font-normal placeholder:leading-6 placeholder:text-[#252525] "/>
            <button className="py-3 mt-3 w-full bg-[#252525] rounded-[8px] text-white ">
              Göndər
              <i className="fa-solid fa-arrow-right text-white ml-2"></i>
            </button>
        </div>
        </div>
    )
}