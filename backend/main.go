package main

import (
	"github.com/gin-gonic/gin"
	"github.com/joho/godotenv"
	"gorm.io/driver/postgres"
	"gorm.io/gorm"
	"log"
	"net/http"
	"os"
)

type Client struct {
	gorm.Model
	ClientId  int32  `json:"client_id"`
	FirstName string `json:"first_name"`
	LastName  string `json:"last_name"`
	Visits    int16  `json:"visits"`
}

var g_clients = []Client{
	{ClientId: 10101010, FirstName: "John", LastName: "Doe", Visits: 14},
	{ClientId: 10101010, FirstName: "John", LastName: "Doe", Visits: 14},
	{ClientId: 10101010, FirstName: "John", LastName: "Doe", Visits: 14},
}

func clientPage(c *gin.Context) {
	c.IndentedJSON(http.StatusOK, g_clients)
}

func handleRequests(url string) {
	log.Printf("URL = %v", url)

	db, err := gorm.Open(postgres.Open(url), &gorm.Config{})
	if err != nil {
		panic("failed to connect database")
	}

	// Migrate the schema
	_ = db.AutoMigrate(&Client{})

	router := gin.Default()

	router.GET("/clients", clientPage)
	router.Run(":8080")
}

func main() {
	// LOAD THE ENV
	err := godotenv.Load(".env")

	if err != nil {
		log.Fatalf("Error loading .env file")
	}

	PSQL_URL := os.Getenv("PSQL_URL")

	handleRequests(PSQL_URL)
}
