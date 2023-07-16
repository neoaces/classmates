package types

import "gorm.io/gorm"

type Client struct {
	gorm.Model
	ClientId    string `json:"client_id"`
	FirstName   string `json:"first_name"`
	LastName    string `json:"last_name"`
	Visits      int16  `json:"visits"`
	VersionCode string `json:"version_code"`
}

type ClientURI struct {
	Id string `json:"id"`
}
