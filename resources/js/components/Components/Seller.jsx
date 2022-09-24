import React from "react";
import Dashboard from "./Dashboard";
import SellerTable from "./SellerTable";
function Seller() {
    return (
        <Dashboard>
            <div className="user">
                {/* Replace with your content */}
                <div className="py-4 pt-8">
                    <div className="rounded-lg ">
                        <SellerTable />
                    </div>
                </div>
                {/* /End replace */}
            </div>
        </Dashboard>
    );
}

export default Seller;
