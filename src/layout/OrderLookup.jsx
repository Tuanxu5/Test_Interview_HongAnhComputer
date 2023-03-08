import React, { useEffect, useState } from "react";
import image from "../asset/image.png";
import capcha from "../asset/reCAPTCHA symbol.png";
function OrderLookup() {
  const [isChecked, setIsChecked] = useState(false);
  useEffect(() => {
    const notIsRobot = document.getElementById("notIsRobot");
    notIsRobot.checked = isChecked;
  }, [isChecked]);
  const handleChecked = () => {
    setIsChecked(!isChecked);
  };
  return (
    <div className="mt-4 bg-white mx-[50px] rounded-2xl py-[70px] px-[114px] flex justify-between max-lg-[1024px]:py-[70px] max-lg-[1024px]:px-[114px] max-lg-[1024px]:flex-col-reverse max-lg-[1024px]:items-center max-xl-[1280px]:px-[37px] max-xl-[1280px]:py-[15px] max-xl-[1280px]:gap-5 max-md-[768px]:py-0 max-md-[768px]:px-0 max-sm-[540px]:mx-[22px]">
      <form action="#" className="w-[580px] max-lg-[1024px]:w-full">
        <div className="p-8 gap-6 flex flex-col justify-center flex-none order-none grow max-sm-[640px]:p-0">
          <div className="w-full text-justify">
            <h1 className="text-[32px] font-semibold font-inter max-sm-[640px]:text-[30px]">
              Tra cứu đơn hàng
            </h1>
            <span className="text-[14px] font-inter text-[#656C78] leading-5 font-normal tracking-[.01em] text-justify">
              Để tra cứu hành trình đơn hàng của mình, bạn vui lòng nhập chính
              xác mã đơn hàng và số điện thoại được sử dụng để đặt hàng.
            </span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-[15px] font-[600]">Mã đơn hàng (*)</span>
            <input
              type="text"
              placeholder="Vui lòng nhập mã đơn hàng"
              className="bg-[#F3F3F7] h-12 px-4 rounded-lg outline-0 text-[14px] text-[#9CADC3]"
              required
            />
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-[15px] font-[600]">
              Số điện thoại đặt hàng
            </span>
            <input
              type="text"
              placeholder="Vui lòng nhập số điện thoại"
              className="bg-[#F3F3F7] h-12 px-4 rounded-lg outline-0 text-[14px] text-[#9CADC3]"
              required
            />
          </div>
          <div
            className="flex border border-[#DBDBF2] rounded-lg items-center bg-white p-4 justify-between cursor-pointer"
            onClick={handleChecked}
          >
            <div className="flex gap-3 justify-center items-center">
              <input type="checkbox" className="w-4 h-4" id="notIsRobot" />
              <span className="text-[14px] font-normal leading-5 max-sm-[640px]:text-[13px]">
                Tôi không phải là người máy
              </span>
            </div>
            <div className="flex flex-col items-center">
              <img
                src={capcha}
                alt=""
                className="w-[38.43px] h-[38.43px] max-sm-[640px]:w-[30px] max-sm-[640px]:h-[30px]"
              />
              <div className="flex flex-col items-center justify-center ">
                <span className="text-[15px] max-sm-[640px]:text-[13px]">
                  reCAPTCHA
                </span>
                <span className="text-[13px] max-sm-[640px]:text-[11px]">
                  Privacy - Terms
                </span>
              </div>
            </div>
          </div>
          <div className="flex justify-end max-lg-[1024px]:justify-center">
            <input
              type="submit"
              value="Tra Cứu"
              className="w-[228px] h-[56px] bg-[#005EFF] text-white font-semibold text-[18px] rounded-lg cursor-pointer "
            />
          </div>
        </div>
      </form>
      <div className="">
        <img
          src={image}
          alt=""
          className="w-[482px] h-[489px] max-lg-[1024px]:w-[376px] max-lg-[1024px]:h-[380px] max-sm-[640px]:w-[260px] max-sm-[640px]:h-[265px]"
        />
      </div>
    </div>
  );
}

export default OrderLookup;
