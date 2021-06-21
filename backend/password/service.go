package password

import (
	"errors"
	"fmt"
	"password-manager/entity"
	"password-manager/helper"
	"time"
)


type PasswordService interface {
	CreateNewPassword(userID int, password entity.InputPassword) (entity.PasswordList, error)
	GetPasswordByID(id string) (entity.PasswordList, error)
	UpdatePasswordByID(id string, dataInput entity.InputPassword) (entity.PasswordList, error)
}

type passwordService struct {
	repository PasswordRepository
}

func NewService(repository PasswordRepository) *passwordService {
	return &passwordService{repository}
}

func (s *passwordService) CreateNewPassword(userID int, password entity.InputPassword) (entity.PasswordList, error) {
	var newPass = entity.PasswordList{
		UserID: userID,
		Website: password.Website,
		Password: password.Password,
	}

	createPassword, err := s.repository.CreatePassword(newPass)

	if err != nil {
		return createPassword, err
	}

	return createPassword, nil
}

func (s *passwordService) GetPasswordByID(id string) (entity.PasswordList, error) {
	if err := helper.ValidateIDNumber(id); err != nil {
		return entity.PasswordList{}, err
	}

	password, err := s.repository.GetOnePassword(id)

	if err != nil {
		return entity.PasswordList{}, err
	}

	if password.ID == 0 {
		newError := fmt.Sprintf("password id %s is not found", id)
		return entity.PasswordList{}, errors.New(newError)
	}

	return password, nil
}

func (s *passwordService) UpdatePasswordByID(id string, dataInput entity.InputPassword) (entity.PasswordList, error) {
	var dataUpdate = map[string]interface{}{}

	if err := helper.ValidateIDNumber(id); err != nil {
		return entity.PasswordList{}, err
	}

	password, err := s.repository.GetOnePassword(id)

	if err != nil {
		return entity.PasswordList{}, err
	}

	if password.ID == 0 {
		newError := fmt.Sprintf("password id %s is not found", id)
		return entity.PasswordList{}, errors.New(newError)
	}

	if dataInput.Website != "" || len(dataInput.Website) != 0 {
		dataUpdate["website"] = dataInput.Website
	}
	if dataInput.Password != "" || len(dataInput.Password) != 0 {
		dataUpdate["password"] = dataInput.Password
	}

	dataUpdate["updated_at"] = time.Now()

	passwordUpdated, err := s.repository.UpdatePassword(id, dataUpdate)

	if err != nil {
		return entity.PasswordList{}, err
	}

	return passwordUpdated, nil
}
