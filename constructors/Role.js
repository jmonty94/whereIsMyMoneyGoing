class Role {
    constructor(id, title, salary, department_id) {
        this.id = id;
        this.title = title;
        this.salary = salary;
        this.department_id = department_id;
    };

    getRoleId() {
        return this.id;
    };

    getRoleTitle() {
        return this.title;
    };

    getRoleSalary() {
        return this.salary;
    };

    getRoleDepartmentId() {
        return this.department_id;
    };
};

export { Role };