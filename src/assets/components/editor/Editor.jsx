import React from "react";
import data from "../../../json/db.json";
import linkedln from "../../../../public/images/linkedIn.png"
import x from "../../../../public/images/x.png"
import facebook from "../../../../public/images/facebook.png"
const Editor = () => {
  return (
    <div className=" flex flex-col items-center justify-center gap-[64px] px-[32px] md:pb-[80px] pb-[48px] text-[#252525]">
      <div className="flex flex-col items-center justify-center md:px-[406px] ">
        <p className="text-[14px] font-roboto font-semibold ">Jurnalımızın</p>
        <p className="text-[36px] font-medium font-playfair">
          Redaksiya Şurası
        </p>
        <p className="text-[12px] md:text-[16px] font-nunito text-center pt-[12px] pb-[8px]">
          Müxtəlif hüquq sahələrində ixtisaslaşmış və təcrübəli vəkillərdən
          ibarət komandamız müştərilərimizin hüquqlarını ən yaxşı şəkildə
          qorumağa və onları düzgün istiqamətləndirməyə çalışır.
        </p>
      </div>
      <div className="flex flex-col md:flex-row md:flex-wrap items-center justify-center md:gap-x-[16px] md:gap-y-[48px] md:px-[80px] gap-[48px]">
      {data.users.map((user) => (
        <div key={user.id} className="flex flex-col items-center justify-center text-center md:w-[308px] " >


          

          <img src={user.userImg} alt=""  className="w-[160xp] h-[160px] rounded-[50%] mb-[16px]"/>
            
          <p className="font-playfair text-[24px] font-medium">{user.userName}</p>
          <p className="font-semibold font-nunito pt-[4px] pb-[12px]">{user.userJob}</p>
          <p className="font-nunito">{user.aboutUser}</p>
          <div className="flex items-center justify-center gap-[14px] pt-[24px]">
            <img src={linkedln} alt="" />
            <img src={x} alt="" />
            <img src={facebook} alt="" />
          </div>
        </div>
      ))}
    </div>
    </div>
  );
};

export default Editor;
