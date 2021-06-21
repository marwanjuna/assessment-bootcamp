package user

import "password-manager/entity"

type UserFormat struct {
	ID        int    `json:"id"`
	FullName      string `json:"full_name"`
	Address   string `json:"address"`
	Email     string `json:"email"`
}


func FormattingUser(user entity.User) UserFormat {
	userFormat := UserFormat{
		ID:        user.ID,
		FullName:  user.FullName,
		Email:     user.Email,
		Address:   user.Address,
	}

	return userFormat
}
