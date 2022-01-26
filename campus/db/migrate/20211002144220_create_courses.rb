class CreateCourses < ActiveRecord::Migration[6.1]
  def change
    create_table :courses do |t|
      t.string :Prefix
      t.integer :Number
      t.string :Description

      t.timestamps
    end
  end
end
