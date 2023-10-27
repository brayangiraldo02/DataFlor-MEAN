import express from 'express';
import inventory from '../models/inventory.models.js';

// (GET)

// Obtain all inventory
export const getInventory = async (req, res) => {
  try {
    const Inventory = await inventory.findAll();

    if (Inventory.length === 0) {
      return res.status(404).json({
        message: 'No inventory found',
      });
    }

    res.status(200).json(Inventory);
  } catch (error) {
    res.status(400).json({ message: 'Error getting inventory', error });
  }
};

// Obtain a inventory by id
export const getInventoryById = async (req, res) => {
  try {
    const Inventory = await inventory.findByPk(req.params.id);

    if (!Inventory) {
      return res.status(404).json({
        message: 'No inventory found with that id',
      });
    }

    res.status(200).json(Inventory);
  } catch (error) {
    res.status(400).json({ message: 'Error getting inventory', error });
  }
};

// Obtain a inventory by idflowershops
export const getInventoryByIdflowerShops = async (req, res) => {
  try {
    const Inventory = await inventory.findAll({
      where: { idflowershops: req.params.idflowerShops },
    });

    if (Inventory.length === 0) {
      return res.status(404).json({
        message: 'No inventory found with that idflowerShops',
      });
    }

    res.status(200).json(Inventory);
  } catch (error) {
    res.status(400).json({ message: 'Error getting inventory', error });
  }
};

// (POST)

// Create a inventory
export const createInventory = async (req, res) => {
  try {
    const Inventory = await inventory.create(req.body);
    res.status(200).json(Inventory);
  } catch (error) {
    res.status(400).json({ message: 'Error creating inventory', error });
  }
};

// (PUT)

// Update a inventory by id
export const updateInventory = async (req, res) => {
  try {
    const Inventory = await inventory.update(req.body, {
      where: { inventoryid: req.params.id },
    });

    if (Inventory == 0) {
      return res.status(404).json({
        message: 'No inventory found with that id',
      });
    }

    res.status(200).json({ message: 'Inventory updated successfully' });
  } catch (error) {
    res.status(400).json({ message: 'Error updating inventory', error });
  }
};