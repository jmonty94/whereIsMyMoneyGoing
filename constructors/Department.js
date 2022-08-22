class Department {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    };

    getDepartmentId() {
        return this.id;
    };

    getDepartmentName() {
        return this.name;
    };
};

export { Department };