import { Component, OnInit } from "@angular/core";

import { PokemonService } from "./pokemon.service";

@Component({
    selector: "ns-items",
    templateUrl: "./pokemon.component.html"
})
export class PokemonComponent implements OnInit {

    constructor(private ps: PokemonService) { }

    ngOnInit(): void {
    }
}
