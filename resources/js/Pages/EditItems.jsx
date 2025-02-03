import { Head } from "@inertiajs/react";
import Sidebar from "@/Components/Sidebar";
import React, { useState } from "react";
import { Inertia } from "@inertiajs/inertia";

export default function EditItems(props) {
    const [namabarang, setName] = useState(props.items.namabarang || "");
    const [kategori, setCategory] = useState(props.items.kategori || "");
    const [newKategori, setNewKategori] = useState("");
    const [isAddingCategory, setIsAddingCategory] = useState(false);
    const [stok, setStock] = useState(props.items.stok || "");
    const [lokasi, setLocation] = useState(props.items.lokasi || "");
    const [alert, setAlert] = useState(false);
    const [displaylist] = useState(props.displaylist);

    const handleCategoryChange = (kategori) => {
        const value = kategori.target.value;
        if (value === "new") {
            setIsAddingCategory(true);
            setCategory("");
        } else {
            setIsAddingCategory(false);
            setCategory(value);
        }
    };

    const handleNewCategoryChange = (e) => {
        const value = e.target.value;
        const normalizedValue =
            value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
        setNewKategori(normalizedValue);
        setCategory(normalizedValue);
    };

    const handleSubmit = () => {
        const finalKategori = newKategori || kategori;

        if (!namabarang || !finalKategori || !stok || !lokasi) {
            setAlert("Form tidak boleh kosong!");
            return;
        }
          
        const data = { id: props.items.id, namabarang, kategori: finalKategori, stok, lokasi };
        
        Inertia.post("/data/update", data);
        setAlert("Barang berhasil diubah!");
    };
    console.log(props);
    return (
        <div className="bg-white min-h-screen">
            <Head title="GudangKita." />
            <Sidebar user={props.auth.user}>
                <div className="p-6 pt-24">
                    <div className="bg-slate-800 rounded-box mx-10 md:mx-20 lg:mx-40 xl:mx-60">
                        <div className="p-4">
                            <h1 className="text-gray-300 text-center">Edit item</h1>
                        </div>
                        <div className="bg-slate-100 rounded-b-box">
                            {/* Image */}
                            <div className="border-2 h-full border-gray-950"></div>
                            
                            {/* Data edit */}
                            <div className="p-4 flex-col relative">
                            <form className="mb-4">
                                {alert && <div role="alert" className="alert alert-info text-white mb-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="h-6 w-6 shrink-0 stroke-current">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                                    </svg>
                                    <span>
                                        <b>{alert}</b>
                                    </span>
                                </div>}
                                <div className="mb-4">
                                    <input type="text" placeholder="Nama barang" className="input input-bordered border-gray-600 w-full mb-4 text-gray-700 bg-white focus:outline-none focus:shadow-outline" 
                                    onChange={(namabarang) => setName(namabarang.target.value)} defaultValue={props.items.namabarang}   />
                                    <select id="kategori" className="select select-bordered border-gray-600 text-gray-700 w-full pr-4 mb-4 bg-white focus:outline-none focus:shadow-outline"
                                    onChange={handleCategoryChange} value={isAddingCategory? "new" : kategori}>
                                        <option value="" disabled>Pilih Kategori</option>
                                        {displaylist.map((item, i) =>(
                                            <option key={i} value={item.kategori}>{item.kategori}</option>
                                        ))}
                                        <option value="new">Tambahkan Kategori Baru...</option>
                                    </select>
                                    {isAddingCategory && <input type="text" placeholder="Tambahkan kategori..." className="input input-bordered border-gray-600 w-full mb-4 text-gray-700 bg-white focus:outline-none focus:shadow-outline" 
                                    onChange={handleNewCategoryChange} defaultValue={newKategori} />}
                                    <input type="number" placeholder="Jumlah stok" min={0} className="input input-bordered border-gray-600 w-full text-gray-700 mb-4 bg-white focus:outline-none focus:shadow-outline"
                                    onChange={(stok) => setStock(stok.target.value)} defaultValue={props.items.stok}   />
                                    <input type="text" placeholder="Lokasi barang" className="input input-bordered border-gray-600 w-full text-gray-700 mb-4 bg-white focus:outline-none focus:shadow-outline"
                                    onChange={(lokasi) => setLocation(lokasi.target.value)} defaultValue={props.items.lokasi}   />
                            
                        </div>
                            </form>
                        <div className="flex justify-end">
                        <button className="btn btn-primary text-white" onClick={handleSubmit}>Perbarui item</button>
                        </div>
                        </div>
                        </div>
                    </div>
                </div>
            </Sidebar>
        </div>
    );
}
