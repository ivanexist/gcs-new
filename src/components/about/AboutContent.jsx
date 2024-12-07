const AboutContent = () => (
  <section className="flex items-center max-w-screen-xl bg-transparent mx-auto">
    <div className="justify-center flex-1 mx-auto md:px-6">
      <div className="flex justify-center items-center self-center">
        <h1 className="text-3xl font-sans font-bold text-blue-600 md:text-4xl uppercase my-8">
          WHO WE ARE?
        </h1>
      </div>
      <div className="flex sm:flex-col-reverse md:flex-row md:justify-between md:items-end">
        <div className="sm:w-full lg:w-1/2 lg:mb-0 px-4">
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
        </div>
        {/* images */}
        <div className="w-full px-4 mb-10 lg:w-1/2 lg:mb-0">
          <img
            src="https://raw.githubusercontent.com/ivanexist/gcs-new/refs/heads/master/public/images/about-gcs.jpg"
            alt="aboutimage"
            className="relative z-10 object-cover w-full h-[480px]"
          />
        </div>
      </div>
      <div className="grid sm:grid-cols-1 md:grid-cols-3 lg:gap-8 mb-8 lg:mt-8 sm:mx-4 md:mx-0">
        <div className="flex flex-col p-2 text-justify">
          <div className="font-semibold text-2xl my-4 text-blue-600 uppercase flex justify-center items-center">
            Commitment
          </div>
          <div className="text-gray-500">
            Seiring dengan program pemerintah tentang pembangunan
            berkesinambungan serta penggunaan energi alternatif, maka merupakan
            komitmen bagi kami untuk mampu berkarya sebaik mungkin, sehingga
            program pemerataan pembangunan untuk semua masyarakat dapat
            terlayani dan tercukupi dengan baik.
          </div>
        </div>
        <div className="flex flex-col p-2 text-justify mx-2">
          <div className="font-semibold text-2xl my-4  text-blue-600 uppercase flex justify-center items-center">
            Our Mission
          </div>
          <div className="text-gray-500">
            <ul className="list-disc">
              <li className="mb-2">
                Menyediakan solusi jasa yang inovatif dengan melibatkan sumber
                daya terbaik dan relasi yang kuat
              </li>
              <li className="mb-2">
                Meningkatkan nilai tambah bagi stakeholder secara berkelanjutan
                melalui pertumbuhan dan keuntungan perusahaan
              </li>
              <li className="mb-2">
                Fokus pada kualitas layanan serta human capital yang unggul dan
                berakhlak
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col p-2 text-justify">
          <div className="font-semibold text-2xl my-4 text-blue-600 uppercase flex justify-center items-center">
            Our Vision
          </div>
          <div className="text-gray-500">
            Menjadi Perusahaan Konstruksi Terkemuka dan Professional di Jawa
            Timur 2030
          </div>
        </div>
      </div>
    </div>
    <hr />
  </section>
);
export default AboutContent;
