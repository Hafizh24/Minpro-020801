import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { InputWithButton } from "../components/Reedem";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const PaymentPage = () => {
  // const [paymentMethod, setPaymentMethod] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  // const [data, setData] = useState({});
  const event = useSelector((state) => state.event.data);
  // console.log(event);
  const totalPrice = useSelector((state) => state.transaction.data);
  const count = useSelector((state) => state.transaction.count);
  const user = useSelector((state) => state.user.value);
  // console.log(user);
  // const [discount, setDiscount] = useState({})
  const navigate = useNavigate();

  const notify = () =>
  toast.success("Payment Success!", {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });

  // console.log(totalPrice);
  // const handlePaymentMethodChange = (method) => {
  //   setPaymentMethod(method);
  // };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleAddressChange = (event) => {
    setAddress(event.target.value);
  };

  const handlePayment = async (data) => {
    try {
      const token = localStorage.getItem("token");
      const data = {
        UserId: user.id,
        amount: totalPrice,
      };

      axios.post("http://localhost:2000/transaksi", data, 
      // {
      //   headers: {
      //     Authorization: `Bearer ${token}`,
      //   },
      // }
      );
      navigate("/")
    } catch (err) {
      console.log(err);
    }
  };

  // const discountFetch = async (data) => {
  //   try {
  //     await axios.get(`http://localhost:2000/transaksi/${event.id}`).then ((response) =>
  //     setDiscount(response.data))
  //   } catch (error) {
      
  //   }
  // }

  // useEffect(() => {
  //   discountFetch();
  // }, []);

  return (
    <div className="flex flex-col items-center gap-2 px-2 py-4 laptop:flex-row laptop:justify-center laptop:gap-4 laptop:p-4">
      <div className="w-80 laptop:w-96">
        <h2 className="text-2xl font-bold mb-2 text-gray-800 p-2">
          Detail Pemesanan
        </h2>
        <div className="flex flex-col items-start gap-2 p-2 laptop:flex-row laptop:justify-center laptop:gap-2 laptop:p-2">
          <div className="laptop:w-1/2 laptop:p-2">
            <img
              src={event.image_url}
              alt="card-image"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="laptop:w-1/2 laptop:p-2">
            <div className="flex flex-col">
              <Typography color="blue-gray" className="font-medium">
                detail tiket:
              </Typography>
              <Typography
                variant="small"
                color="gray"
                className="font-normal opacity-75"
              >
                event name: {event.name}
              </Typography>
              <Typography
                variant="small"
                color="gray"
                className="font-normal opacity-75"
              >
                event date: {event.start_date}
              </Typography>
            </div>
          </div>
        </div>
        <div className="p-2 laptop:p-4">
          <div className="mb-2 flex justify-between">
            <div className="flex flex-col">
              <Typography color="blue-gray" className="font-medium">
                Harga
              </Typography>
              <Typography
                variant="small"
                color="gray"
                className="font-normal opacity-75 text-center"
              >
                {event.Ticket.price}
              </Typography>
            </div>
            <div className="flex flex-col">
              <Typography color="blue-gray" className="font-medium">
                Jumlah
              </Typography>
              <Typography
                variant="small"
                color="gray"
                className="font-normal opacity-75"
              >
                {count}
              </Typography>
            </div>
          </div>
        </div>
        <div className="items-center justify-center bg-gray-100">
          <div className="p-2 bg-white rounded shadow-md">
            <div>
              <label className="text-gray-700">Nama Lengkap:</label>
              <input
                type="text"
                value={name}
                onChange={handleNameChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
            </div>
            <div>
              <label className="text-gray-700">Email:</label>
              <input
                type="email"
                value={email}
                onChange={handleEmailChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
            </div>
            <div>
              <label className="text-gray-700">Alamat:</label>
              <textarea
                value={address}
                onChange={handleAddressChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="w-80 flex flex-col gap-2 p-2 laptop:flex laptop:flex-col laptop:px-4 laptop:gap-4">
        <div>
          <InputWithButton />
        </div>
        <div>
          <Typography> Detail Harga </Typography>
          <div className="flex justify-between">
            <Typography className="text-lg text-gray-500">
              {" "}
              Total Harga Tiket
            </Typography>
            <Typography className="text-lg text-gray-500">
              {totalPrice}
            </Typography>
            
          </div>
          <div className="flex justify-between">
            <Typography> discount</Typography>
            <Typography>discount </Typography>
          </div>
          <div className="flex justify-between">
            <Typography> Total Bayar</Typography>
            <Typography>{totalPrice} </Typography>
          </div>
        </div>
        {/* <div>
          <label className="text-gray-700">Metode Pembayaran:</label>
          <div className="flex space-x-2 mt-1">
            <button
              onClick={() => handlePaymentMethodChange("digitalWallet")}
              className={`py-2 px-4 rounded ${
                paymentMethod === "digitalWallet"
                  ? "bg-gray-600 text-white"
                  : "bg-white text-gray-600 border border-gray-600 hover:bg-gray-300"
              }`}
            >
              Dompet Digital
            </button>
            <button
              onClick={() => handlePaymentMethodChange("cod")}
              className={`py-2 px-4 rounded ${
                paymentMethod === "cod"
                  ? "bg-gray-600 text-white "
                  : "bg-white text-gray-600 border border-gray-600 hover:bg-gray-300 "
              }`}
            >
              Bayar di Tempat
            </button>
          </div>
        </div> */}
        <div>
          <Button
            className="px-4 py-2 text-white bg-gray-500 rounded  focus:outline-none"
            onClick={handlePayment}
          >
            Bayar sekarang
          </Button>
          <ToastContainer />
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;
