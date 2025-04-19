import { Route, Routes } from "react-router-dom";
import WatchList from "./WatchList";
import Summary from "./Summary";
import Order from "./Order";
import Holding from "./Holding";
import Positon from "./Positon";
import Funds from "./Funds";
import Apps from "./Apps";
import { GeneralContextProvider } from "./GeneralContext";

function Dashboard() {
    return (
        <>
            <div className="dashboard-container">
                <GeneralContextProvider>
                    <WatchList />
                </GeneralContextProvider>
                <div className="content">
                    <Routes>
                        <Route exact path="/" element={<Summary />} />
                        <Route path="/orders" element={<Order />} />
                        <Route path="/holdings" element={<Holding />} />
                        <Route path="/positions" element={<Positon />} />
                        <Route path="/funds" element={<Funds />}></Route>
                        <Route path="/apps" element={<Apps />} />
                    </Routes>
                </div>
            </div>

        </>
    );
}

export default Dashboard;