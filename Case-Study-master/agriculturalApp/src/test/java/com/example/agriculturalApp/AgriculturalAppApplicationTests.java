package com.example.agriculturalApp;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

import static org.hamcrest.Matchers.*;
import static org.mockito.Mockito.*;

import java.util.Arrays;
import java.util.List;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.http.ResponseEntity;

import com.example.agriculturalApp.controller.MyController;
import com.example.agriculturalApp.models.Product;
import com.example.agriculturalApp.rep.ProductRepository;
import com.example.agriculturalApp.service.prodService;

import static org.assertj.core.api.Assertions.assertThat;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

@SpringBootTest
class AgriculturalAppApplicationTests {


    @Mock
    private prodService productService;

    @Mock
    private ProductRepository productRepository;

    @InjectMocks
    private MyController myController;

    @BeforeEach
    public void setUp() {
        MockitoAnnotations.initMocks(this);
    }

//    @Test
//    public void testGetAvailableProducts() throws Exception {
//        List<Product> mockProducts = Arrays.asList(new Product(), new Product());
//        ResponseEntity<List<Product>> responseEntity = ResponseEntity.ok(mockProducts);
//
//        // Use any() to match the parameter
//        when(productService.getAvailableProducts())
//            .thenReturn(any());
//
//        ResponseEntity<> response = myController.getAvailableProducts();
//
//        assertThat(response.getStatusCodeValue()).isEqualTo(200);
//        assertThat(response.getBody()).isEqualTo(mockProducts);
//    }
    
    @Test
    public void testGetProductsByManufacturerName() throws Exception {
        String manufacturerName = "ABC Manufacturing";
        List<Product> mockProducts = Arrays.asList(new Product(), new Product());
        when(productRepository.findByProdManufacturer(manufacturerName)).thenReturn(mockProducts);

        List<Product> products = myController.getProductsByManufacturerName(manufacturerName);

        assertThat(products).hasSize(2);
    }

    @Test
    public void testBuyProducts() throws Exception {
        String productName = "ProductXYZ";
        List<Product> mockProducts = Arrays.asList(new Product(), new Product());
        when(productRepository.findByProdName(productName)).thenReturn(mockProducts);

        List<Product> products = myController.buyProducts(productName);

        assertThat(products).hasSize(2);
    }

}
