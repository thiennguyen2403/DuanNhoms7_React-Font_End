import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAuth } from "../context/AuthContext";

import { loginSchema, registerSchema } from "../utils/valtidation";
import { User } from "../interfaces/User";
import axios from "axios";
import instance from "../api";
import { useNavigate } from "react-router-dom";

type Props = {
  isLogin?: boolean;
};
const AuthForm = ({ isLogin }: Props) => {
  const { login: contextLogin } = useAuth();
  const nav = useNavigate();
  const {
    handleSubmit,
    formState: { errors },
    register,
  } = useForm<User>({
    resolver: zodResolver(isLogin ? loginSchema : registerSchema),
  });
  const onSubmit = async (data: User) => {
    try {
      if (isLogin) {
        const res = await instance.post(`/users/login`, data);
        contextLogin(res.data.accessToken, res.data.user);
      } else {
        const res = await instance.post(`/users/register`, {
          email: data.email,
          password: data.password,
         
        });
        alert(res.data.message);
        nav("/login");
      }
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        console.log(error.response?.data);
        alert(error.response?.data.message || "Error!");
      } else if (error instanceof Error) {
        alert(error.message);
      } else {
        alert("An unexpected error occurred.");
      }
    }
  };

  return (
    <section className="section-login padding-tb-100">
      <div className="container">
        <div className="row d-none">
          <div className="col-lg-12">
            <div
              className="mb-30"
              data-aos="fade-up"
              data-aos-duration="2000"
              data-aos-delay="400"
            >
              <div className="cr-banner">
                <h1>{isLogin ? "Login" : "Register"}</h1>
              </div>
              <div className="cr-banner-sub-title">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore lacus vel facilisis.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div
              className="cr-login"
              data-aos="fade-up"
              data-aos-duration="2000"
              data-aos-delay="400"
            >
              <div className="form-logo">
                <h2> {isLogin ? "Login" : "Register"}</h2>
              </div>
              <form
                className="cr-content-form"
                onSubmit={handleSubmit(onSubmit)}
              >
                <div className="form-group">
                  <label>Email Address*</label>
                  <input
                    type="email"
                    className="form-control"
                    {...register("email", { required: true })}
                  />
                  {errors.email && (
                    <span className="text-danger">{errors.email.message}</span>
                  )}
                </div>
                <div className="form-group">
                  <label>Password*</label>
                  <input
                    type="password"
                    className="form-control"
                    {...register("password", { required: true })}
                  />
                  {errors.password && (
                    <span className="text-danger">
                      {errors.password.message}
                    </span>
                  )}
                </div>
                {!isLogin && (
                  <div className="form-group">
                    <label htmlFor="confirmPass" className="form-label">
                      Confirm Password
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      {...register("confirmPass", { required: true })}
                    />
                    {errors.confirmPass && (
                      <span className="text-danger">
                        {errors.confirmPass.message}
                      </span>
                    )}
                  </div>
                )}
                <div>
                  <button className="btn btn-success">
                    {isLogin ? "Login" : "Register"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuthForm;
