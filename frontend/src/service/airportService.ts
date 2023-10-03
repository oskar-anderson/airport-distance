
import { autoinject } from "aurelia-framework";
import { IAirport } from "../domain/IAirport";
import { API_BASE_URL } from "../consts";

@autoinject
export class AirportService {

    private readonly API_CURRENT_RESSOURCE_URL = API_BASE_URL + "/api/airport"

    async getAirports(after: (airports: IAirport[]) => void): Promise<void>
    {
        fetch(this.API_CURRENT_RESSOURCE_URL)
            .then(response => response.json())
            .then(x => after(x));
    }

    async getAirportsWhereNameLike(after: (airports: IAirport[]) => void): Promise<void>
    {
        fetch(this.API_CURRENT_RESSOURCE_URL + "/getWhereCityNameLike")
            .then(response => response.json())
            .then(x => after(x));
    }
    
}