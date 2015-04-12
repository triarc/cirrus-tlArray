Array.prototype.any = function () {
    return Triarc.arrayHasValues(this);
};
Array.prototype.get = function (index) {
    return Triarc.arrayHasValues(this) && this.length >= index ? this[index] : null;
};
Array.prototype.first = function () {
    return this.get(0);
};
Array.prototype.last = function () {
    return this.get(this.length - 1);
};
Array.prototype.add = function (object) {
    this.push(object);
};
Array.prototype.addRange = function (objects, prepend) {
    var _this = this;
    if (prepend === void 0) { prepend = false; }
    if (!Triarc.arrayHasValues(objects))
        return;
    if (prepend) {
        objects.unshift(0);
        this.unshift(objects);
    }
    else {
        objects.forEach(function (object) {
            _this.add(object);
        });
    }
};
Array.prototype.clear = function () {
    if (!Triarc.arrayHasValues(this))
        return;
    this.splice(0, this.length);
};
Array.prototype.insert = function (index, object) {
    if (!Triarc.arrayHasValues(this))
        throw "MuttableArray: IndexOutOfBoundsException";
    if (this.length < index)
        throw "MuttableArray: IndexOutOfBoundsException";
    this.splice(index, 0, object);
};
Array.prototype.indexOfObj = function (compareFn, value) {
    var actualObj = this.toEnumerable().firstOrDefault(function (obj) {
        return compareFn(obj) === value;
    });
    return this.indexOf(actualObj);
};
Array.prototype.remove = function (object) {
    var position = this.indexOf(object);
    if (position === -1)
        return true;
    this.splice(position, 1);
    return false;
};
Array.prototype.removeRange = function (objects) {
    var _this = this;
    var found = false;
    if (Triarc.arrayHasValues(objects)) {
        objects.forEach(function (obj) {
            found = found || _this.remove(obj);
        });
    }
    return false;
};
Array.prototype.removeAt = function (index) {
    if (!Triarc.arrayHasValues(this))
        throw "MuttableArray: IndexOutOfBoundsException";
    if (this.length < index)
        throw "MuttableArray: IndexOutOfBoundsException";
    this.splice(index, 1);
};
Array.prototype.removeWhereMatch = function (compareFn) {
    for (var i = 0; i < this.length; i++) {
        if (this[i] != null) {
            if (compareFn(this[i])) {
                this.removeAt(i);
                return true;
            }
        }
    }
    // didnt find it
    return false;
};
Array.prototype.removeWhere = function (compareFn, object) {
    if (!angular.isFunction(compareFn)) {
        throw "MuttableArray: (removeWhere(compareFn: (object: T) => any, object: T): boolean;) accessFn is not a function";
    }
    var identifier = compareFn(object);
    for (var i = 0; i < this.length; i++) {
        if (this[i] != null) {
            var nextIdentifer = compareFn(this[i]);
            if (identifier === nextIdentifer) {
                this.removeAt(i);
                return true;
            }
        }
    }
    // didnt find it
    return false;
};
Array.prototype.clone = function () {
    return angular.copy(this);
};
Array.prototype.replaceAt = function (index, object) {
    if (!Triarc.arrayHasValues(this))
        throw "MuttableArray: IndexOutOfBoundsException";
    if (this.length < index)
        throw "MuttableArray: IndexOutOfBoundsException";
    this[index] = object;
};
Array.prototype.addOrUpdate = function (accessFn, object, allFn) {
    if (!angular.isFunction(accessFn)) {
        throw "MuttableArray: (addOrUpdate(accessFn: (object: T) => any, object: T): boolean;) accessFn is not a function";
    }
    var found = false;
    var identifier = accessFn(object);
    for (var i = 0; i < this.length; i++) {
        if (this[i] != null) {
            var nextIdentifer = accessFn(this[i]);
            if (identifier === nextIdentifer) {
                this[i] = object;
                if (!allFn) {
                    return true;
                }
                found = true;
            }
        }
    }
    if (!found) {
        this.add(object);
    }
    // no update made so add the object
    return false;
};
Array.prototype.contains = function (object) {
    return this.indexOf(object) !== -1;
};
Array.prototype.containsWhere = function (compareFn, object) {
    if (!angular.isFunction(compareFn)) {
        throw "MuttableArray: (removeWhere(compareFn: (object: T) => any, object: T): boolean;) accessFn is not a function";
    }
    var identifier = compareFn(object);
    for (var i = 0; i < this.length; i++) {
        if (this[i] != null) {
            var nextIdentifer = compareFn(this[i]);
            if (identifier === nextIdentifer) {
                return true;
            }
        }
    }
    // didnt find it
    return false;
};
Array.prototype.getUnique = function () {
    var u = {};
    var a = [];
    for (var i = 0, l = this.length; i < l; ++i) {
        if (u.hasOwnProperty(this[i])) {
            continue;
        }
        a.push(this[i]);
        u[this[i]] = 1;
    }
    return a;
};
Array.prototype.replaceWhere = function (compareFn, object) {
    var identifier = compareFn(object);
    for (var i = 0; i < this.length; i++) {
        if (this[i] != null) {
            var nextIdentifer = compareFn(this[i]);
            if (identifier === nextIdentifer) {
                this.replaceAt(this.indexOf(this[i]), object);
                break;
            }
        }
    }
};
Array.prototype.toEnumerable = function () {
    return Enumerable.from(this);
};
Map.prototype.values = function () {
    var values = [];
    this.forEach(function (v) {
        values.push(v);
    });
    return values;
};

