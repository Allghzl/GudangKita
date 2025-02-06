import { Head, Link } from "@inertiajs/react";
import Sidebar from "@/Components/Sidebar";
import { useState } from "react";
import bg from "../Components/Icon/bg.svg";
import arrow from "../Components/Icon/arrow.svg";

export default function Dashboard(props) {
    const [items] = useState(props.items);

    return (
        <div>
            <Sidebar user={props.auth.user}>
                <div className="relative bg-white bg-scroll" style={{
                    backgroundImage: `url(${bg})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }}>
                    <div className="absolute inset-0 bg-white opacity-90"></div>
                    <div className="relative min-h-screen p-6 pt-24">
                        <div className="flex-1 p-6">
                            <Head title="Dashboard" />
                            <div className="mb-6">
                                <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1> 
                                <p className="text-gray-600">Ringkasan data gudang</p>
                            </div>

                            <div className="card bg-slate-100 grid grid-cols-1 md:grid-cols-3 gap-4 mb-6 divide-y-2 md:divide-y-0 md:divide-x-2 shadow-md">   
                                <div className="text-teal-600 p-4">
                                    <h2 className="text-lg font-semibold">Total Barang</h2>
                                    <p className="text-2xl font-bold">{items.length}</p>
                                </div>
                                <div className=" text-teal-600 p-4">
                                    <h2 className="text-lg font-semibold">Kategori</h2>
                                    <p className="text-2xl font-bold">{[...new Set(items.map(item => item.kategori))].length}</p>
                                </div>
                                <div className=" text-teal-600 p-4">
                                    <h2 className="text-lg font-semibold">Lokasi</h2>
                                    <p className="text-2xl font-bold">{[...new Set(items.map(item => item.lokasi))].length}</p>
                                </div>
                            </div>
                            <div>
                                <Link className="btn btn-lg btn-link" as="button" href={route("display.items")}>
                                    Inventaris <img src={arrow} alt="Inventaris" className="h-9 w-auto" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </Sidebar>
        </div>
    );
}
