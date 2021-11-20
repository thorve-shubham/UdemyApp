import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  activeTab:string = 'recipe';

  changeTabTo(activeTab: string){
    this.activeTab = activeTab;
  }
}
