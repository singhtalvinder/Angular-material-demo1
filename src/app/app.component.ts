import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable} from 'rxjs';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'material-demo';

  myControl = new FormControl();
  filteredOptions : Observable<string[]>;

  opened = false;
  notifications = 2;
  showSpinner = false;
  selectedValue: string;
  options :string[] = ['Software', 'Hardware', 'Networking'];

  favouriteCar: string;
  carOptions = ['honda', 'nissan', 'hyundai'];
  
  ngOnInit() {
    this.filteredOptions= this.myControl
      .valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value))
    );
  
  }
  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase()
    return this.options.filter(option => option.toLowerCase().includes(filterValue)
    );
  }

  log(state) {
  console.log(state);
  }

  logChange(index) {
  console.log('selected index of tab is :'+ index)
  }

loadData() {
  this.showSpinner = true;
    setTimeout(()=>{
      this.showSpinner=false
    }, 5000);
  }

}
