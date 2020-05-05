import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { PokemonComponent } from "./pokemon/pokemon.component";
import { PokemonDetailComponent } from "./pokemon/pokemon-detail.component";
import { NativeScriptHttpClientModule } from "nativescript-angular/http-client";

import Theme from "@nativescript/theme";

Theme.setMode(Theme.Dark);

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        AppRoutingModule,
        NativeScriptHttpClientModule,
    ],
    declarations: [
        AppComponent,
        PokemonComponent,
        PokemonDetailComponent
    ],
    providers: [],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
/*
Pass your application module to the bootstrapModule function located in main.ts to start your app
*/
export class AppModule { }
