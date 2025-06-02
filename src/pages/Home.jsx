import { Link, Navigate, useNavigate } from "react-router-dom";
import useUser from "../features/authentication/useUser";

function Home() {
  const {user} = useUser();
  const navigate =  useNavigate();
  const handleClick = () => {
    navigate('/auth')
  }
  return (
    <div className="h-screen flex items-center justify-center bg-secondary-0">
      <div className="container text-center xl:max-w-screen-xl">
        {/* <h1 className="p-4 text-xl text-secondary-700">صفحه اصلی</h1> */}
        <h1 className="text-3xl md:text-4xl text-secondary-700 font-semibold">به <span className="font-black">فریلنسر</span> خوش آمدید</h1>
        <button onClick={handleClick} className="text-secondary-800 text-lg font-medium mt-14">
          {
            user ? 'برای ورود کلیک کنید' : 'برای ثبت نام کلیک کنید'
          }
        </button>
      </div>
    </div>
  );
}
export default Home;
