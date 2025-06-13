// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import ParticleBg from "./ParticleBg";

import { Link } from "react-router-dom";

const PrivateToLogin = () => {
  return (
    <>
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
            Selamat Datang di <Link to="/">Sakoo</Link>
          </h1>
          <h2 className="text-xl font-bold text-black mb-1">
            Silahkan Login terlebih dahulu
          </h2>
          <p className="text-sm text-gray-600 mb-5">
            Klik disini{" "}
            <Link to="/login" className="text-[#0E4B40] font-medium">
              Login
            </Link>
          </p>
          <h2 className="text-xl font-bold text-black mb-1">
            Jika belum punya akun
          </h2>
          <p className="text-sm text-gray-600 mb-5">
            Klik disini{" "}
            <Link to="/register" className="text-[#0E4B40] font-medium">
              Register
            </Link>
          </p>
        </motion.div>
      </div>
    </>
  );
};

export default PrivateToLogin;
