const AppHoc = {

    callbackMethod: () => {},
    debug: false,

    setCallbackMethod(callbackMethod) {
        this.callbackMethod = callbackMethod;
    },

    recieveBeaconEvent(beaconData) {
        if (this.debug)
            console.log("Recieved new beacon data", beaconData);

        this.callbackMethod(beaconData);
    }

};

window.AppHoc = AppHoc;

export default AppHoc;