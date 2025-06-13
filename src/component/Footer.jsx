// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="pd h-[100px] bg-[#204842] py-[30px] text-[#FEFEFE] text-[12px] text-sm md:text-[20px] md:h-[206px] md:py-[55px]"
    >
      <div className="">
        <p className="mb-1 ">© 2025 Sakoo. All rights reserved.</p>
        <p className="opacity-80 ">
          Sakoo — Solusi Aman Kelola dan Optimalkan Keuangan
        </p>
      </div>
    </motion.footer>
  );
}
