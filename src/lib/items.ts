/// <reference path="../base.d.ts" />
module $REST {
    /*********************************************************************************************************************************/
    // Items
    // The SPItemCollection object.
    /*********************************************************************************************************************************/
    export class Items extends Base {
        /*********************************************************************************************************************************/
        // Constructor
        /*********************************************************************************************************************************/
        constructor(listName:string, settings?:ITargetInfoType, executeRequestFl?:boolean) {
            // Call the base constructor
            super(settings, executeRequestFl);

            // Default the properties
            this.defaultToWebFl = true;
            this.targetInfo.endpoint = "web/lists/getByTitle('" + listName + "')/items";

            // See if we are executing the request
            if(this.executeRequestFl) {
                // Execute the request
                this.execute();
            }
            else {
                // Add the methods
                this.addMethods(this, { __metadata: { type: "items" } } );
            }
        }
    }

    /*********************************************************************************************************************************/
    // Methods
    /*********************************************************************************************************************************/
    Library.items = {
        // Adds an item to the list item collection.
        add: {
            metadataType: "SP.ListItem",
            requestType: RequestType.PostWithArgsInBody
        },

        // Gets an item by its id.
        getById: {
            argNames: ["id"],
            requestType: RequestType.GetWithArgsValueOnly
        }
    };
}