import {
    Menu,
    MenuHandler,
    MenuList,
    MenuItem,
    Button,
  } from "@material-tailwind/react";
   
  export function MenuDefault() {
    return (
      <Menu>
        <MenuHandler>
          <Button>Avatar</Button>
        </MenuHandler>
        <MenuList>
          <MenuItem>My Profile</MenuItem>
          <MenuItem>Log Out</MenuItem>
          <MenuItem> Home </MenuItem>
        </MenuList>
      </Menu>
    );
  }