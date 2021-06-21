package password

import (
	"password-manager/entity"

	"gorm.io/gorm"
)


type PasswordRepository interface {
	CreatePassword(password entity.PasswordList) (entity.PasswordList, error)
	GetOnePassword(id string) (entity.PasswordList, error)
	UpdatePassword(id string, dataUpdate map[string]interface{}) (entity.PasswordList, error)
}

type Repository struct {
	db *gorm.DB
}

func NewRepository(db *gorm.DB) *Repository {
	return &Repository{db}
}

func (r *Repository) CreatePassword(password entity.PasswordList) (entity.PasswordList, error) {
	if err := r.db.Create(&password).Error; err != nil {
		return password, err
	}

	return password, nil

}

func (r *Repository) GetOnePassword(id string) (entity.PasswordList, error) {
	var password entity.PasswordList

	if err := r.db.Where("id = ?", id).Find(&password).Error; err != nil {
		return password, err
	}

	return password, nil
}

func (r *Repository) UpdatePassword(id string, dataUpdate map[string]interface{}) (entity.PasswordList, error) {
	var password entity.PasswordList

	if err := r.db.Model(&password).Where("id = ?", id).Updates(dataUpdate).Error; err != nil {
		return password, err
	}

	if err := r.db.Where("id = ?", id).Find(&password).Error; err != nil {
		return password, err
	}

	return password, nil
}
