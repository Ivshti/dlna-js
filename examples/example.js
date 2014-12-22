var UpnpControlPoint = require("../lib/upnp-controlpoint").UpnpControlPoint;

var handleDevice = function(device) {
	console.log("device type: " + device.deviceType + " location: " + device.location + device.friendlyName);
}
var cp = new UpnpControlPoint();
cp.on("device", handleDevice);
cp.search();
