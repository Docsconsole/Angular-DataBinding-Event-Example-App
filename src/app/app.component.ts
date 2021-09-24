import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  appName ='Event Binding Example in Angular';
  result: string | undefined;
  showEvent($event: any){ 
     console.log("button is clicked!"); if($event) { 
        console.log($event.target); 
        console.log($event.target.value); 
        this.result = $event.target.value;
     } 
  } 
}
