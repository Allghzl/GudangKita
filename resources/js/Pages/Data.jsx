import { Link, Head } from "@inertiajs/react";
import Sidebar from "@/Components/Sidebar";
import React, { useState } from "react";
import { Inertia } from "@inertiajs/inertia";
import edit from "../Components/Icon/edit.svg";
import icons from "../Components/Icon/icons.svg";
import productimage from "../Components/Icon/productimage.png";
import grid from "../Components/Icon/grid.png";
import row from "../Components/Icon/row.png";

export default function Data(props) {
    const [query, setQuery] = useState("");
    const date = new Date();
    const bulan = date.toLocaleString("id-ID", { month: "long" });
    const tahun = date.getFullYear();

    const handleInputChange = (event) => {
        setQuery(event.target.value);
    };

    const handleSearch = () => {
        console.log("Mencari:", query);
    };
    const [isChecked, setIsChecked] = useState(false)
    const [Table, setTable] = useState(false)
    const [Grid, setGrid] = useState(true)

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked)
        setTable(!Table)
        setGrid(!Grid)
    }

    const [namabarang, setName] = useState("");
    const [kategori, setCategory] = useState("");
    const [newKategori, setNewKategori] = useState("");
    const [isAddingCategory, setIsAddingCategory] = useState(false);
    const [stok, setStock] = useState("");
    const [lokasi, setLocation] = useState("");
    const [alert, setAlert] = useState(false);
    const [displaylist] = useState(props.displaylist);

    const handleCategoryChange = (e) => {
        const value = e.target.value;
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
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!namabarang || (!kategori && !newKategori) || !stok || !lokasi) {
            setAlert("Form tidak boleh kosong!");
            return;
        }
        Inertia.post("/data", { namabarang, kategori: newKategori || kategori, stok, lokasi});
        setAlert("Barang berhasil ditambahkan!");
        setName("");
        setCategory("");
        setStock("");
        setLocation("");
        setNewKategori("");
        setIsAddingCategory(false);
    };
    console.log('props', props);
    return (
        <div className="bg-gray-100 min-h-screen">
            <Head title="Laporan Inventaris" />
            <Sidebar user={props.auth.user}>
                <div className="p-6 pt-24">
                <header className="bg-white shadow-md rounded-lg p-4 mb-6">
                    <h1 className="text-2xl font-bold text-gray-800">Laporan Inventaris</h1>
                    <p className="text-sm text-gray-500">Data terbaru per {bulan} {tahun}</p>
                </header>
                <div className="bg-white shadow-md rounded-md p-4 mb-6 sm:flex items-center justify-between my-2">
                    <div className="sm:flex gap-4 items-center sm:justify-between">
                        <input type="text" value={query} placeholder="Cari barang..." onChange={handleInputChange} className="input input-bordered border-gray-600 sm:w-64 w-full bg-white mb-4 sm:mb-0" />
                    </div>
                    <div className="flex gap-4 justify-between items-center">
                        <label className='shadow-card relative inline-flex cursor-pointer select-none items-center justify-center rounded-md bg-white p-1'>
                            <input
                            type='checkbox'
                            className='sr-only'
                            checked={isChecked}
                            onChange={handleCheckboxChange}
                            />
                            <span
                            className={`flex items-center space-x-[6px] rounded py-2 px-[18px] text-sm font-medium ${
                                !isChecked ? 'text-primary bg-[#f4f7ff]' : 'text-body-color'
                            }`}
                            >
                            <img src={grid} className={`size-4 mr-2 grayscale ${
                                !isChecked ? `grayscale-0` : `grayscale`}`}></img>
                            Grid
                            </span>
                            <span
                            className={`flex items-center space-x-[6px] rounded py-2 px-[18px] text-sm font-medium ${
                                isChecked ? 'text-primary bg-[#f4f7ff]' : 'text-body-color'
                            }`}
                            >
                                <img src={row} className={`size-4 mr-2 grayscale ${
                                isChecked ? `grayscale-0` : `grayscale`}`}></img>
                            Table
                            </span>
                        </label>
                        <button className="btn border-none right-auto bg-blue-600 hover:bg-blue-700 text-white" onClick={()=>document.getElementById('addItem').showModal()}>Tambahkan Barang +</button>
                    </div>
                </div>
            
            {Table &&
                <div className="overflow-x-auto p-4 bg-white rounded-md text-black">
                    <table className="table">
                        <thead className="text-black text-base">
                            <tr>
                                <th></th>
                                <th>Nama</th>
                                <th>Kategori</th>
                                <th>Stok</th>
                                <th>Lokasi</th>
                                <th>Aksi</th>
                            </tr>
                        </thead>
                        <tbody>
                            {props.items && props.items.length > 0 ? props.items.map((data, i) => (
                                <tr key={i} className="">
                                    <td></td>
                                    <td className="font-bold">{data.namabarang.length > 15 ? data.namabarang.slice(0, 15)+"..": data.namabarang}</td>
                                    <td>{data.kategori.length > 15 ? data.kategori.slice(0, 15)+"..": data.kategori}</td>
                                    <td>{data.stok.length > 5 ? data.stok.slice(0, 5)+"..": data.stok}</td>
                                    <td>{data.lokasi.length > 15 ? data.lokasi.slice(0, 15)+"..": data.lokasi}</td>
                                    <td className="flex gap-2">
                                        <Link href={route("edit.item", {id: data.id})} as="button" method="get" data={{ id: data.id }} className="btn btn-warning btn-sm"><img src={edit} className="w-6 h-6" /></Link>
                                        <Link href={route("delete.item" )} as="button" method="post" data={{id: data.id}} className="btn btn-error btn-sm"><img src={icons} className="w-6 h-6"/></Link>
                                    </td>
                                </tr>
                            )): <tr>
                                    <td colSpan="6" className="text-center text-gray-500">Belum ada data</td>
                                </tr>}
                        </tbody>
                        <tfoot>
                            <tr>
                                <th></th>
                                <th>Nama</th>
                                <th>Kategori</th>
                                <th>Stok</th>
                                <th>Lokasi</th>
                                <th></th>
                            </tr>
                        </tfoot>
                    </table>
                </div>}
                {Grid && 
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 justify-items-center m-2">
                {props.items && props.items.length > 0 ? props.items.map((data, i) => (               
                    <div key={i} className="card card-compact bg-blue-500 w-auto shadow-xl">
                        <figure>
                            <img
                            src={productimage}
                            alt="product.image" />
                        </figure>
                        <div className="card-body text-white">
                            <h2 className="card-title">{data.namabarang.length > 20 ? data.namabarang.slice(0, 20)+"..": data.namabarang}</h2>
                            <div className="card-subtitle">
                            <p>Stok: {data.stok.length > 10 ? data.stok.slice(0, 10)+"..": data.stok}</p>
                            <p>Lokasi: {data.lokasi.length > 15 ? data.lokasi.slice(0, 15)+"..": data.lokasi}</p>
                            </div>
                            <div className="card-actions justify-between items-center">
                                <div className="badge badge-outline">{data.kategori.length > 15 ? data.kategori.slice(0, 15)+"..": data.kategori }</div>
                                <div className="flex gap-2 justify-end"> 
                                <Link href={route("edit.item", {id: data.id})} as="button" method="get" data={{ id: data.id }} className="btn btn-warning btn-sm"><img src={edit} className="w-6 h-6" /></Link>
                                <Link href={route("delete.item" )} as="button" method="post" data={{id: data.id}} className="btn btn-error btn-sm"><img src={icons} className="w-6 h-6"/></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                )): <div className="text-center text-gray-500">Belum ada data</div>}
                </div> }

                <footer className="text-center mt-6 text-sm text-gray-500">Dibuat dengan ❤️ oleh Allghzl</footer>

                <dialog id="addItem" className="modal">
                    <div className="modal-box bg-white">
                        <form method="dialog">
                            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                        </form>
                        <h2 className="text-lg font-bold mb-4 text-black">Tambah Barang</h2>
                        {alert && <div role="alert" className="alert alert-info text-white"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="h-6 w-6 shrink-0 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg><span>{alert}</span></div>}
                        <div className="py-4">
                            <input type="text" placeholder="Nama barang" className="input input-bordered border-gray-600 w-full mb-4 text-gray-700 bg-white focus:outline-none focus:shadow-outline" onChange={(e) => setName(e.target.value)} value={namabarang} required />
                            <select id="kategori" className="select select-bordered border-gray-600 text-gray-700 w-full pr-4 mb-4 bg-white focus:outline-none focus:shadow-outline" onChange={handleCategoryChange} value={kategori} required>
                                <option value="" disabled>Pilih Kategori</option>
                                {displaylist.map((item, i) => <option key={i} value={item.kategori}>{item.kategori}</option>)}
                                <option value="new">Tambahkan Kategori Baru...</option>
                            </select>
                            {isAddingCategory && 
                            <input type="text" placeholder="Tambahkan kategori..." className="input input-bordered border-gray-600 w-full mb-4 text-gray-700 bg-white focus:outline-none focus:shadow-outline" onChange={handleNewCategoryChange} value={newKategori} />
                            }
                            <input type="number" placeholder="Jumlah stok" min={0} className="input input-bordered border-gray-600 w-full text-gray-700 mb-4 bg-white focus:outline-none focus:shadow-outline" onChange={(e) => setStock(e.target.value)} value={stok} required />
                            <input type="text" placeholder="Lokasi barang" className="input input-bordered border-gray-600 w-full text-gray-700 mb-4 bg-white focus:outline-none focus:shadow-outline" onChange={(e) => setLocation(e.target.value)} value={lokasi} required />
                        </div>
                        <button className="btn btn-primary text-white" onClick={handleSubmit}>Tambahkan +</button>
                    </div>
                </dialog>
                </div>
            </Sidebar>
        </div>
    );
}
