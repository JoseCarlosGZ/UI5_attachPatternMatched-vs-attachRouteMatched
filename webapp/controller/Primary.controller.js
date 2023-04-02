sap.ui.define([
    "josecarlosgz/navigation/controller/BaseController"

],
    function (BaseController) {
        "use strict";
        return BaseController.extend("josecarlosgz.navigation.controller.Primary", {
            onInit: function () {
                /*El método attachPatternMatched() se ejecuta cada vez que navegamos a la vista cuyo routing>routes>name del manifest.json sea el indicado como argumento en el método que le precede getRoute("routing>routes>name").
                attachPatternMatched() dispara a su vez cada vez que este se ejecute, la función que le indiquemos como argumento. En el ejemplo se ejecutará la función primaryFuncion() cada vez que se navegue a la vista cuyo routing>routes>name =  "aliasName_Primary".

                OJO. En el método .getRoute("") no tenemos por qué poner el routing>routes>name de esta vista en la que nos encontramos, sino que podemos poner otro 'name' y en ese caso la función primaryFuncion() se ejecutaría cuando se navegue a la vita indicada. 

                En resumidas cuentas attachPatternMatched() añade una función listener al evento patternMatched que se dispara al navegar a una deternamida vista. Evidentemente, la función listener primaryFuncion() no quedará a la escucha hasta que este controlador de cargue y por ende se ejecute la función onInit donde está metida attachPatternMatched()
                */
                sap.ui.core.UIComponent.getRouterFor(this).getRoute("aliasName_Primary").attachPatternMatched(this.primaryFuncion, this);
            },
            primaryFuncion: function () {
                sap.m.MessageToast.show("Has navegado a la vista Primary.view.xml");
            },


            onNavBack: function () {
                this.navBack();
            },
            //Para navegar de la vista Main a la Secundary hemos puesto la función a saco, pero en realidad se hace como lo estamos haciendo aquí, es decir, en el BaseController creamos la función getRouter con parte de la ruta y aquí completamos:
            navToSecondaryView: function () {
                this.getRouter().navTo("aliasName_Secondary");
            }

        });
    });
