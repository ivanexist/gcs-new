const Testimonial = () => {
  return (
    <>
      {/* <section className="flex items-center bg-white"> */}
      <section className="flex items-center bg-white">
        <div className="justify-center flex-1 max-w-6xl py-4 mx-auto lg:py-6 md:px-6">
          <div className="flex justify-center items-center text-4xl text-blue-600 font-bold mt-12 mb-24 uppercase ">
            <p className="border-b-2 pb-4 border-b-atlantis-500">Our Clients</p>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-5 gap-8 my-8 sm:mx-8 md:mx-0">
            <div className="flex flex-col">
              <div>
                <img src="../../../public/images/tni-al.jpg" alt="" />
              </div>
            </div>
            <div className="flex flex-col">
              <div>
                <img
                  src="../../../public/images/pelindo_energi_log.jpg"
                  alt=""
                />
              </div>
            </div>
            <div className="flex flex-col">
              <div>
                <img
                  src="../../../public/images/pt-terminal-teluk-lamong.jpg"
                  alt=""
                />
              </div>
            </div>
            <div className="flex flex-col">
              <div>
                <img src="../../../public/images/peti_kemas_logo.jpg" alt="" />
              </div>
            </div>
            <div className="flex flex-col">
              <div>
                <img
                  src="../../../public/images/lamong-energi-logo.jpg"
                  alt=""
                />
              </div>
            </div>
            <div className="flex flex-col m-4">
              <div>
                <img src="../../../public/images/clients/BMS.png" alt="" />
              </div>
            </div>
            <div className="flex flex-col m-4">
              <div>
                <img
                  src="../../../public/images/clients/Disfaslanal.png"
                  alt=""
                />
              </div>
            </div>
            <div className="flex flex-col m-4">
              <div>
                <img
                  src="../../../public/images/clients/Kodiklatal.jpg"
                  alt=""
                />
              </div>
            </div>
            <div className="flex flex-col m-4">
              <div>
                <img src="../../../public/images/clients/Kodikmar.png" alt="" />
              </div>
            </div>
            <div className="flex flex-col m-4">
              <div>
                <img
                  src="../../../public/images/clients/Lantamal V.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Testimonial;
