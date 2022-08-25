USE employees_db;

INSERT INTO department(name)
    VALUES('Development'),
    ('Finance'),
    ('Legal'),
    ('CS');

INSERT INTO role( title, salary, department_id)
    VALUES('Full Stack Developer', 100000.0, 1),
    ('Senior Full Stack Developer', 170000.0, 1),
    ('Development Manager', 250000.0, 1),
    ('Chief Technical Officer', 350000.0, 1),
    ('Territory Sales Rep', 90000.0, 2),
    ('Sales Manager', 150000.0, 2),
    ('Chief Financial Officer', 375000.0, 2),
    ('Paralegal', 45000.0, 3),
    ('Attorney', 180000.0, 3),
    ('Chief Legal Officer', 400000.0, 3),
    ('Product Support Rep', 60000.0, 4),
    ('CS Manager', 100000.0, 4),
    ('CS Director', 140000.0, 4);

    

INSERT INTO employee( first_name, last_name, role_id, manager_id)
    VALUES ('James', 'Montgomery', 1, 2),
    ('Jim', 'Montgomery', 2, 3),
    ('Jimbo', 'Montgomery', 3, 4),
    ('Jimmy', 'Montgomery', 4, null),
    ('Vincenzo', 'Scaletti', 7, null),
    ('Tommy', 'Materrazo', 6, 5),
    ('Vito', 'Scaletti', 5, 6),
    ('Bart', 'Simpson', 8, 9),
    ('Homer', 'Simpson', 10, null),
    ('Altair', "Ibn-La'Ahad", 13, 4),
    ('Ezio', 'Auditore', 12, 10),
    ('Desmond', 'Miles', 11, 11);