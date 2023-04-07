class User < ApplicationRecord
  validates :username, presence: true, uniqueness: true
  has_secure_password

  has_many :messages
=begin
  methods:
   * password= # encrypt our password and store in password_digest
   * authenticate # checking if the password matches the encrypted password
=end
end
