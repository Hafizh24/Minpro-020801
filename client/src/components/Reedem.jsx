import React from "react";
import { Input, Button } from "@material-tailwind/react";
 
export function InputWithButton() {
  const [code, setCode] = React.useState("");
  const onChange = ({ target }) => setCode(target.value);
 
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
      >
        Reedem
      </Button>
    </div>
  );
}