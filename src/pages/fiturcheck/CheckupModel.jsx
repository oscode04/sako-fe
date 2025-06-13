const API_URL = "https://flask.sakoo.my.id/predict"; // Ganti jika endpoint berubah

const CheckupModel = {
  initialData: {
    nama: "",
    usia: "",
    pekerjaan: "",
    pendapatan: "",
    tanggungan: "",
    pengeluaran: "",
    kebutuhan_pokok: "",
    tempat_tinggal: "",
    transportasi: "",
    pendidikan: "",
    kesehatan: "",
    komunikasi: "",
    hiburan: "",
    donasi: "",
    tidak_terduga: "",
    lainnya: "",
    utang: "",
    tabungan: "",
    tujuan: "",
    cicilan: "",
    investasi: "",
    dana_darurat: "",
    aset: "",
  },

  pengeluaranFields: [
    "kebutuhan_pokok",
    "tempat_tinggal",
    "transportasi",
    "pendidikan",
    "kesehatan",
    "komunikasi",
    "hiburan",
    "donasi",
    "tidak_terduga",
    "lainnya",
  ],

  calculateTotalPengeluaran(formData) {
    let total = 0;
    this.pengeluaranFields.forEach((field) => {
      const value = parseInt((formData[field] || "0").replace(/\D/g, ""), 10);
      total += isNaN(value) ? 0 : value;
    });
    return total.toString();
  },

  async postDataToAPI(data) {
    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Gagal mendapatkan respons dari server.");
      }

      const result = await response.json();
      return result;
    } catch (error) {
      console.error("Gagal kirim ke API:", error);
      throw error;
    }
  },
};

export default CheckupModel;
