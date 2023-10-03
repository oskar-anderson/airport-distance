<?php

namespace Database\Seeders;

use App\Models\Airport;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\DB;
use Illuminate\Validation\ValidationException;
use Ramsey\Uuid\Uuid;

class AirportSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $file = fopen(__DIR__ . "/resources/airport_data.csv","r");
        /** @var Collection | Airport[] $airports */
        $airports = Collection::make();
        for($i = 0; $line = fgetcsv($file, separator: ","); $i++)
        {
            $iata = (string) $line[0];
            $iata = $iata === "N/A" ? null : $iata;
            $airport_name = (string) $line[1];
            $city_name = (string) $line[2];
            $country_name = (string) $line[3];
            $y = floatval($line[4]);
            $x = floatval($line[5]);

            $airport = Airport::createFromArgs(Uuid::uuid4(), $iata, $airport_name, $city_name, $country_name, $x, $y);
            $validator = $airport->validate();
            if ($validator->fails()) {
                throw ValidationException::withMessages($validator->errors()->messages());
            }
            $airports[] = $airport;
        }
        fclose($file);

        DB::beginTransaction();
        foreach($airports as $airport) {
            $airport->save();
        }
        DB::commit();
    }
}
