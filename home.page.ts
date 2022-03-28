/* eslint-disable no-trailing-spaces */
/* eslint-disable eol-last */

import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ActionSheetController } from '@ionic/angular';
@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage {

   


    constructor(public actionSheetCtrl: ActionSheetController) {}

async presentActionSheet(){
    const actionSheet = await this.actionSheetCtrl.create({
    header: 'Opções',
     buttons:[
         {
             text: 'Delete',
             role :'destructive',
             icon:'trash' ,
             handler:() =>{
            console.log('botão de deletar!');
             }
         },{
            text:'Play',
            icon:'play',
            handler:() =>{
            console.log('botão de play!');
}

         },{
        text:'share',
        icon:'share',
        handler:() =>{
            console.log('botão de compartilhar');
        }
            
         },{
        text:'cancel',
        icon:'close',
        role:'cancel',
        handler:() =>{
            console.log('cancelar');
        }

         }
     ],
     cssClass: 'custom-css',
     animated: true,
    backdropDismiss: false,
    keyboardClose: false,
    mode:'ios'
    });

    actionSheet.present();

actionSheet.onWillDismiss().then(() =>{
    console.log('fechando');
});


actionSheet.onDidDismiss().then(() =>{
    console.log('foi fechado');
});





}


}