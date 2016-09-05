/// <reference path="../base.d.ts" />
module $REST {
    /*********************************************************************************************************************************/
    // Content Type
    // The SPContentType object.
    /*********************************************************************************************************************************/
    export class ContentType extends Base {
        /*********************************************************************************************************************************/
        // Constructor
        /*********************************************************************************************************************************/
        constructor(contentTypeName:string, listName?:string, ...args) {
            // Call the base constructor
            super(Base.getInputParmeters.apply(null, args));

            // Query for the content type
            return (new ContentTypes(listName, this.targetInfo, false))["getByName"](contentTypeName);
        }
    }

    /*********************************************************************************************************************************/
    // Methods
    /*********************************************************************************************************************************/
    Library.contenttype = {
        // Adds a field link to the content type.
        addFieldLink: {
            name: "fieldlinks",
            metadataType: "SP.FieldLink",
            requestType: RequestType.PostWithArgsInBody
        },

        // Deletes the content type.
        delete: {
            requestType: RequestType.Delete
        },

        // Gets a field by it's internal name.
        getFieldByInternalName: {
            argNames: ["name"],
            name: "fields?$filter=InternalName eq '[[name]]'",
            requestType: RequestType.GetReplace
        },

        // Gets a field by it's static name.
        getFieldByStaticName: {
            argNames: ["name"],
            name: "fields?$filter=StaticName eq '[[name]]'",
            requestType: RequestType.GetReplace
        },

        // Gets a field by it's title.
        getFieldByTitle: {
            argNames: ["title"],
            name: "fields?$filter=Title eq '[[title]]'",
            requestType: RequestType.GetReplace
        },

        // Gets a field by it's internal name.
        getFieldLinkByName: {
            argNames: ["name"],
            name: "fields?$filter=Name eq '[[name]]'",
            requestType: RequestType.GetReplace
        },

        // Updates it's properties.
        update: {
            metadataType: "SP.ContentType",
            name: "",
            requestMethod: "MERGE",
            requestType: RequestType.PostWithArgsInBody
        }
    };
}
