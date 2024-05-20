import * as cdk from 'aws-cdk-lib';
import { aws_s3 as s3 } from 'aws-cdk-lib';

export class S3CdkStack extends cdk.Stack {
    constructor(scope: cdk.App, id: string, prop?: cdk.StackProps) {
        super(scope, id, prop);
    }
}