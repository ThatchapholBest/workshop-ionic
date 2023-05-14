import { Component } from '@angular/core';
import { maleOutline, femaleOutline } from 'ionicons/icons';
import { addIcons } from 'ionicons';
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  sex: string = "male";
  weight!: number;
  height!: number;
  age!: number;
  bmr: number = 0;
  public alertButtonsBmr = ['OK'];

  constructor() {
    //addIcons({maleOutline, femaleOutline});
  }

  bmrCal() {

    if(this.sex == "male"){
      this.bmr = (10*this.weight)+(6.25*this.height)-(5*this.age)+5
    }
    else if(this.sex == "female"){
      this.bmr = (10*this.weight)+(6.25*this.height)-(5*this.age)-161
    }

  }
  
}
