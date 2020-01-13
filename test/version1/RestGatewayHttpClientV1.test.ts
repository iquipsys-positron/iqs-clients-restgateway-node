let assert = require('chai').assert;
let async = require('async');

import { Descriptor } from 'pip-services3-commons-node';
import { ConfigParams } from 'pip-services3-commons-node';
import { References } from 'pip-services3-commons-node';
import { ConsoleLogger } from 'pip-services3-components-node';

import { DevicesMemoryClientV1 } from 'iqs-clients-devices-node';
import { StateUpdatesNullClientV1 } from 'iqs-clients-stateupdates-node';

import { RestGatewayController } from 'iqs-services-restgateway-node';
import { RestGatewayHttpServiceV1 } from 'iqs-services-restgateway-node';
import { IRestGatewayClientV1 } from '../../src/version1/IRestGatewayClientV1';
import { RestGatewayHttpClientV1 } from '../../src/version1/RestGatewayHttpClientV1';
import { RestGatewayClientFixtureV1 } from './RestGatewayClientFixtureV1';

var httpConfig = ConfigParams.fromTuples(
    "connection.protocol", "http",
    "connection.host", "localhost",
    "connection.port", 3000
);

suite('RestGatewayHttpClientV1', ()=> {
    let service: RestGatewayHttpServiceV1;
    let client: RestGatewayHttpClientV1;
    let fixture: RestGatewayClientFixtureV1;

    suiteSetup((done) => {
        let logger = new ConsoleLogger();
        let controller = new RestGatewayController();
        let devicesClient = new DevicesMemoryClientV1();

        service = new RestGatewayHttpServiceV1();
        service.configure(httpConfig);

        let references: References = References.fromTuples(
            new Descriptor('pip-services', 'logger', 'console', 'default', '1.0'), logger,
            new Descriptor('iqs-services-devices', 'client', 'null', 'default', '1.0'), devicesClient,
            new Descriptor('iqs-services-stateupdates', 'client', 'memory', 'default', '1.0'), new StateUpdatesNullClientV1(),
            new Descriptor('iqs-services-restgateway', 'controller', 'default', 'default', '1.0'), controller,
            new Descriptor('iqs-services-restgateway', 'service', 'http', 'default', '1.0'), service
        );
        controller.setReferences(references);
        service.setReferences(references);

        client = new RestGatewayHttpClientV1();
        client.setReferences(references);
        client.configure(httpConfig);

        fixture = new RestGatewayClientFixtureV1(client, devicesClient);

        service.open(null, (err) => {
            client.open(null, done);
        });
    });
    
    suiteTeardown((done) => {
        client.close(null);
        service.close(null, done);
    });

    test('Process status messages', (done) => {
        fixture.testProcessStatusMessage(done);
    });

});
