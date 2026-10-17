import type { Writing } from "../../types/Writing";

type MaybeDefault<T> = T | { default: T };

declare const require: {
    context(
        path: string,
        deep?: boolean,
        filter?: RegExp,
    ): {
        keys(): string[];
        <T>(id: string): T;
    };
};

const context = require.context("../writings", false, /\.json$/);
const writings: Writing[] = context
    .keys()
    .map((key) => {
        const mod = context<MaybeDefault<Writing>>(key);
        return "default" in mod ? mod.default : mod;
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

export default writings;
