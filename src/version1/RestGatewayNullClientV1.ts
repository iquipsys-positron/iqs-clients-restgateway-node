import { IReferences } from 'pip-services3-commons-node';
import { Descriptor } from 'pip-services3-commons-node';

import { IRestGatewayClientV1 } from './IRestGatewayClientV1';
import { StatusMessageV1 } from './StatusMessageV1';

export class RestGatewayNullClientV1 implements IRestGatewayClientV1 {
            
    public updateStatus(correlationId: string, message: StatusMessageV1, 
        callback: (err: any) => void): void {
        callback(null);
    }

}