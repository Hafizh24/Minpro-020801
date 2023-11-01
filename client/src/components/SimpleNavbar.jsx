import { Navbar, Typography } from "@material-tailwind/react";

const SimpleNavbar = () => {
  return (
    <>
      <Navbar
        shadow={false}
        fullWidth={true}
        className="bg-primary-500 px-6 py-3"
      >
        <div className="flex items-center justify-between text-orange-400">
          <Typography
            as="a"
            href="/"
            variant="h3"
            className="mr-4 cursor-pointer py-1.5 font-bold italic"
          >
            Karcis
          </Typography>
        </div>
      </Navbar>
    </>
  );
};

export default SimpleNavbar;
