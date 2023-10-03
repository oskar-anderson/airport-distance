import { autoinject } from 'aurelia-framework';
import { AirportService } from '../../service/airportService';
import { IAirport } from '../../domain/IAirport';
import { ITextInput, getITextInputDefault } from '../../types/ITextInput';
import EE_TRANSLATION from "../../translation/ee-EST"

@autoinject
export class HomeIndex {
    airportAinput = getITextInputDefault();
    airportBinput = getITextInputDefault();
    airports: IAirport[] = [];
    calculatedDistace: {
        pointA: string,
        pointB: string,
        distance: number
    } | null = null;

    constructor(
        private airportService: AirportService
    ) {

    }

    handleRequiredInputIsEmpty(textInput: ITextInput) {
        let isEmpty = textInput.value === "";
        if (isEmpty) {
            textInput.validity = { isInvalid: true, message: EE_TRANSLATION.airport_not_selected };
        }
        return isEmpty;
    }

    calculateDistance() {
        // Reset validity to default valid state and turn to invalid on error
        this.airportAinput.validity.isInvalid = false;
        this.airportBinput.validity.isInvalid = false;
        if (
            this.handleRequiredInputIsEmpty(this.airportAinput) || 
            this.handleRequiredInputIsEmpty(this.airportBinput)
        ) {
            return;
        }
        const selectedAirportA = this.airports.find(x => x.city_name === this.airportAinput.value.toUpperCase());
        const selectedAirportB = this.airports.find(x => x.city_name === this.airportBinput.value.toUpperCase());

        if (!selectedAirportA || !selectedAirportB) {
            if (!selectedAirportA) {
                this.airportAinput.validity = { isInvalid: !selectedAirportA, message: EE_TRANSLATION.airport_does_not_exist }
            }
            if (!selectedAirportB) {
                this.airportBinput.validity = { isInvalid: !selectedAirportB, message: EE_TRANSLATION.airport_does_not_exist }
            }
            this.calculatedDistace = null;
            return;
        }

        let distance = this.getDistanceFromLatLonInKm(
            selectedAirportA.y, selectedAirportA.x,
            selectedAirportB.y, selectedAirportB.x,
        )

        if (distance === 0) {
            this.airportAinput.validity = { isInvalid: true, message: EE_TRANSLATION.generic_error };
            this.airportBinput.validity = { isInvalid: true, message: EE_TRANSLATION.generic_error };
            return;
        } 
        this.calculatedDistace = {
            pointA: selectedAirportA.city_name,
            pointB: selectedAirportB.city_name,
            distance: distance
        }
    }

    // https://stackoverflow.com/questions/27928/calculate-distance-between-two-latitude-longitude-points-haversine-formula
    getDistanceFromLatLonInKm(lat1: number, lon1: number, lat2: number, lon2: number) {
        const deg2rad = (deg: number) => {
            return deg * (Math.PI/180);
        }
        let R = 6371; // Radius of the earth in km
        let dLat = deg2rad(lat2-lat1);  // deg2rad below
        let dLon = deg2rad(lon2-lon1); 
        let a = 
          Math.sin(dLat/2) * Math.sin(dLat/2) +
          Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * 
          Math.sin(dLon/2) * Math.sin(dLon/2)
          ; 
        let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
        let d = R * c; // Distance in km
        return d;
    }

    created() {
        this.airportService.getAirports((airports: IAirport[]) => {
            this.airports = airports;
        })
    }
}
