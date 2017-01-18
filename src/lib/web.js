import {Base} from "../utils";
/*********************************************************************************************************************************/
// Web
/*********************************************************************************************************************************/
export class Web extends Base {

    /*********************************************************************************************************************************/
    // Constructor
    /*********************************************************************************************************************************/
    constructor(url, targetInfo) {
        // Call the base constructor
        super(targetInfo);

        // Default the properties
        this.defaultToWebFl = true;
        this.responses = [];
        this.targetInfo.endpoint = "web";

        // See if the web url exists
        if(url) {
            // Set the settings
            this.targetInfo.url = url;
        }

        // Add the methods
        this.addMethods(this, { __metadata: { type: "web" } } );
    }

    // Method to determine if the current user has access, based on the permissions.
    hasAccess(permissions) {
        // TO DO
        return true;
    };
}