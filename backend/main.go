package main

import (
	"os"
	"password-manager/routes"

	"github.com/gin-gonic/gin"
)


func main() {
	r := gin.Default()

	routes.UserRoute(r)

	port := os.Getenv("PORT")
	r.Run(":" + port)
}