import { createContext } from "react";

interface ThemeContext {
    light: boolean,
    setLight: React.Dispatch<React.SetStateAction<boolean>>
}

const LightThemeContext = createContext<ThemeContext>({ light: true, setLight: () => { } });

export { LightThemeContext };

