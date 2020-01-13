"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pip_services3_commons_node_1 = require("pip-services3-commons-node");
const pip_services3_rpc_node_1 = require("pip-services3-rpc-node");
class RestGatewayDirectClientV1 extends pip_services3_rpc_node_1.DirectClient {
    constructor() {
        super();
        this._dependencyResolver.put('controller', new pip_services3_commons_node_1.Descriptor("iqs-services-restgateway", "controller", "*", "*", "*"));
    }
    updateStatus(correlationId, message, callback) {
        let timing = this.instrument(correlationId, 'rest_gateway.update_status');
        this._controller.updateStatus(message, (err) => {
            timing.endTiming();
            callback(err);
        });
    }
}
exports.RestGatewayDirectClientV1 = RestGatewayDirectClientV1;
//# sourceMappingURL=RestGatewayDirectClientV1.js.map