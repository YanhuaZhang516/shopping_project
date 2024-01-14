package com.tw.capability.shoppingcartapp.common.handler;

import com.tw.capability.shoppingcartapp.Exceptions.ItemNotFoundException;
import com.tw.capability.shoppingcartapp.common.ErrorResult;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

@ControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler(ItemNotFoundException.class)
    public ResponseEntity<ErrorResult> handle(ItemNotFoundException ex){
        ErrorResult errorResult = ErrorResult.builder().errorMessage(ex.getMessage()).errorCode("404").build();
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(errorResult);

    }
}
