document.getElementById('portfolioAll').onclick = function () {
    portfolioBar.className = 'bar state-1';
}
document.getElementById('portfolioFramework').onclick = function () {
    portfolioBar.className = 'bar state-2';
}
document.getElementById('portfolioVallina').onclick = function () {
    portfolioBar.className = 'bar state-3';
}

window.onscroll = function (e) {
    if (window.scrollY > 30) {
        document.getElementById('topNavBar').classList.add('sticky')
    } else {
        document.getElementById('topNavBar').classList.remove('sticky')
    }
}

let liTags = document.querySelectorAll('nav.menu > ul > li')
for (let i = 0; i < liTags.length; i++) {
    liTags[i].onmouseenter = function (e) {
        e.currentTarget.classList.add('active')
    }
    liTags[i].onmouseleave = function (e) {
        e.currentTarget.classList.remove('active')
    }
}

let aTags = document.querySelectorAll('nav.menu > ul > li > a')

function animate(time) {
    requestAnimationFrame(animate);
    TWEEN.update(time);
}
requestAnimationFrame(animate);

for (let i = 0; i < aTags.length; i++) {
    aTags[i].onclick = function (e) {
        e.preventDefault()
        // let a = e.currentTarget
        // let href = a.getAttribute('href')
        // let element = document.querySelector(href)
        // let top = element.offsetTop
        let top = document.querySelector(e.currentTarget.getAttribute('href')).offsetTop

        let currentTop = window.scrollY
        let targetTop = top - 80
        let s = targetTop - currentTop // 路程
        var coords = { y: currentTop }; // 起始位置
        var t = Math.abs((s / 100) * 300) // 时间
        if (t > 500) { t = 500 }
        var tween = new TWEEN.Tween(coords) // 起始位置
            .to({ y: targetTop }, t) // 结束位置 和 时间
            .easing(TWEEN.Easing.Cubic.InOut) // 缓动类型
            .onUpdate(function () {
                // coords.y 已经变了
                window.scrollTo(0, coords.y) // 如何更新界面
            })
            .start(); // 开始缓动
    }
}

let specialTags = document.querySelectorAll('[data-x]')
for (let i = 0; i < specialTags.length; i++) {
    specialTags[i].classList.add('offset')
}

findClosest()
window.onscroll = function () {
    if (window.scrollY > 0) {
        topNavBar.classList.add('sticky')
    } else {
        topNavBar.classList.remove('sticky')
    }
    findClosest()
}

function findClosest() {
    let specialTags = document.querySelectorAll('[data-x]')
    let minIndex = 0
    for (let i = 1; i < specialTags.length; i++) {
        if (Math.abs(specialTags[i].offsetTop - window.scrollY) < Math.abs(specialTags[minIndex].offsetTop - window.scrollY)) {
            minIndex = i
        }
    }
    // minIndex 就是里窗口顶部最近的元素
    specialTags[minIndex].classList.remove('offset')
    let id = specialTags[minIndex].id
    let a = document.querySelector('a[href="#' + id + '"]')
    let li = a.parentNode
    let brothersAndMe = li.parentNode.children
    for (let i = 0; i < brothersAndMe.length; i++) {
        brothersAndMe[i].classList.remove('highlight')
    }
    li.classList.add('highlight')
}