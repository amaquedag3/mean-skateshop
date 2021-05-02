import { NgModule, CUSTOM_ELEMENTS_SCHEMA }      from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule }      from '@angular/common';
import { FormsModule }      from '@angular/forms';
import { AltasUserComponent } from 'src/app/components/altas-user/altas-user.component';


@NgModule({
  declarations: [ AltasUserComponent ],
  bootstrap:    [ AltasUserComponent ],
  imports: [ RouterModule, CommonModule, FormsModule ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AltasModule { }
