/* Import Link */
// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";

/* Import Navbar - Footer */
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";

/* Import Image */
import { Icon } from "@iconify/react";
import heroImage from "../assets/image/hero-ilustration.png";
import secondImage from "../assets/image/second-ilustration.png";
import fourthImage from "../assets/image/fourth-ilustration.png";
import { Link } from "react-router-dom";

export function Home() {
  return (
    <div className="bg-[#F3F3F3]">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bottom h-[100vh] bg-[#e1eddf] pd flex flex-col md:flex-row justify-center items-center"
      >
        <img
          src={heroImage}
          alt="Hero"
          className="md:w-[659px] md:h-[471px] md:mr-[10px] w-full mb-[30px]"
        />
        <div className="text-center md:text-left md:w-[633px] md:mt-[-97px]">
          <h1 className="text-2xl md:text-[40px] font-bold  mb-2">
            Bingung uang selalu habis? <br />
            Coba cek bareng Sakoo dulu. <br />
            Ngatur keuangan bisa mulai dari sini.
          </h1>
          <p className="text-[#1C1C1C] mb-4 md:text-[24px] text-[12px]">
            Dapat insight dan saran keuangan sesuai kondisi kamu, langsung dari
            AI.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-[226px] h-[40px] bg-[#BAF699] md:mt-[30px] px-4 py-2 rounded font-bold cursor-pointer"
          >
            <Link to={"/login"}>🚀 Yuk, cek sekarang!</Link>
          </motion.button>
        </div>
      </motion.section>

      {/* Section : Second Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="second-section pd px-6 py-12 flex flex-col md:h-[763px] h-[680px]"
      >
        <div>
          <h1 className="flex flex-row items-center text-2xl font-bold text-[#204842] md:text-[40px] mb-2">
            Sakoo
            <Icon icon="healthicons:money-bag" className="text-[#204842]" />
          </h1>
          <h2 className="text-2xl font-bold text-[#1C1C1C] md:text-[40px] mb-2">
            Solusi Aman Kelola dan Optimalkan Keuangan
          </h2>
        </div>
        <div className="flex flex-col mt-[30px] md:flex-row items-center">
          <img
            src={secondImage}
            alt="Keuangan"
            className="w-full max-w-md md:w-[464px] md:h-[428px] md:mr-[38px] "
          />
          <div className="third-sub-section">
            <h2 className="text-2xl font-bold text-[#1C1C1C] md:text-[40px] mb-2 mt-[20px]">
              Kendalikan Keuanganmu, Mulai Hari Ini
            </h2>
            <p className="md:text-[30px] text-[12px] opacity-80">
              Sakoo bantu kamu lebih cerdas mengatur keuanganmu dengan mudah,
              aman, dan efisien.
            </p>
          </div>
        </div>
      </motion.section>

      {/* Section : Apa yang Sakoo Bantu */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col justify-center align-center bg-[#e1eddf] pd h-[650px] md:h-[536px] rounded-[30px]"
      >
        <h1 className="text-2xl font-bold text-center text-[#204842] mb-8 md:mb-[45px] md:text-[40px]">
          Apa yang Sakoo Bantu?
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 cursor-pointer items-center justify-items-center">
          {[
            {
              icon: "🔍",
              title: "Periksa kondisi finansialmu dengan cepat tanpa ribet",
            },
            {
              icon: "💡",
              title:
                "Kenali kekuatan dan area yang perlu diperbaiki dalam uangmu",
            },
            {
              icon: "🧠",
              title: "Dapatkan tips praktis buat atur keuangan lebih baik",
            },
            {
              icon: "🎯",
              title: "Menetapkan tujuan keuangan yang realistis dan terukur",
            },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -5 }}
              className="flex flex-col items-center justify-items-center bg-white  md:w-[305px] md:h-[272px] rounded-[30px] p-4 shadow text-center"
            >
              <div className="text-2xl mb-2">{item.icon}</div>
              <h1 className="font-bold text-[12px] md:text-[24px] md:mt-[20px] md:mr-[20px] md:ml-[20px] mb-1">
                {item.title}
              </h1>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Section : Apa yang Bikin Sakoo Beda */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col pd md:flex-row items-center justify-between bg-[#F3F3F3] md:h-[462px] "
      >
        <div className="mt-[30px]">
          <h2 className="text-2xl md:text-[40px] font-bold text-[#204842] mb-[20px]">
            Apa yang Bikin Sakoo Beda?
          </h2>
          <p className="text-[#1C1C1C] text-[12px] md:text-[24px] md:w-[40vw] mb-[30px]">
            Sakoo pakai teknologi AI untuk pahami kondisi keuangan kamu dan
            memberikan rekomendasi khusus berdasarkan data serta kebutuhanmu.
            Prosesnya cepat dan mudah, jadi kamu bisa ambil keputusan keuangan
            yang tepat tanpa ribet.
          </p>
        </div>
        <img
          src={fourthImage}
          alt="Beda Sakoo"
          className="w-full max-w-md mb-[20px]"
        />
      </motion.section>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Home;