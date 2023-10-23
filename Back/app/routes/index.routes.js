import express from "express";
import cors from "cors";
import * as flowerShop from "../controller/flowershops.controller.js"
import * as users from "../controller/users.controller.js"

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
      createFlowerShop: "POST /flower-shops/create",
      updateFlowerShopById: "PUT /flower-shops/update/id/:id",
      updateFlowerShopByFullname: "PUT /flower-shops/update/fullname/:name"
    },
    users: {
      Access: "The administrator can access all routes and the owner can access some routes.",
      allUsers: "GET /users",
      userById: "GET /users/:id",
      userByUsername: "GET /users/username/:name",
      userByFullName: "GET /users/fullName/:fullName",
      userByPhone: "GET /users/phone/:phone",
      userByRole: "GET /users/role/:role",
      userByIdflowerShops: "GET /users/idflowerShops/:idflowerShops",
      createUser: "POST /users/create",
      updateUserById: "PUT /users/update/id/:id",
      updateUserByUsername: "PUT /users/update/username/:name"
    },
    providers: {

    },
    images: {

    },
    inventory: {

    },
    products: {

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

// Create a new flower shop
router.post("/flower-shops/create", flowerShop.createFlowerShop)

// Update a flower shop by id
router.put("/flower-shops/update/id/:id", flowerShop.updateFlowerShopById)

// Update a flower shop by fullname
router.put("/flower-shops/update/fullname/:name")

//  ----------------------------------------------------------------------------------------------


// ----------------------------------------------------------------------------------------------
//User routes

// Obtain all users
router.get("/users", users.getUsers)

// Obtain a user by id
router.get("/users/:id", users.getUsersById)

// Obtain a user by username
router.get("/users/username/:name", users.getUsersByUsername)

// Obtain a user by fullName
router.get("/users/fullName/:fullname", users.getUsersByFullName)

// Obtain a user by phone
router.get("/users/phone/:phone", users.getUsersByPhone)

// Obtain a user by role
router.get("/users/role/:role", users.getUsersByRole)

// Obtain a user by idflowerShops
router.get("/users/idflowerShops/:idflowerShops", users.getUsersByIdflowerShops)

// Create a new user
router.post("/users/create", users.createUser)

// Update a user by id
router.put("/users/update/id/:id", users.updateUserById)

// Update a user by username
router.put("/users/update/username/:name", users.updateUserByUsername)

//  ----------------------------------------------------------------------------------------------

export default router;