import { type SchemaTypeDefinition } from "sanity";
import project from "./schemas/project";
import tag from "./schemas/tag";
import team from "./schemas/team";
import landing from "./schemas/landing";

export const schema: { types: SchemaTypeDefinition[] } = {
    types: [team, project, tag, landing],
};
