export const closeModal = (setState) => {
    document.querySelector('body').style.overflow = "";
    setState(false);
}

export const showModal = (setState) => {
    document.querySelector('body').style.overflow = "hidden";
    setState(true);
}
