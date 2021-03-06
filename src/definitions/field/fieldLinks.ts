import {
    IBase, IBaseCollection,
    IFieldLink,
    IResults
} from "..";

/**
 * Field Links
 */
export interface IFieldLinks extends IBaseCollection<IFieldLink, IFieldLink, IFieldLink> {
    /**
     * Adds a content type to the collection.
     * @param data - The field link properties.
     */
    add(data): IBase<IFieldLink>;

    /**
     * Gets the field link by its id.
     * @param id - The id of the field.
     */
    getById(id): IFieldLink & IBase<IFieldLink>;

    /**
     * Method to get the next set of results.
     */
    next(): IBase<IFieldLinks>;
}