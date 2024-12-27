import React from "react";
import book from "../../../../public/images/book.png";
import halfBoook from "../../../../public/images/halfBook.png";
const Content = () => {
  return (
    <div className="text-[#252525] text-center md:flex md:text-start flex-col md:py-[80px] md:pl-[80px] bg-[#D1D1D1] md:gap-[100px] gap-[48px] py-[48px]  md:px-[0] pl-[0] ">
      <div className="flex flex-col gap-[12px]">
        <p className="md:text-[16px] md:font-nunito text-[14px] font-semibold">İnjuria-da</p>
        <p className="md:text-[56px] text-[36px] px-[32px] md:px-[0] font-playfair">
          Ən son tirajda toxunduğumuz mövzular
        </p>
      </div>

      <div className="flex flex-col   md:flex-row items-center md:justify-between justify-center">
        <div className=" md:items-start md:justify-start  flex flex-col items-center justify-center gap-[32px] py-[48px] px-[32px] md:py-0 md:w-[30%] md:px-[0] ">
          <div className="md:flex md:items-start md:justify-start md:flex-col">
            <p className="md:text-[48px] text-[32px] font-newsreader">01</p>
            <p className="md:text-[32px] text-[24px] font-playfair pt-[24px] pb-[12px] md:pb-[16px]">
              Məhkəmə islahatlarının hüquq sistemində əhəmiyyəti
            </p>
            <p className="md:text-[16px] text-[12px] font-nunito">
              İlin bütün fəsillərinin özünəməxsus gözəllikləri var, lakin yaz
              fəslinin əlvan rəngləri ürəkləri şad edir. Yaz fəsli təbiətin
              oyanması, yeni həyatın doğulması, ən yaxşısı.
            </p>
          </div>
          <div className="md:flex md:items-start md:justify-start md:flex-col">
            <p className="md:text-[48px] text-[32px] font-newsreader">02</p>
            <p className="md:text-[32px] text-[24px] font-playfair pt-[24px] pb-[12px] md:pb-[16px]">
              Bayram ərəfəsində baş verəcək dəyişikliklər
            </p>
            <p className="md:text-[16px] text-[12px] font-nunito">
              Ən əsası isə mart ayında qeyd etdiyimiz ənənəvi bayramımız -
              Novruz bayramı xalqımızın həyatında özünəməxsus yer tutur.
            </p>
          </div>
          <div className="md:flex md:items-start md:justify-start md:flex-col">
            <p className="md:text-[48px] text-[32px] font-newsreader">03</p>
            <p className="md:text-[32px] text-[24px] font-playfair pt-[24px] pb-[12px] md:pb-[16px]">
              Azərbaycanın ictimai fəal hüquqşünaslıq
            </p>

            <p className="md:text-[16px] text-[12px] font-nunito">
              Azərbaycanın ictimai fəal hüquqşünasları, hüquq müdafiəçiləri,
              vəkilləri, millət vəkilləri və deputatları ilə maraqlı məqalə və
              müsahibələr gözləyir.
            </p>
          </div>
        </div>
        <div class="hidden md:block md:w-[53%] md:h-[auto] overflow-hidden relative0">
          <img src={halfBoook} alt="" className="w-full" />
        </div>
      </div>

      <div className="flex items-center justify-center md:justify-start md:items-start ">
        <button className="w-[200px] h-[51px] rounded-[8px] text-[16px] font-bold font-nunito text-[white] bg-[#252525]  flex items-center justify-center gap-[8px]">
          <img src={book} alt="" />
          <p>Jurnalı əldə et</p>
        </button>
      </div>
    </div>
  );
};

export default Content;
