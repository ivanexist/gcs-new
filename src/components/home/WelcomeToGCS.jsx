import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { GCSContext } from "../../context/GCSContext";
import { motion } from "framer-motion";
import { div } from "framer-motion/client";
import { Collapse } from "antd";
import { ReactSVG } from "react-svg";

const items = [
  {
    key: "1",
    label: "Glory",
    icon: "glory.svg",
    children: (
      <p>
        Berusaha meraih kemuliaan dalam setiap usaha yang dilakukan, dengan
        tujuan mencapai hasil terbaik yang dapat dibanggakan.
      </p>
    ),
  },
  {
    key: "2",
    label: "Excellent",
    icon: "excellence.svg",
    children: (
      <p>
        Selalu berusaha memberikan hasil yang sangat baik, dengan standar tinggi
        yang tak tergoyahkan dalam setiap langkah yang diambil.
      </p>
    ),
  },
  {
    key: "3",
    label: "Modest",
    icon: "modest.svg",
    children: (
      <p>
        Meskipun telah mencapai banyak kesuksesan, tetap mempertahankan sikap
        rendah hati dan tidak berlebihan dalam merayakan pencapaian.
      </p>
    ),
  },
  {
    key: "4",
    label: "Innovative",
    icon: "innovative.svg",
    children: (
      <p>
        Selalu terbuka untuk ide-ide baru dan berfokus pada penciptaan solusi
        inovatif yang dapat membawa perubahan positif di masa depan.
      </p>
    ),
  },
  {
    key: "5",
    label: "Loyal",
    icon: "loyal.svg",
    children: (
      <p>
        Memiliki kesetiaan yang kuat terhadap nilai-nilai yang diyakini, serta
        tetap teguh pada prinsip meski dalam berbagai tantangan.
      </p>
    ),
  },
  {
    key: "6",
    label: "Accurate",
    icon: "accuracy.svg",
    children: (
      <p>
        Menjaga ketepatan dan keakuratan dalam setiap tindakan, karena kualitas
        tersebut sangat penting untuk hasil yang maksimal.
      </p>
    ),
  },
  {
    key: "7",
    label: "Networking",
    icon: "networking.svg",
    children: (
      <p>
        Membangun hubungan yang kuat dan saling menguntungkan, yang dapat
        mendukung pengembangan dan kemajuan bersama.
      </p>
    ),
  },
  {
    key: "8",
    label: "Growth",
    icon: "growth.svg",
    children: (
      <p>
        Berfokus pada perkembangan yang berkelanjutan, dengan selalu mencari
        peluang untuk tumbuh lebih baik dalam segala aspek.
      </p>
    ),
  },
];

const WelcomeToGCS = () => {
  const [activeKey, setActiveKey] = useState(["1"]);

  const handleChange = (key) => {
    setActiveKey(key);
  };
  return (
    <div className="grid sm:grid-cols-1 lg:grid-cols-5 sm:mb-6 lg:mb-20 bg-gray-100 sm:mt-4 lg:mt-16">
      <div className="w-[480px] text-left lg:col-span-2">
        <h1 className="font-semibold my-4 mb-8 pb-2 text-blue-600 text-2xl font-PlayfairDisplay border-b border-b-malachite-600 w-fit text-center mx-auto uppercase">
          Core Values
        </h1>
        <Collapse activeKey={activeKey} onChange={handleChange} ghost accordion>
          {items.map((item) => (
            <Collapse.Panel
              key={item.key}
              showArrow={false}
              header={
                <div
                  className={`p-4 flex rounded-lg shadow-sm text-lg font-PlayfairDisplay font-bold transition-colors duration-300 ${
                    activeKey.includes(item.key)
                      ? "bg-blue-500 text-white border-r-malachite-600 border-r-8"
                      : "bg-gray-200 text-blue-600"
                  }`}
                >
                  <span className="w-8 h-8 mr-4">
                    <ReactSVG
                      className="w-8 h-8 group-hover:text-white text-blue-500 transition-colors duration-300"
                      src={`https://raw.githubusercontent.com/ivanexist/gcs-new/refs/heads/master/public/icon/corevalues/${item.icon}`}
                    />
                  </span>{" "}
                  {item.label}
                </div>
              }
            >
              <p className="border border-malachite-600 p-4 text-lg font-openSans">
                {item.children}
              </p>
            </Collapse.Panel>
          ))}
        </Collapse>
      </div>

      <div className="relative sm:w-full sm:h-full flex flex-col-reverse py-16 lg:pt-0 lg:flex-col lg:pb-0 mx-auto overflow-hidden lg:col-span-3">
        <img
          className="relative sm:p-4 sm:hidden lg:block"
          src="https://raw.githubusercontent.com/ivanexist/gcs-new/refs/heads/master/public/images/gcs.jpg"
          alt="GCS Logo"
        />
      </div>
    </div>
  );
};
export default WelcomeToGCS;
