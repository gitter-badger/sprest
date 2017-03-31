import {IHelper} from "../../definitions";
import {AppHelper} from "./app";
import {JSLinkHelper} from "./jslink";
import {ListHelper} from "./list";
import {Loader} from "./loader";

/**
 * Helper Methods
 */
export const Helper:IHelper = {
    App: <any>AppHelper,
    JSLink: <any>JSLinkHelper,
    List: <any>ListHelper,
    Loader: <any>Loader
};