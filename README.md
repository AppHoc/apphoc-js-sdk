# AppHoc beacon JS SDK

The [AppHoc](https://apphoc.tech) JS SKD offers functionality to get the Bluetooth beacon information when a page is used as an ad-hoc-app. A web application can subscribe to the beacon information using this SDK. 

## Getting started

Install the SDK by either including the file from the jsDelivr CDN with this URL: 

```url
https://cdn.jsdelivr.net/gh/AppHoc/apphoc-js-sdk@0.0.1/index.js
```

Alternatively, you install the package as an npm / yarn module using the GitHub repository. 

```url
npm i https://github.com/AppHoc/apphoc-js-sdk
```

Be sure to import the package, for example using ES6 syntax: 

```javascript
import AppHoc from "apphoc-js-sdk";
```

After you've successfully installed the SDK, the setup is simple: 

```javascript
AppHoc.setCallbackMethod(beacon => {
  console.log("Got new beacon data", beacon);
})
```

The specified callback method is called everytime we get new data from the operating system. The beacon object look like this: 

```javascript
{ 
  "name": "pJHSOilyIY1gznORoJRl",
  "uuid": "cb10024f-aa18-3394-4199-a8730c7c1aed",
  "major": "2",
  "minor": "2",
  "distance": "0.28",
  "proximity": "Immediate",
  "scanTime": "12 November 2020 10:43:33 PM",
  "rssi": "-60",
}
```

## Contributing

We encourage contributing to this repository. Feel free to create issues or create pull requests. 

## Contact

Please contact us at [info@apphoc.tech](mailto:info@apphoc.tech). 

