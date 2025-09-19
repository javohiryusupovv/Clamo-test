import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
    baseDirectory: __dirname,
});

const eslintConfig = [
    ...compat.extends("next/core-web-vitals", "next/typescript"),

    {
        rules: {
            // allow <img> instead of forcing Next.js <Image />
            "@next/next/no-img-element": "off",

            // don’t break builds on missing deps in useEffect
            "react-hooks/exhaustive-deps": "warn",
        },
    },
];

export default eslintConfig;
