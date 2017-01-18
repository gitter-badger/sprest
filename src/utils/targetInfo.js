/*********************************************************************************************************************************/
// Target Information
// This class will take the target information and create the request url.
/*********************************************************************************************************************************/
export class TargetInfo {
    /*********************************************************************************************************************************/
    // Constructor
    /*********************************************************************************************************************************/
    constructor(targetInfo) {
        // Default the properties
        this.targetInfo = targetInfo || {};
        this.requestData = this.targetInfo.data;
        this.requestMethod = this.targetInfo.method ? this.targetInfo.method : "GET";

        // Set the request url
        this.setRequestUrl()
    }

    /*********************************************************************************************************************************/
    // Public Properties
    /*********************************************************************************************************************************/

    // Flag to determine if the request returns an array buffer
    get bufferFl() { return this.targetInfo.bufferFl; }

    // The callback method to execute after the asynchronous request completes
    get callback() { return this.targetInfo.callback; }

    // The request data
    requestData;

    // The request header
    requestHeaders;

    // The request method
    requestMethod;

    // The request url
    requestUrl;

    /*********************************************************************************************************************************/
    // Private Variables
    /*********************************************************************************************************************************/

    // The target information
    targetInfo;

    /*********************************************************************************************************************************/
    // Methods
    /*********************************************************************************************************************************/

    // Method to get the domain url
    getDomainUrl() {
        let url = document.location.href;

        // See if this is an app web
        if (ContextInfo.isAppWeb) {
            // Set the url to the host url
            url = TargetInfo.getQueryStringValue("SPHostUrl") + "";
        }

        // Split the url and validate it
        url = url.split('/');
        if (url && url.length >= 2) {
            // Set the url
            url = url[0] + "//" + url[2];
        }

        // Return the url
        return url;
    }

    // Method to get a query string value
    static getQueryStringValue(key) {
        // Get the query string
        var queryString = document.location.href.split('?');
        queryString = queryString.length > 1 ? queryString[1] : queryString[0];

        // Parse the values
        var values = queryString.split('&');
        for (var i = 0; i < values.length; i++) {
            var keyValue = values[i].split('=');

            // Ensure a value exists
            if (keyValue.length == 1) { continue; }

            // See if this is the key we are looking for
            if (decodeURIComponent(keyValue[0]) == key) {
                return decodeURIComponent(keyValue[1]);
            }
        }

        // Key was not found
        return null;
    }

    // Method to set the request url
    setRequestUrl() {
        let hostUrl = TargetInfo.getQueryStringValue("SPHostUrl");
        let template = "{{Url}}/_api/{{EndPoint}}{{TargetUrl}}";

        // See if we are defaulting the url for the app web
        if(window["$REST"].DefaultRequestToHostFl && ContextInfo.isAppWeb && this.targetInfo.url == null) {
            // Default the url to the host web
            this.targetInfo.url = hostUrl;
        }

        // Ensure the url exists
        if(this.targetInfo.url == null) {
            // Default the url to the current site/web url
            this.targetInfo.url = this.targetInfo.defaultToWebFl == false ? ContextInfo.siteAbsoluteUrl : ContextInfo.webAbsoluteUrl;
        }
        // Else, see if the url already contains the full request
        else if(/\/_api\//.test(this.targetInfo.url)) {
            // Get the url
            var url = this.targetInfo.url.toLowerCase().split("/_api/");

            // See if this is the app web and we are executing against a different web
            if(ContextInfo.isAppWeb && url[0] != ContextInfo.webAbsoluteUrl.toLowerCase()) {
                // Set the request url
                this.requestUrl = ContextInfo.webAbsoluteUrl + "/_api/SP.AppContextSite(@target)/" + url[1] +
                    (this.targetInfo.endpoint ? "/" + this.targetInfo.endpoint : "") +
                    "?@target='" + url[0] + "'";
            }
            else {
                // Set the request url
                this.requestUrl = this.targetInfo.url + (this.targetInfo.endpoint ? "/" + this.targetInfo.endpoint : "");
            }
            return;
        }

        // See if this is a relative url
        if(this.targetInfo.url.indexOf("http") != 0) {
            // Add the domain
            this.targetInfo.url = this.getDomainUrl() + this.targetInfo.url;
        }

        // See if this is the app web, and we are executing against a different web
        if(ContextInfo.isAppWeb && this.targetInfo.url != ContextInfo.webAbsoluteUrl) {
            // Append the start character for the query string
            let endpoint = this.targetInfo.endpoint +
                (this.targetInfo.endpoint.indexOf("?") > 0 ? "&" : "?");

            // Set the request url
            this.requestUrl = template
                .replace(/{{Url}}/g, ContextInfo.webAbsoluteUrl)
                .replace(/{{EndPoint}}/g, "SP.AppContextSite(@target)/" + endpoint)
                .replace(/{{TargetUrl}}/g, "@target='" + this.targetInfo.url + "'");
        } else {
            // Set the request url
            this.requestUrl = template
                .replace(/{{Url}}/g, this.targetInfo.url)
                .replace(/{{EndPoint}}/g, this.targetInfo.endpoint)
                .replace(/{{TargetUrl}}/g, "");
        }
    }
}