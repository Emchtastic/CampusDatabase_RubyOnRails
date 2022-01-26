class Course < ApplicationRecord
    has_many :sections, dependent: :destroy
    validates :Prefix, presence:true
    validates :Number, presence:true
    validates :Description, presence:true

end

