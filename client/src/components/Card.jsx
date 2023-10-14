import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Avatar,
} from "@material-tailwind/react";

export function EventsCard(props) {
  const { children } = props;
  return <Card className=" mt-16 w-1/5">{children}</Card>;
}

const Header = (props) => {
  const { image } = props;
  return (
    <CardHeader color="blue-gray" className="relative rounded-sm">
      <img src={image} alt="" />
    </CardHeader>
  );
};

const Body = (props) => {
  const { name, price } = props;
  return (
    <CardBody className="mb-10">
      <Typography className="font-sans tracking-widest  text-blue-gray-900 font-semibold">
        {name}
      </Typography>
      <Typography className="font-sans text-sm mb-4">05 oct 2023</Typography>
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
