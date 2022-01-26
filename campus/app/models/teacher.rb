class Teacher < ApplicationRecord
  belongs_to :office
  validates :first_name, presence: true
  validates :last_name, presence: true
  validates :nine_hundred, presence: true, length: { is: 9}
  validates :email, presence: true
end
