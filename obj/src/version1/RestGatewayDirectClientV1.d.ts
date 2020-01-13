import { DirectClient } from 'pip-services3-rpc-node';
import { IRestGatewayClientV1 } from './IRestGatewayClientV1';
import { StatusMessageV1 } from './StatusMessageV1';
export declare class RestGatewayDirectClientV1 extends DirectClient<any> implements IRestGatewayClientV1 {
    constructor();
    updateStatus(correlationId: string, message: StatusMessageV1, callback: (err: any) => void): void;
}
