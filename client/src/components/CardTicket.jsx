import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { useState } from "react";

export function TicketsCard(props) {
  const { children } = props;
  return (
    <Card className="border-solid border-2 border-gray-500 w-80">
      {children}
    </Card>
  );
}

const Body = (props) => {
  const { name } = props;
  return (
    <CardBody>
      <Typography color="blue-gray" className="font-medium">
        {name}
      </Typography>
      <Typography color="blue-gray" className="font-medium">
        tanggal tiket
      </Typography>
    </CardBody>
  );
};

const Footer = (props) => {
  const { price, setTotalPrice } = props;
  const [count, setCount] = useState(0);

  const addTicket = () => {
    setCount(count + 1);
    setTotalPrice((prevTotal) => prevTotal + price);
  };

  const removeTicket = () => {
    if (count > 0) {
      setCount(count - 1);
      setTotalPrice((prevTotal) => prevTotal - price);
    }
  };

  return (
    <CardFooter className="border-t-2 justify-center pt-0 relative">
      <div className="mb-2 flex items-center justify-between">
        <div className="mt-8">
          <Typography color="blue-gray" className="font-medium">
            {price}
          </Typography>
        </div>
        <div className="flex gap-4">
          <Button onClick={removeTicket} className="px-4 py-2 text-white bg-gray-500 rounded hover:bg-blue-600 focus:outline-none">
            -
          </Button>
          <h2>{count}</h2>

          <Button onClick={addTicket} className="px-4 py-2 text-white bg-gray-500 rounded hover:bg-blue-600 focus:outline-none">
            +
          </Button>
        </div>
      </div>
      <div />
    </CardFooter>
  );
};

TicketsCard.Body = Body;
TicketsCard.Footer = Footer;
