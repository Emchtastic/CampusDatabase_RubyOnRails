class CreateOffices < ActiveRecord::Migration[6.1]
  def change
    create_table :offices do |t|
      t.string :build_name
      t.integer :floor_number
      t.integer :room_number

      t.timestamps
    end
  end
end
