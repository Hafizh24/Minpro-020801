import React, { useState } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

const PaymentPage = () => {
  const [paymentMethod, setPaymentMethod] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");

  const handlePaymentMethodChange = (method) => {
    setPaymentMethod(method);
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleAddressChange = (event) => {
    setAddress(event.target.value);
  };

  return (
    <div class="grid gap-4 grid-cols-2">
      <div>
        <h2 className="text-2xl font-bold mb-2 text-gray-800 p-4">
          Detail Pemesanan
        </h2>
        <div className="flex">
          <div className="w-1/2 p-4">
            <img
              src="https://i.pinimg.com/originals/3c/11/7f/3c117f39737cbf55ec8205eb329a5c56.jpg"
              alt="card-image"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="w-1/2 p-4">
            <Typography color="blue-gray" className="font-medium">
              detail tiket: 
            </Typography>
          </div>
        </div>
        <div className="p-4">
          <div className="mb-2 flex items-center justify-between">
            <div className="flex flex-col">
            <Typography color="blue-gray" className="font-medium">
              Tiket konser
            </Typography>
            <Typography
              variant="small"
              color="gray"
              className="font-normal opacity-75"
            >
              ini tiket konser
            </Typography>
            </div>
            <div className="flex flex-col">
            <Typography color="blue-gray" className="font-medium">
              Harga
            </Typography>
            <Typography
              variant="small"
              color="gray"
              className="font-normal opacity-75 text-center"
            >
              Rp 95.000
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
              1
            </Typography>
            </div>
          </div>
        </div>
        <div className="items-center h-100 justify-center bg-gray-100">
          <div className="p-4 bg-white rounded shadow-md">
            <div className="space-y-2">
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
      </div>
      <div>
        <label className="text-gray-700">Metode Pembayaran:</label>
        <div className="flex space-x-2 mt-1">
          <button
            onClick={() => handlePaymentMethodChange("creditCard")}
            className={`py-2 px-4 rounded ${
              paymentMethod === "creditCard"
                ? "bg-gray-600 text-white"
                : "bg-white text-gray-600 border border-gray-600"
            }`}
          >
            Kartu Kredit
          </button>
          <button
            onClick={() => handlePaymentMethodChange("bankTransfer")}
            className={`py-2 px-4 rounded ${
              paymentMethod === "bankTransfer"
                ? "bg-gray-600 text-white"
                : "bg-white text-gray-600 border border-gray-600"
            }`}
          >
            Transfer Bank
          </button>
          <button
            onClick={() => handlePaymentMethodChange("digitalWallet")}
            className={`py-2 px-4 rounded ${
              paymentMethod === "digitalWallet"
                ? "bg-gray-600 text-white"
                : "bg-white text-gray-600 border border-gray-600"
            }`}
          >
            Dompet Digital
          </button>
          <button
            onClick={() => handlePaymentMethodChange("cod")}
            className={`py-2 px-4 rounded ${
              paymentMethod === "cod"
                ? "bg-gray-600 text-white"
                : "bg-white text-gray-600 border border-gray-600"
            }`}
          >
            Bayar di Tempat
          </button>
        </div>
        <div>
          <button className="w-full py-2 px-4 bg-gray-600 text-white rounded hover:bg-blue-700 mt-4">
            Bayar
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;
