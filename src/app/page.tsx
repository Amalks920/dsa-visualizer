import Image from "next/image";
import Sidebar from "./components/Sidebar/SideBar";
import DummyComponent from "./components/DummyComponent";

export default function Home() {
  return (
    <div className="flex min-h-screen">
    <div className="w-[80vw] bg-gray-100 p-4 pb-0">
        <div className="h-[700px] ">row1
          <DummyComponent />
        </div>
        <div className="h-fit min-h-[500px]">row2
        </div>
    </div>
    <div className="w-[20vw] bg-gray-300">
      <Sidebar/>
    </div>
  </div>
  );
}
