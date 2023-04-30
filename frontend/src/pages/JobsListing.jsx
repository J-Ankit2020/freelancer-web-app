import Card from "./Card";
import SideBar from "../components/Sidebar";
import Filters from "./Filters";
const JobsListing = () => {
  return (
    <div className=" flex  ">
      <div className="" >
      <SideBar />
      </div>
        <div className="grid grid-cols-2 ">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      <div className="w-[35%] ">
      <Filters/>

      </div>
    </div>
  );
};
export default JobsListing;
