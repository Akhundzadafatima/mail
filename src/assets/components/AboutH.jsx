import logo from "/images/logo.png"
export default function AboutH() {
    return (
        <div className="bg-[#D1D1D1] flex flex-col  md:flex-row md:justify-between md:items-start px-0 md:px-20 py-12 md:py-20 my-12 md:my-20 text-[#252525]">
            <div className="mx-8 md:mx-0  md:w-1/3">
                <p className="font-nunito text-sm md:text-base leading-5 md:leading-6 font-semibold text-center md:text-start  ">Haqqımızda</p>
                <h1 className="font-playfair font-normal text-4xl md:text-[56px] leading-10 md:leading-[67px] text-center md:text-start  mt-3">İnjuria jurnalın məqsədi nədir ?</h1>

            </div>
            <div className="mx-10 md:mx-0 mt-12 md:mt-0 md:w-[52%]">
                <div className="flex items-center ml-2 md:ml-0">

                    <img src={logo} alt="" />
                    <p className="font-nunito font-normal text-base md:text-lg leading-6  ml-2 w-[90%]">njuria daim dəyişən iş mühitinin meyllərini nəzərə alan tamamilə yeni</p>
                </div>
                <p className="ml-2 md:ml-0 font-nunito font-normal text-base md:text-lg leading-6 text-center md:text-start ">və innovativ bir hüquq jurnalıdır. O, biznesin daim dəyişən iş mühitinin meyllərini nəzərə alan tamamilə yeni və innovativ bir hüquq jurnalıdır. O, biznesin hüquqi dəstəyi üçün zəruri olan, hüquq sahəsində tədbiq edilən standartlar, metodlar, texnologiyalar, vasitələr və hüquq, hüquqi icraat, iqtisadiyyat, maliyyə, menecment, marketinq, psixologiya, informasiya texnologiyaları sahələrindəki son tendensiyalar barədə məlumat verir.</p>
            </div>
        </div>
    )
}