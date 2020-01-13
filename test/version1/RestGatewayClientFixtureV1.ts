let _ = require('lodash');
let async = require('async');
let assert = require('chai').assert;

import { PagingParams } from 'pip-services3-commons-node';
import { DevicesMemoryClientV1 } from 'iqs-clients-devices-node';
import { StateUpdatesNullClientV1 } from 'iqs-clients-stateupdates-node';

import { StatusMessageV1 } from '../../src/version1/StatusMessageV1';
import { IRestGatewayClientV1 } from '../../src/version1/IRestGatewayClientV1';

let STATUS_MSG1: StatusMessageV1 = {
    device_udi: '111',
    time: new Date(),
    lat: 32,
    lng: -110,
    alt: 750,
    angle: 0,
    speed: 1,
    freezed: false
};
let STATUS_MSG2: StatusMessageV1 = {
    device_udi: '222',
    time: new Date(),
    lat: 33,
    lng: -111,
    alt: 750,
    angle: 0,
    speed: 1,
    freezed: false
};

export class RestGatewayClientFixtureV1 {
    private _client: IRestGatewayClientV1;
    private _devicesClient: DevicesMemoryClientV1;
    
    constructor(client: IRestGatewayClientV1, devicesClient: DevicesMemoryClientV1) {
        this._client = client;

        this._devicesClient = devicesClient;
        devicesClient.createDevice(null, { id: '1', org_id: '1', udi: '111', type: 'smartphone', status: 'active' }, () => {});
        devicesClient.createDevice(null, { id: '2', org_id: '1', udi: '222', type: 'smartphone', status: 'active' }, () => {});        
    }
        
    public testProcessStatusMessage(done) {
        async.series([
        // Process first status message
            (callback) => {
                this._client.updateStatus(
                    null,
                    STATUS_MSG1,
                    (err) => {
                        assert.isNull(err);

                        callback();
                    }
                );
            },
        // Process second status message
            (callback) => {
                this._client.updateStatus(
                    null,
                    STATUS_MSG2,
                    (err) => {
                        assert.isNull(err);

                        callback();
                    }
                );
            }
        ], done);
    }
}
