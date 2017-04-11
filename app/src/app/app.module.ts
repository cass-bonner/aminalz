import { NgModule }                    from '@angular/core';
import { IonicApp, IonicModule }       from 'ionic-angular';
import { MyApp }                       from './app.component';
import { HttpModule }                  from "@angular/http";

import { AboutPage }                   from '../pages/about/about';
import { AccountConfirmationCodePage } from '../pages/account-confirmation-code/account-confirmation-code';
import { AccountChangePasswordPage }   from '../pages/account-change-password/account-change-password';
import { AccountForgotPasswordPage }   from '../pages/account-forgot-password/account-forgot-password';
import { AccountPage }                 from '../pages/account/account';
import { AccountSigninPage }           from '../pages/account-signin/account-signin';
import { AccountSigninUsingSAMLPage }  from '../pages/account-signin-using-saml/account-signin-using-saml';
import { AccountSignupPage }           from '../pages/account-signup/account-signup';
import { DisplayResourcesPage }            from '../pages/processed-resources/processed-resources';
import { UploadResourcesPage }             from '../pages/resource-add/resource-add';
import { TabsPage }                    from '../pages/tabs/tabs';
import { WelcomePage }                 from '../pages/welcome/welcome';
import { BrowserModule }               from "@angular/platform-browser";
import { HttpService }                 from "../services/http-service";
import { AlbumInfoService }            from '../pages/processed-resources/album-info.service';
import {PhotoComponent} from '../pages/processed-resources/photos.component';
import {S3Service} from '../pages/processed-resources/s3.service';
import {StepFunctionService} from '../pages/processed-resources/stepfunction.service';
import {RoundPipe} from '../pages/processed-resources/round.pipe';
import {
  IamAuthorizerClient,
  CustomAuthorizerClient,
  UserPoolsAuthorizerClient,
  NoAuthorizationClient,

} from "../services/aminalz-api.service";

@NgModule({
  declarations: [
    AccountConfirmationCodePage,
    AccountChangePasswordPage,
    AccountForgotPasswordPage,
    AccountPage,
    AccountSigninPage,
    AccountSigninUsingSAMLPage,
    AccountSignupPage,
    LocationAddPage,
    DisplayResourcesPage,
    UploadResourcesPage,
    MyApp,
    TabsPage,
    WelcomePage
  ],
  imports: [
    HttpModule,
    IonicModule.forRoot(MyApp),
    BrowserModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    AccountConfirmationCodePage,
    AccountChangePasswordPage,
    AccountForgotPasswordPage,
    AccountPage,
    AccountSigninPage,
    AccountSigninUsingSAMLPage,
    AccountSignupPage,
    DisplayResourcesPage,
    UploadResourcesPage,
    MyApp,
    TabsPage,
    WelcomePage,
  ],
  providers: [
    { provide: HttpService, useClass: HttpService },
    { provide: CustomAuthorizerClient, useClass: CustomAuthorizerClient },
    { provide: IamAuthorizerClient, useClass: IamAuthorizerClient },
    { provide: UserPoolsAuthorizerClient, useClass: UserPoolsAuthorizerClient },
    { provide: NoAuthorizationClient, useClass: NoAuthorizationClient },
    { provide: AlbumInfoService, useClass: AlbumInfoService },
    { provide: S3Service, useClass: S3Service },
    { provide: StepFunctionService, useClass: StepFunctionService },
  ]
})
export class AppModule {}
