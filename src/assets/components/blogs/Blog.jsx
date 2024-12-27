import React from "react";
import rightVector from "../../../../public/images/rightVector.png"
import profil1 from "../../../../public/images/profil1.png";
import profil2 from "../../../../public/images/profil2.png";
import profil3 from "../../../../public/images/profil3.png";

const Blog = () => {
  return (
    <div className="text-[#252525] px-[32px] py-[48px] md:px-[80px]">
      <div className="text-center flex items-center md:items-start justify-center  flex-col">
        <p className="text-[14px] md:text-[16px] font-nunito font-semibold">
          Bloq
        </p>
        <p className="md:text-left md:w-[55%] md:text-[48px] text-[36px] font-playfair pt-[12px] pb-[8px] text-[center] font-medium">
          Hüquq dünyasındakı son yeniliklər, ekspert tövsiyələri və daha çoxu
        </p>
        <div className="w-full">
          <div className="flex justify-center md:items-end md:justify-end text-[16px] font-nunito">
            <p>Hamısına bax</p>
            <img src={rightVector} alt="" />
          </div>
        </div>
      </div>

      <div className="boxs flex md:flex-row flex-col md:gap-[19px] gap-[32px] pt-[32px]  md:pt-[64px] md:pb-[48px]">
        <div>
          <div className="w-full h-[50vh]  bg-blogImg1 bg-cover pt-[16px] pr-[16px] rounded-[8px]">
            <div className="flex gap-[4px] items-center justify-end ">
              <button className="md:px-[12px] md:py-[6px] text-[8px] rounded-[16px] font-medium bg-[#FFFFFFCC]">
                Vergi
              </button>
              <button className="md:px-[12px] md:py-[6px] text-[8px] rounded-[16px] font-medium bg-[#FFFFFFCC]">
                Korporasiya
              </button>
            </div>
          </div>
          <div className="flex items-center gap-[8px] py-[19px]">
            <img
              src={profil1}
              alt=""
              className="w-[28px] h-[28px] rounded-[50%]"
            />

            <div className="md:text-[12px] text-[10px] font-nunito">
              <p className=" font-semibold">Aqşin Cəfərov</p>
              <div className="flex gap-[6px]">
                <p>4 Noyabr, 2024</p>
                <p>|</p>
                <p>5 dəqiqəlik</p>
              </div>
            </div>
          </div>

          <p className="md:text-[24px] text-[18px] font-playfair font-medium  pb-[6px]">
            Hansı halda sahibkar vergiləri gecikdirmək haqqına sahibdir
          </p>
          <p className="font-nunito text-[12px] md:text-[16px]">
            Atalar yaxşı deyib çörəyi ver çörəkçiyə, birini də üstəlik. Yəni ki,
            bu kino ki var, çox qəliz məsələdir, həm qəlizdir, həm də ki vacib
          </p>
        </div>

        <div>
          <div className="w-full h-[50vh]  bg-blogImg2 bg-cover pt-[16px] pr-[16px] rounded-[8px]">
            <div className="flex gap-[4px] items-center justify-end ">
              <button className="md:px-[12px] md:py-[6px] text-[8px] rounded-[16px] font-medium bg-[#FFFFFFCC]">
                Qanunvericilik
              </button>
              <button className="md:px-[12px] md:py-[6px] text-[8px] rounded-[16px] font-medium bg-[#FFFFFFCC]">
                Yenilik
              </button>
            </div>
          </div>
          <div className="flex items-center gap-[8px] py-[19px]">
            <img
              src={profil2}
              alt=""
              className="w-[28px] h-[28px] rounded-[50%]"
            />

            <div className="text-[10px] font-nunito">
              <p className=" font-semibold">Aytəkin İsayeva</p>
              <div className="flex  gap-[6px]">
                <p>22 Oktyabr, 2024</p>
                <p>|</p>
                <p>4 dəqiqəlik</p>
              </div>
            </div>
          </div>

          <p className="md:text-[24px] text-[18px] font-playfair font-medium  pb-[6px]">
            Azərbaycan Respublikası Dövlət Hüquq Sistemində baş vermiş son
            yeniliklər.
          </p>
          <p className="font-nunito text-[12px] md:text-[16px]">
            Dövlətimizin qanunvericiliyndə bir sıra dəyişikliklər baş vermişdir.
            Belə ki, Azərbaycan Respublikasının Milli Məclisinin
          </p>
        </div>

        <div>
          <div className="w-full h-[50vh]  bg-blogImg3 bg-cover pt-[16px] pr-[16px] rounded-[8px]">
            <div className="flex gap-[4px] items-center justify-end ">
              <button className="md:px-[12px] md:py-[6px] text-[8px] rounded-[16px] font-medium bg-[#FFFFFFCC]">
                Vəkillik
              </button>
              <button className="md:px-[12px] md:py-[6px] text-[8px] rounded-[16px] font-medium bg-[#FFFFFFCC]">
                Tövsiyə
              </button>
            </div>
          </div>
          <div className="flex items-center gap-[8px] py-[19px]">
            <img
              src={profil3}
              alt=""
              className="w-[28px] h-[28px] rounded-[50%]"
            />

            <div className="text-[10px] font-nunito">
              <p className=" font-semibold"> Rəcəb Vəkilov</p>
              <div className="flex  gap-[6px]">
                <p>11 Oktyabr, 2024</p>
                <p>|</p>
                <p>11 dəqiqəlik</p>
              </div>
            </div>
          </div>

          <p className="md:text-[24px] text-[18px] font-playfair font-medium  pb-[6px]">
            Doğru vəkil seçimində nələrə diqqət yetirmək lazımdır?{" "}
          </p>
          <p className="font-nunito text-[12px] md:text-[16px]">
            Hazırda ölkəmizdə olduqca çox vəkil olsa da sizin ehtiyaclarınıza
            uyğun birini tapmaq olduqca müşkül məsələdir.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
