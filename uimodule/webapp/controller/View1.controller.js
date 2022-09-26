sap.ui.define(
    ["sap/ui/core/mvc/Controller", "project1/lib/webviewer.min"],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, WebViewer) {
        "use strict";

        return Controller.extend("project1.controller.View1", {
            renderThePDF: function () {
                const divForPDF = jQuery(".pdfviewer")[0];
                window
                    .WebViewer(
                        {
                            path: "http://myPDFExampleSite.com:8082/",
                            initialDoc: "http://myPDFExampleSite.com:8082/sample.pdf",
                            licenseKey: "qfJK89PB5O8Y7Fye5Bq5",
                        },
                        divForPDF
                    )
                    .then((instance) => {
                        const { documentViewer } = instance.Core;
                        documentViewer.addEventListener("documentLoaded", () => {
                            // perform document operations
                        });
                    });
            },
        });
    }
);
