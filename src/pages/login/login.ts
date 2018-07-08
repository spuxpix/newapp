import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,App,AlertController } from 'ionic-angular';
import { TabHomePage } from '../tab-home/tab-home';
import { WebapiServiceProvider } from '../../providers/webapi-service/webapi-service';
import { TabsPage } from '../tabs/tabs';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  userData = {
    "username": "",
    "password": ""
  }

  responseData: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,public app: App,
    public alerCtrl: AlertController,
    public webapi: WebapiServiceProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
 
  gotoDashboard(){
    this.navCtrl.setRoot(TabHomePage);
  }

  login() {
    this.webapi.postData(this.userData, 'login.php').then((result) => {
      this.responseData = result;
     // console.log(this.responseData);

      if(this.responseData.userData){
        let alert = this.alerCtrl.create({
          title:'สถานะการเข้าสู่ระบบ',
          subTitle:'เข้าสู่ระบบเรียบร้อยแล้ว',
          buttons:['Dismiss']
        });
        alert.present();
        //  local storage
        //console.log(this.responseData);
        localStorage.setItem("userData",JSON.stringify(this.responseData));

        this.navCtrl.setRoot(TabsPage);
      }else{
        let alert = this.alerCtrl.create({
          title:'สถานะการเข้าสู่ระบบ',
          subTitle:'เข้าสู่ระบบไม่สำเร็จ',
          buttons:['Dismiss']
        });
        alert.present();
      }
    }, (err) => {
      console.log(err);
    });
  }
}
