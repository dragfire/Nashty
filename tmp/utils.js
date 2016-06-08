exports.findRemove = function (jsonArray, value) {
    if (jsonArray) {
        for(var i=0; i<jsonArray.length; i++) {
            if (Object.keys(jsonArray[i])[0] === value) {
                return true;
            }
        }
        return false;
    }
    else {
        return false;
    }
};