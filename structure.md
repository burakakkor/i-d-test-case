```
server
└───config
|   └───assets
|    │   |   data.json // mock data
|    │   │   vouchers.json // mock data
|    |   routes.js // router
└───controller
│   |   api.js // server api controller
│   │   index.js // server index controller
│   app.js // server
│
src
└───app // client code
│   └───api
|   │   |   api.service.ts // api service
│   └───cart
|   │   |   cart.component.ts // cart controller
|   │   │   cart.service.ts // cart service
|   │   │   cart.ts // cart class
│   └───product
|   │   |   product.component.ts // product controller
|   │   │   product.service.ts // product service
|   │   │   product.ts // product class
│   |   app-routing.module.ts // router
│   │   app.component.ts // app component
│   |   app.module.ts // app module main
│   │   app.ts // app
└───public // client assets and views
│   └───css
│   └───fonts
│   └───image
│   └───views
│   │   └───pug // pug html templates
│   │   │   └───partials
│   │   │   │   cart.pug // cart
│   │   │   │   footer.pug // footer layout
│   │   │   │   header.pug // header layout
│   │   │   │   products.pug // products list
│   │   │   │   sneijder.pug // big captain
│   │   │   index.pug // index
│   
test
└──
  │  test.api.js // server tests api controller
  │  test-app.js // server tests
```