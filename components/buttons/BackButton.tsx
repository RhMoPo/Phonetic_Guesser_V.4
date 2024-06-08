import { IoArrowBack } from "react-icons/io5";
import { useRouter } from "next/router";

const BackButton = () => {
  const router = useRouter();

  const handleGoBack = () => {
    router.back();
  };

  return (
    <button
      onClick={handleGoBack}
      className="absolute top-0 left-0 flex items-center m-4 px-3 py-2 rounded-md bg-gray-200 hover:bg-gray-300 text-gray-800 focus:outline-none focus:bg-gray-300"
    >
      <IoArrowBack className="mr-2" />
      Back
    </button>
  );
};

export default BackButton;
