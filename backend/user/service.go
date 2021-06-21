package user

import (
	"errors"
	"fmt"
	"password-manager/entity"

	"golang.org/x/crypto/bcrypt"
)


type UserService interface {
	SaveNewUser(user entity.UserInput) (entity.User, error)
	LoginUser(input entity.LoginUserInput) (entity.User, error)
}

type userService struct {
	repository UserRepository
}

func UserNewService(repository UserRepository) *userService {
	return &userService{repository}
}

func (s *userService) SaveNewUser(user entity.UserInput) (entity.User, error) {
	var newUser = entity.User {
		FullName: user.FullName,
		Address: user.Address,
		Email: user.Email,
		Password: user.Password,
	}

	createUser, err := s.repository.CreateUser(newUser)

	if err != nil {
		return createUser, err
	}

	return createUser, nil
}

func (s  *userService) LoginUser(input entity.LoginUserInput) (entity.User, error) {
	user, err := s.repository.FindByEmail(input.Email)

	if err != nil {
		return user, err
	}

	if user.Email == "" {
		newError := fmt.Sprintf("email %s not found", user.Email)
		return user, errors.New(newError)
	}

	if err := bcrypt.CompareHashAndPassword([]byte(user.Password), []byte(input.Password)); err != nil {
		return user, errors.New("invalid password")
	}

	return user, nil
}