﻿create database DBRiosoft
go

use DBRiosoft
go

/* Tabela Full Banco de Dados - Base de Dados*/
create table Clientes
(
	Id				int not null primary key identity,
	Nome			varchar (300) not null,
	Email			varchar (100),
	Telefone		varchar (100),
	DataNasc		date not null,
	DataCadastro	datetime,
	DataAlteracao	datetime
)
go