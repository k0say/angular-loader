import { HttpClient } from '@angular/common/http';
import { Component, OnInit, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'angular-interceptor-loader';

  constructor(public http: HttpClient) {}
  ngOnInit(): void {
    this.makeHttpCall();
  }

  makeHttpCall() {
    this.http
      .get('https://jsonplaceholder.typicode.com/comments')
      .subscribe((r) => {
        console.log(r);
      });
  }
}
