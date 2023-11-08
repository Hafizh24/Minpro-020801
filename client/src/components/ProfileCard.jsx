import { Card, CardHeader, Typography } from "@material-tailwind/react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { Sidebar2 } from "./Sidebar2";

export const ProfileCard = () => {
  const user = useSelector((state) => state.user.value);
  console.log(user);
  return (
    <>
      <div>
        <a href="/">
          <h1 className="text-orange-400 ml-6 mt-6 font-bold text-left text-4xl italic mr-8 font-roboto">
            Karcis
          </h1>
        </a>
      </div>
      <div className="flex flex-cols-2">
        <div>
            <Sidebar2 />
        </div>
        <div className="flex item-center justify-center mt-10">
          <Card className="w-96 shadow-none border-orange-400 border h-96 border-double">
            <CardHeader
              floated={false}
              className="flex flex-col items-center justify-center h-96"
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
                className="font-medium my-4 un"
                textGradient
              >
              Your Referral: {user.Referral?.code}
              </Typography>
              <Typography
                color="blue-gray"
                className="font-medium my-4"
                textGradient
              >
                Your Points: {user.points}
              </Typography>
            </CardHeader>
          </Card>
        </div>
      </div>
    </>
  );
};
