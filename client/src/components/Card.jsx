import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Avatar,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
import banner from "../assets/banner-event.jpg";

export function EventsCard(props) {
  const { children } = props;
  return <Card className=" mx-3 mt-16">{children}</Card>;
}

const Header = (props) => {
  const { image, id } = props;

  return (
    <CardHeader color="blue-gray" className="relative rounded-sm">
      <Link to={`/event/${id}`}>
        <img
          src={image ? `http://localhost:2000/${image}` : banner}
          alt=""
          className="h-[200px] w-[500px]"
        />
      </Link>
    </CardHeader>
  );
};

const Body = (props) => {
  const { name, price, date } = props;
  const newDate = new Date(date).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  console.log(price);
  let newPrice;
  if (price) {
    newPrice = price.toLocaleString("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    });
    if (price == 0) {
      newPrice = "free";
    }
  }

  console.log(newPrice);

  return (
    <CardBody className="mb-10">
      <Typography className="font-sans font-semibold  tracking-widest text-blue-gray-900">
        {name}
      </Typography>
      <Typography className="mb-4 font-sans text-sm">{newDate}</Typography>
      <Typography
        className={
          newPrice
            ? "font-sans text-sm font-semibold text-blue-gray-900"
            : " font-sans text-base font-bold text-blue-gray-900"
        }
      >
        {newPrice ? newPrice : "free"}
      </Typography>
    </CardBody>
  );
};

const Footer = () => {
  return (
    <CardFooter className="border-t pt-4">
      <button className="flex items-center">
        {/* <Avatar alt="" size="sm" className=" bg-blue-gray-200 mr-2" /> */}
        <Avatar
          alt=""
          size="sm"
          src="https://source.unsplash.com/random/900×700/?people&1"
          className="mr-2"
        />
        EO name
      </button>
    </CardFooter>
  );
};

EventsCard.Header = Header;
EventsCard.Body = Body;
EventsCard.Footer = Footer;
