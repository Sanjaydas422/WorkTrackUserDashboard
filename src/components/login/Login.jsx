import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../api/api";
import "./Login.css";
import { toast } from "react-toastify";


const Login = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((p) => ({ ...p, [name]: value }));
  };
const handleSubmit = async (e) => {
  e.preventDefault();

  if (!formData.email || !formData.password) {
    toast.error("Please fill both fields");
    return;
  }

  try {
    setLoading(true);

    // 🔑 clear old tokens
    localStorage.removeItem("access");
    localStorage.removeItem("refresh");

    const res = await api.post(
      "/admin_app/user_login",
      formData,
      { skipAuth: true }
    );

    localStorage.setItem("access", res.data.access);
    localStorage.setItem("refresh", res.data.refresh);

    toast.success("Login successful");

    // ✅ CORRECT REDIRECT
    navigate("/", { replace: true });

  } catch (err) {
    const msg =
      err.response?.data?.error ||
      err.response?.data?.detail ||
      "Login failed";
    toast.error(msg);
  } finally {
    setLoading(false);
  }
};


  return (
    <div className="signupmain">
      <div className="signupcontainer">

        <div className="signup-left-section">
          <div className="signup-logo-box">
            <img
              className="tron-logo"
              src="Component 180.png"
              alt="Tron Logo"
            />
          </div>
        </div>

        <div className="signup-right-section">
          <div className="signup-form-card">

            <p className="signupname">Login</p>

            <form onSubmit={handleSubmit}>
              <label className="signup-label">Email</label>
              <input
                name="email"
                type="email"
                className="signup-input"
                value={formData.email}
                onChange={handleChange}
              />

              <label className="signup-label">Password</label>
              <input
                name="password"
                type="password"
                className="signup-input password-input"
                value={formData.password}
                onChange={handleChange}
              />

              <button
                className="signupbutton"
                type="submit"
                disabled={loading}
              >
                {loading ? "Logging in..." : "Login"}
              </button>
            </form>

          </div>
        </div>

      </div>
    </div>
  );
};

export default Login;
