import * as cdk from '@aws-cdk/core';
import * as widget_service from '../lib/widget_service';
// import * as sqs from '@aws-cdk/aws-sqs';

export class AwsCdkExampleStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // The code that defines your stack goes here
    new widget_service.WidgetService(this, 'Widgets');

    // example resource
    // const queue = new sqs.Queue(this, 'AwsCdkExampleQueue', {
    //   visibilityTimeout: cdk.Duration.seconds(300)
    // });
  }
}
