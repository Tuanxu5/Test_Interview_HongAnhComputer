import React from "react";
import { RxChevronRight } from "react-icons/rx";

function MainBreadcrumb() {
  return (
    <div className="mt-4 bg-white mx-[50px] py-2 px-6 rounded-2xl flex justify-start items-center gap-[15.5px] text-[15px] max-sm-[640px]:px-0 max-sm-[640px]:gap-[5px] max-sm-[640px]:text-[14px] max-sm-[540px]:mx-[22px]">
      <span className="hover:underline cursor-pointer hover:text-[#2246DC]">
        Trang Chủ
      </span>
      <span>
        <RxChevronRight></RxChevronRight>
      </span>
      <span className="hover:underline cursor-pointer hover:text-[#2246DC] max-sm-[640px]:text-[#2246DC]">
        Tra cứu hành trình đơn hàng
      </span>
    </div>
  );
}

export default MainBreadcrumb;
