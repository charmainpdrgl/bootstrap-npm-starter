var client = ShopifyBuy.buildClient({
    apiKey: "bede6ad269bcae5f67f81abfc8d4073f",
    domain: "charmains-shopify.netlify.app",
    appId: "6"
  });
  
  var ui = ShopifyBuy.UI.init(client);
  
  ui.createComponent("collection", {
    id: 262878494885,
    options: {
      product: {
        isButton: true,
        buttonDestination: "modal",
        contents: {
          button: false,
          options: false
        }
      }
    }
  });