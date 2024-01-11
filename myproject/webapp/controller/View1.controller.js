sap.ui.define(['sap/m/MessageToast',
    'sap/ui/core/mvc/Controller'
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (MessageToast, Controller) {
        "use strict";

        return Controller.extend("hello.myproject.controller.View1", {
            onInit: function () {
                
            },

Onlog: function(oControlEvent){
    var eview=this.getView().byId("email");   
    var email= eview.getValue();
    // (oControlEvent.getSource().getParameters("value"));
   
   
    var pview=this.getView().byId("password");   
    var password= pview.getValue();
   
    if( email === "")
    {
        MessageToast.show("please enter valid email");
   
    }
    else
    {
        MessageToast.show("invalid");

    }
    if( password === ""){
        MessageToast.show("please enter valid paasword");
    }
    else{
        MessageToast.show("invalid");

    }

    if( password === email)
    {
        MessageToast.show("login sucessfully"); 
    }
}
        });
    });
