import {Injectable} from '@angular/core';
import {CONFIG} from './config';
import { UserLoginService } from '../../services/account-management.service';
declare const AWS: any;


@Injectable()
export class S3Service {
  private s3Client: any;
  private cognitoUtil = null;

  constructor() {

    console.log("within s3Service constructor");

    let cognitoAwsAccessKey = null;
    let cognitoAwsSecretAccessKey = null

    try {
        cognitoAwsAccessKey = UserLoginService.getAwsAccessKey();
        console.log("Cognito AwsAccessKey: " + cognitoAwsAccessKey);
        cognitoAwsSecretAccessKey = UserLoginService.getAwsSecretAccessKey();
        console.log("Cognito AwsSecretAccessKey: " + cognitoAwsSecretAccessKey);
      } catch (e) {
        console.log(`Unable to retrieve user's login info from localStorage`);
        console.log(e);
      }
    AWS.config.credentials = new AWS.Credentials(cognitoAwsAccessKey, cognitoAwsSecretAccessKey);
    this.s3Client = new AWS.S3({
      region: CONFIG.Region
    });
  }

  upload(params: any): Promise<any> {
    return this.s3Client.upload(params).promise();
  }

  getDownloadPresignedUrl(params: any): Promise<string> {
    let promise = new Promise((resolve, reject) => {
      this.s3Client.getSignedUrl('getObject', params, (err: any, data: any) => {
        if (err) {
          reject(err);
        } else {
          resolve(data);
        }
      });
    });
    return promise;
  }
}
