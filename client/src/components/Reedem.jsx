import React from "react";
import { Input, Button } from "@material-tailwind/react";
import axios from "axios";

 
export function InputWithButton() {
  const [code, setCode] = React.useState("");
  const onChange = ({ target }) => setCode(target.value);
 
  const handlePromo = async (data) => {
    try {
      await axios.get("http://localhost:2000/promotion")
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className="relative flex w-full max-w-[24rem]">
      <Input
        type="Code"
        label="Your Code"
        value={code}
        onChange={onChange}
        className="pr-20"
        containerProps={{
          className: "min-w-0",
        }}
      />
      <Button
        size="sm"
        color={code ? "gray" : "blue-gray"}
        disabled={!code}
        className="!absolute right-1 top-1 rounded"
        onSubmit={handlePromo}
      >
        Reedem
      </Button>
    </div>
  );
}