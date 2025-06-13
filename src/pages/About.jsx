/* Import Motion */
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

/* Import Picture */
import { Icon } from "@iconify/react";
import HeroLandingPage from "../assets/image/hero-ilustration-about.png";

/* Import Navbar & Footer */
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";

function About() {
  const features = [
    {
      icon: "prime:user",
      name: "M. Dzafadhlan F Muzzki",
      id: "MC222D5Y1132",
      job: "Machine Learning",
    },
    {
      icon: "prime:user",
      name: "Putri Pita Mutia",
      id: "MC269D5X0767",
      job: "Machine Learning",
    },
    {
      icon: "prime:user",
      name: "Mazdalifah Hanuranda",
      id: "MC354D5X2056",
      job: "Machine Learning",
    },
    {
      icon: "prime:user",
      name: "Ahmad Gaos Sanusi Sulasah",
      id: "FC222D5Y1666",
      job: "Front-end Developer",
    },
    {
      icon: "prime:user",
      name: "Fitri Rahmatullah Arza",
      id: "FC127D5X0078",
      job: "Front-end Developer",
    },
    {
      icon: "prime:user",
      name: "Hisyam Arief Zulfani",
      id: "FC222D5Y1666",
      job: "Front-end Developer",
    },
  ];

  return (
    <>
      <Navbar />
      <div className="w-full bg-[#F3F3F3]">
        {/* Hero Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bottom flex flex-col pd text-white text-center bg-[#E1EDDF]"
        >
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-2xl md:text-[40px] font-bold text-[#204842] mb-4 md:mt-[31px] mt-[21px] "
          >
            Tentang Sakoo
          </motion.h1>
          <p className="text-[12px] text-[#1E1E1E] md:text-[24px] md:mt-[11px]">
            Solusi Aman Kelola dan Optimalkan Keuangan
          </p>
          <motion.img
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            src={HeroLandingPage}
            alt="Hero"
            className="mx-auto sm:w-[135px] md:w-[826px] lg:w-[535px]"
          />
        </motion.section>

        {/* Section: Kenapa Sakoo Hadir */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col pd text-center md:h-[463px] h-[263px]"
        >
          <div className="flex align-center justify-center md:h-[70px] h-[35px] md:mt-[101px] mt-[55px] ">
            <div className="flex flex-col justify-start h-full">
              <Icon
                icon="solar:star-fall-bold"
                className="text-[#204842] w-[12px] h-[12px] md:w-6 md:h-6 "
              />
            </div>
            <div className="flexr">
              <h2 className="text-2xl md:text-[40px] font-bold text-[#204842] mb-4">
                Kenapa Sakoo Hadir?
              </h2>
            </div>
            <div className="flex flex-col justify-end h-full">
              <Icon
                icon="solar:star-fall-bold"
                className="text-[#204842] w-[12px] h-[12px] md:w-6 md:h-6"
              />
            </div>
          </div>
          <p className="text-[#000000] md:text-[24px] md:mt-[20px] text-[12px] mt-[10px] ">
            Mengatur keuangan itu penting, tapi sering terasa rumit. Sakoo hadir
            untuk menyederhanakan langkahmu menuju keuangan yang lebih sehat.
            Dengan Teknologi AI, Sakoo bisa bantu untuk memahami kondisi
            finansial dan memberikan solusi yang tepat untuk masa depanmu.
          </p>
        </motion.section>

        {/* Section: Misi Sakoo */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col pd text-center bg-[#E1EDDF] md:h-[401px] h-[201px] rounded-[30px]"
        >
          <h2 className="text-2xl md:text-[40px] font-bold text-[#204842] md:mt-[91px] mt-[31px]">
            Misi Sakoo
          </h2>
          <p className="md:text-[24px] text-[12px] md:mt-[31px] mt-[21px] ">
            Membantu pengguna mengevaluasi kondisi keuangan mereka secara
            sederhana. Memberikan rekomendasi solusi finansial yang mudah
            dipahami, melalui analisis AI. Mendorong kebiasaan finansial yang
            sehat untuk masa depan yang lebih baik.
          </p>
        </motion.section>

        {/* Section: Meet The Team */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col pd md:h-[1037px] h-[750px] "
        >
          <div className="flex align-center justify-center md:h-[70px] h-[35px] md:mt-[101px] mt-[55px] ">
            <div className="flex flex-col justify-start h-full">
              <Icon
                icon="solar:star-fall-bold"
                className="text-[#204842] w-[12px] h-[12px] md:w-6 md:h-6 "
              />
            </div>
            <div className="flexr">
              <h2 className="text-2xl md:text-[40px] font-bold text-[#204842] mb-4">
                Meet The Team
              </h2>
            </div>
            <div className="flex flex-col justify-end h-full">
              <Icon
                icon="solar:star-fall-bold"
                className="text-[#204842] w-[12px] h-[12px] md:w-6 md:h-6"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-[14px] md:gap-x-[74px] md:gap-y-[54px] cursor-pointer md:mt-[56px] mt-[21px]  ">
            {features.map((item, idx) => (
              <div
                key={item.idx || idx}
                className="flex md:h-[170px] md:w-[600px] md:px-[32px] md:py-[19px] px-[16px] py-[11px] border rounded-lg"
              >
                <Icon icon={item.icon} className="text-[#1E1E1E] w-10 h-10" />
                <div className="md:ml-[22px] ml-[12px]">
                  <h1 className="text-[12px] md:text-[24px] font-bold text-[#204842]">
                    {item.name || "Tanpa Nama"}
                  </h1>
                  <h2 className="text-[12px] md:text-[24px] font-semibold text-[#1E1E1E]">
                    {item.id || "Tanpa Nama"}
                  </h2>
                  <button className="w-[155px] md:w-[275px] bg-[#BBF49D] text-[12px] md:text-[24px] font-semibold text-[#1E1E1E] opacity-80 rounded-[10px] mt-[5px] ">
                    {item.job || "Tanpa Nama"}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Section: Penutup */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="top flex flex-col justify-center bg-[#E1EDDF] md:h-[412px] text-center py-10 px-6"
        >
          <h1 className="text-[19px] md:text-[40px] font-bold text-[#204842] mb-4">
            Sakoo — Teman Setia Finansialmu!
          </h1>
          <p className="text-[12px] md:text-[24px] font-semibold text-[#204842] opacity-80">
            Cek, rencanakan, dan wujudkan masa depan
            <br />
            keuangan yang lebih cerah bersama Sakoo.
          </p>
          <p className="max-w-2xl mx-auto"></p>
        </motion.section>

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
}

export default About;