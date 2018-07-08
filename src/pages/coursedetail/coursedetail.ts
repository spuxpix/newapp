import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { WebapiServiceProvider } from '../../providers/webapi-service/webapi-service';
import {GlobalProvider} from '../../providers/global/global';
/**
 * Generated class for the CoursedetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-coursedetail',
  templateUrl: 'coursedetail.html',
})
export class CoursedetailPage {

  getcid:number;
  imgPath:any;
  responseData: any;

  constructor(public navCtrl: NavController, public navParams: NavParams
  ,public alerCtrl: AlertController
  ,public webapi: WebapiServiceProvider
  , public global:GlobalProvider) {
    this.imgPath=this.global.baseURLAPI;
    this.getcid = this.navParams.get("cid");
  }

  loadCourseDetail(id){
    this.webapi.getData('feed_course_detail.php?cid='+id).then( (result)=>{
      console.log(result);
      this.responseData = result;
    },(error)=>{
      console.log(error);
    });
  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad CoursedetailPage');
    //alert(this.getcid);
    this.loadCourseDetail(this.getcid);
  }

}
