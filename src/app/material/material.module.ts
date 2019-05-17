import { NgModule } from '@angular/core';

import { MatButtonModule,
  MatButtonToggleModule, 
  MatIconModule, 
  MatProgressSpinnerModule,
  MatToolbarModule,
  MatSidenavModule,
  MatMenuModule,
  MatListModule,
  MatDividerModule,
  MatGridListModule,
  MatExpansionModule,
  MatCardModule
 } from '@angular/material';

import { MatBadgeModule } from '@angular/material/badge';

const material = [
  MatButtonModule,
  MatButtonToggleModule,
  MatIconModule,
  MatBadgeModule,
  MatProgressSpinnerModule,
  MatToolbarModule,
  MatSidenavModule,
  MatMenuModule,
  MatListModule,
  MatDividerModule,
  MatGridListModule,
  MatExpansionModule,
  MatCardModule
];

@NgModule({
  imports: [material ],
  exports: [material ]
})
export class MaterialModule { }
