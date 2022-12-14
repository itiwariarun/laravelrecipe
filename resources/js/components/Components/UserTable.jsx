import React, { useState, useEffect } from "react";
import axios from "axios";
import ReactPaginate from "react-paginate";

function UserTable() {
    const [offset, setOffset] = useState(0);
    const [data, setData] = useState([]);
    const [perPage] = useState(10);
    const [pageCount, setPageCount] = useState(0);

    const getData = async () => {
        const res = await axios.get(
            `https://jsonplaceholder.typicode.com/comments`
        );
        const data = res.data;
        const slice = data.slice(offset, offset + perPage);
        const postData = slice.map((pd) => (
            <tr key={pd.id} className="text-center">
                <td className="Ts1">
                    <div className="Ts2">
                        <div className="Ts3">
                            <img
                                className="Ts4"
                                src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                alt=""
                            />
                        </div>
                        <div className="Ts5">
                            <div className="Ts6">{pd.name}</div>
                            <div className="text-gray-500">{pd.email}</div>
                        </div>
                    </div>
                </td>
                <td className="Ts7">
                    <div className="text-gray-900">Italian</div>
                    <div className="text-gray-500">Pizza</div>
                </td>
                <td className="Ts7">
                    <span className="Ts8">Active</span>
                </td>
                <td className="Ts7">18/10/2022</td>
                <td className="Ts7">183</td>
                <td className="Ts9">
                    <a href="#" className="Ts10">
                        Block
                        <span className="sr-only">, {pd.name}</span>
                    </a>
                </td>
            </tr>
        ));
        setData(postData);
        setPageCount(Math.ceil(data.length / perPage));
    };
    const handlePageClick = (e) => {
        const selectedPage = e.selected;
        setOffset(selectedPage + 1);
    };

    useEffect(() => {
        getData();
    }, [offset]);

    return (
        <div>
            <div className="Ts11">
                <div className="Ts12">
                    <h2 className="Ts13">Our Users</h2>
                    <div className="Ts14">
                        <div className="Ts15">
                            <div className="Ts16">
                                <table className="Ts17">
                                    <thead className="bg-gray-50">
                                        <tr>
                                            <th scope="col" className="Ts18">
                                                Users Info
                                            </th>
                                            <th scope="col" className="Ts19">
                                                Most Ordered
                                            </th>
                                            <th scope="col" className="Ts19">
                                                Last Active on
                                            </th>
                                            <th scope="col" className="Ts19">
                                                Last Ordered
                                            </th>
                                            <th scope="col" className="Ts19">
                                                Total Ordered
                                            </th>
                                            <th scope="col" className="Ts19">
                                                BLock
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="Ts20">{data}</tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <ReactPaginate
                subContainerClassName={"pages pagination"}
                nextLabel="next ???"
                onPageChange={handlePageClick}
                pageRangeDisplayed={2}
                marginPagesDisplayed={2}
                pageCount={pageCount}
                previousLabel="??? prev"
                pageClassName="page-item"
                pageLinkClassName="page-plink"
                previousClassName="page-prev"
                previousLinkClassName="page-prlink"
                nextClassName="page-next"
                nextLinkClassName="page-nelink"
                breakLabel="..."
                breakClassName="page-item"
                breakLinkClassName="page-blink"
                containerClassName="pagination"
                activeClassName="active"
                renderOnZeroPageCount={null}
            ></ReactPaginate>
        </div>
    );
}

export default UserTable;
