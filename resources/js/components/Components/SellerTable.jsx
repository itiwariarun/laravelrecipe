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
                <td className="py-4 pl-4 pr-3 text-sm whitespace-nowrap sm:pl-6">
                    <div className="flex items-center">
                        <div className="flex-shrink-0 w-10 h-10">
                            <img
                                className="w-10 h-10 rounded-full"
                                src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                alt=""
                            />
                        </div>
                        <div className="ml-4 text-left">
                            <div className="font-medium text-gray-900">
                                {pd.name}
                            </div>
                            <div className="text-gray-500">{pd.email}</div>
                        </div>
                    </div>
                </td>
                <td className="px-3 py-4 text-sm text-gray-500 whitespace-nowrap">
                    <div className="text-gray-900">Chineese</div>
                    <div className="text-gray-500">Noodles</div>
                </td>
                <td className="px-3 py-4 text-sm text-gray-500 whitespace-nowrap">
                    <span className="inline-flex px-2 text-xs font-semibold leading-5 text-green-800 bg-green-100 rounded-full">
                        Active
                    </span>
                </td>
                <td className="px-3 py-4 text-sm text-gray-500 whitespace-nowrap">
                    1830
                </td>
                <td className="px-3 py-4 text-sm text-gray-500 whitespace-nowrap">
                    183
                </td>
                <td className="relative py-4 pl-3 pr-4 text-sm font-medium text-right whitespace-nowrap sm:pr-6">
                    <a
                        href="#"
                        className="text-indigo-600 hover:text-indigo-900"
                    >
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
        <div className="App">
            <div className="px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col mt-8">
                    <h2 className="font-serif text-4xl font-bold pb-7 text-slate-200">
                        Our Sellers
                    </h2>
                    <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                            <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
                                <table className="min-w-full divide-y divide-gray-300">
                                    <thead className="bg-gray-50">
                                        <tr>
                                            <th
                                                scope="col"
                                                className="py-3.5 pl-4 pr-3 text-center text-sm font-semibold text-gray-900 sm:pl-6"
                                            >
                                                Seller Info
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-3 py-3.5 text-center text-sm font-semibold text-gray-900"
                                            >
                                                Speciality
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-3 py-3.5 text-center text-sm font-semibold text-gray-900"
                                            >
                                                Last Ordered
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-3 py-3.5 text-center text-sm font-semibold text-gray-900"
                                            >
                                                Total Delivered
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-3 py-3.5 text-center text-sm font-semibold text-gray-900"
                                            >
                                                Today Ordered
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-3 py-3.5 text-center text-sm font-semibold text-gray-900"
                                            >
                                                BLock
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-white divide-y divide-gray-200">
                                        {data}
                                    </tbody>
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
                className="flex justify-center py-3 space-x-4 uppercase text-slate-100"
            />
        </div>
    );
}

export default SellerTable;
