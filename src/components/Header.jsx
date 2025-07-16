import image1 from "../assets/image1.png";
const Header = () => {
  return (
    <header className="bg-blue-600 text-white p-5 rounded-xl flex justify-between items-center">
      <div>
        <div className="font-bold text-3xl">Jyotismita Das</div>
        <div className="text-xl">Student</div>
      </div>
      <img className="rounded-full w-24" src={image1} alt="" />
    </header>
  )
}

export default Header;