import { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import Swal from "sweetalert2";
import ParticleBg from "./ParticleBg";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    nama: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (form.password !== form.confirmPassword) {
      return Swal.fire({
        icon: "error",
        title: "Gagal",
        text: "Password dan konfirmasi password tidak cocok",
      });
    }

    try {
      const response = await fetch("https://hapi.sakoo.my.id/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: form.nama,
          email: form.email,
          password: form.password,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        Swal.fire({
          icon: "success",
          title: "Berhasil!",
          text: "Akun berhasil didaftarkan!",
          confirmButtonColor: "#204842",
        }).then(() => {
            navigate("/login"); // ⬅️ redirect ke login
          });;
        setForm({
          nama: "",
          email: "",
          password: "",
          confirmPassword: "",
        });
      } else {
        throw new Error(data.message || "Registrasi gagal");
      }
    } catch (err) {
      Swal.fire({
        icon: "error",
        title: "Gagal",
        text: err.message || "Terjadi kesalahan. Coba lagi nanti.",
      });
    }
  };

  // Simulasi API call (ganti dengan fetch kalau pakai API asli)
  const fakeRegister = (form) =>
    new Promise((resolve, reject) => {
      setTimeout(() => {
        if (form.email.includes("@")) {
          resolve({ success: true });
        } else {
          reject(new Error("Email tidak valid"));
        }
      }, 1000);
    });

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <ParticleBg />

      <motion.div
        initial={{ y: "-100vh" }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 50 }}
        className="relative bg-white p-8 rounded-2xl shadow-lg z-10 w-[320px] md:w-[420px] lg:w-[500px] h-fit"
      >
        <h1 className="text-2xl font-bold text-[#204842] mb-2">
          <Link to="/">Sakoo</Link>
        </h1>
        <h2 className="w-[80%] text-xl font-bold text-black mb-1">
          Daftar! Mulai cek kesehatan finansialmu
        </h2>
        <p className="text-sm text-gray-600 mb-10">
          Sudah punya akun?{" "}
          <Link to="/login" className="text-[#0E4B40] font-medium">
            Masuk
          </Link>
        </p>

        <form onSubmit={handleSubmit}>
          <div className="mb-3 text-left">
            <label
              htmlFor="nama"
              className="block mb-1 text-sm font-medium text-gray-700"
            >
              Nama
            </label>
            <input
              id="nama"
              type="text"
              placeholder="Nama"
              required
              value={form.nama}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-[10px] focus:outline-none focus:ring-2 focus:ring-[#0E4B40]"
            />
          </div>

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

          <div className="mb-3 text-left">
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

          <div className="mb-3 text-left">
            <label
              htmlFor="confirmPassword"
              className="block mb-1 text-sm font-medium text-gray-700"
            >
              Konfirmasi Password
            </label>
            <input
              id="confirmPassword"
              type="password"
              placeholder="Konfirmasi Password"
              required
              value={form.confirmPassword}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-[10px] focus:outline-none focus:ring-2 focus:ring-[#0E4B40]"
            />
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full bg-[#BBF49D] text-[#204842] p-3 mt-4 rounded-full font-semibold cursor-pointer"
          >
            Daftar
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
};

export default Register;
