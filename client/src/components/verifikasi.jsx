import React, { useState } from "react";
import { Button, Dialog, DialogBody, DialogFooter, DialogHeader } from "@material-tailwind/react";


export const Verification = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(!open);

  return (
    <>
      <Dialog open={open} handler={handleOpen}>
        <DialogHeader> 
            Now Let's Verify Your Account!
        </DialogHeader>
        <DialogBody>
            Hello There! Thanks for signing up with us.
            In order to use your Karcis account, you have to verify your email address first.
        </DialogBody>
        <DialogFooter>
            <Button
            variant="text"
            color="red"
            onClick={handleOpen}
            className="mr-1 font-sans">
                <span> Cancel </span>
            </Button>
            <Button
            variant= "gradient"
            color="orange"
            className=""> Verify </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
};
