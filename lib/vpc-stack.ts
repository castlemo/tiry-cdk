import * as cdk from '@aws-cdk/core';
import * as ec2 from '@aws-cdk/aws-ec2';

export class VPCStack extends cdk.Stack {
	public readonly vpc: ec2.Vpc;

	constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
		super(scope, id, props);

		const vpc = new ec2.Vpc(this, 'vpc', {
			maxAzs: 1,
			cidr: '10.0.0.0/16',
			// default ---
			// enableDnsHostnames: true,
			// enableDnsSupport: true,
			// ---
			subnetConfiguration: [
				{
					subnetType: ec2.SubnetType.PUBLIC,
					name: 'Ingress',
					cidrMask: 24,
				},
				{
					subnetType: ec2.SubnetType.PRIVATE,
					name: 'Application',
					cidrMask: 24,
				},
			],
		});

		this.vpc = vpc;
	}
}
