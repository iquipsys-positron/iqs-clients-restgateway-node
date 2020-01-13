import { IRestGatewayClientV1 } from './IRestGatewayClientV1';
import { StatusMessageV1 } from './StatusMessageV1';
export declare class RestGatewayNullClientV1 implements IRestGatewayClientV1 {
    updateStatus(correlationId: string, message: StatusMessageV1, callback: (err: any) => void): void;
}
