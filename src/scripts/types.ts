interface TabButtons {
    id: number;
    title: string;
}

interface SettingsOptions {
    id: number;
    title: string;
    image: string;
    end?: boolean;
}

type lang = "en" | "de" | "fr" | "cy"

interface LanguageOptions {
    id: number;
    title: string;
    image: string;
    code: lang;
    end?: boolean;
}