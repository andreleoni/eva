// Environment storages
class Environment {
    // Creates an environment with the given record
    constructor(record = {}, parent = null) {
        this.record = record;
        this.parent = parent;
    }

    // Create a variable with the given name and value
    define(name, value) {
        this.record[name] = value;
        return value;
    }

    // Update a existing variable with the given name and value
    assign(name, value) {
        this.resolve(name).record[name] = value;

        return value;
    }

    // Lookup defined variable value or throw not defined
    lookup(name) {
        return this.resolve(name).record[name];
    }

    resolve(name) {
        if (this.record.hasOwnProperty(name)) {
            return this;
        }

        if (this.parent == null) {
            throw new ReferenceError(`variable "${name}" is not defined`)
        }

        return this.parent.resolve(name);
    }
}

module.exports = Environment;