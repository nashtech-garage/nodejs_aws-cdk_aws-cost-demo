#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { EC2WebApp } from '../lib/ec2-instance';

const devEnv = {
  account: process.env.CDK_DEFAULT_ACCOUNT,
  region: 'us-east-1',
};

const stackProps = {
  logLevel: process.env.LOG_LEVEL || 'INFO',
  sshPubKey: process.env.SSH_PUB_KEY || ' ',
  cpuType: process.env.CPU_TYPE || 'ARM64',
  instanceSize: process.env.INSTANCE_SIZE || 'LARGE',
};

const app = new cdk.App();

new EC2WebApp(app, 'EC2WebApp', {
  ...stackProps,
  env: devEnv,
});

app.synth();