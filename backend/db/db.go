package db

import (
	"flag"
	"github.com/classmates/types"
	"gorm.io/driver/postgres"
	"gorm.io/gorm"
	"gorm.io/gorm/logger"
	"log"
)

var PSQL_URL string = ""

func Database() (*gorm.DB, error) {
	if PSQL_URL == "" {
		if flag.StringVar(&PSQL_URL, "psqlurl", "", "The PostgreSQL url to be used."); PSQL_URL == "" {
			panic("No PSQL url was provided.")
		}
	}
	gormConfig := gorm.Config{}
	gormConfig.Logger = logger.Default.LogMode(logger.Silent)

	db, err := gorm.Open(postgres.Open(PSQL_URL), &gorm.Config{})

	if err != nil {
		log.Fatal(err.Error())
	}

	if err = db.AutoMigrate(&types.Client{}); err != nil {
		log.Println(err)
	}

	return db, err
}
