sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("facebook.controller.View1", {
            onInit: function () {

            },
            add: function(oControlEvent){
                var value1view=this.getView().byId("value1"); 
               
                var value1= parseInt(value1view.getValue());
               
                // (oControlEvent.getSource().getParameters("value"));
               
               
                var value2view=this.getView().byId("value2");   
                var value2= parseInt(value2view.getValue());
                var resultview=this.getView().byId("result").setText("result:"+(value1+value2));  

              

               
            },
            sub: function(oControlEvent){
                var value1view=this.getView().byId("value1");   
                var value1= parseInt(value1view.getValue());
               
               
               
               
                var value2view=this.getView().byId("value2");   
                var value2= parseInt(value2view.getValue());
               
                var resultview=this.getView().byId("result").setText("result:"+(value1-value2)); 
               
            },
            mult: function(oControlEvent){
                var value1view=this.getView().byId("value1");   
                var value1= parseInt(value1view.getValue());
               
               
               
               
                var value2view=this.getView().byId("value2");   
                var value2= parseInt(value2view.getValue());
                // alert(value1*value2);
                
                var resultview=this.getView().byId("result").setText("result:"+(value1*value2)); 
               
            }
        

            
        });
    });
