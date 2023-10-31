import { Card, Input, Checkbox, Button, Typography } from "@material-tailwind/react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
// import { setData } from '../redux/usersSlice';


const RegisterSchema = Yup.object({
  name: Yup.string().required("name is required"),
  email: Yup.string().required("Email is required").email("Invalid email format"),
  password: Yup.string().min(8, "Minimum 8 characters"),
});

export const Register = () => {
  // const dispatch = useDispatch();
  //   const navigate = useNavigate();
  //   const toast = useToast();
  //   const [showErrorOutline, setShowErrorOutline] = useState(false);
  //   const [username, setUsername] = useState(''); // State untuk menyimpan nama pengguna
  //   const [referralCode, setReferralCode] = useState('');
  //   const data_referral = useRef();


  const handleSubmit = async (data) => {
    try {
      console.log(data);
      // await axios.post("http://localhost:2000/users", data);
    } catch (err) {
      console.log(err);
    }
  };
    //   const handleSubmitRegister = async (data) =>{
    //     data.referral = referralCode;
    //     try{
    //         const response = await axios.post("http://localhost:2000/users", data);
    //     }catch(err){
    //         console.log(err);
    //     }
    // };

  // const referralCodeGenerator = () => {
  //   if (data_referral.current.value.length >= 2) {
  //     const words = data_referral.current.value.split(' ')
  //     const userChars = words
  //     .map((word) => word.charAt(0).toUpperCase()).join('');
  //     const randomChars = Math.random().toString(36).substring(2, 6).toUpperCase();
  //     const generatedCode = `${userChars}${randomChars}`;
  //     setReferralCode(generatedCode);
  //   } else {
  //     alert('name must at least contain 2 characters');
  //   }
  // };

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      // referral: referralCodeGenerator()
    },
    validationSchema: RegisterSchema,
    onSubmit: (values, action) => {
      // console.log(values);
      handleSubmit(values);
      action.resetForm();
    },
  });

  return (
    <>
    <div className="bg-gray-200 h-screen flex items-center justify-center">
    <div className="flex items-center justify-center">
      <Card color="transparent" shadow={false}>
        <Typography variant="h4" color="blue-gray">
          Sign Up
        </Typography>
        <Typography color="gray" className="mt-1 font-normal">
          Enter your details to register.
        </Typography>
        <form
          onSubmit={formik.handleSubmit}
          className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
          <div className="mb-4 flex flex-col gap-6">
            <Input
              size="lg"
              label="Name"
              name="name"
              onChange={formik.handleChange}
              value={formik.values.name}
              error={formik.touched.name && Boolean(formik.errors.name)}
            />
            {formik.touched.name && formik.errors.name ? (
              <div className=" text-red-900">{formik.errors.name}</div>
            ) : null}
            <Input
              size="lg"
              label="Email"
              name="email"
              onChange={formik.handleChange}
              value={formik.values.email}
              error={formik.touched.email && Boolean(formik.errors.email)}
            />
            {formik.touched.email && formik.errors.email ? (
              <div className=" text-red-900">{formik.errors.email}</div>
            ) : null}
            <Input
              type="password"
              size="lg"
              label="Password"
              name="password"

              onChange={formik.handleChange}
              value={formik.values.password}
              error={formik.touched.password && Boolean(formik.errors.password)}
            />
            {formik.touched.password && formik.errors.password ? (
              <div className=" text-red-900">{formik.errors.password}</div>
            ) : null}
            <Input
             size="lg"
             label="Referral"
             name="referral"
            />
          </div>
          <Checkbox
            label={
              <Typography
                variant="small"
                color="gray"
                className="flex items-center font-normal">
                I agree with the
                <a href="#" className="font-medium transition-colors hover:text-gray-900">
                  &nbsp;Terms and Conditions
                </a>
              </Typography>
            }
            containerProps={{ className: "-ml-2.5" }}
          />
          <Button type="submit" className="mt-6" fullWidth>
            Register
          </Button>
          <Typography color="gray" className="mt-4 text-center font-normal">
            Already have an account?{" "}
            <a href="/signin" className="font-medium hover:text-gray-900">
             Sign In
            </a>
          </Typography>
        </form>
      </Card>
    </div>
    </div>
    </>
  );
};