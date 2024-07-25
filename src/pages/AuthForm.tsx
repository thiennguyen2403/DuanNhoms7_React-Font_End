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
      console.log("Submitting data:", data); // Kiểm tra dữ liệu submit

      if (isLogin) {
        // Đăng nhập
        const res = await instance.post(`/login`, data);
        console.log("Login response:", res); // Kiểm tra phản hồi đăng nhập
        localStorage.setItem("user", JSON.stringify(res.data.user));
        localStorage.setItem("accessToken", res.data.accessToken);
        nav("/");
      } else {
        // Đăng ký
        const res = await instance.post(`/register`, {
          email: data.email,
          password: data.password,
        });
        alert('Tạo tài khoản thành công')
        console.log("Registration response:", res); // Kiểm tra phản hồi đăng ký
        nav("/login");
      }
    } catch (error: any) {
      console.error("Error submitting form:", error); // Kiểm tra lỗi
      alert(error.response?.data || "Error!");
    }
  };

  return (
    <section className="section-login padding-tb-100">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="cr-login" data-aos="fade-up" data-aos-duration="2000" data-aos-delay="400">
              <h2>{isLogin ? "Login" : "Register"}</h2>
              <form className="cr-content-form" onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group">
                  <label>Email Address*</label>
                  <input type="email" className="form-control" {...register("email", { required: true })} />
                  {errors.email && <span className="text-danger">{errors.email.message}</span>}
                </div>
                <div className="form-group">
                  <label>Password*</label>
                  <input type="password" className="form-control" {...register("password", { required: true })} />
                  {errors.password && <span className="text-danger">{errors.password.message}</span>}
                </div>

                <br />
                <div className="login-buttons">
                  <button type="submit" className="btn btn-success">
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
  