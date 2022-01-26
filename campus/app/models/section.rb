class Section < ApplicationRecord
  belongs_to :course
  validates :Semester, presence:true, acceptance: { accept: ['Fall', 'Spring', "Summer"], message: 'must be Fall, Spring, or Summer' }
  validates :Year, presence:true, length: { is: 4} 
  def name
    "#{self.Semester}#{" "}#{self.Year}"
  end
end

