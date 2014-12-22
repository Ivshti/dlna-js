var UpnpControlPoint = require("../lib/upnp-controlpoint").UpnpControlPoint;
var handleDevice = function(device) {
        var type = device.deviceType.replace ('urn:schemas-upnp-org:device:', '');
        type = (type.split(':')[0]);

        if (type !== 'MediaRenderer')
                return null;

    console.log("device type: " + device.deviceType + " location: " + device.location + device.friendlyName);
}
var cp = new UpnpControlPoint();
cp.on("device", handleDevice);
cp.search();
