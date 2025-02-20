import Pause from "/public/img/Polygon 1.png";

export default function InputGo() {
  return (
    <div className="relative mt-[100px] flex items-center w-full max-w-[40rem] border-[#6f7cd6] border-[2px] rounded-full bg-[#0000006d] backdrop-blur-[2px]">
      <input
        type="text"
        placeholder="Type something..."
        maxLength={30}
        className="w-full p-7 pr-24 text-white bg-transparent rounded-full outline-none transition"
      />

      <button className="absolute right-3 top-3 bottom-3 flex items-center px-4 py-2 bg-[#141414] text-white rounded-full hover:bg-[#1E1E1E] transition border border-[#6f7cd6]">
        <span className="mr-2 text-sm">Let's Go</span>
        <img
          className="p-[10px] rounded-full bg-[#6f7cd6]"
          src={Pause}
          alt="Pause Icon"
        />
      </button>
    </div>
  );
}
