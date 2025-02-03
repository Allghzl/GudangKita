<?php

namespace App\Http\Controllers;

use App\Models\Data;
use App\Models\Item;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\DB;

class DataController extends Controller
{
    public function Dashboard()
    {
        $itemsDetail = $this->GetCategory();

        $items = Item::orderByDesc('created_at')->get();
        return Inertia::render('Dashboard', [
            'items' => $items,
            'displaylist' => $itemsDetail

        ]);
    }
    private function GetCategory()
    {
        $items = DB::table('items')
            ->select('kategori', DB::raw('MIN(id) as id'))
            ->groupBy('kategori')
            ->get();

        $itemsDetail = $items->map(function ($item) {
            return DB::table('items')->where('id', $item->id)->first();
        });

        return $itemsDetail;
    }
    public function index()
    {
        $itemsDetail = $this->GetCategory();

        $items = Item::orderByDesc('created_at')->get();
        return Inertia::render('Data', [
            'items' => $items,
            'displaylist' => $itemsDetail

        ]);
    }

    /**
     * Show the form for creating a new resource.
     */

    public function store(Request $request)
    {
        $request->validate([
            'namabarang' => 'required',
            'kategori' => 'required',
            'stok' => 'required',
            'lokasi' => 'required'
        ]);
        
        $items = new Item();

        $items->namabarang = $request->namabarang;
        $items->kategori = $request->kategori;
        $items->stok = $request->stok;
        $items->lokasi = $request->lokasi;
        $items->save();

        return redirect()->back()->with('message', 'barang berhasil ditambah');
    }

    /**
     * Display the specified resource.
     */
    public function show(Data $data)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit($id)
    {
        $itemsDetail = $this->GetCategory();
        return Inertia::render('EditItems', [
            'items' => Item::findOrFail($id),
            'displaylist' => $itemsDetail
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request)
    {
        $request->validate([
            'namabarang' => 'required',
            'kategori' => 'required',
            'stok' => 'required',
            'lokasi' => 'required'
        ]);

        $item = Item::findOrFail($request->id);
        $item->update($request->only(['namabarang', 'kategori', 'stok', 'lokasi']));

        
        return redirect()->route('display.items');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Data $data, Request $request)
    {
        Item::find($request->id)->delete();
    }
}
