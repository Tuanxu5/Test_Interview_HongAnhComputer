import React from "react";
import qr from "../asset/image 9.png";
import appStore from "../asset/Vector.png";
import chPlay from "../asset/GooglePlay.png";
function Footer() {
  return (
    <div className="mt-4 bg-white mx-[50px] p-4 rounded-2xl flex justify-between items-center gap-[15.5px] max-md-[768px]:flex-col max-md-[768px]:justify-center max-md-[768px]:mt-[19px] max-sm-[540px]:mx-[22px]">
      <div className="flex gap-2">
        <div>
          <img src={qr} alt="" className="w-[108px] rounded-lg shadow" />
        </div>
        <div>
          <div className="bg-black w-[150px] h-11 rounded-lg flex justify-center items-center text-white gap-1">
            <img src={appStore} alt="" className="w-[23.09px] h-[28.28px]" />
            <div>
              <div className="text-[13px] leading-3">Available on the</div>
              <div className="text-[20px] leading-6 font-medium">App Store</div>
            </div>
          </div>
          <div className="bg-black w-[150px] h-11 rounded-lg flex justify-center items-center text-white gap-1 mt-5">
            <img src={chPlay} alt="" className="w-[23.09px] h-[28.28px]" />
            <div>
              <div className="text-[13px] leading-3">GET IT ON</div>
              <div className="text-[20px] leading-6 font-medium">
                Google Play
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-[0px] max-md-[768px]:flex-col max-md-[768px]:mt-4 text-[15px]">
        <div className="flex flex-col gap-4 w-[169.5px] max-md-[768px]:w-auto">
          <div>Giới thiệu</div>
          <div>Sản phẩm</div>
          <div>Chỉnh sách</div>
        </div>
        <div className="flex flex-col gap-4 w-[169.5px] max-md-[768px]:w-auto max-md-[768px]:items-center max-md-[768px]:mt-4">
          <div>Tin tức</div>
          <div>Câu hỏi thường gặp</div>
        </div>
        <img
          src={qr}
          alt=""
          className="w-[190px] h-[190px] shadow rounded-lg max-lg-[1024px]:hidden"
        />
      </div>
    </div>
  );
}

export default Footer;
