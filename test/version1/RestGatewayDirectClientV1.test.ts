let assert = require('chai').assert;
let async = require('async');

import { Descriptor } from 'pip-services3-commons-node';
import { ConfigParams } from 'pip-services3-commons-node';
import { References } from 'pip-services3-commons-node';
import { ConsoleLogger } from 'pip-services3-components-node';

import { DevicesMemoryClientV1 } from 'iqs-clients-devices-node';
import { StateUpdatesNullClientV1 } from 'iqs-clients-stateupdates-node';

import { RestGatewayController } from 'iqs-services-restgateway-node';
import { IRestGatewayClientV1 } from '../../src/version1/IRestGatewayClientV1';
import { RestGatewayDirectClientV1 } from '../../src/version1/RestGatewayDirectClientV1';
import { RestGatewayClientFixtureV1 } from './RestGatewayClientFixtureV1';

suite('RestGatewayDirectClientV1', ()=> {
    let client: RestGatewayDirectClientV1;
    let fixture: RestGatewayClientFixtureV1;

    suiteSetup((done) => {
        let logger = new ConsoleLogger();
        let controller = new RestGatewayController();
        let devicesClient = new DevicesMemoryClientV1();

        let references: References = References.fromTuples(
            new Descriptor('pip-services', 'logger', 'console', 'default', '1.0'), logger,
            new Descriptor('iqs-services-devices', 'client', 'memory', 'default', '1.0'), devicesClient,
            new Descriptor('iqs-services-stateupdates', 'client', 'memory', 'default', '1.0'), new StateUpdatesNullClientV1(),
            new Descriptor('iqs-services-restgateway', 'controller', 'default', 'default', '1.0'), controller,
        );
        controller.setReferences(references);

        client = new RestGatewayDirectClientV1();
        client.setReferences(references);

        fixture = new RestGatewayClientFixtureV1(client, devicesClient);

        client.open(null, done);
    });
    
    suiteTeardown((done) => {
        client.close(null, done);
    });

    test('Process status messages', (done) => {
        fixture.testProcessStatusMessage(done);
    });

});
