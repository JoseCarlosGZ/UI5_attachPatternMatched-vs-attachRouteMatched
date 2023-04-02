sap.ui.define([
    "josecarlosgz/navigation/controller/BaseController"
],
    /**
     * @param {typeof josecarlosgz.navigation.controller.BaseController} BaseController
     */
    function (BaseController) {
        "use strict";

        return BaseController.extend("josecarlosgz.navigation.controller.Main", {
            onInit: function () {

            },
            navToPrimaryView: function () {
                sap.ui.core.UIComponent.getRouterFor(this).navTo(
                                                                    "aliasName_Primary",
                                                                    {
                                                                        "parametro01": "manzanas",
                                                                        "parametro02": "naranjas"
                                                                    }
                                                                );
            }
        });
    });
