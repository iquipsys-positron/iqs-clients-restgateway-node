import { StatusMessageV1 } from './StatusMessageV1';

export interface IRestGatewayClientV1 {
    updateStatus(correlationId: string, message: StatusMessageV1, 
        callback: (err: any) => void): void;
}
