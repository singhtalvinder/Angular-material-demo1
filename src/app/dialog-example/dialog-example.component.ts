import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-dialog-example',
  templateUrl: './dialog-example.component.html',
  styles: []
})
export class DialogExampleComponent implements OnInit {

  // To receive data in the dialog.
  constructor(@Inject (MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }

}
