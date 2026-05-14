import type { StructureResolver } from "sanity/structure";
import { DocumentIcon, DocumentsIcon } from "@sanity/icons";

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) => {
    // Fetch all document type list items
    const allDocuments = S.documentTypeListItems();

    // Filter for singleton documents based on the `singleton` property
    const singletonDocuments = allDocuments.filter((item) => {
        const schema = item?.getSchemaType() || Object();
        return schema?.singleton === true; // custom identifier for a singleton
    });

    // List items for singleton documents
    const singletonListItems = singletonDocuments.map((item) => {
        const itemId = item.getId() || "";
        return S.listItem()
            .title(item.getTitle() || "")
            .child(
                S.document().schemaType(itemId).documentId(itemId), // Use the schema type name as document ID
            );
    });

    // Add non-singleton items to the structure
    const nonSingletonListItems = allDocuments.filter(
        (item) => !singletonDocuments.includes(item),
    );

    // Final structure with two outer lists
    return S.list()
        .title("Content Manager")
        .items([
            S.listItem()
                .title("Collection Types")
                .icon(DocumentsIcon)
                .child(
                    S.list()
                        .title("Collection Types")
                        .items(nonSingletonListItems),
                ),
            S.listItem()
                .title("Singleton Types")
                .icon(DocumentIcon)
                .child(
                    S.list().title("Singleton Types").items(singletonListItems),
                ),
        ]);
};
