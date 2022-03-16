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
    console.log("aaa");
    const modal = await this.modalController.create({
      component: TabsPage,
    });
    return await modal.present();
  }
  changeRoutes(){
    console.log("this.router.config before", this.router.config)
    this.router.resetConfig([
      {
        path: '',
        redirectTo: 'contact'
      },
      {
        path: 'contact',
        component: ContactPage
      },
      {
        path: 'tab1',
        //redirectTo: '/tabs/tab1',
        loadChildren: () => import('../tab1/tab1.module').then(m => m.Tab1PageModule)
      },
      {
        path: 'tab2',
        loadChildren: () => import('../tab2/tab2.module').then(m => m.Tab2PageModule)
      },
      {
        path: 'tab3',
        loadChildren: () => import('../tab3/tab3.module').then(m => m.Tab3PageModule)
      }
    ])
    console.log("this.router.config then", this.router.config)
  }
  getcurr(){
    console.log("this.router.getCurrentNavigation ", this.router.getCurrentNavigation())
    console.log("this.router.routerState ", this.router.routerState)
  }
}
