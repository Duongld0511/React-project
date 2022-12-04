import React from "react";

type Props = {};

const Cart = (props: Props) => {
  return (
    <div className="container mx-auto mb-20 mt-10 p-10">
      <div className="font-medium mb-14">
        <a href="#">Home</a> / <a href="#">Products</a> /{" "}
        <a href="#">Shopping bag</a>
      </div>
      <h1 className="text-3xl">Your bag</h1>
      <div className="grid grid-cols-10 gap-1">
        <div className="col-span-7 bg-white">
          {/* Product-lisst */}
          <div className="grid grid-cols-10 gap-1 border-b-2  m-1">
            <div className="col-span-3 row-span-4 m-5">
              <img src="http://thoitrangskinny.com/upload/O1CN01qcaSdV1TY2RMSvIut_!!2016302393-0-cib_-19-03-2021-17-45-38.jpg" />
            </div>
            <div className="col-span-7 m-5">
              <div className="flex justify-between">
                <div>
                  <h1 className="text-3xl font-semibold">Tên sản phẩm</h1>
                  <p className="mt-2 font-medium text-gray-600 text-sm">
                    4.000.000 VNĐ
                  </p>
                </div>
                <div>
                  <button>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
              </div>
              <br />
              <div className="flex justify-between row-span-1 pt-10">
                <div>
                  <input className="w-16 h-10" type="number" defaultValue={1} />
                </div>
                <div>
                  <h1 className="text-xl font-semibold text-gray-600 my-3">
                    Thành tiền: 4.000.000 VNĐ
                  </h1>
                </div>
              </div>
            </div>
          </div>
          {/* Product-lisst */}
        </div>
        <div className="col-span-3 bg-gray-100 rounded-md h-80 py-5">
          <h1 className="text-center text-2xl font-semibold">Tổng tiền</h1>
          <div className="m-10">
            <div className="flex justify-between my-5">
              <p>Tổng tiền:</p>
              <p>12.000.000</p>
            </div>
            <div className="flex justify-between my-5">
              <p>Mã giảm giá</p>
              <input className="h-7" type="text" />
            </div>
            <div className="mt-10">
              <button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 py-3 text-white font-bold">
                Đặt Hàng
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
