import { NgModule } from "@angular/core";
import { MatCardModule } from "@angular/material/card";
import { MatChipsModule } from "@angular/material/chips";
import { MatInputModule } from '@angular/material/input';



@NgModule({
    exports: [
        MatCardModule, MatChipsModule, MatInputModule,

    ]
})
export class MaterialModule {

}