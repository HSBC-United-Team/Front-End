import { useEffect, useState } from "react";

export const useCartState = () => {
  const [showModal, setShowModal] = useState(false);
  const [provinces, setProvinces] = useState([]);
  const [selectedProvince, setSelectedProvince] = useState('');
  const [selectedCity, setSelectedCity] = useState("");

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const data = {
    "DKI Jakarta": {
      cities: ["Jakarta Pusat", "Jakarta Selatan", "Jakarta Barat"],
      zips: ["10110", "12240", "11220"],
    },
    "Jawa Barat": {
      cities: ["Bandung", "Bogor", "Cirebon"],
      zips: ["40111", "16130", "45121"],
    },
    "Jawa Tengah": {
      cities: ["Semarang", "Surakarta", "Magelang"],
      zips: ["50141", "57111", "56121"],
    },
    "Jawa Timur": {
      cities: ["Surabaya", "Malang", "Sidoarjo"],
      zips: ["60111", "65122", "61234"],
    },
    Bali: {
      cities: ["Denpasar", "Kuta", "Ubud"],
      zips: ["80222", "80361", "80571"],
    },
    "Sumatra Utara": {
      cities: ["Medan", "Binjai", "Pematang Siantar"],
      zips: ["20212", "20711", "21123"],
    },
    "Sumatra Barat": {
      cities: ["Padang", "Bukittinggi", "Payakumbuh"],
      zips: ["25111", "26122", "26251"],
    },
    "Sulawesi Utara": {
      cities: ["Manado", "Tomohon", "Bitung"],
      zips: ["95111", "95355", "95511"],
    },
    "Sulawesi Selatan": {
      cities: ["Makassar", "Mamuju", "Parepare"],
      zips: ["90111", "91511", "91122"],
    },
    Papua: {
      cities: ["Jayapura", "Sentani", "Abepura"],
      zips: ["99111", "99221", "99333"],
    },
    "Nusa Tenggara Barat": {
      cities: ["Mataram", "Bima", "Sumbawa Besar"],
      zips: ["83111", "84122", "84333"],
    },
    "Nusa Tenggara Timur": {
      cities: ["Kupang", "Maumere", "Ende"],
      zips: ["86111", "86222", "86333"],
    },
  };

  const paymentMethods = [
    "DANA",
    "GOPAY",
    "Mandiri",
    "BCA",
    "BNI",
    "BRI",
    "ShopeePay",
    " Pinjam Seratus Dari Teman",
  ];

  const handleProvinceChange = (e) => {
    const selectedProvince = e.target.value;
    setSelectedProvince(selectedProvince);
    setSelectedCity("");
  };

  const handleCityChange = (e) => {
    const selectedCity = e.target.value;
    setSelectedCity(selectedCity);
  };

  return {
    showModal,
    openModal,
    closeModal,
    selectedProvince,
    selectedCity,
    data,
    paymentMethods,
    handleProvinceChange,
    handleCityChange,
  };
};
