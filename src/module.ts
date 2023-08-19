import { addImports, defineNuxtModule } from "@nuxt/kit";
import * as lodash from "lodash-es";

export interface ModuleOptions {
    /**
     * Prefix to be added before every lodash function
     *
     * `false` to disable uppercasing
     *
     * @defaultValue `use`
     */
    prefix: false | string;
    /**
     * Array of lodash funcions to be included from auto-imports
     *
     * @defaultValue []
     */
    include: string[];
    /**
     * Iterable of string pairs to alias each function
     *
     * @defaultValue []
     */
    alias: Iterable<[string, string]>;
    /**
     * Upper case first letter after prefix
     *
     * `false` to disable uppercasing
     *
     * @defaultValue true
     */
    upperAfterPrefix: boolean;
}

export default defineNuxtModule<ModuleOptions>({
    meta: {
        name: "unfated-nuxt-lodash",
        configKey: "lodash",
        compatibility: {
            nuxt: "^3.0.0",
        },
    },

    defaults: {
        prefix: "_",
        include: [],
        alias: [],
        upperAfterPrefix: true,
    },

    setup(options) {
        const aliasMap = new Map<string, string>(options.alias);

        for (const name of Object.keys(lodash)) {
            if (options.include.includes(name)) {
                const alias = aliasMap.get(name) || name;
                const prefix =
                    options.prefix && !alias.startsWith(options.prefix)
                        ? options.prefix
                        : "";
                const formattedAlias = prefix
                    ? prefix +
                      (options.upperAfterPrefix
                          ? lodash.upperFirst(alias)
                          : alias)
                    : alias;

                addImports({ name, as: formattedAlias, from: "lodash-es" });
            }
        }
    },
});
