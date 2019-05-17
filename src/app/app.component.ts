import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'material-demo';

  opened = false;
  notifications = 2;
  showSpinner = false;

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
