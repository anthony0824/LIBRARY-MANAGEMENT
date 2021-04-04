import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { MessagePageModule } from '../pages/message/message.module';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  ContactName = "";
  ContactNumber = "";
  contacts: any = [];

  constructor( public alertCtrl: AlertController) {}
  
  savecontacts(){
    let contact = {
      name: this.ContactName,
      number: this.ContactNumber 
    }
      this.contacts.push(contact);
      this.clearField();
    }

  clearField(){
    this.ContactName="";
    this.ContactNumber="";
  }

  async showConfirm(cont) {
    const confirm = await this.alertCtrl.create({
      header: 'Proceed',
      message: 'Delete this Contact?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Confirm Cancel');
          }
        },
        {
          text: 'Yes',
            handler: () => {
            console.log('Please Confirm');
            let index = this.contacts.indexOf(cont);
            if(index > -1){
              this.contacts.splice(index, 1);
            }
          }
        }
      ]
    });
    await confirm.present();
  }   
}
 