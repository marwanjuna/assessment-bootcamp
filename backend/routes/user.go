package routes

import (
	"password-manager/config"
	"password-manager/handler"
	"password-manager/user"

	"github.com/gin-gonic/gin"
	"gorm.io/gorm"
)


var (
	DB *gorm.DB = config.Connect()
	userRepository = user.NewRepository(DB)
	userService = user.UserNewService(userRepository)
	userHandler = handler.NewUserHandler(userService)
)

func UserRoute(r *gin.Engine)  {
	r.POST("/users/register", userHandler.CreateUserHandler)
}