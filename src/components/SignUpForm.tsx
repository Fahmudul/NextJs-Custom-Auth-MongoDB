import axios from "axios";
import { useRouter } from "next/navigation";
import React from "react";
import toast from "react-hot-toast";
import { LuEye, LuEyeOff } from "react-icons/lu";

interface SignUpFormProps {
  showSignUpForm: boolean;
  setShowSignUpForm: (value: boolean) => void;
}
const SignUpForm: React.FC<SignUpFormProps> = ({
  showSignUpForm,
  setShowSignUpForm,
}) => {
  const router = useRouter();
  const [showPassword, setShowPassword] = React.useState(false);
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Handle form submission
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_]).{1,}$/;
    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);
    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      password: formData.get("password") as string,
    };
    // Password validation
    if (data.password.length < 8) {
      alert("Password must be at least 8 characters long");
      return;
    }
    if (regex.test(data.password) === false) {
      alert(
        "Password must contain at least one uppercase letter, one lowercase letter, one number and one special character"
      );
      return;
    }

    // Send data to server
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/auth/SignUp`,
      data
    );
    if (response.data.status === 200) {
      toast.success(response?.data?.message);
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    }
  };
  return (
    <div className={`c_container ${showSignUpForm ? "block" : "hidden"}`}>
      <div className="c_heading">Sign In</div>
      <form action="" className="c_form" onSubmit={handleSubmit}>
        <input
          required
          className="input"
          type="text"
          name="name"
          placeholder="Your name"
        />
        <input
          required
          className="input"
          type="email"
          name="email"
          placeholder="E-mail"
        />
        <div className="relative">
          <input
            required
            className="input"
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="Password"
          />
          {showPassword ? (
            <LuEyeOff
              className="absolute right-5 top-8"
              onClick={() => setShowPassword(!showPassword)}
            />
          ) : (
            <LuEye
              className="absolute right-5 top-8"
              onClick={() => setShowPassword(!showPassword)}
            />
          )}
        </div>
        <input className="login-button" type="submit" defaultValue="Sign In" />
        <div className="text-xs text-blue-400 text-center w-full">
          Already have an account ?{" "}
          <span
            className="cursor-pointer hover:underline text-blue-400 font-semibold"
            onClick={() => setShowSignUpForm(false)}
          >
            Sign In
          </span>
        </div>
      </form>
      <div className="social-account-container">
        <span className="title">Or Sign in with</span>
        <div className="social-accounts">
          <button className="social-button google">
            <svg
              className="svg"
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 488 512"
            >
              <path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z" />
            </svg>
          </button>
          <button className="social-button apple">
            <svg
              className="svg"
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 384 512"
            >
              <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
            </svg>
          </button>
          <button className="social-button twitter">
            <svg
              className="svg"
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 512 512"
            >
              <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
            </svg>
          </button>
        </div>
      </div>
      <span className="agreement">
        <a href="#">Learn user licence agreement</a>
      </span>
    </div>
  );
};

export default SignUpForm;
