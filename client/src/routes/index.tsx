import { PageProductDetails } from "../pages/PageProductDetails";
import { Routes, Route } from "react-router-dom";
import { SignIn } from "../pages/SignIn";
import { SignUp } from "../pages/SignUp";
import { Home } from "../pages/Home";
import { PageNewPassword } from "../pages/PageNewPassword";
import { PageAuctionDetails } from "../pages/PageAuctionDetails";

const AllRoutes = () => {
    return(
        <Routes>
            <Route path="/signin" element={<SignIn />}/>
            <Route path="/signup" element={<SignUp />} />
            <Route path="/newpassword" element={<PageNewPassword />} />
            <Route path="/products/:productId" element={<PageProductDetails />} />
            <Route path="/auctions/:auctionId" element={<PageAuctionDetails />} />
            <Route index element={<Home/>}/>
        </Routes>
    )
}

export { AllRoutes }
