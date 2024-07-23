import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { loginSchema, registerSchema } from "../utils/valtidation";
import { User } from "../interfaces/User";
import { instance } from "../api";
import { useNavigate } from "react-router-dom";

type Props = {
  isLogin?: boolean;
};

const AuthForm = ({ isLogin }: Props) => {
  const {
    handleSubmit,
    formState: { errors },
    register,
  } = useForm<User>({
    resolver: zodResolver(isLogin ? loginSchema : registerSchema),
  });

  const nav = useNavigate();

  const onSubmit = async (data: User) => {
    try {
      if (isLogin) {
        // logic login
        const res = await instance.post(`/login`, data);
        localStorage.setItem("user", JSON.stringify(res.data.user));
        localStorage.setItem("accessToken", res.data.accessToken);
        nav("/");
      } else {
        // logic register
        await instance.post(`/register`, {
          email: data.email,
          password: data.password,
        });
        nav("/login");
      }
    } catch (error: any) {
      alert(error.response.data || "Error!");
    }

    // logic xu ly chung
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h1>{isLogin ? "Login" : "Register"}</h1>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">
          Email
        </label>
        <input
          type="email"
          className="form-control"
          {...register("email", { required: true })}
        />
        {errors.email && (
          <span className="text-danger">{errors.email.message}</span>
        )}
      </div>

      <div className="mb-3">
        <label htmlFor="password" className="form-label">
          PassWord
        </label>
        <input
          type="password"
          className="form-control"
          {...register("password", { required: true })}
        />
        {errors.password && (
          <span className="text-danger">{errors.password.message}</span>
        )}
      </div>

      {!isLogin && (
        <div className="mb-3">
          <label htmlFor="confirmPass" className="form-label">
            Confirm Password
          </label>
          <input
            type="password"
            className="form-control"
            {...register("confirmPass", { required: true })}
          />
          {errors.confirmPass && (
            <span className="text-danger">{errors.confirmPass.message}</span>
          )}
        </div>
      )}
      <button className="btn btn-success">
        {isLogin ? "Login" : "Register"}
      </button>
    </form>
  );
};

export default AuthForm;
