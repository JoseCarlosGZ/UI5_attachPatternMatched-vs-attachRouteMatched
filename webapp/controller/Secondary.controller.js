sap.ui.define([
    "josecarlosgz/navigation/controller/BaseController", 
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (BaseController) {
        "use strict";

        return BaseController.extend("josecarlosgz.navigation.controller.Secondary", {
            onInit: function () {
                /*attachRouteMatched() añade una función listener al router que ente caso la hemos llamado fnNavegacion. De modo que siempre que se navegue a cualquier vista se ejecutará la función fnNavegacion().
                Evidentemente hasta que el flujo del programa no pase por este código, la función fnNavegacion() no estará a la escucha, por lo que lo más idóneo es poner este código en el controlador de la vista principal que se carga al iniciar la app*/
                sap.ui.core.UIComponent.getRouterFor(this).attachRouteMatched(this.fnNavegacion, this);
            },

            fnNavegacion: function(oEvent) {
                // Código a ejecutar cada vez que se navega a cualquier vista
                alert("¡Has llegado a una nueva página!");
            },


            onNavBack: function () {
                this.navBack();
            },
            navToTertiaryView: function () {
                this.getRouter().navTo("aliasName_Tertiary");
            }
        });
    });
