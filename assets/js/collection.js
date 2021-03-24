var client = ShopifyBuy.buildClient({
    apiKey: "5f5b12708034eb00b387751cc46dfcff",
    domain: "charmains-shop.myshopify.com",
    appId: "6"
  });
  
  var ui = ShopifyBuy.UI.init(client);
  
  ui.createComponent("collection", {
    id: 278378774728,
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