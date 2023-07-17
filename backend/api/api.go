package api

import (
	"github.com/gin-gonic/gin"
)

func SetupRouter() *gin.Engine {
	r := gin.Default()

	// Setup API routes.
	r.GET("/clients", GetClients)
	r.GET("/client", GetClientById)
	r.POST("/client", CreateClient)

	return r
}
