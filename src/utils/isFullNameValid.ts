export const isFullName = (name: string) => {
    let regFullName = /^([\w]{3,})+\s+([\w\s]{3,})+$/i;
    if (!regFullName.test(name)) {
        return false;
    }
    return true
}