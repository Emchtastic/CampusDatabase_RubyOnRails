class CreateTeachers < ActiveRecord::Migration[6.1]
  def change
    create_table :teachers do |t|
      t.string :first_name
      t.string :last_name
      t.integer :nine_hundred
      t.string :email
      t.references :office, foreign_key: true

      t.timestamps
    end
  end
end
