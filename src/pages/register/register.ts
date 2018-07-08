import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App, AlertController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { TabHomePage } from '../tab-home/tab-home';
import { WebapiServiceProvider } from '../../providers/webapi-service/webapi-service';
import { TabsPage } from '../tabs/tabs';

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  userData = {
    "fullname": "",
    "email": "",
    "tel": "",
    "username": "",
    "password": ""
  }

  responseData: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public app: App,
    public alerCtrl: AlertController,
    public webapi: WebapiServiceProvider
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }
  login() {
    this.navCtrl.setRoot(LoginPage);
  }

  signup() {
    this.webapi.postData(this.userData, 'register.php').then((result) => {
      this.responseData = result;
     // console.log(this.responseData);

      if(this.responseData.userData){
        let alert = this.alerCtrl.create({
          title:'สถานะการลงทะเบียน',
          subTitle:'ลงทะเบียนเรียบร้อยแล้ว',
          buttons:['Dismiss']
        });
        alert.present();

        this.navCtrl.setRoot(TabsPage);
      }
    }, (err) => {
      console.log(err);
    });
  }

  gotoDashboard() {
    this.navCtrl.setRoot(TabHomePage);
  }
}
