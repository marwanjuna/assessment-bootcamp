package user

import "password-manager/entity"

type UserService interface {
	SaveNewUser(user entity.UserInput) (entity.User, error)
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