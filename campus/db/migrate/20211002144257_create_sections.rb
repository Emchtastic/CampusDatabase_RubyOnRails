class CreateSections < ActiveRecord::Migration[6.1]
  def change
    create_table :sections do |t|
      t.integer :Year
      t.string :Semester
      t.references :course, foreign_key: true

      t.timestamps
    end
  end
end
