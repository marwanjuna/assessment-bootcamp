package handler

import (
	"password-manager/auth"
	"password-manager/entity"
	"password-manager/user"

	"github.com/gin-gonic/gin"
)


type userHandler struct {
	userService user.UserService
	authService auth.Service
}

func NewUserHandler(userService user.UserService, authService auth.Service) *userHandler {
	return &userHandler{userService, authService}
}

func (h *userHandler) CreateUserHandler(c *gin.Context) {
	var inputUser entity.UserInput

	if err := c.ShouldBindJSON(&inputUser); err != nil {
		c.JSON(400, gin.H{
			"error": "input data required",
		})
		return
	}

	response, err := h.userService.SaveNewUser(inputUser)
	if err != nil {
		c.JSON(500, gin.H{
			"error": err.Error(),
		})
		return
	}

	c.JSON(201, response)
}

func (h *userHandler) LoginUserHandler(c *gin.Context) {
	var inputLoginUser entity.LoginUserInput

	if err := c.ShouldBindJSON(&inputLoginUser); err != nil {
		c.JSON(400, gin.H{
			"error": "input data required",
		})
		return
	}

	userData, err := h.userService.LoginUser(inputLoginUser)
	
	if err != nil {
		c.JSON(401, gin.H{
			"error": "input data error",
		})
		return
	}

	token, err := h.authService.GenerateToken(int(userData.ID))

	if err != nil {
		c.JSON(500, gin.H{
			"error": "internal server error",
		})
		return
	}

	c.JSON(200, gin.H{
		"token": token,
		"user_id": userData.ID,
	})
}