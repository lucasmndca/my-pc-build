create table Cpu (
	id int not null auto_increment,
	name varchar(100) not null,
	clock float not null,
	price float not null,
	primary key (id)
);

create table Psu (
	id int not null auto_increment,
	name varchar(100),
	watt int not null,
	price float not null,
	primary key (id)
);

create table Gpu (
	id int not null auto_increment,
	name varchar(100) not null, 
	price float not null,
	primary key (id)
);

create table Mobo (
	id int not null auto_increment,
	name varchar(255) not null,
	pci bool not null, 
	nvme bool not null,
	price float not null,
	primary key (id)
);

create table Ram (
	id int not null auto_increment,
	name varchar(100) not null,
	frequency int not null,
	capacity int not null,
	technology varchar(20) not null,
	price float not null,
	primary key (id)
);

create table Storage (
	id int not null auto_increment,
	name varchar(100) not null, 
	capacity int not null,
	price float not null,
	primary key (id)
);

create table Display (
	id int not null auto_increment,
	name varchar(100) not null,
	width int not null,
	height int not null,
	price float not null,
	primary key (id)
);

create table SetupCase (
	id int not null auto_increment,
	name varchar(100) not null,
	price float not null,
	primary key (id)
);

create table Mouse (
	id int not null auto_increment,
	name varchar(100) not null,
	dpi int not null,
	price float not null,
	primary key (id)
);

create table Mousepad (
	id int not null auto_increment,
	name varchar(100) not null,
	price float not null,
	primary key (id)
);

create table Keyboard (
	id int not null auto_increment,
	name varchar(100) not null,
	mechanical bool not null,
	price float not null,
	primary key (id)
);

create table Build (
    id int not null auto_increment,
    nome varchar(255) not null,
    cpuId int, 
    psuId int, 
    gpuId int, 
    moboId int, 
    ramId int,
    storageId int, 
    displayId int,
    setupCaseId int,
    mouseId int,
    mousepadId int,
    keyboardId int,
    foreign key (cpuId) references Cpu(id),
    foreign key (psuId) references Psu(id),
    foreign key (gpuId) references Gpu(id),
    foreign key (moboId) references Mobo(id),
    foreign key (ramId) references Ram(id),
    foreign key (storageId) references Storage(id),
    foreign key (displayId) references Display(id),
    foreign key (setupCaseId) references SetupCase(id),
    foreign key (mouseId) references Mouse(id),
    foreign key (mousepadId) references Mousepad(id),
    foreign key (keyboardId) references Keyboard(id),
    primary key (id)
);