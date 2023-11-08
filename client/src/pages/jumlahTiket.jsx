import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import React, { useEffect, useState } from "react";
import { TicketsCard } from "../components/CardTicket";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addCount, addData } from "../redux/transactionSlice";
import { useNavigate } from "react-router-dom";

const AddToCart = () => {
  const [data, setData] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [count, setCount] = useState(0);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const event = useSelector((state) => state.event.data);
  console.log(event);
  const handleBeliTiket = () => {
    dispatch(addData(totalPrice));
    dispatch(addCount(count));
    navigate("/payment");
  };

  useEffect(() => {}, [event]);

  return (
    <div className="flex flex-col items-center gap-2 px-4 py-4 laptop:flex-row justify-center">
      <div className="flex flex-col p-2 gap-4">
        <TicketsCard key={event.id}>
          <TicketsCard.Body name={event.name} />
          <TicketsCard.Footer
            price={event.Ticket.price}
            setTotalPrice={setTotalPrice}
            count={count}
            setCount={setCount}
          />
        </TicketsCard>
      </div>
      <div className="gap-2 px-4 py-2">
        <Card className="border-solid border-2 border-gray-300  w-80">
          <CardBody>
            <Typography color="blue-gray" className="font-medium">
              Harap Memilih Tiket Terlebih Dahulu
            </Typography>
          </CardBody>
          <CardFooter className="pt-0">
            <div className="mb-2 flex flex-col">
              <div className="mt-8 flex ">
                <Typography className="text-lg text-gray-500">
                  Jumlah harga :{" "}
                </Typography>
                <Typography className="text-lg text-gray-500">
                  {totalPrice}
                </Typography>
              </div>
              <Button
                className={`px-4 py-2 text-white ${
                  count > 0 ? "bg-gray-500 hover:bg-blue-600" : "bg-gray-300"
                } rounded focus:outline-none`}
                onClick={handleBeliTiket}
                disabled={count === 0}
              >
                Beli Tiket
              </Button>
            </div>
            <div />
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default AddToCart;
