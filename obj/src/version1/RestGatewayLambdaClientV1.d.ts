import { CommandableLambdaClient } from 'pip-services3-aws-node';
import { StatusMessageV1 } from './StatusMessageV1';
import { IRestGatewayClientV1 } from './IRestGatewayClientV1';
export declare class RestGatewayLambdaClientV1 extends CommandableLambdaClient implements IRestGatewayClientV1 {
    constructor(config?: any);
    updateStatus(correlationId: string, message: StatusMessageV1, callback: (err: any) => void): void;
}
