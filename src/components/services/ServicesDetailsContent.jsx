import { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { GCSContext } from "../../context/GCSContext";

const ServicesDetailsContent = () => {
  const { serviceId } = useParams();
  const { gcsData } = useContext(GCSContext);
  const selectedService = gcsData.Services.find(
    (service) => service.service_id === parseInt(serviceId, 10)
  );
  const getServiceName = (serviceId) => {
    const service = gcsData.Services.find(
      (service) => service.service_id === serviceId
    );
    return service ? service.service_name : "Unknown Service";
  };
  return (
    <section className="flex items-center bg-white">
      <div className="justify-center flex-1 max-w-7xl py-4 mx-auto lg:py-6 md:px-6">
        <div className="grid sm:grid-cols-1 lg:grid-cols-7 my-16">
          <div className="flex justify-between items-start col-span-2 ml-4 pb-4">
            <div className=" ml-2 p-8 bg-gray-100">
              <ul className="list-disc marker:text-atlantis-500">
                {/* {console.log("serviceId " + serviceId)}
                {console.log("service_id " + selectedService.service_id)} */}

                {/* {console.log(selectedService.service_id == serviceId)} */}
                {gcsData.Services.map((service) => (
                  <li
                    key={service.service_id}
                    className={`text-blue-500 hover:text-blue-600 ${
                      selectedService?.service_id === service.service_id
                        ? "text-blue-600 font-semibold"
                        : " "
                    } hover:font-semibold py-2`}
                  >
                    <Link to={`/services/${service.service_id}`}>
                      {service.service_name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="col-span-5">
            <div className="col-span-3">
              <div className="flex bg-gray-100">
                <div className="col-span-2">
                  <div className="pr-8 pl-4">
                    <p className="text-gray-400 py-4 font-semibold">
                      SPECIAL SERVICES
                    </p>
                    <h1 className="text-2xl border-b-2 border-b-atlantis-500 pb-4 font-semibold text-blue-600">
                      {getServiceName(selectedService.service_id)}
                    </h1>
                    <p className="my-4 text-gray-500 text-justify">
                      {selectedService.description[0].description_overview}
                    </p>
                  </div>
                </div>
                <div className="col-span-1">
                  <div className="h-64 w-96 overflow-hidden">
                    <img
                      src={`https://raw.githubusercontent.com/ivanexist/gcs-new/refs/heads/master/public/images/${selectedService.service_image}`}
                      alt=""
                      className="h-72 w-[580px] object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="py-4">
              <h1 className="my-4 font-semibold text-blue-600 text-xl">
                Perencanaan dan Desain
              </h1>
              <p className="text-gray-500">
                <ul className="list-disc mx-4">
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
              <h1 className="mb-4 font-semibold text-blue-600 text-xl">
                Manajemen Proyek
              </h1>
              <p className="text-gray-500">
                <ul className="list-disc mx-4">
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
              <h1 className="mb-4 font-semibold text-blue-600 text-xl">
                Evaluasi Kelayakan
              </h1>
              <p className="text-gray-500">
                <ul className="list-disc mx-4">
                  <li className="my-2">
                    Kajian kelayakan proyek terkait dengan kondisi tanah, cuaca
                    dan aspek lingkungan
                  </li>
                </ul>
              </p>
            </div>
            <div className="py-4">
              <h1 className="mb-4 font-semibold text-blue-600 text-xl">
                Biaya dan Anggaran
              </h1>
              <p className="text-gray-500">
                <ul className="list-disc mx-4">
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
            {/* <div className="col-span-2"></div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesDetailsContent;
