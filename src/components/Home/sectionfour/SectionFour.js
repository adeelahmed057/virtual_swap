import React from "react";
import "./SectionFour.css";
import trade_icon from "../../../Assets/Images/Maskgroup2.png";
import Video from "../../../Assets/transparent_1.gif";
function SectionFour() {
  return (
    <div>
      <div className="container space2">
        <div className="row  mt-5">
          <div className="col-lg-6 col-md-12 d-flex justify-content-center ">
            <div>
              <img
                src={Video}
                width={"750px"}
                className="pic_animation"
                alt=""
              />
            </div>
          </div>
          <div className="col-lg-6 col-md-12 d-flex ">
            <div>
              <div className="col-12 d-flex justify-content-center flex-column">
                <div className="p-2">
                  <div className="text_trade-anything">Trade Anything</div>
                  <div className="text_no">
                    {" "}
                    <b>No Registration</b>
                  </div>
                  <div className="text_trade-anything">No Hassle</div>
                </div>
                <div className="text-dammy p-3">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut.
                </div>
              </div>
              <div className="col-lg-6 col-md-12 d-flex flex-row bd">
                <div class="">
                  <div className=" align-items-center text_amount ms-4">
                    <button className=" d-flex justify-content-start align-items-center btn_trade_bg">
                      <div className="btn_trade_icon_bg p-2">
                        <img
                          src={trade_icon}
                          className="img-fluid"
                          alt=""
                          width={"30px"}
                        />
                      </div>
                      <div className="btn_trade ps-3">Trade Now</div>
                    </button>
                  </div>
                </div>
                <div class="">
                  <div className="  align-items-center text_amount ms-4">
                    <button className="btn_lear_bg">LEARN MORE</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SectionFour;
