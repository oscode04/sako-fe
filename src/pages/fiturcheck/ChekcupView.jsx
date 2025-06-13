// checkup/view/CheckupView.jsx

import { useState } from "react";
import Navbar from "../../component/Navbar";
import Stepper from "../../component/Stepper";
import CheckupModel from "./CheckupModel";
import CheckupPresenter from "./CheckupPresenter";
import api from "../../Data/BaseUrlAPI";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import useCheckupPresenter from "./CheckupPresenter";

const CheckupView = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState(CheckupModel.initialData);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false); // ✅ hanya definisikan sekali di sini

  // Ambil fungsi dari Presenter, tanpa mengambil ulang `loading`
  const {
    handleChange,
    handleNumericBlur,
    handleSubmitPresenter,
  } = useCheckupPresenter(formData, setFormData, setStep, setLoading, setResult); // ✅ Kirim semua yang dibutuhkan

  // Handle konfirmasi kirim data dari user
  const handleSubmitConfirmation = () => {
    Swal.fire({
      title: "Kirim Data?",
      text: "Apakah kamu yakin ingin mengirim data Financial Checkup ini?",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#204842",
      cancelButtonColor: "#d33",
      confirmButtonText: "Ya, kirim!",
      cancelButtonText: "Batal",
    }).then((res) => {
      if (res.isConfirmed) {
        handleSubmit(); // ✅ panggil handleSubmit dari Presenter
      }
    });
  };

  // Komponen Input yang otomatis handle format uang
  const Input = ({ label, name, placeholder = "", prefix = "" }) => {
    const [inputValue, setInputValue] = useState(formData[name] || "");

    const onInputChange = (e) => setInputValue(e.target.value);

    const onInputBlur = () => {
      const cleaned = handleNumericBlur(name, inputValue);
      setInputValue(cleaned);
    };

    const isPengeluaran = name === "pengeluaran";


    return (
      <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-1">{label}</label>
        <div className="flex">
          {prefix && (
            <span
              className={`px-3 py-2 border border-r-0 rounded-l-md ${
                isPengeluaran
                  ? "bg-[#BBF49D] text-[#204842] border-[#f1f1f1] w-[120px]"
                  : "bg-gray-100"
              }`}
            >
              {prefix}
            </span>
          )}
          <input
            name={name}
            type="text"
            inputMode="numeric"
            className={`w-full px-3 py-2 border focus:outline-none focus:ring-2 ${
              prefix ? "rounded-r-md border-l-0" : "rounded-md"
            } ${
              isPengeluaran
                ? "bg-[#BBF49D] text-[#204842] border-[#BBF49D] focus:ring-[#BBF49D]"
                : "focus:ring-green-300"
            }`}
            placeholder={placeholder}
            value={inputValue}
            onChange={onInputChange}
            onBlur={onInputBlur}
          />
        </div>
      </div>
    );
  };

  // Komponen Select dan renderForm seperti sebelumnya (bisa dipisah juga kalau perlu)
  const Select = ({ label, name, value, onChange, options }) => (
    <div className="mb-4">
      <label className="block text-gray-700 font-medium mb-1">{label}</label>
      <select
        name={name}
        value={value}
        onChange={onChange}
        className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-300"
      >
        <option value="">
          Pilih yang paling sesuai dengan aktivitas utama kamu
        </option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
  const renderForm = () => {
    switch (step) {
      case 1:
        return (
          <>
            <h1
              className="text-2xl font-bold mb-4 font-outfit"
              style={{ color: "#204842" }}
            >
              Data
            </h1>

            <div className="mb-4">
              <label htmlFor="nama" className="block text-gray-700 font-medium mb-1">
                Nama Lengkap
              </label>
              <input
                type="text"
                id="nama"
                name="nama"
                placeholder="Nama kamu siapa?"
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-300"
                value={formData.nama}
                onChange={handleChange}
              />
            </div>

            <Input
              type="number"
              label="Usia"
              name="usia"
              placeholder="Contoh: 25"
              value={formData.usia}
              onChange={handleChange}
            />
            <Select
              label="Jenis Pekerjaan"
              name="pekerjaan"
              value={formData.pekerjaan}
              onChange={handleChange}
              options={[
                "Pegawai Negeri Sipil",
                "Pegawai Swasta",
                "Guru / Dosen",
                "Tenaga Kesehatan",
                "Pegawai Bank / Keuangan",
                "Karyawan Startup / IT",
                "Wirausaha / Pebisnis / Freelancer",
                "Petani / Nelayan",
                "Buruh / Pekerja Lepas",
                "Sopir",
                "Tukang / Teknisi",
                "Ibu Rumah Tangga",
                "Tidak Bekerja",
                "Pensiunan",
                "Mahasiswa",
                "Pelajar",
                "Lainnya",
              ]}
            />
            <Input
              label="Pendapatan bulanan"
              name="pendapatan"
              prefix="Rp "
              placeholder="Contoh: 3000000"
              value={formData.pendapatan}
              onChange={handleChange}
            />
            <Input
              label="Jumlah Tanggungan"
              name="tanggungan"
              placeholder="Contoh: 2 orang"
              value={formData.tanggungan}
              onChange={handleChange}
            />
          </>
        );
      case 2:
        return (
          <>
            <h1
              className="text-2xl font-bold mb-4 font-outfit"
              style={{ color: "#204842" }}
            >
              Pengeluaran
            </h1>

            <Input
              label="Kebutuhan Pokok"
              name="kebutuhan_pokok"
              prefix="Rp "
              placeholder="Total untuk makan, minum, pakaian, kebutuhan dasar"
            />
            <Input
              label="Tempat Tinggal"
              name="tempat_tinggal"
              prefix="Rp "
              placeholder="Sewa rumah/kos, cicilan KPR, listrik, air"
            />
            <Input
              label="Transportasi"
              name="transportasi"
              prefix="Rp "
              placeholder="Biaya naik kendaraan umum/BBM/ojek online"
            />
            <Input
              label="Pendidikan"
              name="pendidikan"
              prefix="Rp "
              placeholder="Biaya sekolah/kuliah untuk diri sendiri atau keluarga"
            />
            <Input
              label="Kesehatan"
              name="kesehatan"
              prefix="Rp "
              placeholder="Biaya berobat, obat-obatan, asuransi kesehatan"
            />
            <Input
              label="Komunikasi & Internet"
              name="komunikasi"
              prefix="Rp "
              placeholder="Paket data, Wi-Fi bulanan, pulsa"
            />
            <Input
              label="Gaya Hidup & Hiburan"
              name="hiburan"
              prefix="Rp "
              placeholder="Nongkrong, belanja non-prioritas, streaming, nonton, dll"
            />
            <Input
              label="Sedekah & Donasi"
              name="donasi"
              prefix="Rp "
              placeholder="Zakat, infak, bantuan sosial"
            />
            <Input
              label="Pengeluaran Tidak Terduga"
              name="tidak_terduga"
              prefix="Rp "
              placeholder="Dana darurat, keperluan mendadak"
            />
            <Input
              label="Lainnya"
              name="lainnya"
              prefix="Rp "
              placeholder="Pengeluaran lain di luar kategori"
            />
            <Input
              // label="Total Pengeluaran"
              name="pengeluaran"
              prefix="Total : Rp "
              placeholder="Total Pengeluaran"
            />
          </>
        );
      case 3:
        return (
          <>
            <h1
              className="text-2xl font-bold mb-4 font-outfit"
              style={{ color: "#204842" }}
            >
              Utang dan Cicilan
            </h1>

            <Input
              label="Cicilan utang bulan ini"
              name="cicilan"
              prefix="Rp "
              placeholder="Total cicilan aktif tiap bulan (KPR, motor, pinjol, dll.)"
            />
            <Input
              label="Total utang saat ini"
              name="utang"
              prefix="Rp "
              placeholder="Jumlah seluruh utang yang masih harus dibayar"
            />
          </>
        );
      case 4:
        return (
          <>
            <h1
              className="text-2xl font-bold mb-4 font-outfit"
              style={{ color: "#204842" }}
            >
              Simpanan
            </h1>
            <Input
              label="Total Tabungan"
              name="tabungan"
              prefix="Rp "
              placeholder="Saldo yang tersimpan di rekening tabungan"
            />
            <Input
              label="Investasi"
              name="investasi"
              prefix="Rp "
              placeholder="Total nilai dari reksadana, saham, emas, dll"
            />
            <Input
              label="Dana Darurat"
              name="dana_darurat"
              prefix="Rp "
              placeholder="Uang yang kamu siapkan khusus untuk kondisi darurat"
            />
            <Input
              label="Total Aset"
              name="aset"
              prefix="Rp "
              placeholder="Nilai seluruh aset kamu: rumah, kendaraan, tabungan, investasi"
            />
          </>
        );
      case 5:
        if (loading) {
          return (
            <div className="flex flex-col items-center justify-center min-h-[200px] text-[#204842]">
              <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-[#204842] border-solid mb-3"></div>
              <p className="text-sm text-[#204842]">Sedang memproses data kamu...</p>
            </div>
          );
        }
        
        return (
          <div className="space-y-6 font-outfit text-[#204842]">
            <div>
              <h1 className="font-semibold mb-2">
                Pilihan Perencanaan Keuangan
              </h1>
              <p className="text-sm text-gray-600 mb-2">
                Apa tujuan utama keuangan kamu?
              </p>
              <div className="space-y-2">
                {[
                  "Dana Darurat",
                  "Dana Pendidikan Anak",
                  "Dana Menikah",
                  "Pembelian Rumah",
                  "Kendaraan Pribadi",
                  "Modal Usaha",
                  "Ibadah Haji atau Umroh",
                  "Liburan",
                  "Dana Pensiun",
                  "Warisan atau Wasiat",
                  "Belum Punya Tujuan",
                  "Lainnya",
                ].map((item, index) => (
                  <label key={index} className="flex items-center space-x-2 cursor-pointer">
                    <input
                      type="radio"
                      name="tujuanKeuangan"
                      value={item}
                      className="form-radio text-[#204842]"
                    />
                    <span>{item}</span>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <h2 className="font-semibold mb-2">
                Kapan ingin mencapai tujuan keuangan
              </h2>
              <div className="space-y-2">
                {[
                  { label: "Jangka pendek (<3 tahun)", value: "pendek" },
                  { label: "Jangka menengah (4–5 tahun)", value: "menengah" },
                  { label: "Jangka panjang (>5 tahun)", value: "panjang" },
                  { label: "Tidak ada", value: "tidakAda" },
                ].map(({ label, value }) => (
                  <label key={value} className="flex items-center space-x-2 cursor-pointer">
                    <input
                      type="radio"
                      name="targetTahun"
                      value={value}
                      className="form-radio text-[#204842]"
                    />
                    <span>{label}</span>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <h2 className="font-semibold mb-2">
                Sumber dana yang akan kamu pakai untuk tujuan tadi
              </h2>
              <div className="space-y-2">
                {["Tabungan", "Aset", "Investasi", "Tidak ada", "Lainnya"].map(
                  (item, index) => (
                    <label key={index} className="flex items-center space-x-2 cursor-pointer">
                      <input
                        type="radio"
                        name="sumberDana"
                        value={item}
                        className="form-radio text-[#204842]"
                      />
                      <span>{item}</span>
                    </label>
                  )
                )}
              </div>
            </div>
          </div>
        );
      case 6:
        return (
          <>
            {result && result.ai_advice && (
              <div>
                <div className="text-center">
                  <h1 className="text-2xl font-bold text-[#204842] mb-2">
                    🎉 Hasil Financial Check Up Kamu
                  </h1>
                  <p className="text-lg font-semibold text-[#204842] mb-3">
                    Kondisi Keuanganmu:{" "}
                    <span className="inline-flex items-center text-green-700 font-bold">
                      ✅ {result.ai_advice.kondisi}
                    </span>
                  </p>
                </div>

                {/* Kartu Saran */}
                {result.ai_advice.saran.map(({ title, desc }, idx) => (
                  <div
                    key={idx}
                    className="bg-[#f6fdf6] border border-[#e0e0e0] rounded-lg p-4 mb-3"
                  >
                    <h3 className="text-[#204842] font-semibold mb-1">{title}</h3>
                    <p className="text-gray-700 text-sm whitespace-pre-line">{desc}</p>
                  </div>
                ))}

                {/* Motivasi */}
                <div className="border-l-4 bg-[#E1EDDF] p-4 text-center italic text-sm text-gray-700 mb-3">
                  “{result.ai_advice.motivasi}”
                </div>

                {/* Tombol Selesai */}
                <div className="flex justify-center">
                  <Link to="/">
                    <button className="bg-[#BBF49D] text-[#204842] px-6 py-2 rounded-[30px] font-semibold hover:brightness-95 w-[301px] cursor-pointer">
                      Selesai
                    </button>
                  </Link>
                </div>
              </div>
            )}
          </>
        );


      default:
        return null;
    }
  };

  // Navigasi next or before
  const nextStep = () => step < 5 && setStep(step + 1);
  const prevStep = () => step > 1 && setStep(step - 1);

 const handleSubmit = () => {
    Swal.fire({
      title: "Kirim Data?",
      text: "Apakah kamu yakin ingin mengirim data Financial Checkup ini?",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#204842",
      cancelButtonColor: "#d33",
      cancelButtonText: "Batal",
      confirmButtonText: "Ya, kirim!",
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        handleSubmitPresenter(); // ✅ kirim ke server dan ubah ke step 4
      }
    });
  };



  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-[#f6fdf6] py-8 px-4">
        <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-md p-6">
          <h2 className="text-2xl font-semibold text-center text-green-900 mb-2">
            Finansial check up
          </h2>
          <p className="text-center text-gray-600 mb-6">
            Luangkan beberapa menit untuk mengetahui kesehatan keuanganmu.
          </p>
          <Stepper activeStep={step} />

          {/* renderForm(step, Input, Select, formData, handleChange) */}
          <div className="mt-6 min-h-[320px]">{renderForm()}</div>

          {/* Navigasi : Next : Before */}
          <div className="flex justify-between mt-6">
            {step > 1 && step < 6 ? (
              <button
                onClick={prevStep}
                className="bg-[#f1f8f4] text-gray-700 px-4 py-2 rounded-lg cursor-pointer"
              >
                Sebelumnya
              </button>
            ) : (
              <div></div>
            )}
            {step >= 1 && step < 6 ? (
              <button
                onClick={step === 5 ? () => handleSubmit() : nextStep}
                disabled={loading}
                style={{ backgroundColor: "#BBF49D", color: "#204842" }}
                className={`px-4 py-2 rounded-lg ${
                  loading ? "opacity-50 cursor-not-allowed" : "hover:brightness-90 cursor-pointer"
                }`}
              >
                {loading
                  ? "Mengirim..."
                  : step === 5
                  ? "Kirim"
                  : "Selanjutnya"}
              </button>
            ) : (
              <div></div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default CheckupView;
