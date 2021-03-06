import { Promise } from ".";
/*********************************************************************************************************************************/
/*********************************************************************************************************************************/
export declare class Dependencies {
    /*********************************************************************************************************************************/
    /*********************************************************************************************************************************/
    readonly MAX_WAIT: number;
    readonly SCRIPTS: Array<string>;
    /*********************************************************************************************************************************/
    /*********************************************************************************************************************************/
    constructor(callback: (...args) => void);
    /*********************************************************************************************************************************/
    /*********************************************************************************************************************************/
    promise: Promise;
    readonly pageContextExistsFl: boolean;
    /*********************************************************************************************************************************/
    /*********************************************************************************************************************************/
    private loadDependencies();
    private waitForPageContext();
}
