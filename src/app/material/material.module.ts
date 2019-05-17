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
  MatCardModule,
  MatTabsModule,
  MatStepperModule
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
  MatCardModule,
  MatTabsModule,
  MatStepperModule
];

@NgModule({
  imports: [material ],
  exports: [material ]
})
export class MaterialModule { }
