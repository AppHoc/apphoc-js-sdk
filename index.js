function log(...args) {
    console.log("APPHOC-SDK", ...args);
}

const AppHoc = {

    callbackMethod: () => {},
    debug: false,

    setCallbackMethod(callbackMethod) {
        if (this.debug)
            log("Setting callback method")

        this.callbackMethod = callbackMethod;
    },

    _receiveBeaconEvent(beaconData) {
        if (this.debug)
            log("Received new beacon data", beaconData);

        this.callbackMethod(beaconData);
    },

    requestStory(url) {
        try {
            if (this.debug)
                log("Requesting story", url);

            AppHocFlutter.postMessage(`STORY ${url}`);
        } catch (e) {
            if (this.debug)
                log("Got error while requesting story");

            throw new Error("SDK not running in AppHoc");
        }
    }

};

window.AppHoc = AppHoc;

export default AppHoc;