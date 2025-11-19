import React from "react";
import Navbar from "../Navbar";

export default function Sections() {
  return (
    <>
      <Navbar />

      <section className="pt-20 bg-gradient-to-br from-blue-50 to-white overflow-x-auto">
        <div className="w-[1200px] mx-auto py-20 px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* TEXT */}
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                <span className="text-emerald-600">Kesehatan Anda,</span>{" "}
                Prioritas Kami
              </h2>

              <p className="text-lg md:text-xl text-gray-600 mb-8">
                <span className="text-emerald-600 font-semibold">
                  RSUD BOLTIM
                </span>
                , Melayani dengan sepenuh hati, memberikan perawatan yang
                terbaik.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-emerald-600 text-white px-8 py-3 rounded-md hover:bg-emerald-700 transition text-sm font-semibold cursor-pointer">
                  Daftar Online
                </button>
              </div>
            </div>

            {/* IMAGE */}
            <div className="flex justify-center">
              <img
                src="/images/rsud-hero.jpg"
                alt="RSUD Boltim"
                className="w-[500px] h-[350px] rounded-xl shadow-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-emerald-500 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-white">
            <div>
              <div className="text-4xl font-bold mb-2">3+</div>
              <div className="text-blue-100">Tahun Pengalaman</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">15+</div>
              <div className="text-blue-100">Dokter Spesialis</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">10K+</div>
              <div className="text-blue-100">Pasien Dilayani</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">24/7</div>
              <div className="text-blue-100">Layanan Darurat</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Layanan Unggulan
            </h2>
            <p className="text-xl text-gray-600">
              Berbagai layanan medis terpadu untuk kesehatan Anda
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6"></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
