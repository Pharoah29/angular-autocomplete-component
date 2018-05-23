import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  name = 'Autocomplete component';
  inputTag = "";
  tagList: string[];

  availableTags = [
    "ActionScript",
    "AppleScript",
    "Asp",
    "BASIC",
    "C",
    "C++",
    "Clojure",
    "COBOL",
    "ColdFusion",
    "Erlang",
    "Fortran",
    "Groovy",
    "Haskell",
    "Java",
    "JavaScript",
    "Lisp",
    "Perl",
    "PHP",
    "Python",
    "Ruby",
    "Scala",
    "Scheme"
  ];

  constructor(private http: HttpClient) {


  }
  ngOnInit() {

    this.http.get("https://my.api.mockaroo.com/users.json?key=55717f40").subscribe((users: any[]) => {

      this.availableTags = users.map(u => u.firstName + ' ' + u.lastName);
      console.log(this.availableTags)
    })
  }

  onAutoComplete(item: string) {
    console.log(item);
  }
}
