import React, { useState } from "react";
// import "./Trade_Swap.css";
import coin from "../../../Assets/Images/bnb-logo.png";
import signalIcon from "../../../Assets/Images/SignalIcon.png";
import SettingICon from "../../../Assets/Images/MaskSetting.png";
import Ticon from "../../../Assets/Images/TimeIcon.png";
import RecycleIcon from "../../../Assets/Images/Recycle.png";
import ExchangeIcon from "../../../Assets/Images/Exchange.png";
import CopyIcon from "../../../Assets/Images/Copy.png";
import connection_icon from "../../../Assets/Images/connection_icon.png";
// import "../../App.css";
import Modal from "../../modals/modal";
function LiquditySwap() {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className="container">
      <div className="row d-flex justify-content-center mb-5 ">
        <div className="col-md-12 swap-margin">
          <div className="row d-flex justify-content-center">
            {/* <div className="col-md-12 col-xl-6 responsive-swap ">
              <div className=" graph-bg">
                <div className="row  mt-5 responsive-swap-virtual">
                  <div className="col-md-6 ms-3 ">
                    <div className="d-flex justify-content-around">
                      <div className="p-2 ellispe-one">
                        <img
                          src={coin}
                          className="img-fluid coin"
                          width={"40px"}
                            alt=""

                        />
                      </div>
                      <div className="p-2 ellispe-one">
                        <img
                          src={Virutalcoin}
                          className="img-fluid Virutalcoin"
                          width={"40px"}
                            alt=""

                        />
                      </div>
                      <div className="p-2 BNB-VirtualSwap">
                        BNB/Virtual Swap
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12 ">
                    <div className="row">
                      <div className="col-md-7 responsive-swap-virtual">
                        <div className="d-flex justify-content-around align-items-center ms-2">
                          <div className="text-value ">72.74</div>
                          <div className="text-coin ms-1">BNB/CAKE</div>
                          <div className="text-digit ms-1">+0.043 (0.06%)</div>
                        </div>
                      </div>
                      <div className="col-md-5 d-flex justify-content-center align-items-center responsive-swap-button">
                        <div className="btn-group" role="group">
                          <button type="button" className="btn  btn-1">
                            24H
                          </button>
                          <button type="button" className="btn  btn-2">
                            1W
                          </button>
                          <button type="button" className="btn  btn-3">
                            1M
                          </button>
                          <button type="button" className="btn  btn-4">
                            1Y
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row mt-5">
                  <div className="">
                    <img src={frame} className="img-fluid" 
                            alt=""
                    />
                  </div>
                </div>
                <div className="row mt-5 d-flex justify-content-center ">
                  <div className="d-flex justify-content-evenly text-time p-2">
                    <div className="p-2 ">01:00 PM </div>
                    <div className="p-2 ">04:00 PM</div>
                    <div className="p-2 ">07:00 PM</div>
                    <div className="p-2 ">10:00 PM</div>
                    <div className="p-2 ">01:00 AM</div>
                    <div className="p-2 ">05:00 AM</div>
                    <div className="p-2 ">10:05 AM</div>
                  </div>
                </div>
              </div>
              <div className="row mt-2 bo">
                <div className="col-md-12 col-xl-12 d-flex justify-content-between">
                  <div className="p-2  tbridge">Bridge Asset to BNB Chain </div>
                  <div className="p-2  thelp">Help?</div>
                </div>
              </div>
            </div> */}
            <div className="col-md-12 col-xl-6  responsive-swap2">
              <div className="swap-bg">
                <div className="row d-flex justify-content-between margin-swap">
                  <div className="col-md-12">
                    <div className="row d-flex justify-content-between">
                      <div className="col-2">
                        <div className="ellispe-two">
                          <div className=" d-flex justify-content-center signal-icon">
                            <img
                              src={signalIcon}
                              className="img-fluid"
                              alt=""
                              width={"16px"}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-4">
                        <div className="d-flex justify-content-between">
                          <div className="ellispe-two">
                            <div className=" d-flex justify-content-center signal-icon">
                              <img
                                src={SettingICon}
                                className="img-fluid"
                                alt=""
                                width={"18px"}
                              />
                            </div>
                          </div>
                          <div className="ellispe-two">
                            <div className=" d-flex justify-content-center signal-icon">
                              <img
                                src={Ticon}
                                className="img-fluid"
                                alt=""
                                width={"18px"}
                              />
                            </div>
                          </div>
                          <div className="ellispe-two">
                            <div className=" d-flex justify-content-center signal-icon">
                              <img
                                src={RecycleIcon}
                                className="img-fluid"
                                alt=""
                                width={"18px"}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row mt-2 ">
                  <div className="text-center tswap">Swap</div>
                  <div className="text-center tswap2">
                    Trade tokens in an instant
                  </div>
                </div>
                <div className="row d-flex justify-content-center mt-2 responsive-swap-input">
                  <div className="col-md-10">
                    <label htmlFor="basic-url" className="form-label">
                      <div className="dropdown">
                        <button
                          className="btn  btn-drop dropdown-toggle"
                          type="button"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                          onClick={() => setShowModal(true)}
                        >
                          BNB
                        </button>
                        <Modal
                          show={showModal}
                          onHide={() => setShowModal(false)}
                        />
                      </div>
                    </label>
                    <div className="input-group mb-2">
                      <span className="input-group-text" id="basic-addon3">
                        <img src={coin} className="img-fluid p-1" alt="" />
                      </span>
                      <input
                        type="text"
                        className="form-control form-control2"
                        id="basic-url"
                        aria-describedby="basic-addon3"
                        // value={"0.0"}
                        placeholder="0.0"
                      />
                    </div>
                  </div>
                </div>
                <div className="row me-4">
                  <div className="d-flex justify-content-end me-5 exchange-responsive">
                    <img
                      src={ExchangeIcon}
                      className="img-fluid exchangeIcon "
                      alt=""
                    />
                  </div>
                </div>
                <div className="row d-flex justify-content-center  responsive-swap-input">
                  <div className="col-md-10">
                    <label htmlFor="basic-url" className="form-label">
                      <div className="dropdown">
                        <button
                          className="btn  btn-drop dropdown-toggle"
                          type="button"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                          onClick={() => setShowModal(true)}
                        >
                          Virtual Swap
                        </button>
                        <Modal
                          show={showModal}
                          onHide={() => setShowModal(false)}
                        />
                      </div>
                    </label>
                    <div className="input-group">
                      <span className="input-group-text" id="basic-addon3">
                        <img src={coin} className="img-fluid p-1" alt="" />
                      </span>
                      <input
                        type="text"
                        className="form-control form-control2"
                        id="basic-url"
                        aria-describedby="basic-addon3"
                        value={"0.0"}
                      />
                    </div>
                  </div>
                </div>
                <div className="row me-4">
                  <div className="d-flex justify-content-end ">
                    <div className="copy-bg text-center CopyIcon">
                      <img
                        src={CopyIcon}
                        className="img-fluid p-2"
                        width={"40px"}
                        alt=""
                      />
                    </div>
                  </div>
                </div>
                <div className="row d-flex justify-content-center responsive-swap-Tsnack">
                  <div className="col-md-10 d-flex justify-content-between ">
                    <div className="tsnack">Snack Risk?</div>
                    <div className="tslippage">
                      Slippage Tolerance{" "}
                      <span className="tslippagevalue"> 0.5</span>
                    </div>
                  </div>
                </div>
                <div className="row d-flex justify-content-center mt-3">
                  <div className="col-lg-3 col-10">
                    <div className="d-flex justify-content-center align-items-center">
                      <button className="d-flex justify-content-start align-items-center btn_conn_bg">
                        <div className="btn_conn_icon_bg p-3 text-white">
                          <img
                            src={connection_icon}
                            className="img-fluid"
                            alt=""
                          />
                        </div>
                        <div className=" btn_conn ms-1">Connect wallet</div>
                      </button>
                    </div>
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

export default LiquditySwap;
