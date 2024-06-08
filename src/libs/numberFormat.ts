export default (input: string | number) => {
    if (!input && input !== 0) {
        return '';
    } else {
        input = input + "";

        let decimalValue, integerValue;

        let dotIndex = input.indexOf('.');
        if (dotIndex == -1) {
            decimalValue = ".00";
            integerValue = input;
        } else {
            let temp = input.split(".");
            decimalValue = "." + (temp[1] + "0").substring(0, 2);
            integerValue = temp[0];
        }

        let integerArray = []
        for (let index = integerValue.length; index > 0; index -= 3) {
            integerArray.unshift(integerValue.substring(index > 2 ? index - 3 : 0, index));
        }

        return integerArray.join(",") + decimalValue;
    }
};