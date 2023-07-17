package main

import (
	api "github.com/classmates/api"
	"github.com/classmates/db"
	"github.com/joho/godotenv"
	"log"
	"os"
)

func main() {
	// LOAD THE ENV, FETCH REQUIRED ENVARIABLES
	if os.Getenv("PSQL_URL") != "" {
		db.PSQL_URL = os.Getenv("PSQL_URL")
		log.Printf("Environment variables found at runtime. %v\n", db.PSQL_URL)
	} else {
		if err := godotenv.Load(".env"); err != nil {
			log.Printf("Did not load env file.\n")
		} else {
			log.Printf(".env file was found.\n")
			db.PSQL_URL = os.Getenv("PSQL_URL")
		}
	}

	log.Printf("Finished pre-initialization.\n")
	r := api.SetupRouter()
	err := r.Run(":8080")
	if err != nil {
		return
	}
}
