package com.tw.capability.shoppingcartapp.controller;

import com.tw.capability.shoppingcartapp.Exceptions.ItemNotFoundException;
import com.tw.capability.shoppingcartapp.model.ShoppingItem;
import com.tw.capability.shoppingcartapp.service.ShoppingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;
import java.util.List;


@RestController
@CrossOrigin
public class ShoppingController {
    @Autowired
    private final ShoppingService shoppingService;

    public ShoppingController(ShoppingService shoppingService) {
        this.shoppingService = shoppingService;
    }

    @GetMapping("/items/all")
    public List<ShoppingItem> getItems() {
        return shoppingService.findAllItems();
    }

    @GetMapping("/items/{id}")
    public ShoppingItem getItem(@PathVariable(name="id") Long id) throws ResponseStatusException {
        return shoppingService.findItemById(id);
    }
    @GetMapping("/items")
    public ShoppingItem getItemByName(@RequestParam(value="name") String name) throws ItemNotFoundException{
        return shoppingService.findItemByName(name);
    }

    @PostMapping("/items")
    @ResponseStatus(value= HttpStatus.CREATED)
    public Long createItem(@RequestBody ShoppingItem item){
        return shoppingService.createItem(item);
    }

    @DeleteMapping(value = "/items/{id}")
    public Boolean deleteItem(@PathVariable Long id) throws ItemNotFoundException{
        ShoppingItem item = shoppingService.findItemById(id);
        shoppingService.deleteItem(item);
        return true;
    }

}
