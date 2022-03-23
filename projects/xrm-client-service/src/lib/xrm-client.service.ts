import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class XrmClientService {
  constructor() {
    console.log('%c Hi from XrmClientService', 'color:green')
    console.log('--->client url', Xrm.Utility.getGlobalContext().getClientUrl());
  }

  async whoAmI(): Promise<any> {
    return new Promise<any>(
      (resolve) => {
        Xrm.WebApi.retrieveRecord("systemuser", Xrm.Utility.getGlobalContext().userSettings.userId)
          .then(res => {
            console.log('c% success', res);
            resolve(res);
          }).catch((reason)=> {
            console.error(reason);
          })
      });

  }
}
