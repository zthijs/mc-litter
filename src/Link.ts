export const toAppLink = (id : number) => {
    const templateUnlock = "https://x-masters.mcdonaldsnederland.app/unlock/";
    const templatePhone = "gmalite://gmalite-smartweb?weburl=";
    const enc = encodeURIComponent;
    return templatePhone + enc(`${templateUnlock}${id}`);
}