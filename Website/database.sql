CREATE TABLE contact(
    FirstName char(255) PRIMARY KEY,
    LastName char (255) NOT NULL,
    Email varchar(50) NOT NULL,
    Subject varchar(255) NOT NULL,
    Message varchar(255) NOT NULL
);

CREATE TABLE user (
    uid int(8) PRIMARY KEY,
    LastName varchar(255),
    FirstName varchar(255),
    password varchar(255),
    Address varchar(255),
    creditcardnum int(30),
    contact_flag int(1),
);

CREATE TABLE product(
    pid int(8) PRIMARY KEY,
    P_name varchar(255),
    P_desc varchar(255),
    P_price double (7,2)
);

CREATE TABLE order(
    O_id int(8) PRIMARY KEY,
    U_id int(8),
    P_id int(8),
    Order_date date,
    Shipment_flag bool,
    CONSTRAINT userFK FOREIGN KEY (u_id) REFERENCES user(uid)
    CONSTRAINT prodFK FOREIGN KEY (p_id) REFERENCES product(pid)
);
