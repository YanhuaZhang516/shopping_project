package com.tw.capability.shoppingcartapp.controller;

import com.tw.capability.shoppingcartapp.Exceptions.ItemNotFoundException;
import com.tw.capability.shoppingcartapp.model.ShoppingItem;
import com.tw.capability.shoppingcartapp.service.ShoppingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

import static org.springframework.web.bind.annotation.RequestMethod.DELETE;

@RestController
public class ShoppingController {
    @Autowired
    private final ShoppingService shoppingService;

    public ShoppingController(ShoppingService shoppingService) {
        this.shoppingService = shoppingService;
    }

    @GetMapping("/items")
    @CrossOrigin
    public List<ShoppingItem> getItems() {
        return shoppingService.findAllItems();
    }

    @GetMapping("/items/{id}")
    @CrossOrigin
    public ShoppingItem getItem(@PathVariable Long id) throws ItemNotFoundException {
        return shoppingService.findItemById(id);
    }

    @PostMapping("/items")
    public Long createItem(@RequestBody ShoppingItem item){
        return shoppingService.createItem(item);
    }

//    @DeleteMapping("/items/{id}")
    @RequestMapping(value = "/items/{id}", method = RequestMethod.DELETE)
    @ResponseBody
    public Boolean deleteItem(@PathVariable Long id) throws ItemNotFoundException{
        ShoppingItem item = shoppingService.findItemById(id);
        shoppingService.deleteItem(item);
        return true;
    }

}
