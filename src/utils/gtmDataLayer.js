export const gtmEventHandler=(data)=>{
    if (window.dataLayer) {
        window.dataLayer.push(data);
    } else {
        console.warn('dataLayer is not defined');
    }
}