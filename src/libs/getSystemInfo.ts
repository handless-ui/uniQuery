import titleInfo from "../tools/titleInfo";

export default () => {
    return new Promise((resolve, reject) => {
        resolve({
            statusBar: {
                height: titleInfo.paddingTop
            },
            title: {
                height: titleInfo.titleHeight
            }
        });
    });
};