<?php

namespace App\Http\Controllers\Api;

use App\Models\Airport;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Support\Str;

class AirportController extends BaseController
{
    use AuthorizesRequests, ValidatesRequests;


    public function all(): Collection
    {
        return Airport::all();
    }

    public function getWhereCityNameLike(Request $request): Collection
    {
        return Airport::where('city_name', 'like', Str::upper($request->get("city_name")) . '%')
            ->get();
    }
}
