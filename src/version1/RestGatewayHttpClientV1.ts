import { ConfigParams } from 'pip-services3-commons-node';
import { IReferences } from 'pip-services3-commons-node';
import { CommandableHttpClient } from 'pip-services3-rpc-node';

import { StatusMessageV1 } from './StatusMessageV1';
import { IRestGatewayClientV1 } from './IRestGatewayClientV1';

export class RestGatewayHttpClientV1 extends CommandableHttpClient implements IRestGatewayClientV1 {       
    
    constructor(config?: any) {
        super('v1/rest_gateway');

        if (config != null)
            this.configure(ConfigParams.fromValue(config));
    }
                
    public updateStatus(correlationId: string, message: StatusMessageV1,
        callback: (err: any) => void): void {
        this.callCommand(
            'update_status', 
            correlationId,
            {
                message: message
            }, 
            callback
        );
    }
    
}
