import { Component } from "@angular/core";
import * as jQuery from "jquery";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  name = "Angular";
  flag = true;
  click() {
    this.flag = false;
  }
  vvvv() {
    this.flag = true;
    this.data()
  }

  ngAfterViewInit() {
   this.data()
    // $(document).ready(function() {
    //   $("#example").DataTable();
    // });
  }
  data(){
     $(document).ready(function() {
      $("#example").DataTable();
    });
  }
}
