package api

import (
	"github.com/classmates/db"
	"github.com/classmates/types"
	"github.com/gin-gonic/gin"
	"log"
	"net/http"
)

func GetClientById(c *gin.Context) {
	db, err := db.Database()
	if err != nil {
		log.Println(err)
		return
	}

	client := types.Client{}
	id := c.Query("id")

	// Query for the clients that match the ID in the JSON request
	if err := db.Where("id = ?", id).First(&client).Error; err != nil {
		c.JSON(http.StatusNotFound, gin.H{"error": "Grocery not found"})
		return
	}
	c.IndentedJSON(http.StatusOK, client)
}

func GetClients(c *gin.Context) {
	db, err := db.Database()
	if err != nil {
		log.Println(err)
		return
	}

	var g_clients []types.Client

	if err := db.Limit(10).Find(&g_clients).Error; err != nil {
		c.AbortWithStatus(http.StatusNotFound)
	}

	c.IndentedJSON(http.StatusOK, g_clients)
}

func CreateClient(c *gin.Context) {
	db, err := db.Database()
	if err != nil {
		log.Println(err)
		return
	}

	client := types.Client{
		FirstName:   c.Query("first_name"),
		LastName:    c.Query("last_name"),
		Visits:      0,
		ClientId:    c.Query("client_id"),
		VersionCode: c.Query("version_code"),
	}

	if err := db.Create(&client); err != nil {
		c.AbortWithStatus(http.StatusBadRequest)
	}

	c.IndentedJSON(http.StatusCreated, gin.H{"primary_id": client.ID})
}
