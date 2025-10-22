
interface ScrollToSectionOptions {
    id: string;
    offsetMobile?: number;
    offsetDesktop?: number;
}

export const scrollToSection = (
    id: ScrollToSectionOptions['id'],
    offsetMobile: ScrollToSectionOptions['offsetMobile'] = 60,
    offsetDesktop: ScrollToSectionOptions['offsetDesktop'] = 80
): void => {
    const section: HTMLElement | null = document.getElementById(id);
    if (section) {
        const offset: number = window.innerWidth >= 768 ? offsetDesktop : offsetMobile;
        const top: number = section.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: "smooth" });
    }
};
