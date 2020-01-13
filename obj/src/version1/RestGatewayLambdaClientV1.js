"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let _ = require('lodash');
const pip_services3_commons_node_1 = require("pip-services3-commons-node");
const pip_services3_aws_node_1 = require("pip-services3-aws-node");
class RestGatewayLambdaClientV1 extends pip_services3_aws_node_1.CommandableLambdaClient {
    constructor(config) {
        super('rest_gateway');
        if (config != null)
            this.configure(pip_services3_commons_node_1.ConfigParams.fromValue(config));
    }
    updateStatus(correlationId, message, callback) {
        this.callCommand('update_status', correlationId, {
            message: message
        }, callback);
    }
}
exports.RestGatewayLambdaClientV1 = RestGatewayLambdaClientV1;
//# sourceMappingURL=RestGatewayLambdaClientV1.js.map