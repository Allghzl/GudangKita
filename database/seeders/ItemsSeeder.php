<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Faker\Factory as Faker;

class ItemsSeeder extends Seeder
{
    public function run()
    {
        $faker = Faker::create();

        foreach (range(1, 50) as $index) { // Generate 50 data dummy
            DB::table('Items')->insert([
                'namabarang' => $faker->word, // Nama barang acak
                'kategori' => $faker->randomElement(['Elektronik', 'Pakaian', 'Peralatan Rumah Tangga', 'Buku']),
                'stok' => $faker->numberBetween(1, 500), // Jumlah stok antara 1-500
                'lokasi' => $faker->randomElement(['Jakarta Barat', 'Tangerang Kota', 'Bandung', 'Surabaya', 'Bekasi']),
                'created_at' => now(),
                'updated_at' => now(),
            ]);
        }
    }
}
