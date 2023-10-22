import express from "express";
import flowerShops from "../models/flowershops.models.js";
import cors from "cors";

// (GET)

// Obtain all flower shops
export const getFlowerShops = async (req, res) => {
  try {
    const flowerShops = await flowerShops.findAll();

    if (!flowerShops) {
      return res.status(404).json({
        message: "No flower shops found"});
    }

    res.status(200).json(flowerShops);
  } catch (error) {
    res.status(400).json({message: "Error getting flower shops"});
  }
};

// Obtain a flower shop by id
export const getFlowerShopById = async (req, res) => {
  try {
    const flowerShop = await flowerShops.findByPk(req.params.id);

    if (!flowerShop) {
      return res.status(404).json({
        message: "No flower shop found with that id"});
    }

    res.status(200).json(flowerShop);
  } catch (error) {
    res.status(400).json({message: "Error getting flower shop"});
  }
};

// Obtain a flower shop by name
export const getFlowerShopByName = async (req, res) => {
  try {
    const flowerShop = await flowerShops.findOne({
      where: { name: req.params.name },
    });

    if (!flowerShop) {
      return res.status(404).json({
        message: "No flower shop found with that name"});
    }

    res.status(200).json(flowerShop);
  } catch (error) {
    res.status(400).json({message: "Error getting flower shop by name"});
  }
};

// Obtain a flower shop by address
export const getFlowerShopByAddress = async (req, res) => {
  try {
    const flowerShop = await flowerShops.findOne({
      where: { address: req.params.address },
    });

    if (!flowerShop) {
      return res.status(404).json({
        message: "No flower shop found with that address"});
    }

    res.status(200).json(flowerShop);
  } catch (error) {
    res.status(400).json({message: "Error getting flower shop by address"});
  }
};

// Obtain a flower shop by phone
export const getFlowerShopByPhone = async (req, res) => {
  try {
    const flowerShop = await flowerShops.findOne({
      where: { phone: req.params.phone },
    });

    if (!flowerShop) {
      return res.status(404).json({
        message: "No flower shop found with that phone"});
    }

    res.status(200).json(flowerShop);
  } catch (error) {
    res.status(400).json({message: "Error getting flower shop by phone"});
  }
};

