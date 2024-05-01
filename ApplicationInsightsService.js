// import {ApplicationInsights} from '@microsoft/applicationinsights-web'
// import {ReactPlugin} from '@microsoft/applicationinsights-react-js'

// const reactPlugin = new ReactPlugin()
// const appInsights = new ApplicationInsights({
//   config: {
//     connectionString: process.env.NEXT_PUBLIC_APPLICATIONINSIGHTS_CONNECTION_STRING || 'InstrumentationKey=78d7a77d-dbb4-4c12-9395-e8568532eccd;IngestionEndpoint=https://eastus2-3.in.applicationinsights.azure.com/;LiveEndpoint=https://eastus2.livediagnostics.monitor.azure.com/',
//     correlationHeaderDomains: [process.env.NEXT_PUBLIC_STRAPI_URI, process.env.NEXT_PUBLIC_APOLLOCLIENT_URI],
//     extensions: [reactPlugin],
//     extensionConfig: {},
//     enableAutoRouteTracking: true,
//     disableAjaxTracking: false,
//     autoTrackPageVisitTime: true,
//     enableCorsCorrelation: true,
//     enableRequestHeaderTracking: true,
//     enableResponseHeaderTracking: true
//   }
// })
// appInsights.loadAppInsights()

// export { reactPlugin, appInsights }