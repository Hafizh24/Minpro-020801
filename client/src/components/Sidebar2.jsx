import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
} from "@material-tailwind/react";
import {
  UserCircleIcon,
  Cog6ToothIcon,
  PowerIcon,
} from "@heroicons/react/24/solid";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import React, { useEffect } from "react";

export function Sidebar2() {
  const user = useSelector((state) => state.user.value);
  const id = user.id;
  const checkUser = () => {
    if (user) {
      // console.log(user);
      return true;
    } else {
      // console.log(user);
      return false;
    }
  };
  useEffect(() => {
    checkUser();
  });
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
    window.location.reload();
  };
  return (
    <Card className="h-[calc(100vh-2rem)] w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5">
      <div className="mb-2 p-4">
        <Typography variant="h5" color="blue-gray">
          Hello {user.name}!
        </Typography>
      </div>
      <List>
        <ListItem>
          <ListItemPrefix>
            <UserCircleIcon className="h-5 w-5" />
          </ListItemPrefix>
          <a href="/profile"> Profile </a>
        </ListItem>
        <ListItem>
          <ListItemPrefix>
            <Cog6ToothIcon className="h-5 w-5" />
          </ListItemPrefix>
          <a href="/profile-setting"> Settings </a>
        </ListItem>
        <ListItem onClick={handleLogout}>
          <ListItemPrefix >
            <PowerIcon className="h-5 w-5" />
          </ListItemPrefix>
          Log Out
        </ListItem>
      </List>
    </Card>
  );
}
