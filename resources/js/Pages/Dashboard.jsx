import { Head } from "@inertiajs/react";
import Sidebar from "@/Components/Sidebar";
import { useState } from "react";

export default function Dashboard(props) {
    const [items] = useState(props.items);

    return (
        <div>
    <Sidebar user={props.auth.user}>
        <div className="bg-gray-100 min-h-screen flex p-6 pt-24">
            <div className="flex-1 p-6">
                <Head title="Dashboard" />
                <div className="mb-6">
                    <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
                    <p className="text-gray-600">Ringkasan data gudang</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                    <div className="card bg-blue-500 text-white p-4 shadow-lg rounded-lg">
                        <h2 className="text-lg font-semibold">Total Barang</h2>
                        <p className="text-2xl font-bold">{items.length}</p>
                    </div>
                    <div className="card bg-green-500 text-white p-4 shadow-lg rounded-lg">
                        <h2 className="text-lg font-semibold">Kategori</h2>
                        <p className="text-2xl font-bold">{[...new Set(items.map(item => item.kategori))].length}</p>
                    </div>
                    <div className="card bg-yellow-500 text-white p-4 shadow-lg rounded-lg">
                        <h2 className="text-lg font-semibold">Lokasi</h2>
                        <p className="text-2xl font-bold">{[...new Set(items.map(item => item.lokasi))].length}</p>
                    </div>
                </div>
            </div>
        </div>
    </Sidebar>
</div>
    );
}
