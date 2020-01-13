import { CommandableHttpClient } from 'pip-services3-rpc-node';
import { StatusMessageV1 } from './StatusMessageV1';
import { IRestGatewayClientV1 } from './IRestGatewayClientV1';
export declare class RestGatewayHttpClientV1 extends CommandableHttpClient implements IRestGatewayClientV1 {
    constructor(config?: any);
    updateStatus(correlationId: string, message: StatusMessageV1, callback: (err: any) => void): void;
}
