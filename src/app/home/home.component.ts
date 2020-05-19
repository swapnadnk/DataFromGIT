import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { RestService } from '../services/rest.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  private name: string;
  private repos: string;
  private user: string;
  private url: string;

  private searchForm = new FormGroup({
    username: new FormControl("")
  })

  constructor(private restService: RestService) { }

  ngOnInit() {
  }

  onSubmit(){
    this.restService.fetchUsers(this.searchForm.value['username']).subscribe(res=>{
      console.log(res);
      document.getElementById("results").style.visibility = "visible";
      this.name = res.name;
      this.repos = res.public_repos;
      this.user = res.login;
      this.url = res.url;
    })
  }

}
