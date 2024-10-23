<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\years;
use Luecano\NumeroALetras\NumeroALetras;


class year extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $years = ['PRIMER AÑO','SEGUNDO AÑO','TERCER AÑO','CUARTO AÑO'];
        for ($i=0; $i < 4; $i++) {
            
            years::create([
                'num_year' => $i+1,
                'año' => $years[$i]
            ]);
        }
    }
}
