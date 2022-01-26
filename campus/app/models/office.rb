class Office < ApplicationRecord
    has_one :teacher, dependent: :nullify
    validates :build_name, presence:true
    validates :floor_number, presence:true
    validates :room_number, presence:true
end

