import React from "react";
import { Link } from "react-router-dom";
import productImage from "../../assets/category/category1.png";

const ProductDetails = () => {
  return (
    <div className="relative px-4 h-screen">
      <section className="flex items-center justify-between py-4">
        <p>
          <Link to="/shop">
            <i className="fa-solid fa-angle-left"></i>
          </Link>
        </p>
        <div className="flex gap-4">
          <p>
            <i className="fa-solid fa-share-nodes"></i>
          </p>
          <p>
            <i className="fa-solid fa-bag-shopping"></i>
          </p>
        </div>
      </section>
      <section>
        <div className="flex items-center justify-center">
          <img className="w-10/12" src={productImage} alt="" />
        </div>
        <div className="flex items-center justify-between py-4">
          <div>
            <p className="opacity-50">Men's Sweatshirt</p>
            <p className="text-xl font-bold">Men's Sweatshirt</p>
          </div>
          <div className="text-end">
            <p>
              <i className="fa-solid fa-star text-amber-500"></i>4.5
            </p>
            <p className="font-bold">BDT 1500</p>
          </div>
        </div>
      </section>
      <section>
        <p>Size:</p>
        <div className="btn-group">
          <input type="radio" name="options" data-title="M" className="btn" />
          <input type="radio" name="options" data-title="L" className="btn" />
          <input
            type="radio"
            name="options"
            data-title="XL"
            className="btn"
            defaultChecked
          />
          <input type="radio" name="options" data-title="XXL" className="btn" />
          <input
            type="radio"
            name="options"
            data-title="XXXL"
            className="btn"
          />
        </div>
      </section>
      <section className="py-4">
        <p className="font-bold">Description:</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
          praesentium odit porro animi consequatur dicta dolore provident fuga
          culpa perspiciatis. Aperiam rem odit animi. Et fugiat ex repudiandae
          assumenda labore autem, maxime eligendi. Incidunt, vitae blanditiis at
          illo culpa dolorem quae ea magni! Odit, repudiandae iure ab rem
          veritatis deleniti sed quisquam dignissimos. Explicabo rem sint
          tempore illo eos eaque, consectetur odit facere a numquam excepturi
          non itaque natus ab sunt praesentium dolorum totam officiis, voluptate
          odio dicta, vitae in incidunt. Aliquam dolore illo, assumenda est
          architecto aperiam odio vero fugiat. Praesentium iste hic quae
          recusandae porro voluptates, alias, magni perspiciatis ipsam
          reprehenderit sunt voluptatibus. Facilis omnis ad voluptas maiores
          blanditiis, repellat veniam aut distinctio provident quo at vero non!
          Quidem possimus quibusdam quod voluptates hic mollitia quam quia,
          assumenda tenetur, fugiat labore? Autem exercitationem est fugit odit
          delectus, necessitatibus nam accusamus eligendi magnam, modi, pariatur
          perferendis iste sit. Non!
        </p>
      </section>
      <section
        className="fixed
             inset-x-0
             bottom-0 flex items-center justify-between p-4 bg-white"
      >
        <p>
          <i className="fa-regular fa-bookmark"></i>
        </p>
        <div className="flex justify-around gap-4">
          <button className="btn bg-gradient-to-r from-orange-500 to-red-600 border-none">
            Add To Cart
          </button>
          <button className="btn bg-gradient-to-r from-purple-600 to-red-600 border-none">
            Buy Now
          </button>
        </div>
      </section>
    </div>
  );
};

export default ProductDetails;
