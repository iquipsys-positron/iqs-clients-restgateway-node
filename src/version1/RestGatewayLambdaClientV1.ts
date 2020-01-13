let _ = require('lodash');

import { ConfigParams } from 'pip-services3-commons-node';
import { IReferences } from 'pip-services3-commons-node';
import { CommandableLambdaClient } from 'pip-services3-aws-node';

import { StatusMessageV1 } from './StatusMessageV1';
import { IRestGatewayClientV1 } from './IRestGatewayClientV1';

export class RestGatewayLambdaClientV1 extends CommandableLambdaClient implements IRestGatewayClientV1 {       

    constructor(config?: any) {
        super('rest_gateway');

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
