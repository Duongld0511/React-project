import React from "react";
import { useParams } from "react-router-dom";
import { useGetCategoriesQuery } from "../../services/category";
import { useGetProductQuery } from "../../services/product";

type Props = {};

const DetailProduct = (props: Props) => {
  const { id } = useParams();
  const { data: product, isLoading, isError } = useGetProductQuery(id as any);

  const { data: cate = [] } = useGetCategoriesQuery();
  console.log(cate);
  const getCate = () => {
    return cate.map((item) => ({
      value: item.id,
      label: item.name,
    }));
  };
  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error</div>;
  return (
    <div id="detail-product" className="px-28">
      <div className="w-full flex mt-10  ">
        <div className="left w-[50%]">
          <img
            id="mainImg"
            className="mainImg mb-2 w-full"
            src={product?.image}
          />
        </div>
        <div className="right w-[50%] ml-20">
          <span className="text-sm font-bold">Home</span> /{" "}
          <span className="text-sm font-bold">{product?.category}</span>
          <h4 className="text-2xl font-bold my-6">{product?.name}</h4>
          <span className=" font-bold">Price: </span>
          <h2 className="text-2xl font-bold text-green-600">
            {product?.sale}$ /
            <sub className=" text-red-500 line-through">{product?.price}$</sub>
          </h2>
          <br />
          <div>
            <h4 className="text-2xl font-bold my-6">Product details</h4>
            <span>{product?.description}</span>
          </div>
          <button className="w-[200px] h-10 mt-5 bg-green-600 text-white rounded-md">
            Add to cart
          </button>
        </div>
      </div>
      {/* Featured Product */}
      <div className="featured-product w-full mb-10">
        <div className="text-center mt-20 mb-14">
          <h1 className="text-5xl font-bold">Featured Product</h1>
          <span className="text-lg text-gray-400">
            Summer Collection New Morden Design
          </span>
        </div>
        <div className="flex justify-between">
          <div className="w-[24%] border border-separate p-3 rounded-2xl">
            <img className="rounded-2xl" src="../../src/assets/img/f4.jpg" />
            <div className="desc mt-4">
              <span className="text-sm font-semibold text-gray-400">
                Adidas
              </span>
              <h5 className="text-lg font-bold">Men's Fashion T Shirt</h5>
              <div className="w-full flex justify-between">
                <div>
                  <div className="crop text-yellow-400" title="rating">
                    <div style={{ width: 90 }}>
                      <span className="fa fa-star" />
                      <span className="fa fa-star" />
                      <span className="fa fa-star" />
                      <span className="fa fa-star" />
                      <span className="fa fa-star" />
                    </div>
                  </div>
                  <h5 className="text-lg font-bold text-green-600">$78</h5>
                </div>
                <div className="w-10 h-10 rounded-full bg-green-200 text-green-500 flex items-center">
                  <i className="fa-solid fa-cart-shopping m-auto" />
                </div>
              </div>
            </div>
          </div>
          <div className="w-[24%] border border-separate p-3 rounded-2xl">
            <img className="rounded-2xl" src="../../src/assets/img/f4.jpg" />
            <div className="desc mt-4">
              <span className="text-sm font-semibold text-gray-400">
                Adidas
              </span>
              <h5 className="text-lg font-bold">Men's Fashion T Shirt</h5>
              <div className="w-full flex justify-between">
                <div>
                  <div className="crop text-yellow-400" title="rating">
                    <div style={{ width: 90 }}>
                      <span className="fa fa-star" />
                      <span className="fa fa-star" />
                      <span className="fa fa-star" />
                      <span className="fa fa-star" />
                      <span className="fa fa-star" />
                    </div>
                  </div>
                  <h5 className="text-lg font-bold text-green-600">$78</h5>
                </div>
                <div className="w-10 h-10 rounded-full bg-green-200 text-green-500 flex items-center">
                  <i className="fa-solid fa-cart-shopping m-auto" />
                </div>
              </div>
            </div>
          </div>
          <div className="w-[24%] border border-separate p-3 rounded-2xl">
            <img className="rounded-2xl" src="../../src/assets/img/f4.jpg" />
            <div className="desc mt-4">
              <span className="text-sm font-semibold text-gray-400">
                Adidas
              </span>
              <h5 className="text-lg font-bold">Men's Fashion T Shirt</h5>
              <div className="w-full flex justify-between">
                <div>
                  <div className="crop text-yellow-400" title="rating">
                    <div style={{ width: 90 }}>
                      <span className="fa fa-star" />
                      <span className="fa fa-star" />
                      <span className="fa fa-star" />
                      <span className="fa fa-star" />
                      <span className="fa fa-star" />
                    </div>
                  </div>
                  <h5 className="text-lg font-bold text-green-600">$78</h5>
                </div>
                <div className="w-10 h-10 rounded-full bg-green-200 text-green-500 flex items-center">
                  <i className="fa-solid fa-cart-shopping m-auto" />
                </div>
              </div>
            </div>
          </div>
          <div className="w-[24%] border border-separate p-3 rounded-2xl">
            <img className="rounded-2xl" src="../../src/assets/img/f4.jpg" />
            <div className="desc mt-4">
              <span className="text-sm font-semibold text-gray-400">
                Adidas
              </span>
              <h5 className="text-lg font-bold">Men's Fashion T Shirt</h5>
              <div className="w-full flex justify-between">
                <div>
                  <div className="crop text-yellow-400" title="rating">
                    <div style={{ width: 90 }}>
                      <span className="fa fa-star" />
                      <span className="fa fa-star" />
                      <span className="fa fa-star" />
                      <span className="fa fa-star" />
                      <span className="fa fa-star" />
                    </div>
                  </div>
                  <h5 className="text-lg font-bold text-green-600">$78</h5>
                </div>
                <div className="w-10 h-10 rounded-full bg-green-200 text-green-500 flex items-center">
                  <i className="fa-solid fa-cart-shopping m-auto" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailProduct;
