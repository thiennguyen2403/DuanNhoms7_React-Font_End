import { useState } from "react";
import { useParams } from "react-router-dom";
import instance from "../api";

const ResetPasswordForm = () => {
  const { id } = useParams<{ id: string }>();
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (newPassword !== confirmPassword) {
      setError("Mật khẩu mới không khớp");
      return;
    }

    try {
      const response = await instance.post(`/users/reset/${id}`, {
        newPassword,
      });

      if (response.status === 200) {
        setSuccess("Mật khẩu đã được thay đổi thành công");
        setNewPassword("");
        setConfirmPassword("");
      } else {
        const errorMessage =
          typeof response.data === "string"
            ? response.data
            : JSON.stringify(response.data);
        setError(`Lỗi: ${errorMessage}`);
      }
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      const errorMessage = err.response?.data
        ? JSON.stringify(err.response.data)
        : "Đã xảy ra lỗi khi thay đổi mật khẩu";
      setError(errorMessage);
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h2 className="card-title mb-4">Đổi Mật Khẩu</h2>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="newPassword" className="form-label">
                    Mật Khẩu Mới
                  </label>
                  <input
                    type="password"
                    id="newPassword"
                    className="form-control"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="confirmPassword" className="form-label">
                    Xác Nhận Mật Khẩu Mới
                  </label>
                  <input
                    type="password"
                    id="confirmPassword"
                    className="form-control"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                  />
                </div>
                {error && <div className="alert alert-danger">{error}</div>}
                {success && (
                  <div className="alert alert-success">{success}</div>
                )}
                <button type="submit" className="btn btn-primary">
                  Đổi Mật Khẩu
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetPasswordForm;
