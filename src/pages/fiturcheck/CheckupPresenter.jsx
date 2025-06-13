// pages/fiturcheck/CheckupPresenter.jsx
import { useState } from "react";
import CheckupModel from "./CheckupModel";
import Swal from "sweetalert2";

const useCheckupPresenter = (formData, setFormData, setStep, setLoading, setResult) => {
    const handleChange = (e) => {
    const { name, value } = e.target;
    const updatedData = {
      ...formData,
      [name]: value,
    };

    if (CheckupModel.pengeluaranFields.includes(name)) {
      updatedData.pengeluaran = CheckupModel.calculateTotalPengeluaran(updatedData);
    }

    setFormData(updatedData);
  };

  const handleNumericBlur = (name, inputValue) => {
    const numericValue = inputValue.replace(/\D/g, "");
    const updatedFormData = {
      ...formData,
      [name]: numericValue,
    };

    if (CheckupModel.pengeluaranFields.includes(name)) {
      updatedFormData.pengeluaran = CheckupModel.calculateTotalPengeluaran(updatedFormData);
    }

    setFormData(updatedFormData);
    return numericValue;
  };

  const buildPayloadForAPI = (formData) => {
    const totalPengeluaran = parseInt(CheckupModel.calculateTotalPengeluaran(formData));
    const tujuan =
      formData.tujuan === "Lainnya"
        ? formData.tujuan_lainnya || "Tidak disebutkan"
        : formData.tujuan;

    return {
      "Pendapatan Bulanan": parseInt(formData.pendapatan.replace(/\D/g, "")) || 0,
      "Total Pengeluaran": totalPengeluaran,
      "Tabungan": parseInt(formData.tabungan.replace(/\D/g, "")) || 0,
      "Cicilan Per Bulan": parseInt(formData.cicilan.replace(/\D/g, "")) || 0,
      "Dana Darurat": parseInt(formData.tabungan.replace(/\D/g, "")) || 0,
      "Total Aset": parseInt(formData.aset.replace(/\D/g, "")) || 0,
      "Total Utang": parseInt(formData.utang.replace(/\D/g, "")) || 0,
      "Tujuan": tujuan,
    };
  };

  const handleSubmitPresenter = async () => {
    setLoading(true);
    try {
      const payload = buildPayloadForAPI(formData);
      const response = await fetch("https://flask.sakoo.my.id/predict", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) throw new Error("Gagal menerima respons dari server");

      const data = await response.json();
      setResult(data);
      Swal.fire("Berhasil", "Cek keuangan selesai!", "success");
      setStep(6); // tampilkan hasil
    } catch (error) {
      console.error("Gagal mengirim data:", error);
      Swal.fire("Error", "Terjadi kesalahan saat mengirim data.", "error");
    } finally {
      setLoading(false);
    }
  };

  return { handleChange, handleNumericBlur, handleSubmitPresenter };
};

export default useCheckupPresenter;
