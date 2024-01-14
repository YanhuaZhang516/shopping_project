package com.tw.capability.shoppingcartapp.repository;

import com.tw.capability.shoppingcartapp.model.ShoppingItem;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ItemRepository extends JpaRepository<ShoppingItem, Long> {

    @Query("select item from ShoppingItem item where item.name=?1")
    ShoppingItem findItemByName(String name);

}
