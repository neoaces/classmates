package main

import (
	api "github.com/classmates/api"
	"github.com/joho/godotenv"
	"log"
)

func main() {
	// LOAD THE ENV, FETCH REQUIRED ENVARIABLES
	err := godotenv.Load(".env")
	if err != nil {
		log.Fatalf("Error loading .env file")
	}

	r := api.SetupRouter()
	err = r.Run(":8080")
	if err != nil {
		return
	}
}
