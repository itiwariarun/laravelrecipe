import React from "react";
import Dashboard from "./Dashboard";
import UserTable from "./UserTable";
function User() {
    return (
        <Dashboard>
            <div className="user">
                {/* Replace with your content */}
                <div className="py-4 pt-8">
                    <div className="rounded-lg ">
                        <UserTable />
                    </div>
                </div>
                {/* /End replace */}
            </div>
        </Dashboard>
    );
}

export default User;
