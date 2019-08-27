export default function (el, binding, vnode, oldValue) {
    function event(name) {
        var evt = document.createEvent('Event')
        evt.initEvent(name, true, true)
        return evt
    }
    el.oninput = function (evt) {
        if (!evt.isTrusted) return
        // el.value = el.value.replace(/(\d{3})\d{5}(\d{3})/, '$1****$2')
        const v = el.value
        if (v.length <= 7) {
            el.value = v
        } else {
            let star = ''
            for (let index = 0; index < v.length - 7; index++) {
                star += '*'
            }
            el.value = v.substring(0, 3) + star + v.substring(v.length - 4);
        }
        // vnode.emit('input',el.value)
        el.dispatchEvent(event('input'))
    }
}