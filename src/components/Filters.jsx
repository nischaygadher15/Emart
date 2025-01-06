import { Accordion } from "flowbite-react";
import React from "react";
import { FaStar } from "react-icons/fa";
import ReactSlider from "react-slider";

const Filters = ({ range }) => {
  let { rangeVal, setRangeVal } = range;
  return (
    <div>
      {/* Filters */}
      <div
        className="w-full h-auto shadow shadow-gray-500 rounded"
        style={{
          border: "1px solid rgba(180, 180, 180)",
        }}
      >
        {/* Title */}
        <div className="p-3 lg:p-5">
          <p className="text-2xl font-semibold text-[rgba(0,0,0,0.8)]">
            Filter
          </p>
        </div>
        <hr
          style={{
            border: "1px solid rgba(180, 180, 180)",
          }}
        />

        {/* Select Category */}
        <div className="p-3 lg:p-5">
          <p className="text-lg font-semibold text-[rgba(0,0,0,0.8)] mb-3">
            Categories
          </p>
          <select
            name="category"
            className="w-full p-2 bg-[#F3F4F6] font-semibold text-[rgba(0,0,0,0.8)] rounded"
          >
            <option value="select">Select Category</option>
            <option value="select">Category</option>
            <option value="select">Category</option>
            <option value="select">Category</option>
            <option value="select">Category</option>
          </select>
        </div>
        <hr
          style={{
            border: "1px solid rgba(180, 180, 180)",
          }}
        />

        {/* Price Range */}
        <div className="p-3 lg:p-5">
          <p className="text-lg font-semibold text-[rgba(0,0,0,0.8)] mb-3">
            Price Range
          </p>
          <p className="font-semibold text-[rgba(0,0,0,0.8)]">
            &#8377; {rangeVal[0]} - &#8377; {rangeVal[1]}
          </p>

          {/* Range Slider */}
          <div className="py-9">
            <ReactSlider
              className="horizontal-slider"
              thumbClassName=""
              trackClassName={`trackClass`}
              defaultValue={[11.111, 77.778]}
              ariaLabelledby={["first-slider-label", "second-slider-label"]}
              ariaValuetext={(state) => `Thumb value ${state.valueNow}`}
              renderThumb={(props, state) => {
                const { key, ...restProps } = props;
                const prop = { ...restProps };
                return (
                  <div
                    key={`reactSlider${key}`}
                    {...prop}
                    className="outline-none"
                  >
                    <p
                      className="absolute w-5 h-5 flex justify-center items-center 
              rounded-full bg-blue-500 text-white"
                      style={{ top: "-8px", left: "-8px" }}
                    ></p>
                  </div>
                );
              }}
              pearling
              minDistance={15}
              withTracks={true}
              step={0.45}
              // value={[0, 4500]}
              onChange={(state) => {
                let minVal = Math.round(state[0] * 45);
                let maxVal = Math.round(state[1] * 45);
                setRangeVal([minVal, maxVal]);
              }}
            />
          </div>
        </div>
        <hr
          style={{
            border: "1px solid rgba(180, 180, 180)",
          }}
        />

        {/* Discount */}
        <div className="p-3 lg:p-5">
          <Accordion>
            <Accordion.Panel>
              <Accordion.Title className="p-3">Discount</Accordion.Title>
              <Accordion.Content>
                <ul>
                  <li className="flex items-center">
                    <input type="radio" className="me-2" />
                    50% or more
                  </li>
                </ul>
              </Accordion.Content>
            </Accordion.Panel>
          </Accordion>
        </div>
        <hr
          style={{
            border: "1px solid rgba(180, 180, 180)",
          }}
        />

        {/* Electronics */}
        <div className="p-3 lg:p-5">
          <Accordion>
            <Accordion.Panel>
              <Accordion.Title className="p-3">Electronics</Accordion.Title>
              <Accordion.Content>
                <ul>
                  <li className="flex items-center">
                    <input type="checkbox" className="me-2" />
                    Accesorries
                  </li>
                </ul>
              </Accordion.Content>
            </Accordion.Panel>
          </Accordion>
        </div>
        <hr
          style={{
            border: "1px solid rgba(180, 180, 180)",
          }}
        />

        {/* Sizes */}
        <div className="p-3 lg:p-5">
          <Accordion>
            <Accordion.Panel>
              <Accordion.Title className="p-3">Size</Accordion.Title>
              <Accordion.Content>
                <ul>
                  <li className="flex items-center">
                    <input type="radio" className="me-2" />
                    X-Large
                  </li>
                </ul>
              </Accordion.Content>
            </Accordion.Panel>
          </Accordion>
        </div>
        <hr
          style={{
            border: "1px solid rgba(180, 180, 180)",
          }}
        />

        {/* Customer Rating */}
        <div className="p-3 lg:p-5">
          <Accordion>
            <Accordion.Panel>
              <Accordion.Title className="p-3">Customer Rating</Accordion.Title>
              <Accordion.Content>
                <ul>
                  <li className="flex items-center gap-2">
                    <input type="radio" />4
                    <FaStar className="text-yellow-300" />& Above
                  </li>
                </ul>
              </Accordion.Content>
            </Accordion.Panel>
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default Filters;
