import { Descriptor } from 'pip-services3-commons-node';
import { Factory } from 'pip-services3-components-node';

import { RestGatewayNullClientV1 } from '../version1/RestGatewayNullClientV1';
import { RestGatewayDirectClientV1 } from '../version1/RestGatewayDirectClientV1';
import { RestGatewayHttpClientV1 } from '../version1/RestGatewayHttpClientV1';
import { RestGatewayLambdaClientV1 } from '../version1/RestGatewayLambdaClientV1';

export class RestGatewayClientFactory extends Factory {
	public static Descriptor: Descriptor = new Descriptor('iqs-services-restgateway', 'factory', 'default', 'default', '1.0');
	public static NullClientV1Descriptor = new Descriptor('iqs-services-restgateway', 'client', 'null', 'default', '1.0');
	public static DirectClientV1Descriptor = new Descriptor('iqs-services-restgateway', 'client', 'direct', 'default', '1.0');
	public static HttpClientV1Descriptor = new Descriptor('iqs-services-restgateway', 'client', 'http', 'default', '1.0');
	public static LambdaClientV1Descriptor = new Descriptor('iqs-services-restgateway', 'client', 'lambda', 'default', '1.0');
	
	constructor() {
		super();

		this.registerAsType(RestGatewayClientFactory.NullClientV1Descriptor, RestGatewayNullClientV1);
		this.registerAsType(RestGatewayClientFactory.DirectClientV1Descriptor, RestGatewayDirectClientV1);
		this.registerAsType(RestGatewayClientFactory.HttpClientV1Descriptor, RestGatewayHttpClientV1);
		this.registerAsType(RestGatewayClientFactory.LambdaClientV1Descriptor, RestGatewayLambdaClientV1);
	}
	
}
