use ssip_prediction;
CREATE TABLE `Prediction_Data` (
	`prediction_male` FLOAT(50) NOT NULL,
	`prediction_female` FLOAT(50) NOT NULL,
	`prediction_general` FLOAT(50) NOT NULL,
	`prediction_obc` FLOAT(50) NOT NULL,
	`prediction_sc` FLOAT(50) NOT NULL,
	`prediction_st` FLOAT(50) NOT NULL,
	`prediction_primary` FLOAT(50) NOT NULL,
	`prediction_secondary` FLOAT(50) NOT NULL,
	`prediction_highersecondary` FLOAT(50) NOT NULL
);

select * from Prediction_Data;

