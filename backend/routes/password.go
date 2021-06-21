package routes

import (
	"password-manager/handler"
	"password-manager/password"

	"github.com/gin-gonic/gin"
)


var (
	passwordRepository = password.NewRepository(DB)
	passwordService = password.NewService(passwordRepository)
	passwordHandler = handler.NewPasswordhandler(passwordService, authService)
)

func PasswordRoute(r *gin.Engine) {
	r.POST("/password", handler.Middleware(userService, authService), passwordHandler.CreatePasswordHandler)
	r.GET("/password/:id", handler.Middleware(userService, authService), passwordHandler.ShowPasswordByIDhandler)
	r.PUT("/password/:id", handler.Middleware(userService, authService), passwordHandler.UpdatePasswordByIDHandler)
}