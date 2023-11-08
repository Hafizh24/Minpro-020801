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
import { useDispatch } from "react-redux";
import { addData } from "../redux/transactionSlice";
import { useNavigate } from "react-router-dom";

const AddToCart = () => {
  const [data, setData] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleBeliTiket = () => {
    dispatch(addData(totalPrice));
    navigate("/payment");
  };

  const fetchApi = async () => {
    try {
      await axios
        .get(`http://localhost:2000/data?&_limit=1`)
        // /posts?_page=7&_limit=20
        .then((response) => {
          setData(response.data);
        });
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchApi();
  }, []);

  return (
    <div className="flex flex-col items-center gap-2 px-4 py-4 laptop:flex-row justify-center">
      <div className="flex flex-col p-2 gap-4">
        {data.map((item) => (
          <TicketsCard key={item.id}>
            <TicketsCard.Body name={item.name} />
            <TicketsCard.Footer
              price={item.price}
              setTotalPrice={setTotalPrice}
            />
          </TicketsCard>
        ))}
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
                className="px-4 py-2 text-white bg-gray-500 rounded hover:bg-blue-600 focus:outline-none"
                onClick={handleBeliTiket}
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
