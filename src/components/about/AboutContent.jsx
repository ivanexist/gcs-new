const AboutContent = () => (
  <section className="flex items-center max-w-screen-xl bg-transparent mx-auto">
    <div className="justify-center flex-1 py-4 mx-auto lg:py-6 md:px-6 my-4">
      <div className="flex justify-between items-end">
        <div className="w-full mb-10 lg:w-1/2 lg:mb-0 mx-4">
          <div>
            <h1 className="text-3xl font-sans flex justify-center items-center font-bold text-blue-600 md:text-4xl uppercase mb-8">
              SEJARAH PERUSAHAAN
            </h1>
          </div>
          <p className="my-4 text-base leading-7 text-gray-500 text-justify">
            PT.Gemilang Cipta Sentosa adalah Perusahaan yang bergerak dalam
            bidang konstruksi Sipil Bangunan, Jetty/Dermaga, dan Pemasangan
            Instalasi Perpipaan (Pipa Air, Pipa Gas, dan Pipa Hydrant). Kami
            berdiri sejak tahun 2014 dan telah mengerjakan berbagai pekerjaan
            dari skala kecil hingga besar.
          </p>
          <p className="my-4 text-base leading-7 text-gray-500 text-justify">
            Kami telah mengerjakan konstruksi diberbagai Instansi pemerintah
            maupun swasta, baik pada calon pelanggaan industri maupun komersil
            dan rumah tangga. Tenaga kerja kami merupakan tenaga yang terampil
            dan sudah berpengalaman di bidang bangunan gedung, sipil, mekanikal
            dan elektrikal antara lain Kontruksi bangunan hunian tunggal dan
            Koppel, Kontruksi bangunan gedung industri, Kontruksi bangunan
            komersial, Kontruksi bangunan hotel, restoran, dan bangunan serupa
            lainnya, Kontruksi jalan raya (kecuali jalan layang), jalan, rel
            kereta api, dan landas pacu bandara, Instalasi tenaga listrik gedung
            dan pabrik, Kontruksi pemasangan gas dalam bangunan, Kontruksi
            perpipaan, gas, energi (pekerjaan rekayasa).
          </p>
          {/* <button
            href="#"
            className="px-6 py-4 text-white font-semibold bg-atlantis-500 hover:bg-atlantis-600"
          >
            Learn more
          </button> */}
        </div>
        {/* here */}
        <div className="w-full px-4 mb-10 lg:w-1/2 lg:mb-0 flex justify-end items-end">
          <div className="relative ">
            <img
              src="https://raw.githubusercontent.com/ivanexist/gcs-new/refs/heads/master/public/images/gcs.jpg"
              alt="aboutimage"
              className="relative z-10 object-cover w-full h-[440px]"
            />
          </div>
        </div>
      </div>
      <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-8 my-20  sm:mx-4 md:mx-0">
        <div className="flex flex-col p-2 text-justify">
          <div className="font-semibold text-2xl my-4 text-blue-600 uppercase flex justify-center items-center">
            KOMITMEN
          </div>
          <div className="text-gray-500">
            Seiring dengan program pemerintah tentang pembangunan
            berkesinambungan serta penggunaan energi alternatif, maka merupakan
            komitmen bagi kami untuk mampu berkarya sebaik mungkin, sehingga
            program pemerataan pembangunan untuk semua masyarakat dapat
            terlayani dan tercukupi dengan baik.
          </div>
        </div>
        <div className="flex flex-col p-2 text-justify">
          <div className="font-semibold text-2xl my-4  text-blue-600 uppercase flex justify-center items-center">
            MISI
          </div>
          <div className="text-gray-500">
            <ul className="list-disc">
              <li>
                Menyediakan solusi jasa yang inovatif dengan melibatkan sumber
                daya terbaik dan relasi yang kuat
              </li>
              <li>
                Meningkatkan nilai tambah bagi stakeholder secara berkelanjutan
                melalui pertumbuhan dan keuntungan perusahaan
              </li>
              <li>
                Fokus pada kualitas layanan serta human capital yang unggul dan
                berakhlak
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col p-2 text-justify">
          <div className="font-semibold text-2xl my-4 text-blue-600 uppercase flex justify-center items-center">
            VISI
          </div>
          <div className="text-gray-500">
            Menjadi Perusahaan Konstruksi Terkemuka dan Professional di Jawa
            Timur 2030
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center text-4xl text-blue-600 font-bold mb-8 uppercase">
        <p className="border-b-2 pb-4 border-b-atlantis-500">Sertifikat</p>
      </div>
      <div className="flex justify-center items-center my-8 mb-16">
        <ul>
          <li className="py-2 font-semibold">
            Sertifikat BUJK - Bangunan Gedung :{" "}
            <span className="text-atlantis-600 ">
              No. 0-3578-06-004-1-13-084037
            </span>
          </li>
          <li className="py-2 font-semibold">
            Sertifikat BUJK - Sipil :{" "}
            <span className="text-atlantis-600 font-semibold">
              No. 0-3578-07-004-1-13-084037
            </span>
          </li>
          <li className="py-2 font-semibold">
            Sertifikat BUJK - Mekanikal :{" "}
            <span className="text-atlantis-600 font-semibold">
              No. 0-3578-06-004-1-13-084037
            </span>
          </li>
          <li className="py-2 font-semibold">
            Sertifikat BUJK - Elektrikal :{" "}
            <span className="text-atlantis-600 font-semibold">
              No. 0-3578-06-004-1-13-084037
            </span>
          </li>
          <li className="py-2 font-semibold">
            SKT MIGAS :{" "}
            <span className="text-atlantis-600 font-semibold">
              No. 5621.Ket/19.11/DMT/2017
            </span>
          </li>
          <li className="py-2 font-semibold">
            STKIG :{" "}
            <span className="text-atlantis-600 font-semibold">
              No. 018000.S/PP.02.03/PMO/2018
            </span>
          </li>
          <li className="py-2 font-semibold">
            SKUP MIGAS :{" "}
            <span className="text-atlantis-600 font-semibold">
              No. 0398/19.07/DMB/2019
            </span>
          </li>
          <li className="py-2 font-semibold">
            Ahli K3 Umum :{" "}
            <span className="text-atlantis-600 font-semibold">
              No. KEP.5756/NAKER-BINWASK3/VII/2017
            </span>
          </li>
        </ul>
      </div>
      <div className="flex justify-center items-center text-4xl text-blue-600 font-bold mb-12 mt-12 uppercase ">
        <p className="border-b-2 pb-4 border-b-atlantis-500">Our Clients</p>
      </div>
      <div className="grid sm:grid-cols-2 md:grid-cols-5 gap-8 my-8 sm:mx-8 md:mx-0 bg-white">
        <div className="flex flex-col m-4">
          <div>
            <img
              src="https://raw.githubusercontent.com/ivanexist/gcs-new/refs/heads/master/public/images/tni-al.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="flex flex-col m-4">
          <div>
            <img
              src="https://raw.githubusercontent.com/ivanexist/gcs-new/refs/heads/master/public/images/pelindo_energi_log.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="flex flex-col m-4">
          <div>
            <img
              src="https://raw.githubusercontent.com/ivanexist/gcs-new/refs/heads/master/public/images/pt-terminal-teluk-lamong.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="flex flex-col m-4">
          <div>
            <img
              src="https://raw.githubusercontent.com/ivanexist/gcs-new/refs/heads/master/public/images/peti_kemas_logo.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="flex flex-col m-4">
          <div>
            <img
              src="https://raw.githubusercontent.com/ivanexist/gcs-new/refs/heads/master/public/images/lamong-energi-logo.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="flex flex-col m-4">
          <div>
            <img
              src="https://raw.githubusercontent.com/ivanexist/gcs-new/refs/heads/master/public/images/clients/BMS.png"
              alt=""
            />
          </div>
        </div>
        <div className="flex flex-col m-4">
          <div>
            <img
              src="https://raw.githubusercontent.com/ivanexist/gcs-new/refs/heads/master/public/images/clients/Disfaslanal.png"
              alt=""
            />
          </div>
        </div>
        <div className="flex flex-col m-4">
          <div>
            <img
              src="https://raw.githubusercontent.com/ivanexist/gcs-new/refs/heads/master/public/images/clients/Kodiklatal.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="flex flex-col m-4">
          <div>
            <img
              src="https://raw.githubusercontent.com/ivanexist/gcs-new/refs/heads/master/public/images/clients/Kodikmar.png"
              alt=""
            />
          </div>
        </div>
        <div className="flex flex-col m-4">
          <div>
            <img
              src="https://raw.githubusercontent.com/ivanexist/gcs-new/refs/heads/master/public/images/clients/Lantamal V.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
    <hr />
  </section>
);
export default AboutContent;
