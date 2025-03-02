import React, { useEffect } from "react";
import product from "../Data/ProductsList";
import "../App.css";
import { FaMinus, FaPlus } from "react-icons/fa";

const Product = () => {
  return (
    <div className="relative pt-[56px] md:pt-0 px-4 w-full sm:min-w-[640px] md:min-w-[798px] lg:min-w-[1024px]">
      {/* <========================== Product Detail ==========================> */}
      <div
        className="sm:relative w-full flex flex-col sm:flex-row justify-end mt-3 mb-11 gap-2 sm:gap-5 
      overflow-auto productWrapper h-auto sm:h-[80vh]"
      >
        <div className="sm:sticky w-full sm:w-2/5 h-[50vh] sm:h-[70vh] flex self-start top-0 left-0">
          {/* Product Image Tiles */}
          <div className="mt-5 flex flex-col justify-start gap-3">
            {product[0].image.map((i, inx) => {
              return (
                <div
                  className={`p-1 w-10 rounded-md`}
                  style={{
                    border: "1px solid gray",
                  }}
                  key={`Product-Tiles-${inx}`}
                >
                  <img src={i} alt="..." className="max-h-14 object-contain" />
                </div>
              );
            })}
          </div>

          {/* Product Images */}
          <div className="w-full ps-3 sm:px-3">
            <img
              src={product[0].image[0]}
              alt="..."
              className="w-full h-full object-contain"
            />
            {/* <p className="mt-3 text-gray-500 text-center">
              Roll over image to zoom in
            </p> */}
          </div>
        </div>

        {/* Product Features */}
        <div className="w-full sm:w-3/5 pt-5">
          <p className="text-2xl font-semibold mb-2">Product Full Name</p>
          <p className="text-lg font-semibold">Price:</p>
          <div className="flex items-center gap-2">
            <p className="text-lg font-semibold">Quantity</p>
            <button
              className=" bg-blue-700 text-white rounded p-3"
              style={{ border: "2px solid #1A56DB" }}
            >
              <FaMinus />
            </button>
            <input
              type="text"
              className="p-2 w-16 text-center text-lg rounded"
              defaultValue={1}
            />
            <button
              className=" bg-blue-700 text-white p-3 rounded"
              style={{ border: "2px solid #1A56DB" }}
            >
              <FaPlus />
            </button>
          </div>

          <hr className="my-4" />

          <p>$360.00 Free delivery</p>

          <p>Cash on Delivery Eligible.</p>

          <p>Shipping Speed to Delivery.</p>

          <p>EMIs from $100/month.</p>

          <p>Bank Offer Extra 5% off* with Axis Bank Buzz Credit Card</p>

          <hr className="my-4" />

          <p className="text-lg font-semibold">Discription:</p>
          <p>
            This is description of product Lorem ipsum dolor, sit amet
            consectetur adipisicing elit. Laborum, maiores, quas eaque culpa
            ratione rem doloremque qui ipsa ut aperiam harum veritatis.
            Doloribus iure itaque nobis dolorum sed natus nesciunt. Officiis
            consequatur quod, harum culpa nemo fugit, cum quisquam voluptatibus
            impedit facere qui. Nisi perferendis nostrum nemo nobis assumenda
            doloremque voluptatum nulla? Iste aut quas quisquam enim iusto odio
            rerum? Distinctio repudiandae dicta, minus minima eaque voluptatem
            provident deserunt eligendi rem, atque itaque voluptatibus, hic
            quisquam. Ipsum iure autem vitae id fugiat saepe quam unde
            consectetur omnis quaerat, rerum dolorum. Eos nihil iusto quos?
            Veritatis aspernatur ex animi quae molestiae iure dolorum tempore
            iste obcaecati unde, expedita architecto. Nesciunt veniam quod quam
            omnis architecto numquam est in dignissimos similique et. Aliquid
            rem maiores, perferendis accusamus veniam, in aut ex natus sapiente
            possimus commodi enim, et iste at quo quidem assumenda dolor quod
            ipsa consectetur. Quasi fugit aliquid consequatur sint
            exercitationem. Iure odio voluptatum, ducimus laudantium earum
            maiores eum perferendis quae, magnam saepe numquam quos alias veniam
            minima tenetur modi, cumque esse inventore! Aliquid magni inventore,
            necessitatibus quidem qui deleniti asperiores! Aliquam earum dicta
            hic nulla impedit magnam voluptate dignissimos quis, consequatur
            voluptatem, repellat asperiores? Aut delectus, voluptatibus, ipsa
            quis saepe quidem, dolorum unde sunt rerum nobis sit ea consequatur
            sapiente. Harum rem ad reiciendis quod libero, est cumque voluptatem
            eveniet consequatur porro dolorem. Debitis quisquam accusamus modi,
            nisi fugiat rerum nulla similique recusandae enim perspiciatis
            molestiae ea dolore. Fugiat, ipsum? Recusandae iste vero quae eum
            quisquam error inventore ducimus blanditiis sint. Reiciendis debitis
            doloribus doloremque totam soluta dolore beatae suscipit officia
            amet perferendis error iusto, nam officiis, eaque, ea accusantium.
            Modi repellendus veniam amet incidunt consectetur molestias, hic
            unde laudantium nemo quia sit ipsa illo minima officiis, voluptatum
            iure dolor deleniti impedit odit voluptas cumque? Voluptatum ipsa
            voluptate eligendi asperiores? Minus rerum nobis consequuntur
            doloribus consectetur aperiam dignissimos in sed totam cupiditate.
            Animi necessitatibus consequatur sapiente fuga quisquam odio
            suscipit, sint natus explicabo nam expedita eius eos ut sed quod!
            Quidem eum officiis dolores! Nesciunt voluptatibus sed earum vel
            mollitia, harum esse quia culpa eaque fuga odio quisquam sunt quas
            est dolore optio nemo ea recusandae temporibus iste consectetur
            nisi? Voluptate mollitia quidem voluptatibus veniam velit sequi,
            dolorum quos fuga doloribus illum, non in sit tempore dicta
            voluptates explicabo esse. Praesentium aliquid corporis libero
            doloremque cum natus pariatur nostrum numquam! Totam ipsam
            consequuntur facere inventore laboriosam fugit doloribus quae
            repellendus corporis sequi provident debitis dolores labore,
            voluptate sed fugiat optio architecto quasi sit quam eos? Nostrum,
            debitis temporibus. Repellat, cum! Aut necessitatibus suscipit,
            praesentium reprehenderit, accusantium, quisquam temporibus nemo
            unde laudantium eos doloremque quasi. Assumenda consectetur
            reprehenderit amet omnis adipisci sapiente, minima ipsa debitis
            error, dolores laboriosam perferendis dolorum nemo. Consectetur
            tempore illo quidem distinctio laboriosam non enim deserunt porro!
            Sed eligendi, hic, similique facilis veritatis et aspernatur modi
            nam dolor, alias laborum nostrum molestias numquam. Quae quod sequi
            iure. Voluptatum quasi numquam repellat perspiciatis magni quaerat
            aliquam, corporis praesentium quae iste, fugit porro quod nulla
            libero fuga atque eius eligendi voluptatibus amet officia autem
            quibusdam? Est placeat ratione quas. Eveniet iure iste vitae ipsum
            nemo inventore? Facilis harum error fugiat autem omnis soluta
            obcaecati sint mollitia, porro quo cumque labore, nulla est sunt,
            repellat minima quam debitis saepe modi? Modi iure veniam cum rem
            vitae, eaque eius provident repellendus sequi dicta deleniti in
            officiis consectetur pariatur autem, inventore exercitationem unde
            sapiente maxime delectus, id fugiat ipsam quibusdam quos? Dicta.
            Recusandae ratione accusantium, placeat velit repellendus eveniet ut
            excepturi laborum vitae. Sint, fuga corporis dolore quaerat dicta,
            assumenda exercitationem aliquam amet enim dolores quae commodi
            inventore harum quidem aperiam. Vero.
          </p>

          <hr className="my-4" />

          <div className="w-52 sm:pb-20 flex flex-col gap-5">
            <button className="p-2 bg-[#FFCE12] rounded-s-full rounded-e-full">
              ADD TO CART
            </button>
            <button className="p-2 bg-[#FFA41C] rounded-s-full rounded-e-full">
              BUY NOW
            </button>
          </div>
          <hr className="my-4" />
        </div>
      </div>
    </div>
  );
};

export default Product;
