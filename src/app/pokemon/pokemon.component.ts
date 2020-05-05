import { Component, OnInit } from "@angular/core";

import { PokemonService } from "./pokemon.service";
import { Observable } from "tns-core-modules/ui/page/page";

@Component({
    selector: "ns-items",
    templateUrl: "./pokemon.component.html"
})
export class PokemonComponent implements OnInit {

    pokemons;

    constructor(private ps: PokemonService) { }

    ngOnInit(): void {
        this.ps.getPokemon().subscribe((response) => {
                this.pokemons = response.results;
            });
    }
}
