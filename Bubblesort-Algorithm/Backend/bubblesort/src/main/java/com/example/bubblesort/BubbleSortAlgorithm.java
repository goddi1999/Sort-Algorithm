package com.example.bubblesort;

import java.util.ArrayList;
import java.util.List;
import org.json.*;


public class BubbleSortAlgorithm {

    List<Integer> sortedArray = new ArrayList<Integer>();
    int unsortedArray [] = new int[5];

    public BubbleSortAlgorithm() {
    }


    // BubbleSort Algorithm
	public void solveArray() {
        // parse the String to Integer

        int iteration = 0;
        while (iteration != unsortedArray.length - 1) {
            for (int i = 0; i < unsortedArray.length - 1; i++) {
                int tmp;
                if (unsortedArray[i] > unsortedArray[i + 1]) {
                    tmp = unsortedArray[i];
                    unsortedArray[i] = unsortedArray[i + 1];
                    unsortedArray[i + 1] = tmp;

             
                }
            }
            iteration++;
        }
        for (int j = 0; j < unsortedArray.length; j++) {

            
            sortedArray.add(unsortedArray[j]);
            
            
        }


    }
    
    // convert to JAVA OBJ FUNCTION
    public boolean convertToInteger (String arrayStringJSON) {

        
        //Filtert Zahlen aus dem String
        String JSONnumbersArray = arrayStringJSON.replaceAll("[^0-9]", "");
        
        //ArrayList speichert int Werte
        for (int i = 0; i < 5; i++) {
            int current_number = Integer.parseInt(JSONnumbersArray, i ,  i + 1,   10);
            unsortedArray[i] = current_number;

        }
            return true;
     
    }


    // conert to JSON FUNCTION
    public String  converToJSON (){
        
        JSONObject obj = new JSONObject();
        JSONArray arrayjson = new JSONArray();
        for (Integer i : sortedArray) {
            arrayjson.put(i);
        }      
        obj.put("arrayJSON" ,arrayjson);

        return obj.toString();

    }



    // public String toJSON() throws JSONException{		
	// 	// create a JSON-Object
	// 	JSONObject sudokuJSON = new JSONObject();
	// 	// put attributes into json Objects
	// 	//Objekt in JSON Array umwandeln
	// 	sudokuJSON.put("sudokuJSON" , sudoku_set);
	// 	sudokuJSON.put("time" , time);
	// 	sudokuJSON.put("status", "200");
	// 	return sudokuJSON.toString();
	// }

 

    
    
}