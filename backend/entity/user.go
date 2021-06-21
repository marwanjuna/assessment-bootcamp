package entity

import "time"

type User struct {
	ID       	int    `gorm:"primaryKey" json:"id"`
	FullName  string `json:"full_name"`
	Address   string `json:"address"`
	Email     string `json:"email"`
	Password  string `json:"password"`
	PasswordList []PasswordList `json:"password_list"`
	CreatedAt time.Time `json:"created_at"`
	UpdatedAt time.Time `json:"updated_at"`
}

type UserInput struct {
	FullName  string `json:"full_name"`
	Address   string `json:"address"`
	Email     string `json:"email"`
	Password  string `json:"password"`
}

type LoginUserInput struct {
	Email     string `json:"email"`
	Password  string `json:"password"`
}