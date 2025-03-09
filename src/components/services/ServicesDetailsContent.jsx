import { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { GCSContext } from "../../context/GCSContext";
import { Button, Dropdown, Menu } from "antd";
import { useMediaQuery } from "react-responsive";
import { ReactSVG } from "react-svg";

const ServicesDetailsContent = () => {
  const { serviceId } = useParams();
  const { gcsData } = useContext(GCSContext);
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  const selectedService = gcsData.Services.find(
    (service) => service.service_id === parseInt(serviceId, 10)
  );
  const getServiceName = (serviceId) => {
    const service = gcsData.Services.find(
      (service) => service.service_id === serviceId
    );
    return service ? service.service_name : "Unknown Service";
  };

  const servicesMenu = (
    <Menu>
      {gcsData.Services.map((service) => (
        <Menu.Item key={service.service_id}>
          <Link to={`/services/${service.service_id}`}>
            {service.service_name}
          </Link>
        </Menu.Item>
      ))}
    </Menu>
  );

  return (
    <section className="flex items-center bg-gray-100">
      <div className="justify-center flex-1 max-w-7xl sm:py-4 lg:py-0 lg:mb-12 mx-auto">
        <div className="grid sm:grid-cols-1 lg:grid-cols-7 sm:my-0 lg:my-2">
          <div className="col-span-5 ps-1">
            <div className="col-span-3">
              <div className="lg:flex sm:flex-col bg-gray-100">
                <div className="relative sm:h-80 md:h-[300px] lg:h-[500px] px-1 overflow-hidden">
                  <img
                    src={`https://raw.githubusercontent.com/ivanexist/gcs-new/refs/heads/master/public/images/${selectedService.service_image}`}
                    alt=""
                    className="w-full h-full object-cover object-center shadow-lg overflow-hidden"
                  />
                </div>
                <div className="pt-8 sm:px-2 lg:px-0 lg:pr-4">
                  <h1 className="sm:mt-4 lg:mt-0 text-2xl border-b-2 border-b-malachite-600 pb-4 mb-6 font-medium text-blue-600 sm:text-center lg:text-left font-PlayfairDisplay w-fit uppercase">
                    {getServiceName(selectedService.service_id)}
                  </h1>
                  <p className="my-4 text-lg leading-8 text-masala-800 font-openSans">
                    {selectedService.description[0].description_complete}
                  </p>
                </div>
              </div>
            </div>
            <div className="py-4">
              <h1 className="my-4 font-semibold text-blue-600 text-2xl sm:text-center lg:text-left font-PlayfairDisplay">
                Perencanaan dan Desain
              </h1>
              <p className="text-masala-800">
                <ul className="list-disc mx-4 font-openSans text-lg">
                  <li className="my-2">
                    Konsultasi mengenai desain struktural dan kebutuhan teknis
                    lainnya
                  </li>
                  <li className="my-2">
                    Saran tentang efisiensi biaya dan waktu pengerjaan
                  </li>
                  <li className="my-2">
                    Pemilihan material yang sesuai dengan anggaran dan tujuan
                    proyek
                  </li>
                </ul>
              </p>
            </div>
            <div className="py-4">
              <h1 className="mb-4 font-semibold sm:text-center lg:text-left text-blue-600 text-2xl font-PlayfairDisplay">
                Manajemen Proyek
              </h1>
              <p className="text-masala-800">
                <ul className="list-disc mx-4 font-openSans text-lg">
                  <li className="my-2">
                    Penjadwalan proyek dan estimasi durasi pengerjaan
                  </li>
                  <li className="my-2">
                    Pengelolaan sumber daya manusia dan material di lapangan
                  </li>
                  <li className="my-2">
                    Strategi untuk mengatasi potensi hambatan yang bisa terjadi
                    selama pembangunan
                  </li>
                </ul>
              </p>
            </div>
            <div className="py-4">
              <h1 className="mb-4 font-semibold sm:text-center lg:text-left text-blue-600 text-2xl font-PlayfairDisplay">
                Evaluasi Kelayakan
              </h1>
              <p className="text-masala-800">
                <ul className="list-disc mx-4 font-openSans text-lg">
                  <li className="my-2">
                    Kajian kelayakan proyek terkait dengan kondisi tanah, cuaca
                    dan aspek lingkungan
                  </li>
                </ul>
              </p>
            </div>
            <div className="py-4">
              <h1 className="mb-4 font-semibold text-blue-600 text-2xl sm:text-center lg:text-left font-PlayfairDisplay">
                Biaya dan Anggaran
              </h1>
              <p className="text-masala-800">
                <ul className="list-disc mx-4 font-openSans text-lg">
                  <li className="my-2">
                    Diskusi mengenai estimasi biaya konstruksi dan bagaimana
                    cara mengelola anggaran proyek secara efektif
                  </li>
                  <li className="my-2">
                    Konsultasi tentang potensi penghematan biaya atau solusi
                    yang lebih efisien
                  </li>
                </ul>
              </p>
            </div>
          </div>
          <div className="flex justify-between items-start col-span-2 sm:mx-2 lg:mx-0 pb-4">
            {isMobile ? (
              <Dropdown
                overlay={servicesMenu}
                trigger={["click"]}
                className="py-6 font-semibold text-base bg-gray-50"
              >
                <Button className="w-full">Select Service</Button>
              </Dropdown>
            ) : (
              <div className="ml-8 leading-6 bg-transparent border-2 shadow">
                <ul className="divide-y divide-blue-300">
                  {gcsData.Services.map((service) => (
                    <Link
                      to={`/services/${service.service_id}`}
                      key={service.service_id}
                    >
                      <li
                        className={`text-blue-500 hover:text-white hover:bg-blue-500 hover:cursor-pointer hover:border-l-8 hover:border-l-malachite-600 border-b border-b-blue-300 ${
                          selectedService?.service_id === service.service_id
                            ? "text-white bg-blue-500 font-semibold border-l-8 border-l-malachite-600"
                            : " "
                        } hover:font-semibold py-6 px-8 text-lg group`}
                      >
                        <div className="flex">
                          <ReactSVG
                            className={`w-8 h-8 group-hover:text-white group-hover:cursor-pointer text-blue-500 transition-colors duration-300 ${
                              selectedService?.service_id === service.service_id
                                ? "text-white bg-blue-500 font-semibold"
                                : " "
                            }`}
                            src={`https://raw.githubusercontent.com/ivanexist/gcs-new/refs/heads/master/public/icon/${service.service_icon}`}
                          />
                          <span className="ml-4 mt-1">
                            {service.service_name}
                          </span>
                        </div>
                      </li>
                    </Link>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesDetailsContent;
