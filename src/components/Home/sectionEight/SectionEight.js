import React from "react";
import connection_icon from "../../../Assets/Images/connection_icon.png";
import "./SectionEight.css";
import { useDispatch, useSelector } from "react-redux";
import { connectionAction } from "../../../Redux/connection/actions";
import { useEffect } from "react";

function SectionEight() {
  const dispatch = useDispatch();
  let acc = useSelector((state) => state.connect?.connection);
  console.log("acc", acc);
  const connectWallet = () => {
    dispatch(connectionAction());
  };
  useEffect(() => {}, [acc]);
  return (
    <div className="container">
      <div
        className="row margin-eight  "
        data-aos-anchor-placement="center-center"
      >
        <div className="col-lg-12 col-md-12 d-flex justify-content-center">
          <div className="row d-flex-justify-content-center align-items-center box1   box-12">
            <div className="col-lg-7 col-md-12 justify-content-center ms-5   sectionEight-responsive ">
              {/* <div className="text-virtual">Virtual Swap</div> */}
              <div className="text-start">Start in seconds</div>
              <div className="text-connect">
                Connect your crypto wallet to start using theapp in seconds.
              </div>
              <div className="text-Registration">No registration needed.</div>
            </div>
            <div className="col-lg-3">
              <div className="d-flex  align-items-center mbl_btn ms-4">
                <button
                  className=" d-flex justify-content-start align-items-center btn_connect_bg"
                  onClick={connectWallet}
                >
                  <div className="btn_connect_icon_bg p-2">
                    <img src={connection_icon} className="img-fluid " alt="" />
                  </div>
                  <div className=" btn_connection_wallet">
                    {acc === "No Wallet"
                      ? "Connect Wallet"
                      : acc === "Connect Wallet"
                      ? "Connect Wallet"
                      : acc === "Wrong Network"
                      ? acc
                      : acc.substring(0, 3) +
                        "..." +
                        acc.substring(acc.length - 3)}
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SectionEight;
