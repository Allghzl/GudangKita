const Row = () => {
    return(
        <div>
            {/* Table */}
          <div className="overflow-x-auto p-4 bg-white rounded-md text-black">
            <table className="table">
                {/* head */}
                <thead>
                <tr>
                    <th>
                    <label>
                        <input type="checkbox" className="checkbox border-gray-600" />
                    </label>
                    </th>
                    <th>Name</th>
                    <th>Job</th>
                    <th>Favorite Color</th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                 <tr>
                    <th>
                    <label>
                        <input type="checkbox" className="checkbox border-gray-600" />
                    </label>
                    </th>
                    <td>
                    <div className="flex items-center gap-3">
                        <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                            <img
                            src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                            alt="Avatar Tailwind CSS Component" />
                        </div>
                        </div>
                        <div>
                        <div className="font-bold">Hart Hagerty</div>
                        <div className="text-sm opacity-50">United States</div>
                        </div>
                    </div>
                    </td>
                    <td>
                    Zemlak, Daniel and Leannon
                    <br />
                    <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
                    </td>
                    <td>Purple</td>
                    <th>
                    <button className="btn btn-ghost btn-xs">details</button>
                    </th>
                </tr>
            </tbody>
            </table>
            </div>
            </div>
            
    )
}

export default Row;