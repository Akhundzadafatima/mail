import React from "react";
const Book = () => {
  return (
    <div>
      <div className=" flex flex-col gap-[24px] pt-[48px] px-[32px] text-center md:px-[300px] text-[#252525]">
        <p className="flex items-center justify-center text-[36px] font-playfair  md:text-[64px]">
          İnjuria ilə hüququnuzu anlayın, haqlarınızı kəşf edin
        </p>
        <p className="block md:hidden text-[12px] font-roboto md:text-[18px]">
          Hüququn mürəkkəb dünyasını daha aydın və anlaşılan şəkildə təqdim
          edərək, oxucularımıza hüquqi biliklərini artırmaq və haqlarını qorumaq
          üçün dəyərli məlumatlar təqdim edirik.
        </p>
        <p className="hidden md:block text-[12px]  font-roboto md:text-[18px]">
          Hüququn mürəkkəb dünyasını daha aydın və anlaşılan şəkildə təqdim
          edərək, oxucularımıza hüquqi biliklərini artırmaq və haqlarını qorumaq
          üçün dəyərli məlumatlar təqdim edirik. Ədalət və haqq yolunda sadiq
          bələdçiniz oluruq!
        </p>

        <div className="flex flex-col items-center justify-center w-full gap-[16px] pt-[8px] md:flex-row">
          <button className="w-[75%]  h-[51px]  bg-[#252525] text-white  rounded-[10px] font-bold md:w-[24%] font-nunito">
            Son trajımıza keçid edin
          </button>
          <button className="w-[75%]  h-[51px]  bg-white border-[1px] border-[#252525] rounded-[10px] font-bold text-[#252525] font-nunito md:w-[24%]">
            Jurnala abunə olun
          </button>
        </div>
      </div>
      <div className="relative z-10">
       
  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-white via-transparent to-white "></div>
    <div className="w-full h-[100vh] bg-bckGround bg-cover bg-center z-10"></div>
</div>
    </div>
  );
};

export default Book;
