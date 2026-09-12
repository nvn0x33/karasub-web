export class Theme {
    themeKey: string = "theme";

    constructor() {
        if (this.getTheme() === null) {
            this.setTheme("light");
        }
    }
    setTheme(theme: string) {
        localStorage.setItem(this.themeKey, theme);
    }
    getTheme() {
        return localStorage.getItem(this.themeKey);
    }
}
