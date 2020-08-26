package com.example.bubblesort;

// import org.json.JSONObject;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@RestController
public class BubbleSortController  implements WebMvcConfigurer {
//@RequestParam String jsonStringData

    // send our data to Backend
    @PostMapping(value="/solvearray")
   public String solveArray(@RequestParam String jsonString){

    //create Object
    BubbleSortAlgorithm bubbleSortArray = new BubbleSortAlgorithm();

    //convert to JSON String to Integer
    if(bubbleSortArray.convertToInteger(jsonString)){
        // solve Array
        bubbleSortArray.solveArray();
    }
    
    // // convert to JSON and return
    return  bubbleSortArray.converToJSON(); 
     




    
    

   }
   @GetMapping(value = "/")
   public String addSring(){
       return "GETMAPPING APPLIKATION IS RUNNING";

   }

   @Override
   public void addCorsMappings(CorsRegistry registry) {
       // Allow cross origin requests from local javascript application
       registry.addMapping("/**").allowedOrigins("http://127.0.0.1:5501");
   }

  

    
}