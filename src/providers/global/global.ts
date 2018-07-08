import { Injectable } from '@angular/core';

/*
  Generated class for the GlobalProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class GlobalProvider {
  // Global variables
  //public baseURLAPI: string = "http://10.1.99.235/combindapp/combindrestapi/";
  public baseURLAPI: string = "http://localhost/combindapp/combindrestapi/";
  public authKey: string = "Basic YWRtaW46MTIzNA==";

}
