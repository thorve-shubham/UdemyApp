import { Component, EventEmitter, Output } from "@angular/core";

@Component({
    selector : "app-header",
    templateUrl : "./header.component.html",
    styleUrls : ['./header.component.css']
})
export class HeaderComponent{

    @Output('activeTab')
    activeTab = new EventEmitter<string>();

    showTab(tabName:string){
        this.activeTab.emit(tabName);
    }
}