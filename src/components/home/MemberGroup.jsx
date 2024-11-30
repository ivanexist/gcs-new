const MemberGroup = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center px-8 pt-8 mt-12">
      <div className="flex justify-center items-center sm:text-lg lg:text-3xl text-blue-600 font-bold uppercase ">
        <p className="border-b-2 pb-4 border-b-atlantis-500">
          Member of GEMILANG Group
        </p>
      </div>
      <div className="w-[440px] h-40 mt-16 mb-24 rounded-xl shadow-lg">
        <img
          src="https://raw.githubusercontent.com/ivanexist/gcs-new/refs/heads/master/public/images/eka-langgeng-abadi-logo.jpg"
          alt=""
          className="rounded-lg"
        />
      </div>
    </div>
  );
};
export default MemberGroup;
