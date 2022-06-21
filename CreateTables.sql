
CREATE TABLE sensores (
  ID serial PRIMARY KEY,
  dispositivo varchar(50) NOT NULL,
  tiempo varchar(50) NOT NULL,
  temperatura varchar(50) NOT NULL,
  humedad varchar(50) NOT NULL
);

INSERT INTO sensores (dispositivo, tiempo, temperatura, humedad) VALUES ('A001', '1655569098' , '23.18', '30.5'), ('A001', '1655569098', '23.18', '30.5');