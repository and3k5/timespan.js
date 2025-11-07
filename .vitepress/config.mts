import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
    srcDir: "docs",

    title: "timespan.js",
    description: "Timespan / duration representation in js",
    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        nav: [
            { text: "Home", link: "/" },
            { text: "Examples", link: "/examples" },
            { text: "Reference", link: "/reference" },
        ],

        sidebar: [
            {
                text: "Examples",
                items: [{ text: "Examples", link: "/examples" }],
            },
            {
                text: "References",
                items: [{ text: "Reference", link: "/reference" }],
            },
        ],

        socialLinks: [
            { icon: "github", link: "https://github.com/and3k5/timespan.js" },
        ],
    },
});
