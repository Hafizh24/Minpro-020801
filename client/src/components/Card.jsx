import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Avatar,
} from "@material-tailwind/react";

export function MyCard({ item }) {
  return (
    <Card className=" mt-16 w-1/5">
      <CardHeader color="blue-gray" className="relative rounded-sm">
        <img src={item.url} alt="" />
      </CardHeader>
      <CardBody className="mb-10">
        <Typography className="font-sans tracking-widest  text-blue-gray-900 font-semibold">
          {item.title}
        </Typography>
        <Typography className="font-sans text-sm mb-4">05 oct 2023</Typography>
        <Typography className="font-sans text-sm text-blue-gray-900 font-semibold">
          Rp 175.000
        </Typography>
      </CardBody>
      <CardFooter className="pt-4 border-t">
        <button>
          <Avatar alt="" size="sm" className=" bg-blue-gray-200 mr-2" />
          EO name
        </button>
      </CardFooter>
    </Card>
  );
}
