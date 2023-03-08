import React from "react";
import logo192 from "../asset/logo192.png";

function Header() {
  return (
    <div className="flex items-center justify-between mx-[50px] max-sm-[540px]:mx-[22px]">
      <div>
        <img
          src={logo192}
          alt=""
          className="w-[99px] h-[70px] max-sm-[640px]:w-[43.24px] max-sm-[640px]:h-[40px]"
        />
      </div>
      <div className="text-[15px] flex gap-2">
        <button className="max-sm-[640px]:hidden text-[#005EFF] px-4 py-2 bg-white rounded-lg border-[#005EFF] border-2">
          Tra Cứu
        </button>
        <button className=" text-white px-4 py-2 bg-[#005EFF] rounded-lg border-[#005EFF] border-2 max-sm-[640px]:px-8 max-sm-[640px]:py-2.5 max-sm-[640px]:rounded-3xl max-sm-[640px]:bg-gradient-to-r max-sm-[640px]:from-[#0934C5] max-sm-[640px]:to-[#4E64E3] max-sm-[640px]:border-[#2B4CD4]">
          Liên Hệ
        </button>
      </div>
    </div>
  );
}

export default Header;
