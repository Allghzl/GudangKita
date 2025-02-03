import Sidebar from "@/Components/Sidebar";
import { Head, Link } from "@inertiajs/react";
import bg from "../Components/Inventaris/bg.svg"
import arrow from "../Components/Inventaris/arrow.svg"

export default function Homepage(props) {
    console.log('props', props);
    return (
        <div className="bg-base-200 min-h-screen">
            <Head title="GudangKita." />
            <Sidebar user={props.auth.user}>
            <div className="hero min-h-screen bg-white bg-scroll" style={{
                backgroundImage: `url(${bg})`,
            }}>
            <div className="hero-overlay bg-opacity-5"></div>
            <div className="hero-content text-gray-800 text-center">
                <div className="max-w-md card-body glass morphism rounded-box">
                <h1 className="mb-5 text-5xl font-bold">Selamat Datang di GudangKita</h1>
                <p className="mb-5">
                Kelola stok barang dengan mudah dan efisien menggunakan sistem inventarisasi kami.
                </p>
                <div className="space-x-4">
                            {props.auth.user ? (
                                <Link className="btn btn-lg btn-link" as="button" href={route("dashboard")}>
                                    Masuk ke Dashboard <img src={arrow} alt="dashboard" className="size-50%" />
                                </Link>
                            ) : (
                                <>
                                    <Link href={route("login")} className="btn-md btn btn-secondary text-white">
                                        Masuk
                                    </Link>
                                    <Link href={route("register")} className="btn-md btn btn-accent text-white">
                                        Daftar
                                    </Link>
                                </>
                            )}
                        </div>
                </div>
            </div>
            
               
                        
                    </div>
            </Sidebar>
        </div>
    )
}