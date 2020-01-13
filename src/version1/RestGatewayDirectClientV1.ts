import { IReferences } from 'pip-services3-commons-node';
import { Descriptor } from 'pip-services3-commons-node';
import { DirectClient } from 'pip-services3-rpc-node';

import { IRestGatewayClientV1 } from './IRestGatewayClientV1';
//import { IRestGatewayController } from 'iqs-services-restgateway-node';
import { StatusMessageV1 } from './StatusMessageV1';

export class RestGatewayDirectClientV1 extends DirectClient<any> implements IRestGatewayClientV1 {
            
    public constructor() {
        super();
        this._dependencyResolver.put('controller', new Descriptor("iqs-services-restgateway", "controller", "*", "*", "*"))
    }

    public updateStatus(correlationId: string, message: StatusMessageV1, 
        callback: (err: any) => void): void {
        let timing = this.instrument(correlationId, 'rest_gateway.update_status');
        this._controller.updateStatus(message, (err) => {
            timing.endTiming();
            callback(err);
        });
    }

}