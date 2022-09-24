import React, { useState, useEffect } from "react";
import axios from "axios";
import ReactPaginate from "react-paginate";

function SellerTable() {
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
                    <div className="text-gray-900">Chineese</div>
                    <div className="text-gray-500">Noodles</div>
                </td>
                <td className="Ts7">
                    <span className="Ts8">Active</span>
                </td>
                <td className="Ts7">1830</td>
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
                    <h2 className="Ts13">Our Sellers</h2>
                    <div className="Ts14">
                        <div className="Ts15">
                            <div className="Ts16">
                                <table className="Ts17">
                                    <thead className="bg-gray-50">
                                        <tr>
                                            <th scope="col" className="Ts18">
                                                Seller Info
                                            </th>
                                            <th scope="col" className="Ts19">
                                                Speciality
                                            </th>
                                            <th scope="col" className="Ts19">
                                                Current Status
                                            </th>
                                            <th scope="col" className="Ts19">
                                                Total Delivered
                                            </th>
                                            <th scope="col" className="Ts19">
                                                Today Ordered
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
                previousLabel={"prev"}
                nextLabel={"next"}
                breakLabel={"..."}
                breakClassName={"break-me"}
                pageCount={pageCount}
                marginPagesDisplayed={2}
                pageRangeDisplayed={5}
                onPageChange={handlePageClick}
                containerClassName={"pagination"}
                subContainerClassName={"pages pagination"}
                activeClassName={"active"}
                className="Ts21"
            />
        </div>
    );
}

export default SellerTable;
