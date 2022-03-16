import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { TabsPage } from '../tabs/tabs.page';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss'],
})
export class ContactPage implements OnInit {

  constructor(public modalController: ModalController, public router: Router) { }

  ngOnInit() {
  }
  async open(){
    const modal = await this.modalController.create({
      component: TabsPage,
    });
    return await modal.present();
  }
  
}
