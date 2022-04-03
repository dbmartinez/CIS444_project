

CREATE TABLE contact(
	FirstName char(255) NOT NULL,
  	LastName char (255) NOT NULL,
  	Email varchar(50) NOT NULL,
  	Subject varchar(255) NOT NULL,
  	Message varchar(255) NOT NULL
);

CREATE TABLE user (
    uid int(8) not null,
    LastName varchar(255),
    FirstName varchar(255),
    password varchar(255),
    Address varchar(255),
    creditcardnum int(30),
    contact_flag int(1)
);

