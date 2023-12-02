import React, { useEffect, useRef, useState } from "react";
import "./Form.css";
import Table from "./Table";
export default function Form() {
  const [value, setValue] = useState([]);

  const formHandler = (e) => {
    e.preventDefault();
    const elements = [...e.target.elements];

    const obj = {};

    elements.forEach((element) => {
      if (element.type === "radio") {
        if (element.checked) {
          obj[element.name] = element.value;
        }
      } else {
        obj[element.name] = element.value;
      }
      if (!arr.includes(obj.product_id)) {
        setValue([...value, obj]);
      } else {
        alert("Same id  not allowed");
      }

      element.value = "";
    });
  };

  const deletHandale = (id) => {
    const filterd = value.filter((item) => item.product_id !== id);
    setValue(filterd);
  };
  const focus = useRef(null);
  useEffect(() => {
    focus.current.focus();
  });

  const refobj = useRef(false);
  useEffect(() => {
    refobj.current;
  });

  return (
    <div
      style={{
        margin: "auto",
        backgroundColor: "red",
        display: "flex",
        gap: "12px",
        alignItems: "center",
        justifyContent: "center",
        justifyContent: "space-evenly",
      }}
    >
      <Form className="fromdiv" onSubmit={formHandler} action="">
        <input
          ref={focus}
          className="forminp"
          type="text"
          name="product_name"
          placeholder="Enter Product name"
          required
        />
        <br />
        <input
          className="forminp"
          name="product_id"
          type="text"
          placeholder="Product id"
          required
        />
        <br />
        <input
          className="forminp"
          name="quentity"
          type="text"
          placeholder="Quentity"
          required
        />
        <br />
        <input
          className="forminp"
          type="text"
          name="price"
          placeholder="Price"
          required
        />
        <br />
        <textarea
          style={{ resize: "none" }}
          placeholder="Description..."
          name="msg"
          id="text"
          cols="34"
          wrap="hard"
          rows="5"
          required
        ></textarea>
        <br />
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div>
            <h4>Select a color</h4>
            <select
              style={{ borderRadius: "4px" }}
              name="color"
              id="color"
              required
            >
              <option value="red" selected>
                Red{" "}
              </option>
              <option value="green">Green</option>
              <option value="black">Black</option>
            </select>
          </div>
          <div className="radio">
            <h4>Select a size</h4>
            <input
              className="radioinput"
              type="radio"
              id="x"
              name="size"
              value="X"
            />

            <label htmlFor="x">X</label>
            <input
              className="radioinput"
              type="radio"
              id="l"
              name="size"
              value="XL"
            />
            <label htmlFor="l">XL</label>
            <input
              className="radioinput"
              type="radio"
              id="m"
              name="size"
              value="M"
            ></input>
            <label htmlFor="m">M</label>
          </div>
        </div>
        <div className="sub-btn">
          <button
            style={{ background: " #2ecc71", border: "none", color: "white" }}
          >
            Submit
          </button>
        </div>
      </Form>

      <div className="view-container">
        {value.length > 0 && (
          <>
            <div className="table-responsive">
              <table>
                <thead>
                  <tr>
                    <th>Product-name</th>
                    <th>id</th>
                    <th>Product-price</th>
                    <th>Product-quentity</th>
                    <th> Description</th>
                    <th>Color</th>
                    <th>Size</th>
                    <th>Delete</th>
                  </tr>
                </thead>

                <tbody>
                  {value.map((product, i) => (
                    <Table
                      key={i}
                      deletHandale={deletHandale}
                      product={product}
                    />
                  ))}
                </tbody>
              </table>
            </div>
            <div style={{ textAlign: "center" }}>
              <button
                style={{
                  backgroundColor: "red",
                  border: "none",
                  color: "white",
                  marginTop: "8px",
                }}
                onClick={() => setValue([])}
                className="btn btn-danger btn-md"
              >
                Remove All
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
