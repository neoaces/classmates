package db

import (
	"github.com/classmates/types"
	"gorm.io/driver/postgres"
	"gorm.io/gorm"
	"gorm.io/gorm/logger"
	"log"
	"os"
)

func Database() (*gorm.DB, error) {
	PSQL_URL := os.Getenv("PSQL_URL")

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
