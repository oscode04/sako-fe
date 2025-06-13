// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import ParticleBg from "./ParticleBg";
import Swal from "sweetalert2";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { useState } from "react";

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  const handleLogin = async (e) => {
  e.preventDefault();

  try {
    const response = await fetch("https://hapi.sakoo.my.id/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: form.email,
        password: form.password,
      }),
    });

    const data = await response.json();

    if (response.ok) {
      // Simpan token (jika ada)
      localStorage.setItem("token", data.token);

      // Simpan user ke context
      login({ name: data.name, email: form.email });

      Swal.fire({
        icon: "success",
        title: "Berhasil Masuk",
        text: `Selamat datang kembali, ${data.name}!`,
        confirmButtonColor: "#204842",
      }).then(() => navigate("/"));
    } else {
      throw new Error(data.message || "Login gagal");
    }
  } catch (err) {
    Swal.fire({
      icon: "error",
      title: "Login Gagal",
      text: err.message || "Terjadi kesalahan. Silakan coba lagi.",
    });
  }
};


  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <ParticleBg />

      {/* Login Container */}
      <motion.div
        initial={{ y: "-100vh" }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 50 }}
        className="relative bg-white p-8 rounded-2xl shadow-lg z-10 w-[320px] md:w-[420px] lg:w-[500px] h-[620px]"
      >
        <h1 className="flex items-center gap-2 text-2xl font-bold text-[#204842] mb-2">
          <Link to="/">Sakoo</Link>
        </h1>
        <h2 className="text-xl font-bold text-black mb-1">
          Yuk Cek Finansial kamu!
        </h2>
        <p className="text-sm text-gray-600 mb-5">
          Baru di sini?{" "}
          <Link to="/register" className="text-[#0E4B40] font-medium">
            Buat akun
          </Link>
        </p>

        <form onSubmit={handleLogin}>
          {/* Email */}
          <div className="mb-3 text-left">
            <label
              htmlFor="email"
              className="block mb-1 text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="Email"
              required
              value={form.email}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-[10px] focus:outline-none focus:ring-2 focus:ring-[#0E4B40]"
            />
          </div>

          {/* Password */}
          <div className="mb-1 text-left">
            <label
              htmlFor="password"
              className="block mb-1 text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              placeholder="Password"
              required
              value={form.password}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-[10px] focus:outline-none focus:ring-2 focus:ring-[#0E4B40]"
            />
          </div>

          <div className="text-right mb-5">
            <a href="#" className="text-sm text-[#0E4B40] font-medium">
              Lupa password?
            </a>
          </div>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            initial={{ x: "-100vw" }}
            animate={{ x: 0 }}
            transition={{ type: "spring", stiffness: 50 }}
            type="submit"
            className="w-full bg-[#BBF49D] text-[#204842] p-3 rounded-full font-semibold cursor-pointer"
          >
            Masuk
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
};

export default Login;
