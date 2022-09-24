import React from "react";
import Dashboard from "./Dashboard";
import UserTable from "./UserTable";
function User() {
    return (
        <Dashboard>
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <h1 className="text-2xl font-semibold text-gray-900">User</h1>
            </div>
            <div className="px-4 mx-auto max-w-7xl sm:px-6 md:px-8">
                {/* Replace with your content */}
                <div className="py-4">
                    <div className="rounded-lg  h-96">
                        <UserTable />
                    </div>
                </div>
                {/* /End replace */}
            </div>
        </Dashboard>
    );
}

export default User;
