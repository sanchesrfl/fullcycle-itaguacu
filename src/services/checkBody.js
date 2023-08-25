function checkBody(keysAllowed,keysSent) {
    let keyNotAllowed = []
    keyNotAllowed = Object.keys(keysSent).filter(key => (!keysAllowed.includes(key)));
    if (keyNotAllowed.length>0) {
        return true
    }
    return false
}

module.exports = { checkBody }