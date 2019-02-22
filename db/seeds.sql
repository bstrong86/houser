create table houses (
    id serial primary key,
    name varchar(30),
    address vachar(100),
    city varchar(100),
    state varchar(2),
    zip integer,
    img text,
    mortgage decimal,
    rent decimal
)

insert into houses ( name, address, city, state, zip, img, mortgage, rent)
values ('Bob Smith', '123 fake street', 'Orem', 'UT',85097, 'image here', 100.00, 250.00 )