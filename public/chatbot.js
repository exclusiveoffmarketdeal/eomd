var initEmbeddedMessaging = function (gslbBaseURL) {
  embeddedservice_bootstrap.settings.language = 'en_US'
  embeddedservice_bootstrap.init(
    '00D7j0000004cGl',
    'Messaging_for_Web_Chats_Deployment',
    'https://vinebrookhomes--sit.sandbox.my.site.com/ESWMessagingforWebChat1695910797821',
    {
      scrt2URL: 'https://vinebrookhomes--sit.sandbox.my.salesforce-scrt.com',
    }
  )
}

if (!window.embeddedservice_bootstrap) {
  var s = document.createElement('script')
  s.setAttribute(
    'src',
    'https://vinebrookhomes--sit.sandbox.my.site.com/ESWMessagingforWebChat1695910797821/assets/js/bootstrap.min.js'
  )
  s.onload = function () {
    initEmbeddedMessaging(null)
  }
  document.body.appendChild(s)
} else {
  initEmbeddedMessaging('https://service.force.com')
}
