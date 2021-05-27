import { Component, OnInit } from '@angular/core';
import {Observable, throwError} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})



export class SearchPage implements OnInit {



  islands: Observable<any>;

  public islandArray = [];

  constructor(public httpClient: HttpClient, private route:ActivatedRoute, private router:Router) {

    this.islands = this.httpClient.get('http://localhost:3000/island');

    this.islands

    .subscribe(data => {

      this.islandArray = data;

      console.log('Data in Island array: ', this.islandArray);
    });
  }



  ngOnInit() {
  }



  searchForIsland(inputText: any){
    console.log('submit detected! user entered: ' + inputText);

    let foundMatch = false;

    this.islandArray.forEach(island =>{

      console.log(island.Island_Id);

      if(island.Island_Id == inputText){
        console.log('Found an island that matches the users request!');

        // connect user to island, route them to home page
        foundMatch = true;
      }
    });

    console.log(foundMatch);

    if(foundMatch){
      // connect and route to home page
      this.router.navigate(['/home']);
      console.log('foundMatch = true, route to home page');

       // TO DO: CODE FOR HANDLING ROUTE TO HOME PAGE
    }
    else{
      
      let errorMessage = 'Not found the table!';
      return throwError(errorMessage);
      // didnt find a match, show error screen
      console.log('foundMatch = false, do error pop up');

      // TO DO: CODE FOR HANDLING POP UP ERROR MESSAGE
    }
  };


}


