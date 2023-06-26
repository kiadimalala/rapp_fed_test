import localFont from "next/font/local";

// Define a local font named "markOT" using the "next/font/local" package.
// The font will be used in the project's styling or layout.

const markOT = localFont({
    src: [
        { path: "../../public/assets/Fonts/MarkOT-Regular.otf", weight: "400" },
        { path: "../../public/assets/Fonts/MarkOT-Book.otf", weight: "350" },
        { path: "../../public/assets/Fonts/MarkOT-Thin.otf", weight: "200" },
        { path: "../../public/assets/Fonts/MarkOT.otf", weight: "450" },
        { path: "../../public/assets/Fonts/MarkOT-Bold.otf", weight: "700" }
    ],
    display: "swap"
});


export {
    markOT
};
