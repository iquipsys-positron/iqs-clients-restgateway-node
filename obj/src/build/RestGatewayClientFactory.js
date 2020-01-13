"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pip_services3_commons_node_1 = require("pip-services3-commons-node");
const pip_services3_components_node_1 = require("pip-services3-components-node");
const RestGatewayNullClientV1_1 = require("../version1/RestGatewayNullClientV1");
const RestGatewayDirectClientV1_1 = require("../version1/RestGatewayDirectClientV1");
const RestGatewayHttpClientV1_1 = require("../version1/RestGatewayHttpClientV1");
const RestGatewayLambdaClientV1_1 = require("../version1/RestGatewayLambdaClientV1");
class RestGatewayClientFactory extends pip_services3_components_node_1.Factory {
    constructor() {
        super();
        this.registerAsType(RestGatewayClientFactory.NullClientV1Descriptor, RestGatewayNullClientV1_1.RestGatewayNullClientV1);
        this.registerAsType(RestGatewayClientFactory.DirectClientV1Descriptor, RestGatewayDirectClientV1_1.RestGatewayDirectClientV1);
        this.registerAsType(RestGatewayClientFactory.HttpClientV1Descriptor, RestGatewayHttpClientV1_1.RestGatewayHttpClientV1);
        this.registerAsType(RestGatewayClientFactory.LambdaClientV1Descriptor, RestGatewayLambdaClientV1_1.RestGatewayLambdaClientV1);
    }
}
exports.RestGatewayClientFactory = RestGatewayClientFactory;
RestGatewayClientFactory.Descriptor = new pip_services3_commons_node_1.Descriptor('iqs-services-restgateway', 'factory', 'default', 'default', '1.0');
RestGatewayClientFactory.NullClientV1Descriptor = new pip_services3_commons_node_1.Descriptor('iqs-services-restgateway', 'client', 'null', 'default', '1.0');
RestGatewayClientFactory.DirectClientV1Descriptor = new pip_services3_commons_node_1.Descriptor('iqs-services-restgateway', 'client', 'direct', 'default', '1.0');
RestGatewayClientFactory.HttpClientV1Descriptor = new pip_services3_commons_node_1.Descriptor('iqs-services-restgateway', 'client', 'http', 'default', '1.0');
RestGatewayClientFactory.LambdaClientV1Descriptor = new pip_services3_commons_node_1.Descriptor('iqs-services-restgateway', 'client', 'lambda', 'default', '1.0');
//# sourceMappingURL=RestGatewayClientFactory.js.map