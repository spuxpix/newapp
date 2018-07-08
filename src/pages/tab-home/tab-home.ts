import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App,AlertController } from 'ionic-angular';
import { RegisterPage } from '../register/register';
import { LoginPage } from '../login/login';
import { TabsPage } from '../tabs/tabs';


/**
 * Generated class for the TabHomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tab-home',
  templateUrl: 'tab-home.html',
})
export class TabHomePage {
  userDetails:any;
  loginStatus:boolean;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public app: App,
    public alerCtrl: AlertController) {
      const  data = JSON.parse(localStorage.getItem("userData"));

      if(data == null){
        this.userDetails = {fullname : 'Guest'};
        this.loginStatus = true;
      }else{
        this.userDetails = data.userData;
        this.loginStatus = false;
      }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabHomePage');
  }

  register() {
    //this.navCtrl.push(RegisterPage);
    this.app.getRootNav().push(RegisterPage);
  }
  login(){
    this.app.getRootNav().push(LoginPage);
  }

  logout(){
    localStorage.removeItem("userData");
    let alert = this.alerCtrl.create({
      title:'ออกจากระบบ',
      subTitle:'คุณได้ออกจากระบบแล้ว',
      buttons:['Dismiss']
    });
    alert.present();
    this.navCtrl.setRoot(TabsPage);
  }
}
