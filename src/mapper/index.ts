import { attachment } from "./attachment/attachment";
import { attachmentfiles } from "./attachmentFiles/attachmentFiles";
import { audit } from "./audit/audit";
import { contenttype } from "./contentType/contentType";
import { contenttypes } from "./contentType/contentTypes";
import { eventreceiver } from "./eventReceiver/eventReceiver";
import { eventreceivers } from "./eventReceiver/eventReceivers";
import { field } from "./field/field";
import { fields } from "./field/fields";
import { fieldlinks } from "./fieldLink/fieldLinks";
import { file } from "./file/file";
import { files } from "./file/files";
import { fileversion } from "./fileVersion/fileVersion";
import { fileversions } from "./fileVersion/fileVersions";
import { folder } from "./folder/folder";
import { folders } from "./folder/folders";
import { group } from "./group/group";
import { sitegroups } from "./group/siteGroups";
import { items } from "./item/items";
import { limitedwebpartmanager } from "./limitedWebPartManager/limitedWebPartManager";
import { list } from "./list/list";
import { listitem } from "./item/listItem";
import { lists } from "./list/lists";
import { peoplemanager } from "./peopleManager/peopleManager";
import { peoplepicker } from "./peoplePicker/peoplePicker";
import { profileloader } from "./profileLoader/profileLoader";
import { propertyvalues } from "./propertyValues/propertyValues";
import { roleassignment } from "./roleAssignment/roleAssignment";
import { roleassignments } from "./roleAssignment/roleAssignments";
import { roledefinition } from "./roleDefinition/roleDefinition";
import { roledefinitions } from "./roleDefinition/roleDefinitions";
import { search } from "./search/search";
import { site } from "./site/site";
import { socialfeed } from "./socialFeed/socialFeed";
import { user } from "./user/user";
import { users } from "./user/users";
import { usercustomaction } from "./userCustomAction/userCustomAction";
import { usercustomactions } from "./userCustomAction/userCustomActions";
import { userprofile } from "./userProfile/userProfile";
import { version } from "./version/version";
import { view } from "./view/view";
import { views } from "./view/views";
import { viewfieldcollection } from "./viewFieldCollection/viewFieldCollection";
import { web } from "./web/web";
import { webinfos } from "./web/webinfos";
import { webs } from "./web/webs";

/**
 * Mapper
 */
export const Mapper = {
    attachment,
    attachmentfiles,
    audit,
    contenttype, contenttypes,
    eventreceiver, eventreceivers,
    field, fields,
    fieldlinks,
    file, files,
    fileversion, fileversions,
    folder, folders,
    group, sitegroups,
    limitedwebpartmanager,
    list, lists,
    listitem, items,
    peoplemanager,
    peoplepicker,
    profileloader,
    propertyvalues,
    roleassignment, roleassignments,
    roledefinition, roledefinitions,
    search,
    site,
    socialfeed,
    user, users,
    usercustomaction, usercustomactions,
    userprofile,
    version,
    view, views,
    viewfieldcollection,
    web, webinfos, webs
};