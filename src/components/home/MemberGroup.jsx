const MemberGroup = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center px-8 pt-8 mt-12">
      <div className="flex justify-center items-center sm:text-3xl lg:text-4xl text-center text-blue-600 font-bold uppercase ">
        <p>Member of GEMILANG Group</p>
      </div>
      <div className="w-[20rem] h-40 mt-16 mb-4 rounded-xl">
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
