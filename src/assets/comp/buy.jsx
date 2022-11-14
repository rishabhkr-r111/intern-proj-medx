import { useState } from "react";
import { db } from "../../firebase-config";
import { addDoc, collection } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

function Buy({ buy, setbuy, user, p, count }) {
  const ordersCollection = collection(db, "orders");
  const navigate = useNavigate();

  let [name, setname] = useState("");
  let [address, setaddress] = useState("");
  let [pincode, setpincode] = useState("");
  let [note, setnote] = useState("");

  const close = () => {
    setbuy(false);
  };

  const buynow = () => {
    console.log(p);
    addDoc(ordersCollection, {
      userid: user.uid,
      email: user.email,
      name: name,
      address: address,
      pincode: pincode,
      note: note,
      pname: p.name,
      count: count,
      pprice: p.price,
      pimg:
        "https://newassets.apollo247.com/pub/media/catalog/product" +
        p.thumbnail.slice(35),
      purl: p.url_key,
    });

    navigate("/user");
  };

  return (
    <>
      <div
        className={
          buy
            ? "bg-blue-500/95 w-full h-full fixed top-0 border-[1px] border-black drop-shadow-lg "
            : "hidden"
        }
      >
        <h1
          className="m-5 text-xl text-white font-bold text-center p-2  rounded-[25px]
              bg-black drop-shadow-xl px-7 py-2 inline-block"
        >
          Enter Details
        </h1>

        <div className="m-5">
          <div className="font-semibold mt-2">
            <span>Name :</span>
            <input
              onChange={(e) => {
                setname(e.target.value);
              }}
              type="text"
              className="mx-5 rounded-lg h-11 text-center w-1/2"
              placeholder="Name"
            ></input>
          </div>

          <div className="font-semibold mt-2">
            <span>Address :</span>
            <input
              onChange={(e) => {
                setaddress(e.target.value);
              }}
              type="text"
              className="mx-5 rounded-lg h-11 text-center w-1/2"
              placeholder="enter the address"
            ></input>
          </div>

          <div className="font-semibold mt-2">
            <span>Pincode :</span>
            <input
              onChange={(e) => {
                setpincode(e.target.value);
              }}
              type="text"
              className="mx-5 rounded-lg h-11 text-center w-1/2"
              placeholder="Pincode"
            ></input>
          </div>

          <div className="font-semibold mt-2">
            <span>Note :</span>
            <input
              onChange={(e) => {
                setnote(e.target.value);
              }}
              type="text"
              className="mx-5 rounded-lg h-11 text-center w-1/2"
              placeholder="Note"
            ></input>
          </div>

          <div
            className="text-xl text-white font-bold text-center p-2  rounded-[25px]
              bg-black drop-shadow-xl px-7 py-2 inline-block mt-7 mx-auto"
            onClick={buynow}
          >
            Buy Now
          </div>
          <div></div>
          <div
            onClick={close}
            className="text-xl text-white font-bold text-center p-2  rounded-[25px]
              bg-black drop-shadow-xl px-7 py-2 inline-block mt-7 "
          >
            Cancel
          </div>
        </div>
      </div>
    </>
  );
}

export default Buy;
