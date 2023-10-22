import express from "express";
import cors from "cors";
import * as flowerShop from "../controller/flowershops.controller.js"

const router = express.Router();

// Main route
router.get("/", (req, res) => {
  res.status(200).json({ 
    Welcome_message: "Welcome to the DataFlor backend!",
    flowerShops: {
      Access: "Only admins can access this routes",
      allFlowerShops: "GET /flower-shops",
      flowerShopById: "GET /flower-shops/:id",
      flowerShopByName: "GET /flower-shops/name/:name",
      flowerShopByAddress: "GET /flower-shops/address/:address",
      flowerShopByPhone: "GET /flower-shops/phone/:phone",
    },
    images: {

    },
    inventory: {

    },
    products: {

    },
    providers: {

    },
    users: {
      
    }
  });
});

//----------------------------------------------------------------------------------------------
// Routes of flower shops

// Obtain all flower shops
router.get("/flower-shops", flowerShop.getFlowerShops)

// Obtain a flower shop by id
router.get("/flower-shops/:id", flowerShop.getFlowerShopById)

// Obtain a flower shop by name
router.get("/flower-shops/name/:name", flowerShop.getFlowerShopByName)

// Obtain a flower shop by address
router.get("/flower-shops/address/:address", flowerShop.getFlowerShopByAddress)

// Obtain a flower shop by phone
router.get("/flower-shops/phone/:phone", flowerShop.getFlowerShopByPhone)

//----------------------------------------------------------------------------------------------


export default router;