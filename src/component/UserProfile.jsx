import { Icon } from "@iconify/react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const UserProfile = ({ user, logout }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => (document.body.style.overflow = "auto");
  }, [isModalOpen]);

  const handleLogout = () => {
    try {
      // Lakukan logout, misalnya hapus token atau panggil fungsi logout dari context
      logout(); // jika kamu pakai useAuth() atau sejenisnya
      Swal.fire({
        icon: "success",
        title: "Berhasil Logout",
        text: "Sampai jumpa lagi!",
        confirmButtonColor: "#204842",
      }).then(() => {
        // eslint-disable-next-line no-undef
        // navigate("/");
      });
      // eslint-disable-next-line no-unused-vars
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Gagal Logout",
        text: "Terjadi kesalahan saat logout.",
      });
    }
  };

  return (
    <div className="relative">
      {/* Icon User */}
      <button
                onClick={handleLogout}
                className="w-full bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
              >
                <Link to="/">Logout</Link>
              </button>
      {/* <button
        onClick={() => setIsModalOpen(!isModalOpen)}
        className="text-2xl text-gray-700"
      >
        <Icon icon="mdi:user-outline" className="text-[#204842]" />
      </button> */}

      {/* Modal Content */}
      {isModalOpen && (
        <>
          {/* Desktop */}
          <div className="hidden sm:block absolute right-0 mt-2 w-64 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
            <div className="p-4">
              <h1 className="font-bold text-lg text-gray-800 mb-6">
                Hi, {user.name}
              </h1>
              <h2>Data Pribadi</h2>
              {user.name && (
                <p className="text-sm text-gray-500">
                  Nama Lengkap : {user.name}
                </p>
              )}
              {user.email && (
                <p className="text-sm text-gray-500 mb-4 ">
                  Email : {user.email}
                </p>
              )}
              {/* <button
                onClick={handleLogout}
                className="w-full bg-[#BBF49D] text-white py-2 px-4 mb-2 rounded"
              >
                Update Data
              </button> */}
              <button
                onClick={handleLogout}
                className="w-full bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
              >
                <Link to="/">Logout</Link>
              </button>
            </div>
          </div>

          {/* Mobile */}
          <div className="sm:hidden fixed bottom-0 left-0 right-0 bg-white rounded-t-2xl p-6 shadow-xl z-50">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold text-gray-800">Profil</h2>
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-gray-500 text-2xl"
              >
                &times;
              </button>
            </div>

            <p className="text-gray-900 font-medium text-lg mb-1">
              {user.name}
            </p>
            {user.email && (
              <p className="text-gray-500 text-sm mb-6">{user.email}</p>
            )}

            <button
              onClick={handleLogout}
              className="w-full bg-[#BBF49D] text-white py-2 rounded-lg mb-2"
            >
              <Link to={""}>Update Data</Link>
            </button>

            <button
              onClick={handleLogout}
              className="w-full bg-red-500 text-white py-2 rounded-lg"
            >
              <Link to="/">Logout</Link>
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default UserProfile;
