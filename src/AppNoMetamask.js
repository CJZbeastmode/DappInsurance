import TopTileInvalid from "./Components/TopTile/TopTileInvalid";

function AppNoMetamask()
{
    return (
        <div>
          <div style={{ height: "100px" }}></div>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <div style={{ width: "10%" }}></div>
            <TopTileInvalid />
            <div style={{ width: "10%" }}></div>
          </div>
        </div>
      );
}

export default AppNoMetamask;