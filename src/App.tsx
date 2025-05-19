import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="w-full">
        <div className="bg-black flex justify-center h-screen items-center max-md:px-8">
          <div className="text-center md:w-min">
            <h2 className="text-white font-bold text-3xl md:text-6xl md:whitespace-nowrap">
              Kenali Lebih Dekat BelajarYuk!
            </h2>
            <h2 className="text-white text-sm md:text-2xl md:mx-20 mt-4">
              Platform belajar online yang berkomitmen membentuk generasi siap
              kerja melalui kurikulum terbaik dan komunitas aktif.
            </h2>
          </div>
        </div>

        <div className="px-5 md:px-24">
          <main className="pt-4 md:pt-14 max-md:h-screen">
            <h2 className="text-2xl md:text-5xl font-bold pb-3 md:pb-12">
              Apa itu BelajarYuk!
            </h2>
            <div className="md:flex max-md:space-y-3 md:gap-10">
              <div className="bg-black md:min-w-[363.11px] h-[395px] rounded-2xl">
                <img src="" alt="class-room-image" />
              </div>
              <p className=" md:text-start text-sm md:text-2xl text-justify">
                BelajarYuk! adalah platform pembelajaran online yang didesain
                untuk membantu pelajar, mahasiswa, dan profesional mengembangkan
                skill digital secara praktis dan relevan dengan kebutuhan
                industri. Dengan kurikulum yang terstruktur, mentor
                berpengalaman, dan komunitas belajar yang aktif, kami
                berkomitmen untuk menciptakan pengalaman belajar yang fleksibel,
                interaktif, dan berdampak nyata. Kami percaya bahwa akses
                terhadap pendidikan berkualitas harus terbuka untuk siapa saja,
                kapan saja, dan di mana saja. Melalui pendekatan pembelajaran
                berbasis proyek dan portofolio, BelajarYuk! mempersiapkan setiap
                peserta untuk menjadi talenta siap kerja di dunia digital yang
                terus berkembang.
              </p>
            </div>
          </main>
          <section className="pt-4 md:pt-14 max-md:h-screen">
            <h3 className="text-2xl md:text-5xl  font-bold pb-3 md:pb-12">
              Visi & Misi
            </h3>
            <p className="md:whitespace-nowrap text-sm md:text-2xl pb-3 md:pb-12">
              <span className="font-bold">Visi : </span >Menjadi platform
              pembelajaran online terpercaya yang mencetak talenta digital masa
              depan.
            </p>
            <div className="grid md:grid-cols-2 md:grid-rows-2 gap-y-8 gap-x-28">
              <div className="bg-[#6a35ff] flex justify-start items-center rounded-xl p-5 gap-5">
                <div className="rounded-lg bg-black min-w-[75px] min-h-[75px]">
                  <img src="" alt="" />
                </div>
                <h4 className="text-lg md:text-3xl font-bold text-white">
                  Menyediakan kurikulum up-to-date.
                </h4>
              </div>

              <div className="bg-[#6a35ff] flex justify-start items-center rounded-xl p-5 gap-5">
                <div className="rounded-lg bg-black min-w-[75px] min-h-[75px]">
                  <img src="" alt="" />
                </div>
                <h4 className="text-lg md:text-3xl font-bold text-white">
                  Memberikan akses ke mentor profesional.
                </h4>
              </div>

              <div className="bg-[#6a35ff] flex justify-start items-center rounded-xl p-5 gap-5">
                <div className="rounded-lg bg-black min-w-[75px] min-h-[75px]">
                  <img src="" alt="" />
                </div>
                <h4 className="text-lg md:text-3xl font-bold text-white">
                  Membangun komunitas belajar yang aktif suportif.
                </h4>
              </div>

              <div className="bg-[#6a35ff] flex justify-start items-center rounded-xl p-5 gap-5">
                <div className="rounded-lg bg-black min-w-[75px] min-h-[75px]">
                  <img src="" alt="" />
                </div>
                <h4 className="text-lg md:text-3xl font-bold text-white">
                  Menyiapkan lulusan siap kerja.
                </h4>
              </div>
            </div>
          </section>
          <section className="py-4 md:p-14">
            <h3 className="text-2xl md:text-5xl font-bold pb-3 md:pb-12 text-center">
              Team Kami
            </h3>
            <div className="flex overflow-x-auto gap-x-5 snap-x snap-mandatory scroll-smooth md:justify-between items-center">
              <div className="min-h-[505px] min-w-[347px] bg-black rounded-2xl relative snap-center">
                <div className="bottom-0 absolute pl-8 pb-9">
                  <h4 className="text-white text-lg md:text-3xl font-bold">
                    Tiara
                  </h4>
                  <h4 className="text-white text-sm md:text-xl">Co-Manager</h4>
                </div>
              </div>

              <div className="min-h-[505px] min-w-[347px] bg-black rounded-2xl relative snap-center">
                <div className="bottom-0 absolute pl-8 pb-9">
                  <h4 className="text-white text-lg md:text-3xl font-bold">
                    Alex
                  </h4>
                  <h4 className="text-white text-sm md:text-xl">President</h4>
                </div>
              </div>

              <div className="min-h-[505px] min-w-[347px] bg-black rounded-2xl relative snap-center">
                <div className="bottom-0 absolute pl-8 pb-9">
                  <h4 className="text-white text-lg md:text-3xl font-bold">
                    Robert
                  </h4>
                  <h4 className="text-white text-sm md:text-xl">Manager</h4>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default App;
