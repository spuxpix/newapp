import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,App, AlertController } from 'ionic-angular';
import { WebapiServiceProvider } from '../../providers/webapi-service/webapi-service';
import {GlobalProvider} from '../../providers/global/global';
import { CoursedetailPage } from '../coursedetail/coursedetail';

/**
 * Generated class for the TabCoursePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tab-course',
  templateUrl: 'tab-course.html',
})
export class TabCoursePage {

  responseData: any;
  imgPath:any;
  constructor(public navCtrl: NavController, public navParams: NavParams
    ,public app: App,
    public alerCtrl: AlertController
    ,public webapi: WebapiServiceProvider
    , public global:GlobalProvider) {
      this.imgPath=this.global.baseURLAPI;
  }

  ionViewDidLoad() {
   this.loadCourse();
  }

  loadCourse(){
    this.webapi.getData('feed_course.php').then( (result)=>{
      console.log(result);
      this.responseData = result;
    },(error)=>{
      console.log(error);
    });
  }

  doRefresh(refresher) {
   // console.log('Begin async operation', refresher);
    this.loadCourse();
    setTimeout(() => {
      console.log('Async operation has ended');
      refresher.complete();
    }, 2000);
  }

  courseDetail(id){
   // alert(id);
   this.app.getRootNav().push(CoursedetailPage,{cid:id});
  }

}
