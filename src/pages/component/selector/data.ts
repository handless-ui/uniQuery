let SSQ = [{
    label: "江苏省",
    value: "js",
    children: [{
        label: "南京市",
        value: "nj",
        children: [{
            label: "浦口区",
            value: "pk",
        }]
    }, {
        label: "无锡市",
        value: "wx",
    }, {
        label: "盐城市",
        value: "yc",
    }, {
        label: "苏州市",
        value: "sz",
    }, {
        label: "常州市",
        value: "cz",
    }]
}, {
    label: "浙江省",
    value: "zj",
    children: [{
        label: "杭州市",
        value: "hz",
    }, {
        label: "绍兴市",
        value: "sx",
    }, {
        label: "嘉兴市",
        value: "jx",
    }]
}, {
    label: "山东省",
    value: "sd"
}, {
    label: "四川省",
    value: "sc",
    children: [{
        label: "成都市",
        value: "cd",
    }]
}, {
    label: "北京市",
    value: "bj"
}, {
    label: "安徽省",
    value: "ah"
}, {
    label: "广东省",
    value: "gd"
}, {
    label: "河北省",
    value: "hb"
}, {
    label: "河南省",
    value: "hn"
}, {
    label: "山西省",
    value: "sx"
}, {
    label: "广西省",
    value: "gx"
}, {
    label: "西藏省",
    value: "xz"
}, {
    label: "青海省",
    value: "qh"
}];

export let getSSQItems = (selected: Array<string>) => {
    return new Promise((resolve) => {
        let temp: any = SSQ;
        for (let i = 0; i < selected.length; i++) {
            for (let j = 0; j < temp.length; j++) {
                if (temp[j].value == selected[i]) {
                    temp = temp[j].children;
                    break;
                }
            }
        }
        resolve(temp);
    });
};