declare const require: {
    context(
        path: string,
        deep?: boolean,
        filter?: RegExp,
    ): {
        keys(): string[];
        (id: string): { default: string } | string;
    };
};

const fallback = "blog_1.jpg";
const context = require.context(
    "../assets/images",
    false,
    /\.(png|jpe?g|webp|svg)$/,
);

export const getImage = (name?: string): string => {
    try {
        const image = context(`./${name}`);
        return typeof image === "string" ? image : image.default;
    } catch {
        const image = context(`./${fallback}`);
        return typeof image === "string" ? image : image.default;
    }
};
