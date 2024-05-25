document.getElementById('version').innerText = "当前版本：v" + window.uniQuery_system.version;

// 生成底部统一内容
function getFooterTemplate(path) {
    path = "https://github.com/oi-contrib/uniQuery/edit/master/docs/" + path;
    return '<br /><a class="to-editor-btn" href="' + path + '" target="_blank"><svg fill="currentColor" height="20" width="20" viewBox="0 0 40 40" class="iconEdit_Z9Sw" aria-hidden="true"><g><path d="m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"></path></g></svg>在 GitHub 上编辑此页</a>';
}

// 控制是否需要缓存
var host = window.location.host;
var needCache = !(/^127\.0\.0\.1/.test(host) || /^localhost/.test(host) || host == "");

// 请求数据
function fetchData(url) {
    return new Promise(function (resolve, reject) {
        var cacheData = sessionStorage.getItem("cache://" + url);
        if (needCache && cacheData) {
            resolve(cacheData);
        } else {
            fetch(url, {
                method: "GET"
            }).then(function (res) {
                if (res.status === 200) {
                    return res.text();
                } else {
                    return Promise.reject(res.json());
                }
            }).then(function (res) {

                if (needCache) {
                    sessionStorage.setItem("cache://" + url, res);
                }

                resolve(res);
            }).catch(function (err) {
                reject(err);
            });
        }
    });
}

// 记录当前路由信息
var routerObj = pageby.url();

var preNavEl = null, preMenuEl = null;
var changeNav = function (navName, isInit) {
    if (navName || !routerObj.router[0]) routerObj.router[0] = navName || "guide";

    if (preNavEl) preNavEl.setAttribute('active', 'no');
    if (preMenuEl) preMenuEl.style.display = 'none';

    preNavEl = document.getElementById(routerObj.router[0] + '-nav-id');
    preMenuEl = document.getElementById(routerObj.router[0] + '-id');

    preNavEl.setAttribute('active', 'yes');
    preMenuEl.style.display = 'block';

    changeMenu({
        "guide": "install",
        "component": "form",
        "api": "getLocation"
    }[routerObj.router[0]], isInit);
};

var exampleUrl;
if (needCache) {
    exampleUrl = './examples/index.html';
} else {
    // exampleUrl = 'http://localhost:8080';
    exampleUrl = './examples/index.html';
}

var contentEl = document.getElementById('content-id');
var iframeEl = document.getElementById('example-iframe-id');
iframeEl.setAttribute('src', exampleUrl);

var isHome = true;
var changeMenu = function (menuName, isInit) {
    if (!isInit || !routerObj.router[1]) routerObj.router[1] = menuName;

    fetchData("./" + routerObj.router[0] + "/" + routerObj.router[1] + ".html").then(function (res) {
        if (!isInit) window.location.href = "#/" + routerObj.router[0] + "/" + routerObj.router[1];

        contentEl.innerHTML = res + getFooterTemplate(routerObj.router[0] + "/" + routerObj.router[1] + ".html");
        if (['component', 'api'].indexOf(routerObj.router[0]) > -1) {
            isHome = false;
            iframeEl.setAttribute('src', exampleUrl + '#/pages/' + routerObj.router[0] + "/" + routerObj.router[1] + '/index');
        } else if (!isHome) {
            isHome = true;
            iframeEl.setAttribute('src', exampleUrl);
        }

        pageby.shader(contentEl);
    });

};

changeNav(false, true);
