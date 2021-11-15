let n = 1;
getPage.onclick = () => {
    const request = new XMLHttpRequest()
    request.open("get", `/page${n+1}`)
    request.onreadystatechange = () => {
        if (request.readyState === 4) {
            if (request.status >= 200 && request.status < 300) {
                const array = JSON.parse(request.response)
                array.forEach(element => {
                    const li = document.createElement('li')
                    li.textContent = element.id;
                    xxx.appendChild(li)
                });
                n += 1;
            }
        }
    }
    request.send();
};
getJSON.onclick = () => {
    const request = new XMLHttpRequest() //readyState 0
    request.open('get', '/5.json') //1
    request.onreadystatechange = () => {
        if (request.readyState === 4) {
            if (request.status >= 200 && request.status < 300) {
                const object = JSON.parse(request.response)
                myName.textContent = object.name
            } else {
                alert('加载json失败')
            }
        }
    };
    request.send(); //2
};
getXML.onclick = () => {
    const request = new XMLHttpRequest() //0
    request.open('get', '/4.xml') //1
    request.onreadystatechange = () => {
        if (request.readyState === 4) {
            if (request.status >= 200 && request.status < 300) {
                const dom = request.responseXML
                const text = dom.getElementsByTagName('warning')[0].textContent
                console.log(text.trim())
            } else {
                alert('加载xml失败')
            }
        }
    };
    request.send(); //2
};
getHTML.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('get', '/3.html')
    request.onreadystatechange = () => {
        if (request.readyState === 4) {
            if (request.status >= 200 && request.status < 300) {
                const div = document.createElement('div')
                div.innerHTML = request.response
                document.body.appendChild(div)
            } else {
                alert('加载html失败')
            }
        }
    };
    request.send();
};
getJS.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('get', '/2.js')
    request.onreadystatechange = () => {
        if (request.readyState === 4) {
            if (request.status >= 200 && request.status < 300) {
                const script = document.createElement('script')
                script.innerHTML = request.response
                document.body.appendChild(script)
            } else {
                alert('加载js失败')
            }
        }
    };
    request.send();
};
getCSS.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('get', '/style.css')
    request.onreadystatechange = () => {
        if (request.readyState === 4) {
            if (request.status >= 200 && request.status < 300) {
                const style = document.createElement('style')
                style.innerHTML = request.response
                document.head.appendChild(style)
            } else {
                alert('加载css失败')
            }
        }
    };
    request.send();
};