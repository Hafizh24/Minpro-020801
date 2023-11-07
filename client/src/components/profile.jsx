import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Tooltip,
  Input
} from "@material-tailwind/react";

import { UseSelector, useSelector } from "react-redux/es/hooks/useSelector";

export const ProfileCard = () => {
  const user = useSelector((state) => state.user.value);
  console.log(user);
  return (
    <>
    <Input variant="static" label='static' placeholder="Static"></Input>
    <div className="flex w-screen h-screen items-start justify-end">
      <Card className="w-96 shadow-none border-red-200 border">
        <CardHeader
          floated={false}
          className="h-80 flex flex-col items-center justify-center"
        >
          {/* <div className="w-40 h-40 bg-red-300 rounded-full"></div> */}
          <img
            className="w-40 h-40 rounded-full object-cover object-center"
            src="https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80"
            alt="nature image"
          />
          <Typography variant="h4" color="blue-gray" className="my-4">
            {user.name}
          </Typography>
          <Typography
            color="blue-gray"
            className="font-medium my-4"
            textGradient
          >
            {user.Referral?.code}
          </Typography>
          <Typography
            color="blue-gray"
            className="font-medium my-4"
            textGradient
          >
            {user.points}
          </Typography>
        </CardHeader>
      </Card>
    </div>
    </>
  );
};
