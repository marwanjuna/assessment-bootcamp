package main

import (
	"os"
	"password-manager/handler"
	"password-manager/routes"

	"github.com/gin-gonic/gin"
)


func main() {
	r := gin.Default()
	r.Use(handler.CorsMiddleware())

	routes.UserRoute(r)
	routes.PasswordRoute(r)

	port := os.Getenv("PORT")
	r.Run(":" + port)
}