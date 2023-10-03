<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Validator;
use Ramsey\Uuid\UuidInterface;


/**
 * Airport model class.
 *
 * @property UuidInterface id
 * @property string|null iata
 * @property string airport_name
 * @property string city_name
 * @property string country_name
 * @property float x
 * @property float y
 *
 * @mixin \Eloquent
 * @package App\Models
 */
class Airport extends Model
{
    use HasFactory;

    use HasUuids;

    protected $table = 'airport';
    protected $guarded = ['*'];

    public $timestamps = false;


    static function createFromArgs(UuidInterface $id, string|null $iata, string $airportName, string $cityName, string $countryName, float $x, float $y): Airport {
        return Airport::create(
            [
                'id' => $id->toString(),
                'iata' => $iata,
                'airport_name' => $airportName,
                'city_name' => $cityName,
                'country_name' => $countryName,
                'x' => $x,
                'y' => $y
            ]
        );
    }

    function validate(): \Illuminate\Validation\Validator {
        return Validator::make(
            $this->toArray(),
            [
                'id' => ['required', 'uuid'],
                'iata' => ['nullable', 'size:3'],
                'airport_name' => ['required'],
                'city_name' => ['required'],
                'country_name' => ['required'],
                'x' => ['required', 'numeric'],
                'y' => ['required', 'numeric']
            ]
        );
    }
}
