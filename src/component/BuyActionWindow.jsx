import "./BuyActionWindow.css";
import GeneralContext from "./GeneralContext";
import { Link } from "react-router-dom";

function BuyActionWindow() {
    const handleCancelClick = ({uid}) => {
        GeneralContext.closeBuyWindow();
      };
    return (
        <>
            <div className="container" id="buy-window" draggable="true">
                <div className="regular-order">
                    <div className="inputs">
                        <fieldset>
                            <legend>Qty.</legend>
                            <input type="number" name="qty" id="qty"></input>
                        </fieldset>
                        <fieldset>
                            <legend>Price</legend>
                            <input type="number" name="price" id="price" step="0.05"></input>
                        </fieldset>
                    </div>
                </div>
                <div className="buttons">
                    <span>Margin required ₹140.65</span>
                    <div>
                        <Link className="btn btn-blue" onClick={handleBuyClick}>
                            Buy
                        </Link>
                        <Link to="" className="btn btn-grey" onClick={handleCancelClick}>
                            Cancel
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}
export default BuyActionWindow;