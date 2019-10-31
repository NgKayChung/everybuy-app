import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TabsComponent }  from './tabs.component';

@NgModule({
    declarations: [TabsComponent],
    bootstrap: [TabsComponent],
    imports: [RouterModule, CommonModule, FormsModule],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    exports: [TabsComponent]
})
export class TabsModule { }