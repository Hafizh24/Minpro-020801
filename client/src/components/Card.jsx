import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Avatar,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";

export function EventsCard(props) {
  const { children } = props;
  return <Card className=" mt-16 mx-3">{children}</Card>;
}

const Header = (props) => {
  const { image, id } = props;
  return (
    <CardHeader color="blue-gray" className="relative rounded-sm">
      <Link to={`/event/${id}`}>
        <img src={image} alt="" />
      </Link>
    </CardHeader>
  );
};

const Body = (props) => {
  const { name, price, date } = props;
  return (
    <CardBody className="mb-10">
      <Typography className="font-sans tracking-widest  text-blue-gray-900 font-semibold">
        {name}
      </Typography>
      <Typography className="font-sans text-sm mb-4">{date}</Typography>
      <Typography className="font-sans text-sm text-blue-gray-900 font-semibold">
        {price}
      </Typography>
    </CardBody>
  );
};

const Footer = () => {
  return (
    <CardFooter className="pt-4 border-t">
      <button className="flex items-center">
        <Avatar alt="" size="sm" className=" bg-blue-gray-200 mr-2" />
        EO name
      </button>
    </CardFooter>
  );
};

EventsCard.Header = Header;
EventsCard.Body = Body;
EventsCard.Footer = Footer;
