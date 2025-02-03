import { Head } from "@inertiajs/react";
import Sidebar from "@/Components/Sidebar";
import { useState } from "react";

export default function Dashboard(props) {
    const [items] = useState(props.items);

    return (
        <div>
    <Sidebar user={props.auth.user}>
        <div className="bg-gray-100 min-h-screen flex p-6 pt-24">
            {/* Main Content */}
            <div className="flex-1 p-6">
                <Head title="Dashboard" />

                {/* Header */}
                <div className="mb-6">
                    <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
                    <p className="text-gray-600">Ringkasan data gudang</p>
                </div>

                {/* Kartu Ringkasan */}
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

                {/* Tabel Barang */}
                <div className="bg-white p-4 shadow-lg rounded-lg">
                    <h2 className="text-xl font-bold mb-4">Daftar Barang</h2>
                    <div className="overflow-x-auto">
                        <table className="table w-full border-collapse border border-gray-300">
                            <thead>
                                <tr className="bg-gray-200">
                                    <th className="border border-gray-300 p-2">Nama</th>
                                    <th className="border border-gray-300 p-2">Kategori</th>
                                    <th className="border border-gray-300 p-2">Stok</th>
                                    <th className="border border-gray-300 p-2">Lokasi</th>
                                </tr>
                            </thead>
                            <tbody>
                                {items.length > 0 ? (
                                    items.map((item, index) => (
                                        <tr key={index} className="hover:bg-gray-100">
                                            <td className="border border-gray-300 p-2">{item.namabarang}</td>
                                            <td className="border border-gray-300 p-2">{item.kategori}</td>
                                            <td className="border border-gray-300 p-2">{item.stok}</td>
                                            <td className="border border-gray-300 p-2">{item.lokasi}</td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan="4" className="text-center border border-gray-300 p-2">
                                            Tidak ada data barang.
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </Sidebar>
</div>
    );
}
