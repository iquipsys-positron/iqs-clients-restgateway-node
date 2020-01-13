"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pip_services3_commons_node_1 = require("pip-services3-commons-node");
const pip_services3_rpc_node_1 = require("pip-services3-rpc-node");
class RestGatewayHttpClientV1 extends pip_services3_rpc_node_1.CommandableHttpClient {
    constructor(config) {
        super('v1/rest_gateway');
        if (config != null)
            this.configure(pip_services3_commons_node_1.ConfigParams.fromValue(config));
    }
    updateStatus(correlationId, message, callback) {
        this.callCommand('update_status', correlationId, {
            message: message
        }, callback);
    }
}
exports.RestGatewayHttpClientV1 = RestGatewayHttpClientV1;
//# sourceMappingURL=RestGatewayHttpClientV1.js.map