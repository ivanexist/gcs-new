import { useContext } from "react";
import { Link } from "react-router-dom";
import { GCSContext } from "../../context/GCSContext";

const WelcomeToGCS = () => {
  const { scrollToTop } = useContext(GCSContext);
  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 my-16 bg-gray-100">
      <div className="">
        <img
          className="relative w-full h-[520px]"
          src="https://raw.githubusercontent.com/ivanexist/gcs-new/refs/heads/master/public/images/gcs.jpg"
          alt=""
        />
      </div>
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-3xl flex justify-center items-center font-bold uppercase mx-8 pb-4 border-b-atlantis-500 border-b-2 text-blue-600">
          CORE VALUE
        </h1>
        {/* <p className="mx-8 text-justify text-gray-600">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi non
          eum quod, consequatur ex et facilis quibusdam aut, quidem inventore
          libero blanditiis adipisci laudantium eveniet. Eligendi, nobis ipsum
          quisquam molestiae ratione animi autem minus distinctio explicabo vero
          mollitia eaque laborum.
        </p> */}
        <div className="mx-16 pl-16 my-4 text-gray-600">
          <ul className="flex flex-col justify-center items-start list-none">
            <li className="my-2 text-xl text-blue-600">
              <b>
                <i>Glory</i>
              </b>{" "}
              - <span className="text-atlantis-500">Bagus</span>
            </li>
            <li className="my-2 text-xl text-blue-600">
              <b>
                <i>Excellent</i>
              </b>{" "}
              - <span className="text-atlantis-500">Sempurna</span>
            </li>
            <li className="my-2 text-xl text-blue-600">
              <b>
                <i>Modest</i>
              </b>{" "}
              - <span className="text-atlantis-500">Sederhana</span>
            </li>
            <li className="my-2 text-xl text-blue-600">
              <b>
                <i>Innovative</i>
              </b>{" "}
              - <span className="text-atlantis-500">Inovasi</span>
            </li>
            <li className="my-2 text-xl text-blue-600">
              <b>
                <i>Loyal</i>
              </b>{" "}
              - <span className="text-atlantis-500">Setia</span>
            </li>
            <li className="my-2 text-xl text-blue-600">
              <b>
                <i>Accurate</i>
              </b>{" "}
              - <span className="text-atlantis-500">Tepat</span>
            </li>
            <li className="my-2 text-xl text-blue-600">
              <b>
                <i>Networking</i>
              </b>{" "}
              - <span className="text-atlantis-500">Membangun Hubungan</span>
            </li>
            <li className="my-2 text-xl text-blue-600">
              <b>
                <i>Growth</i>
              </b>{" "}
              - <span className="text-atlantis-500">Bertumbuh</span>
            </li>
            {/* <li>Elevated quality of workmanship</li>
            <li>Meeting diverse supplier requirements</li>
            <li>Implementing appropriate safety precautions and procedures</li> */}
          </ul>
        </div>
        <div className="mx-8 my-4">
          <Link to={`/contact`} onClick={scrollToTop}>
            <button className="px-8 py-4 bg-atlantis-500 font-semibold text-white">
              GET IN TOUCH
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default WelcomeToGCS;
