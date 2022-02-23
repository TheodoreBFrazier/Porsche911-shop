import PorscheDetails from "../Components/PorscheDetails";
//make sure to use exact path to disable partial matching when displaying and index
function Show() {
  return (
    <div className="show">
      <h2>Show</h2>
      <PorscheDetails />
    </div>
  )
}

export default Show;