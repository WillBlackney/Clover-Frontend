import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AlertController } from '@ionic/angular';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  selectedData: any;

  constructor( public alertController: AlertController, private route:ActivatedRoute,private router:Router ) {}


  showConfirm() {
    this.alertController.create({
      message: 'Are you sure you want to exit?',
      buttons: [
        {
          text: 'Yes',
          handler: () => {
            this.router.navigate(['/search']);
            console.log('bye bye');
          }
        },
        {
          text: 'No',
          handler: () => {
            console.log('okay');
          }
        }]
    }).then(res => {
      res.present();
    });
  }

}


